---
layout: page
title: "Q82491: Setup Does Not Delete Windows 3.0 SMARTDRV or EMM386"
permalink: kb/082/Q82491/
---

## Q82491: Setup Does Not Delete Windows 3.0 SMARTDRV or EMM386

	Article: Q82491
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	When you upgrade to Microsoft Windows version 3.1 or 3.11 over Windows
	3.0, the files SMARTDRV.SYS and EMM386.SYS are left in the Windows
	directory. The current AUTOEXEC.BAT and CONFIG.SYS files are changed
	to load the new SMARTDRV.EXE and EMM386.EXE files. A problem can arise
	if you have multiple CONFIG.SYS and AUTOEXEC.BAT files that can load
	these earlier .SYS files.
	
	The earlier files can be safely deleted either from the MS-DOS prompt
	or from the Windows File Manager. Any additional AUTOEXEC.BAT or
	CONFIG.SYS files should also be edited to remove references to these
	earlier Windows 3.0 files.
	
	Additional query words: 3.10 3.1 3.11 upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
