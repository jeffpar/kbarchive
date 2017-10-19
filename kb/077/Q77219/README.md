---
layout: page
title: "Q77219: XMS Memory Is Not Reported Until Accessed"
permalink: /kb/077/Q77219/
---

## Q77219: XMS Memory Is Not Reported Until Accessed

	Article: Q77219
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): msdos
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	XMS (extended memory specification) memory may not be reported by the MEM
	command, even if HIMEM.SYS is properly loaded and extended memory is available.
	XMS memory will not be reported until it has been accessed.
	
	MORE INFORMATION
	================
	
	To reproduce this result, create a CONFIG.SYS file as follows:
	
	     device=c:\dos\himem.sys
	     files=30
	     buffers=10
	     shell=c:\dos\command.com c:\dos\ /p
	
	and AUTOEXEC.BAT as follows:
	
	     echo off
	     prompt $p$g
	     path=c:\dos;c:\ 
	
	If you boot your computer with 2 MB of extended memory and the above
	configuration and immediately run the MEM.EXE command, note that MEM will report
	the following:
	
	  2097152 bytes total contiguous extended memory
	  2097152 bytes available contiguous extended memory
	
	Because no program has yet accessed XMS memory, no XMS memory will be reported.
	As soon as an XMS "user" (for example, DOS=HIGH, SMARTDRV.SYS) is loaded, all of
	the contiguous extended memory will be reported as available XMS memory, less
	the 64K high memory area (HMA) controlled by HIMEM.SYS itself.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          : msdos 
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
