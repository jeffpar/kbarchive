---
layout: page
title: "Q84781: Cannot Change Source Disk Location on Express Setup"
permalink: /kb/084/Q84781/
---

## Q84781: Cannot Change Source Disk Location on Express Setup

	Article: Q84781
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Express Setup option for Microsoft Windows operating system version 3.1 does
	not allow you to change the source disk drive letter after Setup has been
	started.
	
	For example, suppose you copy the contents of Disk 3 to a temporary directory on
	the hard disk and then run Setup from drive A. When Disk 3 is asked for, you
	will not be able to give Setup the path to the temporary directory.
	
	To change the source disk location during Setup, you must use the Custom Setup
	option.
	
	MORE INFORMATION
	================
	
	By default, Express Setup only looks for source files on the floppy disk drive
	from which the SETUP.EXE file was started. However, Custom Setup prompts you at
	every disk for the location of the file(s).
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
