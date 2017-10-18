---
layout: page
title: "Q82318: Stack Overflow Can Cause Windows to Hang"
permalink: kb/082/Q82318/
---

## Q82318: Stack Overflow Can Cause Windows to Hang

	Article: Q82318
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbProd2Web
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Stack overflows can cause Microsoft Windows to stop responding (hang). If
	Windows hangs intermittently, try adding the following line to the CONFIG.SYS
	file:
	
	     STACKS=9,256
	
	MORE INFORMATION
	================
	
	The addition of the STACKS command line causes MS-DOS to reserve space for
	hardware interrupt handling (rather than an application's stack). In general,
	the default setting gives you more free memory; however, there are situations
	when the hardware interrupt routines require more space. On IBM machines,
	STACKS=0,0 is the default; on all other machines, STACKS=9,128 is the default.
	
	One such situation is when you are running SMARTDrive (SMARTDRV.EXE) version 4.0
	with certain network cards. Windows Setup should modify the CONFIG.SYS file
	accordingly when Windows is installed if it detects a known problem
	configuration.
	
	If Windows is hanging or crashing, particularly if SMARTDRV.EXE 4.0 is running,
	or a network is installed, try adding the STACKS command to the CONFIG.SYS file
	and see if that corrects the problem.
	
	For more information, please query on the following words in the Microsoft
	Knowledge Base: STACKS and OVERVIEW
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.1 3.10 3.11
	
	======================================================================
	Keywords          : kbProd2Web 
	Technology        : kbWinMEsearch kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWinME
	Version           : WINDOWS:
	
	=============================================================================
	
