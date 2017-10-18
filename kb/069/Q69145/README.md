---
layout: page
title: "Q69145: PWB Ignores Certain Compiler Switches in Additional Options"
permalink: kb/069/Q69145/
---

## Q69145: PWB Ignores Certain Compiler Switches in Additional Options

	Article: Q69145
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
	
	SUMMARY
	=======
	
	The compiler switches
	
	  /Fo, /Fe, /F hexnum, /Fm, and /link link-info
	
	are ineffective when entered in the Additional Options field of the C Compiler
	Options dialog box from the Options menu of the Programmer's Workbench (PWB).
	This is the intended behavior. The functionality of all of these switches is
	provided through the Compiler, Link, and Build Options dialog boxes from the
	Options menu.
	
	MORE INFORMATION
	================
	
	The /Fo switch is overridden by PWB as it creates the .MAK file needed to build
	the project. To perform this function correctly:
	
	1. Set a program list from the Make menu.
	
	2. Choose Build Options from the Options menu.
	
	3. Choose the Build Directory button.
	
	4. Enter the destination path in that field, such as:
	
	  " C:\C600\PROJECT\ " (without the quotation marks)
	
	5. Rebuild the project, and both the .EXE and .OBJ files will be placed in that
	  directory.
	
	The other switches are used only to pass information to the linker when the CL
	command is used outside PWB without the /c option. Because PWB always compiles
	and links separately, these switches are lost. To utilize these switches from
	within PWB, select the appropriate options in the Link Options dialog box from
	the Options menu.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
