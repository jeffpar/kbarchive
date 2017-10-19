---
layout: page
title: "Q97739: MemMaker Hangs When Used with SuperStor Pro"
permalink: /kb/097/Q97739/
---

## Q97739: MemMaker Hangs When Used with SuperStor Pro

	Article: Q97739
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run MemMaker on a computer running SuperStor Pro, the system may
	provide an error messages about an illegal read to a device and then prompt you
	with an "Abort, Retry, Fail?" message, or you may receive the "Bad or missing
	command interpreter" error message.
	
	To prevent this problem, add *SSTORDRV and *DEVSWAP to the MEMMAKER.INF file.
	
	MORE INFORMATION
	================
	
	If you have already run MemMaker and your machine stops responding (hangs) at
	the "Abort, Retry, Fail?" prompt, do the following:
	
	1. Restart your computer.
	
	2. Type "memmaker /undo" (without the quotation marks) at the MS-DOS command
	  prompt and then press ENTER.
	
	3. Edit your CONFIG.SYS and AUTOEXEC.BAT files with MS-DOS Editor. If MemMaker
	  was unable to undo its changes, remove the MemMaker commands (such as
	  CHKSTATE.SYS, SIZER.EXE, and MEMMAKER.EXE /SESSION) and save the files.
	
	Additional query words: 6.22 6.00 reboot 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
