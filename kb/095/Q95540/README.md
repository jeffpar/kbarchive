---
layout: page
title: "Q95540: Install Button in Printer Setup Doesn't Work"
permalink: /kb/095/Q95540/
---

## Q95540: Install Button in Printer Setup Doesn't Work

{% raw %}

	Article: Q95540
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Install button or double-click the selected printer from the
	list in the Printers dialog box of Control Panel, an hourglass appears but
	nothing happens.
	
	The following error message may be displayed when you choose the Add button:
	
	  The information file is damaged or not in the SYSTEM directory.
	
	  Copy the original CONTROL.INF or SETUP.INF on Windows Disk 1 to your SYSTEM
	  directory, or contact your device manufacturer to get a new file.
	
	CAUSE
	=====
	
	When you choose the Install button in the Printers dialog box of the Control
	Panel with a specific driver highlighted (not the Install Unlisted or Updated
	Printer option), Windows reads the SETUP.INF file and provides an Install dialog
	box. (The Install Unlisted or Updated Printer selection looks for an
	OEMSETUP.INF to read.)
	
	If the SETUP.INF file has been renamed or deleted from your Windows SYSTEM
	subdirectory, Windows briefly displays an hourglass when you click the Install
	button; it does not display an error message or a dialog box.
	
	If the SETUP.INF file or CONTROL.INF file is in a directory in a path other than
	your Windows SYSTEM subdirectory, the error message above is displayed when you
	choose the Add button.
	
	NOTE: This error message is misleading; the CONTROL.INF file is actually located
	on Disk 5 of the 3.5-inch disk set and on Disk 6 of the 5.25-inch disk set.
	
	
	WORKAROUND
	==========
	
	To correct either of these problems, use one of the following methods:
	
	- METHOD 1:
	
	  1. 1. Copy the SETUP.INF file from the Windows 3.1 Disk 1 to your Windows
	     SYSTEM subdirectory. Copy the CONTROL.INF file from the Windows 3.1 Disk 5
	     (3.5-inch disk set) or Disk 6 (5.25-inch disk set) to your Windows SYSTEM
	     subdirectory. (These are not compressed files.)
	
	  2. Restart Windows.
	
	  3. Install the desired printer driver.
	
	  NOTE: You should only have one copy of SETUP.INF on your system; and that copy
	  should be in your Windows SYSTEM directory. Placing SETUP.INF in your root
	  directory or Windows directory does not work correctly.
	
	  -or-
	
	- Rebuild the WIN.INI file. For more information on re-creating the WIN.INI
	  file, query on the following words in the Microsoft Knowledge Base:
	
	  create and win.ini and without and third-party
	
	Additional query words: 3.10 3.11 add button
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
