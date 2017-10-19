---
layout: page
title: "Q179416: No Shutdown Notification When Users Are Connected"
permalink: /kb/179/Q179416/
---

## Q179416: No Shutdown Notification When Users Are Connected

	Article: Q179416
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you shut down a Windows NT-based computer to which users are currently
	connected, no alert is sent regarding loss of the connections to the server or
	to the clients.
	
	MORE INFORMATION
	================
	
	To determine if users are connected to network shares before shutting down a
	Windows NT-based computer, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Server.
	
	3. Click Users to display all currently connected users, and then click Close.
	
	To warn all connected users that the network shares will no longer be available,
	type the following line at a command prompt
	
	" net send /users <message> " (without the quotation marks)
	
	where <message> is the message you want to send.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	
	=============================================================================
	
