---
layout: page
title: "Q104463: 32-Bit FoxPro Won't Load After MS-DOS 6 Upgrade Installed"
permalink: kb/104/Q104463/
---

## Q104463: 32-Bit FoxPro Won't Load After MS-DOS 6 Upgrade Installed

	Article: Q104463
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you have installed the MS-DOS 6.0 upgrade, the Extended (32-bit) version
	of FoxPro (FOXPROX.EXE) may not load or may go into demand paging.
	
	This behavior occurs because the upgrade process changes the AUTOEXEC.BAT and
	CONFIG.SYS files.
	
	To resolve memory-related problems after the MS-DOS 6.0 upgrade is complete,
	check the following items:
	
	- If SMARTDRV.EXE is loaded in the AUTOEXEC.BAT file, it may reduce the amount
	  of available memory on a "minimum requirement" configuration.
	
	- In the CONFIG.SYS file, the FILES statement is often lower than it was
	  earlier.
	
	- In the CONFIG.SYS file, the BUFFERS statement is modified or removed. It may
	  need to be set in the 20-40 range.
	
	- The DEVICE = EMM386.EXE line includes HIGHSCAN option. (Remove if you are
	  having problems.)
	
	- The DEVICE = EMM386.EXE RAM or NOEMS is changed from prior setting.
	
	- The DEVICE = EMM386.EXE may require NOVCPI option.
	
	Additional query words: FoxDos
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS
	Version           : MS-DOS:2.0,2.5,2.5a
	
	=============================================================================
	
