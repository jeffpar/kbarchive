---
layout: page
title: "Q85498: PRB: /Tp and /Tc Show Unexpected Behavior with Wildcards"
permalink: /kb/085/Q85498/
---

## Q85498: PRB: /Tp and /Tc Show Unexpected Behavior with Wildcards

	Article: Q85498
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500
	Last Modified: 14-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 4.2, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling multiple .CPP or .CXX files using a wildcard syntax and the /Tc
	command line option, for example
	
	  cl /Tc *.cpp
	
	the C compiler is invoked only for the first source file matching the wildcard
	specification. For all subsequent files, the C++ compiler is invoked. The
	inverse is also true. That is, when compiling multiple .C files using a wildcard
	syntax and the /Tp command line option, the C++ compiler is invoked only for the
	first file; for all subsequent files, the C compiler is invoked.
	
	CAUSE
	=====
	
	This behavior is by design. As stated in the online and hard copy documentation
	for Microsoft C/C++ version 7.0 and all versions of Microsoft Visual C++ 16- and
	32-bit Editions, the following is the correct syntax for the /Tc and /Tp command
	line options:
	
	/Tc<filename>   -or-   /Tc <filename>
	/Tp<filename>   -or-   /Tp <filename>
	
	Each option refers to only one source file. Therefore, the first file matching
	the wildcard specification will be compiled as directed by the corresponding /T?
	option. All other files matching the wildcard will be compiled in accordance
	with their extension. (The C compiler is invoked for .C files, the C++ compiler
	for .CPP or .CXX files.)
	
	MORE INFORMATION
	================
	
	The following are two possible workarounds for the potential inconvenience
	presented by this behavior:
	
	- Use a makefile to control compilations involving the /Tc or /Tp switch.
	  Instead of using wildcards, list the files as dependents of the respective
	  .OBJ files. This offers two advantages over using wildcards:
	
	   - Only the files that have changed with respect to their .OBJ are
	     recompiled.
	
	   - The proper compiler is invoked for the file to be compiled.
	
	  -or-
	
	- Rename all files in question such that they have the expected extensions. For
	  example, rename SRC.CPP to SRC.C if you want the C compiler to be invoked on
	  the source.
	
	The sample code below is a makefile that could be used to replace the wildcard
	command-line compilation:
	
	Sample Code
	-----------
	
	If you wish to compile file1.c, file2.c and file3.c with the C++ compiler and
	link them to create exefile.exe, use the following makefile:
	
	  .c.obj:
	     cl /c /Tp $<
	
	  exefile.exe : file1.obj file2.obj file3.obj
	     link $**, exefile.exe;
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC410 kbVC420 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,4.1,4.2,5.0
	Issue type        : kbprb
	
	=============================================================================
	
