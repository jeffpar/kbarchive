---
layout: page
title: "Q74367: MS-DOS 5.0 Shell Refers to PRINT.COM; Should Be PRINT.EXE"
permalink: /kb/074/Q74367/
---

## Q74367: MS-DOS 5.0 Shell Refers to PRINT.COM; Should Be PRINT.EXE

	Article: Q74367
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When trying to print from MS-DOS 5.0 Shell without having the MS-DOS print
	spooler installed, you are instructed to run PRINT.COM before starting Shell.
	You are also referred to the online Help in Shell, which refers to the print
	spooler as PRINT.COM. Both instances of PRINT.COM are incorrect; the print
	spooler's correct filename is PRINT.EXE.
	
	You must either exit Shell and execute the PRINT command or disable Task Swapper
	and execute the PRINT command.
	
	MORE INFORMATION
	================
	
	The syntax of the PRINT command is as follows:
	
	  print [/d:device][/b:size][/u:ticks1][/m:ticks2][/s:ticks3][/q:qsize]
	  [/t][[drive:] [path]filename[...]][/c][/p]
	
	For more information on PRINT.EXE (including switches), see page 542 of the
	version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
