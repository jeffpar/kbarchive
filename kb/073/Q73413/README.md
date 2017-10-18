---
layout: page
title: "Q73413: Default CONFIG.SYS and AUTOEXEC.BAT on MS-DOS 5.0 Working Disk"
permalink: kb/073/Q73413/
---

## Q73413: Default CONFIG.SYS and AUTOEXEC.BAT on MS-DOS 5.0 Working Disk

	Article: Q73413
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the /F switch with the Microsoft MS-DOS 5 Upgrade Setup program to
	create a set of working floppies, default CONFIG.SYS and AUTOEXEC.BAT files are
	created on the Startup disk. These default files contain minimal settings for
	the DOS environment that can prevent some programs from running correctly.
	Before running MS-DOS version 5.0 from the working floppies, you should
	customize the CONFIG.SYS and AUTOEXEC.BAT files to the system requirements.
	
	MORE INFORMATION
	================
	
	"SETUP /F" creates the following CONFIG.SYS and AUTOEXEC.BAT files on the
	STARTUP disk:
	
	CONFIG.SYS
	----------
	
	  DEVICE=A:\SETVER.EXE
	  DEVICE=A:\HIMEM.SYS
	  DOS=HIGH
	  FILES=10
	
	AUTOEXEC.BAT
	------------
	
	  @ECHO OFF
	  PROMPT $P$G
	
	Note that the following two lines of the CONFIG.SYS file will not be included in
	the file on an 8086 or 8088 machine:
	
	  DEVICE=A:\HIMEM.SYS
	  DOS=HIGH
	
	The two files listed above will provide a minimal DOS environment that may not be
	sufficient to run programs that require larger settings for DOS environment such
	as FILES= and BUFFERS=. One such program is Microsoft Windows, which requires
	FILES= to be set to 30 or greater.
	
	For more information on installing the MS-DOS 5.0 upgrade to floppy disks, query
	on the following words:
	
	  " DOS and 5 and Upgrade and Setup and /F " (without the quotation marks)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
