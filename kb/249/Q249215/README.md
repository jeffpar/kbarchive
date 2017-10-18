---
layout: page
title: "Q249215: How to Hide the Active Desktop Item on the Settings Menu"
permalink: kb/249/Q249215/
---

## Q249215: How to Hide the Active Desktop Item on the Settings Menu

	Article: Q249215
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv win95 win98 win98se
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	When you install Microsoft Internet Explorer 5 with the Active Desktop
	component, a new menu item named Active Desktop is added to the Settings menu.
	To see this menu, click Start, and then point to Settings. There is no entry in
	Windows NT Policy Editor to hide this menu item.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To hide the Active Desktop menu item by editing the registry, use Registry Editor
	to add a new REG_SZ entry named NoSetActiveDesktop with a data value of 1 to the
	the following registry key:
	
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\Explorer\
	
	This setting takes effect after your next logon.
	
	NOTE: In Windows 95, Windows 98, or Windows 98 Second Edition, the
	NoSetActiveDesktop value should be a REG_DWORD value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
