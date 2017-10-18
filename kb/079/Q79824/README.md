---
layout: page
title: "Q79824: FIX: Last Letter of NMAKE Command-Line Macro Incremented"
permalink: kb/079/Q79824/
---

## Q79824: FIX: Last Letter of NMAKE Command-Line Macro Incremented

	Article: Q79824
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.13,1.2; OS/2:1.13,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.13, 1.2 
	- Microsoft NMAKE Utility for OS/2, versions 1.13, 1.21 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the NMAKE command line defines a macro, NMAKE may increment the last letter
	of the macro string by one letter. Every other letter, beginning with the letter
	"b", is incremented in this manner. For example, the make file example below
	expands the macro DIR to be "XXY" instead of "XXX".
	
	RESOLUTION
	==========
	
	Use one of the following three methods to work around this problem:
	
	1. Use the /F command-line option to specify the name of the makefile. For
	  example:
	
	  nmake /F test.mak DIR=XXX
	
	  -or-
	
	  nmake DIR=XXX /F test.mak
	
	2. Place any command-line option after the macro definition. For example:
	
	  nmake DIR=XXX /A test.mak
	
	3. Define the macro in the specified makefile instead of on the command line.
	
	MORE INFORMATION
	================
	
	This problem occurs only when the command line specifies a makefile name other
	than the default name "MAKEFILE" and the command line does not include the /F
	option. Use the /F option to specify the name of the makefile any time it is not
	"MAKEFILE." For more information, please refer to page 292 of the "Microsoft
	Macro Assembler Programmer's Guide" for Microsoft Macro Assembler (MASM) version
	6.0.
	
	Sample Code
	-----------
	
	  # Command line required to demonstrate problem: nmake DIR=XXX test.mak
	
	  ALL:
	       ECHO $(DIR)
	
	Additional query words: 1.20 character change
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE113DOS kbNMAKE120DOS kbNMAKE113OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.13,1.2; OS/2:1.13,1.21
	Solution Type     : kbfix
	
	=============================================================================
	
