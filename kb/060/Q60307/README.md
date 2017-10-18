---
layout: page
title: "Q60307: MASM 5.1 Setup Shows Blank Display on LCD/Mono Monitor"
permalink: kb/060/Q60307/
---

## Q60307: MASM 5.1 Setup Shows Blank Display on LCD/Mono Monitor

	Article: Q60307
	Product(s): Microsoft Macro Assembler
	Version(s): MS-DOS:5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running the RUNME setup program for Microsoft Macro Assembler Version 5.10,
	the setup program changes the screen colors. On LCD displays and some monochrome
	displays, the colors that the setup program changes to are not visible.
	Therefore, when the setup program is run, you can't see anything on the screen.
	The program is running properly, but the text color is the same as the
	background color.
	
	On the MS OS/2 and MS-DOS Macro Assemblers setup disk, there is a file that holds
	all of the commands that the setup program RUNME uses. The file is called
	SETUP.SUS and the first line in that file is as follows:
	
	     CLS a: 30 "Microsoft(R) MASM 5.10 Setup"
	
	To have the setup program use the standard colors of the operating system, remove
	the "a: 30" from the file and rerun RUNME. This will correct the problem.
	
	The new line should be as follows:
	
	     CLS "Microsoft(R) MASM 5.10 Setup"
	
	Additional query words: kbinf 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : MS-DOS:5.1
	
	=============================================================================
	
