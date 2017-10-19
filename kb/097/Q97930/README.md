---
layout: page
title: "Q97930: Norton Antivirus Err Msg: Insufficient Memory to Scan File"
permalink: /kb/097/Q97930/
---

## Q97930: Norton Antivirus Err Msg: Insufficient Memory to Scan File

	Article: Q97930
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Norton Antivirus version 2.0, you may receive the following
	error message:
	
	  NAV WARNING: Insufficient memory to scan file. Access denied.
	
	This error message may be displayed just after SMARTDRV.EXE is loaded and usually
	occurs only if you are loading SMARTDRV.EXE high.
	
	NOTE: Even if you receive the above error message, all your device drivers and
	programs load normally. No functionality is lost.
	
	CAUSE
	=====
	
	The error is caused by the file NAV&.SYS.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Load NAV&.SYS before EMM386.EXE and any other upper memory block (UMB)
	  providers, or make sure that you are loading it into a UMB that has at least
	  64 kilobytes (K) free.
	
	- Contact Symantec and obtain an updated version of Norton Antivirus version
	  2.0. Versions of Norton Antivirus released on or after June 4, 1992, do not
	  exhibit this problem.
	
	Norton Antivirus is manufactured by Symantec, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 6.22 6.00 5.00 anti-virus nav nav.sys memmaker 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
