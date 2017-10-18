---
layout: page
title: "Q98313: Cannot Run Windows on Packard Bell Running MS-DOS 6 or Later"
permalink: kb/098/Q98313/
---

## Q98313: Cannot Run Windows on Packard Bell Running MS-DOS 6 or Later

	Article: Q98313
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Windows 3.0 video display driver (VDD) on a Packard Bell machine
	and EMM386.EXE is installed, you receive one of the following error messages
	when you run Windows in 386 enhanced mode:
	
	  The Winmemsize in SYSTEM.INI is too large
	
	  -or-
	
	  Kernel is corrupted
	
	In addition, these same problems can occur when you use the Windows 3.1 Packard
	Bell driver, HTVDD.386 VDD.
	
	
	CAUSE
	=====
	
	Although HTVDD.386 is a Windows 3.1 VDD, it still uses the C600-C7FF range. This
	situation is caused by a problem in the Packard Bell VDD, not Windows 3.1 or the
	Windows 3.1 Device Developer Kit (DDK).
	
	On some Packard Bell systems, the video BIOS is at E000 and C000-DFFF is free (by
	default). EMM386.EXE uses this as range as upper memory blocks (UMBs). If you
	are using a Windows 3.0 video display driver, Windows ignores anything loaded in
	the C600-C7FF range. This can cause various problems in Windows, including
	failure to run and failure of the Microsoft Backup for Windows compatibility
	test.
	
	WORKAROUND
	==========
	
	Windows 3.0
	-----------
	
	Add the X=C600-C7FF parameter to the EMM386.EXE command line in the CONFIG.SYS
	file.
	
	Windows 3.1
	-----------
	
	You can either use a Windows 3.1 video display driver (such as the standard VGA
	driver), or add the X=C600-C7FF parameter to the EMM386.EXE command line in the
	CONFIG.SYS file.
	
	Additional query words: 6.22 6.00 6.20 mwbackup legend 245 memmaker krnl386 windowmemsize PackardBell
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
