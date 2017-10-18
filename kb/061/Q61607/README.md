---
layout: page
title: "Q61607: PWB Error U1355: Bad Command or File Name"
permalink: kb/061/Q61607/
---

## Q61607: PWB Error U1355: Bad Command or File Name

	Article: Q61607
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	The following error may occur when attempting to run an executable
	file, such as CL.EXE, LINK.EXE, or NMAKE.EXE, from inside the
	Programmer's WorkBench (PWB):
	
	  U1355 Bad Command or File Name
	
	
	The error occurs because the directory containing the .EXE file is not
	specified in the search path, or an incorrect LINK.EXE is being executed.
	This problem can be corrected by adding the missing directory name(s) to
	the path in the AUTOEXEC.BAT or STARTUP.CMD and rebooting, or executing NEW-
	VARS.BAT or NEW-VARS.CMD. If an incorrect linker is the problem, the search
	path can be rearranged to find the new version of the linker first, or the
	old linkers can be deleted or renamed. The error U1354 will be generated
	instead of U1355 if the current directory is not fortran\bin. The
	resolution is the same in either case.
	
	This error was not documented in the PWB 1.0 online help shipped with
	C version 6.0. The error description is included in the online help
	for PWB version 1.1.
	
	Additional query words: kbinf 1.00 1.10 PWBIss fortran
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
