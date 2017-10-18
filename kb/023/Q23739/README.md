---
layout: page
title: "Q23739: INFO: Specify Compiler Options Before Source Filename"
permalink: kb/023/Q23739/
---

## Q23739: INFO: Specify Compiler Options Before Source Filename

	Article: Q23739
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To compile a file with any of the Microsoft language compilers listed above,
	list any appropriate compiler option switches on the command line before the
	names of the source files to which the options apply.
	
	MORE INFORMATION
	================
	
	When you are using a Microsoft 16-bit C/C++ compiler, if you specify an option
	at the end of the command line, after the names of all the files, the compiler
	does not generate any warnings or errors -- it simply ignores the option because
	no source file follows for the option to apply to. In a few cases, a trailing
	option causes an error because the option conflicts with a previously specified
	option.
	
	Microsoft 32-bit C/C++ compiler supports placing option switches after the names
	of source files. If a compiler command line specifies more than one source code
	file, specified options apply to all files regardless of the position of the
	option switch relative to the source filename. However, if the -link switch is
	to be used, it must occur after all source filenames and compiler switches.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
