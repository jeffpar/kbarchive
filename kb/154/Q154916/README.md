---
layout: page
title: "Q154916: Cannot Switch to Running Control Panel Tool"
permalink: kb/154/Q154916/
---

## Q154916: Cannot Switch to Running Control Panel Tool

	Article: Q154916
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to switch to a running Control Panel tool using either the ALT+TAB
	key combination or Task Manager, the tool is not in the list of running
	programs.
	
	CAUSE
	=====
	
	This behavior is by design. Control Panel tools are treated as modeless dialog
	boxes, and as such are always part of Control Panel. The same behavior occurs if
	you try to switch to a property sheet dialog box.
	
	RESOLUTION
	==========
	
	To switch to the running Control Panel tool, use one of the following methods:
	
	- Use ALT-ESC to set the focus back on the desired Control Panel tool.
	
	  -or-
	
	- Use the mouse to select the tool on the desktop.
	
	  -or-
	
	- Switch to Control Panel and open the tool again.
	
	Additional query words: missing cpl
	
	======================================================================
	Keywords          : kbenv kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
