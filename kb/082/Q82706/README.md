---
layout: page
title: "Q82706: Changing to No Network Doesn't Remove WinPopup from WIN.INI"
permalink: kb/082/Q82706/
---

## Q82706: Changing to No Network Doesn't Remove WinPopup from WIN.INI

	Article: Q82706
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Microsoft Windows operating system version 3.1, switching to the No
	Network Installed option does not remove WINPOPUP.EXE from the WIN.INI file.
	This information applies only to systems running Microsoft LAN Manager versions
	2.x. Running WinPopup can cause problems when reconfiguring Windows for the No
	Network Installed option.
	
	MORE INFORMATION
	================
	
	Switching to the No Network Installed option in Setup (both Windows and MS-DOS
	maintenance mode) does not remove WINPOPUP.EXE from the LOAD= line in the
	WIN.INI file. If WINPOPUP.EXE is on the LOAD= line and the system is
	reconfigured back to the previous network (LAN Manager 2.x), a dialog box may
	appear, asking you to insert Windows 3.1 Disk #3 or give a new path to the file
	below. (No filename is specified.) If you move the dialog box window, you can
	see a box behind it that lists WINPOPUP.EXE.
	
	If you enter the path to WINPOPUP.EXE, the following message appears:
	
	  Setup is unable to install the file: WINPOPUP.EXE.
	  This file is currently in use by Windows. To upgrade the driver and related
	  files you have selected, exit Windows and start Setup from the MS-DOS command
	  prompt.
	
	After you choose the OK button, another message comes up:
	
	  Setup was unable to copy all the files necessary for the complete
	  installation of the driver you selected. To install this driver, you need to
	  correct the file copy errors.
	
	To remove these error messages, close WINPOPUP.EXE. The network should install
	correctly.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
