---
layout: page
title: "Q59420: Specifying the Order in Which NMAKE Builds Files"
permalink: /kb/059/Q59420/
---

## Q59420: Specifying the Order in Which NMAKE Builds Files

	Article: Q59420
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS 
	- Microsoft NMAKE Utility for OS/2 
	- Microsoft NMAKE Utility for Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to specify the order in which NMAKE builds target files.
	
	MORE INFORMATION
	================
	
	When NMAKE runs, it first checks its comment line. NMAKE builds any targets
	specified on the command line in order, from left to right. If the command line
	does not specify any targets, NMAKE builds the first target in the description
	file.
	
	NMAKE builds all the dependents in the order in which they are specified on the
	first target line, from left to right. For most description files, the first
	target in the file is the ALL pseudotarget. NMAKE builds the specified files in
	order and builds other files that depend on the specified files according to
	their rules.
	
	As an example, consider the following description file:
	
	Sample Makefile 1
	-----------------
	
	      all : three.obj two.obj one.obj main.exe
	
	     one.obj : one.c
	        cl /c one.c
	
	     two.obj : two.c
	        cl /c two.c
	
	     three.obj : three.c
	        cl /c three.c
	
	     main.exe : three.obj one.obj two.obj
	        link one two three, main;
	
	In this example, NMAKE compiles THREE.C, TWO.C, and ONE.C, then it links
	MAIN.EXE. The compiler uses this order because the first target specifies the
	dependents in this order. NMAKE builds the first target unless the command line
	specifies a different target to build.
	
	Consider the following example that is somewhat different from the example
	above:
	
	Sample Makefile 2
	-----------------
	
	        all : main.exe
	
	     one.obj : one.c
	         cl /c one.c
	
	     two.obj : two.c
	         cl /c two.c
	
	     three.obj : three.c
	         cl /c three.c
	
	     main.exe : three.obj one.obj two.obj
	         link one two three, main;
	
	In this example, NMAKE compiles THREE.C, ONE.C, and TWO.C, then it links
	MAIN.EXE. NMAKE builds the first target, MAIN.EXE, then it builds the file
	MAIN.EXE depends on in the specified order.
	
	To summarize, NMAKE looks first at its command line. If no files are specified,
	it builds the first target in the description file by building each of its
	dependent files in the specified order. If a file that the first target depends
	on specifies another target, NMAKE builds the dependent files of that target in
	the specified order. This continues until all dependent files are built.
	
	Additional query words: kbinf 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch
	Version           : :
	
	=============================================================================
	
