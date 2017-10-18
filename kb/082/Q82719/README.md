---
layout: page
title: "Q82719: Windows 3.1 and NDW Do Not Agree on Free File Space"
permalink: kb/082/Q82719/
---

## Q82719: Windows 3.1 and NDW Do Not Agree on Free File Space

	Article: Q82719
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Norton Desktop for Windows (NDW) and Erase Protect (EP.EXE) is
	installed in the AUTOEXEC.BAT file, the available disk space reported by NDW is
	usually different from the available disk space that MS-DOS and File Manager
	indicate is available.
	
	Neither product is reporting incorrectly. Windows and MS-DOS report the actual
	amount of disk space that is available; NDW reports the actual amount of disk
	space available plus the amount of disk space that is used by the hidden
	trashcan directory. A trashcan is created for each logical disk.
	
	MORE INFORMATION
	================
	
	The best way to find out how much disk space is occupied by the trashcan
	directory is to use File Manager. From the View menu, choose By File Type. Check
	the Show Hidden/System Files box. You can then view the trashcan directory and
	get an accurate reading of how much disk space is being used.
	
	You can run out of disk space if you do many file creation and deletion
	activities and NDW retains the files for a long period of time (the default is 3
	days).
	
	In addition, if you have a temporary swap file, some versions of Erase Protect
	try to back it up every time it is deleted. Other version do not detect the
	presence of the temporary swap file. If a you are running NDW, use a permanent
	swap file if possible while running Erase Protect.
	
	Additional query words: 1.00 1.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
