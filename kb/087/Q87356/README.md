---
layout: page
title: "Q87356: EMS Unavailable at MS-DOS Prompt in Standard Mode"
permalink: kb/087/Q87356/
---

## Q87356: EMS Unavailable at MS-DOS Prompt in Standard Mode

	Article: Q87356
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Pages 550-551 of the "Microsoft Windows User Guide" version 3.1 incorrectly
	indicate that the EMM386.EXE memory manager can be used to give MS-DOS
	applications expanded memory in standard mode.
	
	However, in standard mode, EMM386.EXE is disabled.
	
	MORE INFORMATION
	================
	
	Page 550 incorrectly states:
	
	  You can run the [MS-DOS] application in standard mode, using EMM386.EXE to
	  simulate expanded memory.
	
	Page 551 incorrectly tells you how to set up EMM386.EXE for use with MS-DOS
	applications in "standard mode" that use expanded memory:
	
	  Add a command line for EMM386.EXE to your CONFIG.SYS file.
	
	  ...
	  device=c:\windows\emm386.exe 512
	
	This command line is supposed to allow EMM386.EXE to set up 512K of RAM memory as
	expanded memory for use with MS-DOS applications requiring expanded memory.
	However, this does not work. If you shell out to MS-DOS and run the MEM command
	(MS-DOS 4.01 and 5.0) or run MSD.EXE, you will see that there is no expanded
	memory available.
	
	MS-DOS applications can use EMM386.EXE for expanded memory when Windows is not
	running.
	
	KBCategory: kbother kbdocerr
	KBSubcategory: winmem win31
	
	Additional query words: 3.10 3.11 doc err NoWin4
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
