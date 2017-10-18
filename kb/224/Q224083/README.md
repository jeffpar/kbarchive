---
layout: page
title: "Q224083: Err Msg: Event ID 7022: The Messenger Service Hung on Starting"
permalink: kb/224/Q224083/
---

## Q224083: Err Msg: Event ID 7022: The Messenger Service Hung on Starting

	Article: Q224083
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, you may receive the following error message:
	
	  Service Control Manager indicates that at least one service or driver failed
	  to start - check the Event Viewer for details.
	
	When this occurs, the following entry may be logged in the System log in Event
	Viewer:
	
	  Event ID 7022
	  The Messenger service hung on starting.
	
	CAUSE
	=====
	
	This behavior can occur if a file that is associated with the NetBIOS interface
	is missing or has become corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Networking.
	
	2. Click the Services tab.
	
	3. Uninstall the NetBIOS interface.
	
	4. Reboot your computer.
	
	5. Click Start, point to Settings, click Control Panel, and then double-click
	  Networking.
	
	6. Install the NetBIOS interface.
	
	7. Restart your computer.
	
	8. Reapply your current service pack (if any).
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
