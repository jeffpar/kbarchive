---
layout: page
title: "Q89697: MSD Reports XMS 2.0 When Running in MS-DOS Session"
permalink: kb/089/Q89697/
---

## Q89697: MSD Reports XMS 2.0 When Running in MS-DOS Session

	Article: Q89697
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	When you run the Microsoft Diagnostic Utility (MSD.EXE) or MEM /D under
	Windows in 386 enhanced mode, no matter what extended memory specification
	(XMS) driver version you are using in your CONFIG.SYS file, MSD.EXE and MEM
	/D always report the driver version as 2.05 and the XMS version as 2.0.
	
	When Windows starts in 386 enhanced mode, the functionality provided by
	HIMEM.SYS is taken over by the Windows memory manager (WIN386.EXE) and it
	conforms to XMS version 2.0.
	
	Additional query words: 3.10 3.00a 3.00 3.11 6 6.03.00 dpmi MSD ms-dos dos box window
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbMSDOSSearch kbMSDOS621 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
