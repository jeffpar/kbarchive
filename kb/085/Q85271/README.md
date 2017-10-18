---
layout: page
title: "Q85271: Word for MS-DOS Err Msg: System Integrity Violation"
permalink: kb/085/Q85271/
---

## Q85271: Word for MS-DOS Err Msg: System Integrity Violation

	Article: Q85271
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running version 5.5 of Microsoft Word for MS-DOS from Microsoft Windows,
	you may receive the following error message:
	
	  System Integrity Violation
	
	CAUSE
	=====
	
	This is usually caused by Word attempting to access an EMS LIM 3.2 page frame
	when there is not one.
	
	RESOLUTION
	==========
	
	There are three solutions to this problem:
	
	- Add the Optional Parameter /X to the PIF for Word:
	
	  a. Run PIF Editor.
	
	  b. From the File menu, choose Open and load Word's PIF.
	
	  c. Add the following to the Optional Parameters field:
	
	        /X
	
	  The /X disables Word from using EMS memory.
	
	  -or-
	
	- Change the EMS Memory option in the PIF to:
	
	     KB Required 0    KB Desired 0
	
	  -or-
	
	- Ensure that Windows has a LIM 3.2 page frame available. If you are using
	  EMM386.EXE for UMB support to load drivers and programs high, then make sure
	  you use the RAM switch and not the NOEMS switch. You can run MSD.EXE from
	  Windows and choose the Memory option to determine what type of page frame is
	  available to MS-DOS-based applications running under Windows.
	
	MORE INFORMATION
	================
	
	For more information on possible switches and settings for page frames and
	Windows, consult the SYSINI.WRI file that comes with Windows. For more
	information on the PIF Editor or EMM386.EXE, consult the "Microsoft Windows
	User's Guide."
	
	Additional query words: 3.10 3.1 3.11 pageframe 4.0
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
