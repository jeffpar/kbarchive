---
layout: page
title: "Q75861: Using Lotus Metro Versions 1.0 and 1.1 with MS-DOS Version 5.0"
permalink: kb/075/Q75861/
---

## Q75861: Using Lotus Metro Versions 1.0 and 1.1 with MS-DOS Version 5.0

	Article: Q75861
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using Lotus Metro version 1.0 with MS-DOS 5.0 can cause the system to hang at
	the DOS prompt. Metro can also hang the system if you try to use MS-DOS Shell,
	Editor, or Qbasic.
	
	MORE INFORMATION
	================
	
	Lotus Metro is a memory-resident desktop management DOS application that allows
	you to access pop-up desktop accessories such as a calendar, calculator, clock,
	and so on. Lotus Metro also contains a full-featured keyboard macros program.
	
	After loading Lotus Metro version 1.0, the system can hang at the DOS prompt. If
	this occurs, try adding the following line to the CONFIG.SYS file:
	
	  SWITCHES=/K
	
	If ANSI.SYS is also present in the CONFIG.SYS file, also add /k as follows:
	
	  DEVICE=[DRIVE][PATH]ANSI.SYS /k
	
	If you make these changes, the system should be functional at the DOS prompt.
	However, the system can still hang if you try to use Shell, Editor, or Qbasic.
	In this case, the above changes to the CONFIG.SYS file do not help. To prevent
	the system from hanging you must upgrade Lotus Metro to version 1.1.
	
	Lotus Metro version 1.1 works properly with MS-DOS 5.0. The above modifications
	to the CONFIG.SYS file can be included but are not necessary. You can obtain
	this version of Metro by calling Lotus customer service at (800) 343-5414. The
	part numbers to request are 9050, for 5.25 inch disks or 9055, for 3.5 inch
	disks.
	
	For more information, refer to section 1.8 of APPNOTES.TXT provided with MS-DOS
	5.0.
	
	Lotus Metro is manufactured by Lotus Development Corporation, vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding this
	product's performance or reliability.
	
	Reference(s):
	
	Lotus technical support (900) 454-9009
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
