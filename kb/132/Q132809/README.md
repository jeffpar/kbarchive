---
layout: page
title: "Q132809: Clicking Suspend on Compaq Desktop Does Not Suspend Computer"
permalink: /kb/132/Q132809/
---

## Q132809: Clicking Suspend on Compaq Desktop Does Not Suspend Computer

	Article: Q132809
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): diskmem win95 appscomp kbAppCompatibility kbDiskMemory
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click the Suspend command on the Start menu, the screen goes blank, but
	the computer does not suspend.
	
	CAUSE
	=====
	
	Some computer models have system extensions that enable Windows 95 to perform
	basic power management tasks, such as querying power status. When you click
	Suspend, Windows 95 calls one of these extensions and tries to suspend the
	computer. However, some computer models ignore this request and do nothing
	because the computer cannot actually suspend.
	
	RESOLUTION
	==========
	
	If nothing happens when you click Suspend, you may want to remove the command
	from the Start menu. To remove the command, follow these steps:
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click the Power icon.
	
	3. In the Suspend Command Options area, select Never for the "Show Suspend
	  Command On Start Menu" option.
	
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : diskmem win95 appscomp kbAppCompatibility kbDiskMemory 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	
