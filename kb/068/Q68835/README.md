---
layout: page
title: "Q68835: PRB: Compiler Prints Filename But Does Not Compile the Program"
permalink: /kb/068/Q68835/
---

## Q68835: PRB: Compiler Prints Filename But Does Not Compile the Program

	Article: Q68835
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC151 kbVC152fix kbVC210 kbVC400 kbVC500
	Last Modified: 27-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Using the Microsoft C/C++ compiler, if your program prints out your filename
	after you type in the following:
	
	  cl filename.c
	
	and then returns to the command prompt without creating an executable file, there
	may be duplicate compiler filenames. Within the Programmer's WorkBench (PWB) or
	Visual Workbench (VWB), it will indicate that there are no warnings or errors
	after rebuilding, but the compiler will not create an executable file.
	
	CAUSE
	=====
	
	The C compiler is a three-pass compiler, and invokes the files C1.EXE, C2.EXE,
	and C3.EXE for C versions 5.1, 6.0, 6.0a, and 6.0ax. To determine what files are
	being invoked for C/C++ 7.0 and Visual C++ 1.0, add the /d compiler switch to
	the command line; for Visual C++ 2.xx and above, add the /Bd switch. Different
	files will be used depending on whether it is a C or C++ source file.
	
	If there are any other files with these names on the path before the compiler,
	then the compiler may incorrectly execute the wrong file.
	
	RESOLUTION
	==========
	
	There is a compiler switch, /d or /Bd, that will enable you to print out which
	files are being invoked during each pass of the compiler. Use this to determine
	if the wrong files are being called by the compiler.
	
	  cl /d filename.c
	
	  -or-
	
	  cl /Bd filename.c
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC151 kbVC152fix kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
