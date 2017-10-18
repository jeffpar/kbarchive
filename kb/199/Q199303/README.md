---
layout: page
title: "Q199303: Explorer Draws Default Icon for Shortcuts over Slow Link"
permalink: kb/199/Q199303/
---

## Q199303: Explorer Draws Default Icon for Shortcuts over Slow Link

	Article: Q199303
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In Windows Explorer, a shortcut to a file on a remote server is displayed as a
	default icon, rather than its registered file type.
	
	CAUSE
	=====
	
	This problem occurs if there are large numbers of shares on the remote server
	and the links between the two servers are slow, for example, with RAS
	connections. When you double-click any one of these default icons, it will not
	open. Windows Explorer acquires the icon asychronously, and will abandon this
	operation after a time-out value.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, create the following registry entry:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ 
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. On the Edit menu, click Add Value, and then add the following registry
	  value:
	
	  Value Name: NetLinkTimeout
	  Data Type: REG_DWORD
	  Value: 7500 (milliseconds)
	
	4. Quit Registry Editor.
	
	You may set it to a larger value, such as 9,000 (9 seconds). If it still fails,
	increase this value by 1,000 each time.
	
	The drop target icon is also changed to this time-out value; by default, it is 1
	second.
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
