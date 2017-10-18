---
layout: page
title: "Q253861: Windows NT Desktop Turns Gray and Icons Disappear"
permalink: kb/253/Q253861/
---

## Q253861: Windows NT Desktop Turns Gray and Icons Disappear

	Article: Q253861
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbnetwork kbui kbshell
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Windows NT Workstation desktop may turn gray and the icons may disappear. When
	this occurs, the desktop turns gray and is blank, with no icons or background.
	The taskbar is still present. If you log off and back on, the desktop returns.
	
	CAUSE
	=====
	
	This behavior can occur if the Windows NT user profiles are configured so that
	the desktop is redirected to a network location. Any interruption of network
	connectivity between the redirected desktop server and the workstation when
	Explorer.exe tries to refresh the desktop causes the issue. Once this behavior
	occurs, it typically cannot be refreshed. Logging off and back on restores the
	desktop.
	
	There are many causes for this behavior, including network connection problems,
	(redirected desktop) server hangs, client workstation hangs, and so on. Some
	users may receive error messages when the desktop goes gray, others may not.
	
	RESOLUTION
	==========
	
	Because there are many causes for this behavior, there is no single fix. Some
	occurrences of this issue clear up on their own, while other instances require a
	logoff and logon. Microsoft Internet Explorer 5 may allow the desktop to recover
	dynamically more readily than Internet Explorer 4.x. There is no specific fix
	for disappearing desktops because this behavior is a symptom of an underlying
	problem. Resolving the underlying issue causes the issue to stop occurring.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdisplay kbnetwork kbui kbshell 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
