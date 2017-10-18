---
layout: page
title: "Q222565: SNA Server Caches User in PV Signed-On List if Attach Fails"
permalink: kb/222/Q222565/
---

## Q222565: SNA Server Caches User in PV Signed-On List if Attach Fails

	Article: Q222565
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0SP3,4.0,4.0SP1,4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0SP3, 4.0, 4.0SP1, 4.0SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use LU6.2 Persistent Verification (PV) to CICS, SNA Server caches the
	user in its internal PV signed-on list even when CICS rejects the FMH-5 Attach
	request with sense code = 080F6051 (Access Security Information Invalid). The
	following scenario illustrates how this problem may occur:
	
	- An SNA Server APPC or CPIC application supplies a User ID and Password within
	  an Allocate request (where the User ID and Password may be provided by an end
	  user) and sets security = AP_SAME.
	
	- SNA Server detects that the Remote APPC LU session supports persistent
	  verification (that is, where Byte 23 Bit 7 of the BIND image received from
	  the remote system is enabled), and that this is the first time that this User
	  ID is initiating a conversation over this LU-LU pair. SNA Server caches the
	  User ID within its "PV signed-on list" and sends the FMH-5 Attach request to
	  the host, setting the "persistent verification sign-on requested" bit.
	
	- The host detects that an invalid password was provided for the user, and
	  rejects the FMH-5 Attach with a security error.
	
	- Further attempts by this User ID to allocate a conversation to the host
	  continue to fail with a security violation. This occurs even if the user
	  supplied a valid password on subsequent attempts. This problem occurs because
	  SNA Server has cached the user within its PV signed-on list.
	
	CAUSE
	=====
	
	This was caused by a problem in CICS. When a persistent verification sign-on
	request fails, the host is responsible for initiating an LU6.2 conversation to
	the SNA Server "Sign-Off TP" (TP name X'06F3F0F0'). However, CICS truncated the
	User ID within this request, causing SNA Server to fail to remove the User ID
	from its internal PV signed-on list. This caused SNA Server to set the "PV
	already signed on" bit in the subsequent Attach requests from the User ID, which
	were rejected by the host since the user had not been added to the host's "PV
	signed-on list".
	
	RESOLUTION
	==========
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	To correct this problem, go to IBM's Web site at http://www.ibm.com/ to obtain a
	possible fix to CICS.
	
	
	WORKAROUND
	==========
	
	To work around this problem, disable persistent verification support within CICS
	until the fix to CICS can be applied.
	
	MORE INFORMATION
	================
	
	For more information about persistent verification, see the following IBM
	reference:
	
	SNA LU6.2 Peer Protocols, Section 1.3.2.3: Persistent Verification
	IBM Document #SC31-6808
	
	To enable persistent verification on the host, the following parameters need to
	be enabled:
	
	- In the CICS Region (CICS version 4.1), the Connection Name (LU) needs to be
	  set to ATTACHSEC=PERSISTENT.
	
	- In VTAM, the APPLID of the CICS Region and the VTAM LU of the connection
	  should point to the same Mode Table.
	
	- In the VTAM LU logmode entry, the PSERVIC parameter byte 9 bit 7 needs to be
	  set to 1. This corresponds to byte 22 bit 7 in the session parameter field
	  and byte 23 bit 7 in the Bind image. PSERVIC sets both these other fields.
	  PSERVIC in the logmode entry is where the change is made.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:3.0SP3,4.0,4.0SP1,4.0SP2
	Issue type        : kbprb
	
	=============================================================================
	
