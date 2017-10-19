---
layout: page
title: "Q107818: MWAV Err Msg: MWAVABSI.DLL ERROR Subdirectory Tree Is Full"
permalink: /kb/107/Q107818/
---

## Q107818: MWAV Err Msg: MWAVABSI.DLL ERROR Subdirectory Tree Is Full

	Article: Q107818
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Anti-Virus for Windows (MWAV.EXE), you may receive the
	following error message:
	
	  MWAVABSI.DLL Error
	  Subdirectory tree is full
	
	CAUSE
	=====
	
	This error occurs if the directory structure of the drive being scanned is
	corrupted.
	
	WORKAROUND
	==========
	
	If you are using MS-DOS 6.2, use ScanDisk to determine the problem and then
	correct it.
	
	If you are using MS-DOS 6.0, use a surface scan utility, such as Symantec's
	Norton Utilities Norton Disk Doctor (NDD.EXE) or Central Point Software's
	DiskFix to correct this problem, or upgrade to MS-DOS 6.2 and use ScanDisk.
	
	Additional query words: 6.00 6.20 MWAV
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2
	
	=============================================================================
	
