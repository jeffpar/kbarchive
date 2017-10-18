---
layout: page
title: "Q72792: Placing .OBJ File in Program List Gives Unexpected Result"
permalink: kb/072/Q72792/
---

## Q72792: Placing .OBJ File in Program List Gives Unexpected Result

	Article: Q72792
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	When creating a program list for a project in the Programmer's
	WorkBench (PWB) version 1.0 or 1.1, including an .OBJ file as one of
	the modules in the list may give different results than expected. Due
	to the way NMAKE actually builds a project, if there are any default
	inference rules that can be used to build the .OBJ, NMAKE will execute
	the default commands.
	
	For example, assume you have a project that requires an .OBJ called
	FILE1.OBJ. If, in the same directory, there is a newer source file
	with the same base name (FILE1) and the file extension is one of those
	included in the .SUFFIXES list (for example, FILE1.ASM, FILE1.BAS,
	FILE1.C, FILE1.CBL, FILE1.FOR, or FILE1.PAS), NMAKE will try to invoke
	the appropriate compiler or assembler to rebuild FILE1.OBJ.
	
	To work around this situation, copy the .OBJ file in question to some
	directory where the default inference rules will not be invoked, such
	as the directory where you have your libraries. If this is
	unacceptable, you can choose NMAKE Options from the Options menu and
	specify the /R switch to NMAKE. This will turn off all default
	inference rules for the project.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
