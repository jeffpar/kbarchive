---
layout: page
title: "Q199152: Desktop Icons Do Not Display Correctly in Windows NT 4.0"
permalink: /kb/199/Q199152/
---

## Q199152: Desktop Icons Do Not Display Correctly in Windows NT 4.0

	Article: Q199152
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows desktop icons may not be correctly displayed on the desktop. In some
	cases, the icons may be displayed as black or possibly in other colors.
	Ultimately, the icons do not appear as advertised.
	
	Deleting and re-creating the shortcuts does not fix the problem. Newly created
	shortcuts are also affected by the problem. Non-shortcut icons such as My
	Computer, Recycle Bin, and folders are unaffected by this problem.
	
	CAUSE
	=====
	
	The reason that the icons are displayed incorrectly may be related to the use of
	TweakUI in conjunction with Internet Explorer 4.0. This occurs because of
	corruption in the Icon Cache file.
	
	RESOLUTION
	==========
	
	To ensure that the icons are displayed correctly, complete the following steps.
	
	1. Uninstall TweakUI from the system (if installed).
	
	2. Open Start Menu, Settings, Control Panel, then click the Display icon.
	
	3. Select the Appearance tab.
	
	4. Select the icon in the Item Box.
	
	5. Increase the icon unit by 1.
	
	6. Select Apply.
	
	7. Decrease the icon unit by 1.
	
	8. Select OK.
	
	
	1. Delete the file %systemroot%\ShellIconCache Note: This file has a hidden
	  attribute.
	
	2. Log off and log back on to see the correct icons.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
