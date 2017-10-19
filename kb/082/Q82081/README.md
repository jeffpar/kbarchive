---
layout: page
title: "Q82081: Cannot Use EMM386.SYS/EMM386.EXE in Standard Mode Windows 3.0"
permalink: /kb/082/Q82081/
---

## Q82081: Cannot Use EMM386.SYS/EMM386.EXE in Standard Mode Windows 3.0

	Article: Q82081
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Microsoft Windows version 3.0 in standard mode by typing
	
	  win /s
	
	with EMM386.SYS or EMM386.EXE installed, you may receive the following error
	message:
	
	  Cannot run Windows in standard mode; check to ensure you are not running
	  other protected-mode software, or run in real mode
	
	CAUSE
	=====
	
	Windows cannot run in standard mode if EMM386 is active. A normal part of
	standard mode startup is to disable EMM386. This message occurs if you have
	installed EMM386.EXE for either expanded memory or UMB (upper memory block)
	support, which puts your computer into protected mode, thus preventing you from
	running Windows in standard mode.
	
	If EMM386.EXE is installed with either the RAM or NOEMS switch to allocate UMBs,
	and DOS=UMB is in the CONFIG.SYS, UMB support is allocated.
	
	If EMM386 is installed to provide expanded memory only, and expanded memory is
	not being used, Windows turnS off EMM386 and run normally. When EMM386 is
	providing UMB support or if expanded memory is being used, EMM386 can't be
	turned off by standard mode Windows.
	
	To use expanded memory with an MS-DOS-based application in standard mode, you
	must have an expanded memory card with the associated driver.
	
	RESOLUTION
	==========
	
	To run successfully in standard mode, either:
	
	- Stop using expanded memory before running Windows. If you are using MS-DOS
	  5.0, disable UMBs.
	
	  -or-
	
	- Remove EMM386.SYS or EMM386.EXE.
	
	Additional query words: 3.0 3.0a 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
