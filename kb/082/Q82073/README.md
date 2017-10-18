---
layout: page
title: "Q82073: Norton Desktop for Windows DiskCopy Slow"
permalink: kb/082/Q82073/
---

## Q82073: Norton Desktop for Windows DiskCopy Slow

	Article: Q82073
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Norton Desktop for Windows' (NDW) DiskCopy copies slowly when used with
	Microsoft Windows SMARTDrive (SMARTDRV.EXE) version 4.0. Using Windows 3.1 or
	3.11, it may take more than twice as long to copy a disk as it does under
	Windows 3.0.
	
	CAUSE
	=====
	
	This slowdown occurs because NDW's DiskCopy uses disk access that is not optimal
	for SMARTDrive 4.0.
	
	WORKAROUND
	==========
	
	To correct this problem:
	
	1. Edit the AUTOEXEC.BAT file using a standard ASCII text editor such as Windows
	  Notepad.
	
	2. Modify the SMARTDRV.EXE line to disable the floppy cache
	
	  C:\WINDOWS\SMARTDRV.EXE A- B- xxxx yyyy
	
	  where "xxxx" refers to the SMARTDRV cache size at the MS-DOS level (before
	  Windows starts). "yyyy" refers to the size of the cache after Windows
	  starts.
	
	  The sample line above disables the cache for both floppy drives (that is
	  drives A and B). To disable caching on a drive, type the drive letter and a
	  minus sign. For example, the following line disables caching on drive C:
	
	  SMARTDRV.EXE C-
	
	
	Norton Desktop for Windows is manufactured by Symantec Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 3.11 NDW Norbert decrease late
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
