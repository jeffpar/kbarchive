---
layout: page
title: "Q73729: Using an Expanded Memory Board with EMM386.EXE"
permalink: /kb/073/Q73729/
---

## Q73729: Using an Expanded Memory Board with EMM386.EXE

	Article: Q73729
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0; WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	- Microsoft Windows 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use an expanded memory board on a 386 machine and still use
	EMM386.EXE to load devices into the upper memory area (UMA). However, you must
	configure the memory on the board as extended memory.
	
	MORE INFORMATION
	================
	
	To use an expanded memory board in conjunction with EMM386, do the following:
	
	1. Configure the EMM board as extended.
	
	2. Enter the expanded memory board device driver first in the CONFIG.SYS file.
	
	3. After entering the HIMEM line, use the EMM386 statement. Exclude the address
	  range of the memory board's page frame.
	
	An example of this technique is:
	
	  CONFIG.SYS
	  DEVICE=C:\EMMBORD.SYS
	  DEVICE=C:\DOS\HIMEM.SYS
	  DEVICE=C:\DOS\EMM386.EXE RAM 1024 X=C000-C7FF
	
	This information applies to EMM386.SYS in MS-DOS version 4.xx, and Windows 3.0.
	Some expanded memory boards may be incompatible with the EMM386 command.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0; WINDOWS:3.0
	
	=============================================================================
	
