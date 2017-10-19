---
layout: page
title: "Q61955: PWB Generates SYS0002 If MSHELP.DLL Not Installed Properly"
permalink: /kb/061/Q61955/
---

## Q61955: PWB Generates SYS0002 If MSHELP.DLL Not Installed Properly

	Article: Q61955
	Product(s): Microsoft Programming Utilities
	Version(s): OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	Under OS/2, if MSHELP.DLL is not installed correctly or is not on the
	LIBPATH, an error such as the following may appear in a window when
	starting the Programmer's WorkBench (PWB):
	
	  Cannot Autoload Extension
	  e:\c600\binp\pwbhelp.pxt
	
	  MSHELP: SYS0002: The system cannot find the file specified
	
	  < OK > < Help >
	
	
	Make sure that the latest version of MSHELP.DLL (the one that was
	included with the package in which you obtained PWB) is installed in a
	directory contained in your LIBPATH.
	
	The default for OS/2 DLLs is the C:\OS2\DLL directory. If you choose
	to install the DLLs in some other directory, you must edit the LIBPATH
	in your CONFIG.SYS file and restart the system.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100OS2 kbPWB110OS2
	Version           : OS/2:1.0,1.1
	
	=============================================================================
	
