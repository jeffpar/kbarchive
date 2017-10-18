---
layout: page
title: "Q46354: Placing Dependent &amp; Target Files in Different Directories"
permalink: kb/046/Q46354/
---

## Q46354: Placing Dependent &amp; Target Files in Different Directories

	Article: Q46354
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To place a target file into a directory other than its dependent file, you must
	explicitly specify the path for the target and/or the dependents. To place an
	object file into a different directory using a Microsoft language compiler,
	specify the /Fo compiler option switch and the destination path for the object
	file. To place an executable file in a directory other than the directory that
	contains the source files, specify the full pathname for the EXE file parameter
	when linking, or use the /Fe compiler switch if you compile and link your
	application in the same step.
	
	MORE INFORMATION
	================
	
	The following makefile demonstrates placing an object file in a different
	directory than the source file.
	
	Sample Makefile
	---------------
	
	  # Build options required: None
	
	  ObjDir    = c:\obj^\ 
	  SourceDir = c:\src^\ 
	
	  $(ObjDir)pixel.obj : $(SourceDir)pixel.c
	     cl /Fo$(ObjDir) /c $*
	
	NOTE: When you use a macro in the makefile to specify a pathname, you must
	specify a caret (^) before the backslash (\) character that ends the line.
	Otherwise, NMAKE interprets the trailing backslash as a line- continuation
	character.
	
	Additional query words: kbinf 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.21
	
	=============================================================================
	
