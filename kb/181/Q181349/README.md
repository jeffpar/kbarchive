---
layout: page
title: "Q181349: Applications and Icons Not Displayed in Start Menu"
permalink: /kb/181/Q181349/
---

## Q181349: Applications and Icons Not Displayed in Start Menu

	Article: Q181349
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the hidden attribute has been set on a file or shortcut in a user profile, it
	will not appear in the Start menu. However, the file or shortcut can be seen by
	using Explorer when configured to view hidden files.
	
	RESOLUTION
	==========
	
	Use Explorer to remove the Hidden attribute. Right click the file, select
	Properties, clear the Hidden attribute and click OK.
	
	MORE INFORMATION
	================
	
	If shortcuts and icons defined in the default user, "all users" or locally
	logged on user's profile are hidden and if Windows Explorer (Explorer.exe) is
	configured to view hidden files, all files will be displayed. However, Windows
	shortcuts that have hidden attributes will not be visible when viewed from the
	Windows Start menu
	
	This is often confusing because the user may open Explorer and browse a directory
	storing a user profile where the file is visible, while the same icons are not
	visible in the Start Menu. To make the shortcuts appear in the Start menu,
	remove the hidden attribute for all shortcuts. This action will make icons
	visible when viewed in the Start menu.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
