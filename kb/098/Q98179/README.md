---
layout: page
title: "Q98179: Err Msg: You Started MemMaker with the /SESSION Switch..."
permalink: /kb/098/Q98179/
---

## Q98179: Err Msg: You Started MemMaker with the /SESSION Switch...

	Article: Q98179
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article covers two situations that result in the following error message:
	
	  You started MemMaker with the /SESSION switch. This is an incorrect use of
	  this switch, which is for MemMaker's use during optimization an is not
	  intended to be typed at the command prompt.
	
	
	These situations are described in the following sections:
	
	- MemMaker Is Run Without an AUTOEXEC.BAT File
	
	- Documentation Error in "Microsoft MS-DOS 6.0 User's Guide"
	
	MORE INFORMATION
	================
	
	MemMaker Is Run Without an AUTOEXEC.BAT File
	--------------------------------------------
	
	If you run MemMaker without an AUTOEXEC.BAT file in the root of your boot drive,
	MemMaker creates an AUTOEXEC.BAT file with a single line, similar to the
	following:
	
	  C:\DOS\MEMMAKER.EXE /SESSION:26493
	
	MemMaker uses this line to restart itself when performing reboots during memory
	optimization. After MemMaker finishes, it does not remove this line. When you
	later restart your computer, the above error message is displayed. You are then
	given the option to Restore Files or Cancel; choosing either option brings you
	to the MS-DOS command prompt. To avoid receiving this error message every time
	you start your computer, remove the MEMMAKER.EXE line from your AUTOEXEC.BAT
	file.
	
	Documentation Error in "Microsoft MS-DOS  User's Guide"
	-------------------------------------------------------
	
	On page 160 of the "Microsoft MS-DOS User's Guide" for version 6.0 and 6.2, the
	procedure titled "To free enough conventional memory to run MemMaker" includes
	an error in step 4. You are instructed to bypass all but the following commands
	in the CONFIG.SYS file:
	
	  HIMEM.SYS
	  EMM386.EXE
	  SHELL
	
	If you bypass the command line loading CHKSTATE.SYS, the error message is
	displayed and the procedure fails. To make this procedure work correctly, make
	sure you do not bypass CHKSTATE.SYS.
	
	Additional query words: 6.22 6.00 docerr doc err 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
