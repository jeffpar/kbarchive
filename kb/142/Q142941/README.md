---
layout: page
title: "Q142941: Clients Using Novell ODI IPX/SPX Protocol Are Disconnected"
permalink: /kb/142/Q142941/
---

## Q142941: Clients Using Novell ODI IPX/SPX Protocol Are Disconnected

	Article: Q142941
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	MS-DOS-based and Microsoft Windows-based computers using Novell's IPX/SPX
	protocol to access an AS/400 through Microsoft SNA Server are disconnected after
	a brief period of inactivity.
	
	If the client is using a 5250 emulator to communicate with an AS/400, the
	following errors appear:
	
	  Event 38: APPC session deactivated abnormally, qualifier 0005
	  Event 92: APPC TP detected abend of SNA subsystem
	
	If your client computer is using a 3270 emulator to communicate with a host, you
	lose your 3270 session and be reset to the initial host signon screen upon
	reconnecting.
	
	The failure in the API trace shows:
	
	  SEND_DATA response, result = COMM_SUBSYSTEM_ABENDED
	
	and Events 38 and 92 are logged in the Application Log (as shown in the Event
	Viewer).
	
	CAUSE
	=====
	
	The IPX/SPX protocol is allowing a timeout to expire, after which the SNA Server
	client loses it's IPX/SPX session to the SNA Server, causing SNA Server to reset
	the user's host or AS/400 session.
	
	RESOLUTION
	==========
	
	Download the latest version of IPXODI.COM from Novell, dated 8/8/95 or later and
	replace the original file on the client workstation.
	
	The following information should be added to the NET.CFG file (after the DOS
	Requestor line):
	
	  "Protocol IPXODI
	  SPX Verify Timeout 65000
	  SPX Abort Timeout 65000" (without the quotation marks)
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3
	
	=============================================================================
	
