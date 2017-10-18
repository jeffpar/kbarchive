---
layout: page
title: "Q126335: Novell WLIBSOCK.DLL Dated 8/30/94 Causes Mailslot Error 10066"
permalink: kb/126/Q126335/
---

## Q126335: Novell WLIBSOCK.DLL Dated 8/30/94 Causes Mailslot Error 10066

	Article: Q126335
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.1,2.11,2.11 SP1,3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.1, 2.11, 2.11 SP1, 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the SNA Server Windows 3.x client using the TCP/IP sockets
	interface over Novell LAN Workplace version 4.2 with a WLIBSOCK.DLL file dated
	8/30/94 size 47,878, the following error may appear:
	
	  Error -- The NAP is not started
	
	  SNA Server Error: 553
	  could not create mailslot, rc=10066
	
	
	RESOLUTION
	==========
	
	Replacing WLIBSOCK.DLL with an earlier version (dated 2/1/94) should eliminate
	this error.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsna lwp work place mail slot
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.1,2.11,2.11 SP1,3.0
	Issue type        : kbprb
	
	=============================================================================
	
