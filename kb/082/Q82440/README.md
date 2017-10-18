---
layout: page
title: "Q82440: Windows 3.1 HIMEM.SYS and Windows 3.0"
permalink: kb/082/Q82440/
---

## Q82440: Windows 3.1 HIMEM.SYS and Windows 3.0

	Article: Q82440
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using the Microsoft Windows 3.1 HIMEM.SYS extended memory manager on an EISA
	system with more than 16 megabytes (MB) of memory can cause Windows version 3.0
	to fail.
	
	MORE INFORMATION
	================
	
	Windows 3.0 standard and enhanced modes rely on the HIMEM.SYS driver to "screen
	out" memory on the machine above 16 MB. Windows 3.0 standard and enhanced modes
	do not work well with memory above 16 MB, and Windows 3.0 does not function
	correctly if it is allowed to "see" this memory. Failure to screen this memory
	can result in reboots, general protection (GP) faults, failures to start, or
	data corruption.
	
	In some cases, Windows 3.0 enhanced mode works correctly because the WIN386.EXE
	file from Windows 3.0 does some screening of its own.
	
	The greater-than 16 MB memory screening is disabled in the HIMEM.SYS driver
	included with Windows 3.1. Windows 3.1 standard and enhanced modes do not need
	this screening because both modes fully support more than 16 MB of memory.
	
	If it is necessary to have both Windows 3.0 and Windows 3.1 running on your
	machine, you should replace the automatically installed Windows 3.1 HIMEM.SYS
	driver with the Windows 3.0 HIMEM.SYS. Windows 3.1 standard and enhanced modes
	work correctly with the 3.0 version of the driver. However, remember that the
	HIMEM.SYS driver included with Windows 3.0 is limited to 16 MB of memory.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
