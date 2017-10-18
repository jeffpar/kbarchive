---
layout: page
title: "Q157441: BIND Negative Response When Open TSO on a Channel Connection"
permalink: kb/157/Q157441/
---

## Q157441: BIND Negative Response When Open TSO on a Channel Connection

	Article: Q157441
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	
	When you try to enter the TSO area of a mainframe, you will receive an error
	message, and when you examine the Application log, the log will show that a BIND
	negative Response was sent on the connection:
	
	  Event ID: 21
	  Description: BIND Negative Response Sent on Connection XXXX
	  (SENSE=08350001)
	
	The sense code will be 08350001 in every instance, if this is the problem. If the
	sense code value does not match, the information in this article will not apply.
	
	CAUSE
	=====
	
	The channel adapter link service is providing PU 2.0 node capabilities, even
	though SNA Server thinks that it is operating at PU 2.1 node capabilities. The
	host will set a value greater than one in the OAF (Origination Address Field),
	which in a PU 2.1 is reserved for independent LU 6.2:
	
	  |DLC    ---------------------------------------------- 10:35:20.55
	  |DLC    05160001->01020101 DLC DATA
	  |DLC                       DAF:02 OAF:02 ODAI:off Exp.
	  ************************* Notice the value of 02 for the OAF.
	  |DLC                       BIND   RQD SC  FI BC ECDR1
	  |DLC
	  |DLC    ---- Header  at address 00CF4D70, 1 elements----
	  |DLC    01020200 00012D00 02024C48 0100DA00<......-...LH....>
	  |DLC
	  |DLC    ---- Element at address 011EAC94, start 10, end 44 ----
	  |DLC    6B800031 010303B1 90308000 0087C780<k..1.....0...gG.>
	  ************************* Notice the value of 0x01 in the first byte
	     of the second double-word.
	  |DLC    00020000 00000018 5000007E 000003E3<........P..~...T>
	  |DLC    E2D600                                  <SO.>
	
	Notice that byte one (byte 0 is 0x31 in the Element data) of the BIND is set to
	0x01, which implies a value of nonnegotiable according to the IBM SNA Formats.
	However, the only value allowed for LU 6.2 is 0x00 that implies a value of
	negotiable. SNA Server, as any other PU 2.1, is interpreting this BIND as if it
	was for an LU 6.2; therefore, it rejects the BIND on the basis that byte 1
	should be set to negotiable:
	
	  |DLC    ---------------------------------------------- 10:35:20.56
	  |DLC    01020101->05160001 DLC DATA
	  |DLC                       DAF:02 OAF:02 ODAI:offExp.
	  |DLC                       BIND   -RSP SC  FI SD BCEC DR1
	  |DLC
	  |DLC    ---- Header  at address 00CF4D70, 1 elements----
	  |DLC    01020200 00002D00 02024C48 0100DA00<......-...LH....>
	  |DLC
	  |DLC    ---- Element at address 011EA498, start 10, end 17 ----
	  |DLC    EF900008 35000131<....5..1        >
	  ************************* Notice the sense code of 0x08350001.
	
	The above frames were taken from a Data Link Control trace of the SNA Server
	Service. To enable this tracing do the following:
	
	For SNA Server 2.x:
	
	1. Run the SNA Server trace utility on the SNA Server and click the Clear All
	  button.
	
	2. Verify that no files exist in the <SNA Root>\traces directory. Move any
	  files to another directory.
	
	3. Select SNA Server from the pull down list box labeled Service Name.
	
	4. Select the Data Link Control checkbox from the message traces group.
	
	5. Click the Apply button, and recreate the situation.
	
	6. After the problem appears, switch to the SNA Server trace application and
	  click the Clear All button.
	
	For SNA Server 3.x:
	
	1. Run the SNA Server trace utility on the SNA Server and click the Clear All
	  Traces button.
	
	2. Verify that no files exist in the <SNA Root>\traces directory. Move any
	  files to another directory.
	
	3. Select SNA Server from the Trace Items tab and then select Properties button.
	
	4. Select the Message Trace tab, and then select Data Link Control check box.
	
	5. Click the Apply button, and recreate the situation.
	
	6. After the problem appears, switch to the SNA Server trace application and
	  click the Clear All Traces button.
	
	  The file(s) in the <SNA Root>\traces should contain a DLC trace of what
	  transpired from the point in time that Apply was selected to the point in
	  time that Clear All was selected. If you experience the problem described in
	  this article, you should see the frames presented above.
	
	RESOLUTION
	==========
	
	A hotfix to SNA Server 2.11 Service Pack 1 SNACFG.DLL is available to enable the
	SNA Server to indicate whether PU 2.0 or PU 2.1 should be used by a channel link
	service.
	
	
	Also, SNA Server now indicates the correct XID type if Format 0 XID is configured
	on the connection.
	
	This hotfix will be included in an upcoming SNA Server 2.11 service pack. This
	update is already included in SNA Server 3.0.
	
	If SNA Server 2.11 is being used and this hotfix isn't applied, versions of VTAM
	that can support independent LU6.2 can resolve this problem by adding the
	following parameter to the VTAM PU definition:
	
	  XID=YES
	
	Versions of VTAM that can support independent LU 6.2 can resolve the problem by
	adding the following parameter to the VTAM PU definition:
	
	  XID=YES
	
	This would allow both systems to negotiate the same type of node, providing for
	propriety in the parameters sent to and from the host. However, VTAM 3.11 does
	not support independent LU 6.2; therefore, the node type cannot be forced to be
	a PU 2.1. A Program Temporary Fix (PTF) is available from IBM to correct this
	problem. Contact IBM for more information on the PTF.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 2.11 and 2.11 Service
	Pack 1.
	This problem was corrected in the latest Microsoft SNA Server 2.11 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsna bustech bus-tech sna nt ibm sp1
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
