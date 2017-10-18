---
layout: page
title: "Q214756: &quot;Path Not Found&quot; When Connecting to a Novell NetWare Server"
permalink: kb/214/Q214756/
---

## Q214756: &quot;Path Not Found&quot; When Connecting to a Novell NetWare Server

	Article: Q214756
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork 3rdpartynet kb3rdPartyNetClient
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to a Novell NetWare server with a computer running
	Microsoft Windows NT 4.0 using Gateway (and Client) Services for NetWare (GSNW),
	you may receive the following error message:
	
	  Error 53 - The network path is not found
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Verify that the GSNW software is properly installed. Click Start, point to
	  Settings, click Control Panel, and then double-click Network.
	
	2. Click the Services tab, click Gateway Service for NetWare, click Remove, and
	  then click Yes.
	
	3. Click the Protocols tab, click NWLink IPX/SPX Compatible Transport, click
	  Remove, click Yes, click Close, and then restart the computer when you are
	  prompted.
	
	4. After the computer restarts and you log on, click Start, point to Settings,
	  click Control Panel, and then double-click Network.
	
	5. Click the Protocols tab, click Add, and then double-click NWLink IPX/SPX
	  Compatible Transport. When you are prompted, type the full path to the
	  installation files folder (for example, D:\I386), and then click Continue.
	
	6. When you are prompted to restart the computer, click Do Not Restart Windows.
	
	7. Reapply the latest Windows NT 4.0 service pack. For information about
	  obtaining and installing the latest service pack for Windows NT 4.0, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q152734How to Obtain the Latest Windows NT 4.0 Service Pack
	
	8. Restart the computer when the service pack installation is complete.
	
	9. Verify that you have properly configured a preferred NetWare server when you
	  log on. Click Start, point to Settings, click Control Panel, and then
	  double-click GSNW.
	
	10. In the list of available NetWare servers, click the appropriate server name,
	  and then click OK.
	
	11. Verify that the NWLINK IPX/SPX protocol is configured correctly. For
	  information on how to do this, please refer to the following article in the
	  Microsoft Knowledge Base:
	
	  Q166963Cannot Communicate with Computer Running NWLink IPX/SPX
	
	  NOTE: You can obtain the correct values for your network installation by
	  typing "config" (without the quotation marks) at a NetWare server console
	  command line.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 3rdpartynet kb3rdPartyNetClient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
