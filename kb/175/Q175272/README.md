---
layout: page
title: "Q175272: Windows 3.x CPIC or APPC Fails; Host Sends Sense Code 10086040"
permalink: kb/175/Q175272/
---

## Q175272: Windows 3.x CPIC or APPC Fails; Host Sends Sense Code 10086040

	Article: Q175272
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Operating System(s): 
	Keyword(s): kbfixlist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, 3.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade an SNA Server Windows 3.x client from version 2.11 or version
	2.11 Service Pack 1 (SP1) to version 2.11 SP2 or version 3.0 (including 3.0 SP1
	or SP2), the Windows 3.x APPC and CPIC applications no longer work.
	
	SNA Server traces indicate the following sequence of events:
	
	- The Windows 3.x CPIC or APPC application attempts to allocate a conversation
	  using the AP_SAME security option.
	
	- The SNA Server Windows 3.x APPC DLL issues an allocate, adding the Windows
	  3.x username in a user ID subvector of the FMH-5 attach request.
	
	- The host may have already negotiated the LU6.2 BIND to indicate that security
	  information will not be accepted on FMH-5 attach requests (that is, Byte 23,
	  bit 3 = 0 in the BIND request).
	
	- When SNA Server sends the FMH-5 attach (containing the user ID), the host
	  rejects the attach with an FMH-7 error, with the following sense code:
	
	  10086040 = Invalid FM Header: The FM header was not understood or translated
	  by the receiver, or an FM header was expected but not present. 6040 = Invalid
	  attach parameter: A parameter in the FMH-5 Attach command conflicts with the
	  statement of LU capabilities previously provided in the BIND negotiation.
	
	CAUSE
	=====
	
	The SNA Server Windows 3.x APPC interface (Winappc.dll) is incorrectly enabling
	the special AP_SAMENosUser setting, which causes the user ID to be added to the
	FMH-5 attach message when applications request the AP_SAME security option.
	
	WORKAROUND
	==========
	
	This problem can be resolved if the Windows 3.x APPC or CPIC application does
	not specify the AP_SAME security option prior to calling the [MC_]ALLOCATE or
	CMALLC functions to allocate a conversation.
	
	Note: If a CPIC application is being used, and a blank CPIC symbolic destination
	name is passed to the CMINIT function, then the default symbolic destination
	name specifies a security option of AP_SAME. To correct this problem, the CPIC
	application should specify a CPIC symbolic destination name that is configured
	in the SNA Server configuration, where the security option is not using
	Conversation Security: Same. The CPIC security information is configured within
	SNA Server Administrator or Manager, under the CPIC Symbolic Names option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SNA Server Windows 3.x
	clients, versions 2.11, 2.11 SP1, 2.11 SP2, 3.0, 3.0 SP1, and 3.0 SP2.
	
	This problem was corrected in the latest SNA Server version 3.0 U.S. Service
	Pack. For information on obtaining this Service Pack, query on the following
	word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	A supported fix for SNA Server version 2.11 is now available, but has not been
	fully regression tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Technical Support for more information.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbfixlist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ211SP1 kbSNAServ211SP2 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.11,2.11 SP1,2.11 SP2,3.0,3.0 SP1,3.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
