---
layout: page
title: "Q82730: Why the Swap File is Written to at Startup in Windows 3.1"
permalink: kb/082/Q82730/
---

## Q82730: Why the Swap File is Written to at Startup in Windows 3.1

	Article: Q82730
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After starting the Microsoft Windows operating system version 3.1 on a machine
	with less than 4 megabytes (MB) of available RAM or loading several Windows
	applications in the Startup group, Windows accesses the hard drive for a few
	seconds.
	
	Windows is doing two things to make your applications run faster:
	
	- All segments from the boot-time modules (Kernel, User, GDI, the display
	  driver, and so on) are loaded into memory if there is enough free physical
	  memory to hold the segments. This speeds up the loading of applications that
	  require these segments.
	
	- All unlocked virtual memory is written to the paging swap file. This allows
	  Windows to quickly discard memory because the contents have already been
	  written to the paging swap file.
	
	Note: This disk activity does not prevent you from doing other tasks. All of
	these operations are done during "idle" system time. Applications respond
	normally while this disk activity is in progress.
	
	This behavior does not change if you enable or disable 32-bit disk access.
	
	Additional query words: 3.10 swapfile temporary permanent
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
