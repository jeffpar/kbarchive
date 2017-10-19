---
layout: page
title: "Q175906: Clearing the Documents Menu Clears Multiple MRU Lists"
permalink: /kb/175/Q175906/
---

## Q175906: Clearing the Documents Menu Clears Multiple MRU Lists

	Article: Q175906
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:4.0,95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbui win95 msiew95 msient
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	- Microsoft Internet Explorer version 4.0 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you clear the Documents menu, the most recently used list (MRU, or the list
	of files most recently accessed) from the Find tool and Internet Explorer may
	also be cleared.
	
	RESOLUTION
	==========
	
	To work around this issue, manually delete the contents of the Recent folder
	instead of clicking Clear on the Start Menu Programs tab in Taskbar properties.
	To manually delete the contents of the Recent folder, use the appropriate
	method:
	
	Windows 95
	----------
	
	1. Double-click My Computer, and then click Options (or Folder Options) on the
	  View menu.
	
	2. On the View tab, click Show All Files, click OK, and then close My Computer.
	
	3. Click Start, point to Find, and then click Files Or Folders.
	
	4. In the Named box, type "recent" (without the quotation marks), and then click
	  Find Now.
	
	5. Double-click the Recent folder located in the Windows folder (or in the
	  Windows\Profiles\<username> folder), and then click Select All on the
	  Edit menu.
	
	6. On the File menu, click Delete, click Yes if you are prompted to confirm that
	  you want to delete the files, and then close the Find tool.
	
	Windows NT
	----------
	
	1. Double-click My Computer, and then click Options (or Folder Options) on the
	  View menu.
	
	2. On the View tab, click Show All Files, click OK, and then close My Computer.
	
	3. Click Start, point to Find, and then click Files Or Folders.
	
	4. In the Named box, type "recent" (without the quotation marks), and then click
	  Find Now.
	
	5. Double-click the Recent folder located in the Winnt\Profiles\<Username>
	  folder (where <Username> is the name you used to log on to Windows NT),
	  and then click Select All on the Edit menu.
	
	6. On the File menu, click Delete, click Yes if you are prompted to confirm that
	  you want to delete the files, and then close the Find tool.
	
	======================================================================
	Keywords          : kbenv kbui win95 msiew95 msient 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbWin95search kbZNotKeyword2 kbIENT400Search kbIE95Search kbZNotKeyword3 kbWin95 kbIE400Win95 kbIE400WinNT400
	Version           : WINDOWS:4.0,95; winnt:4.0
	
	=============================================================================
	
