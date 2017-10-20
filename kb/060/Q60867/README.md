---
layout: page
title: "Q60867: Looking for Files in Different Directories"
permalink: /kb/060/Q60867/
---

## Q60867: Looking for Files in Different Directories

{% raw %}

	Article: Q60867
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3, 1.4 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	- Microsoft NMAKE Utility for Windows NT, versions 1.4, 1.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the "directory search" feature in NMAKE by specifying the name of the
	directory in curly braces ({}), subsequent dependency rules cannot infer the
	location of the specified files.
	
	MORE INFORMATION
	================
	
	The following makefile example demonstrates this confusion.
	
	     test.exe: {c:\obj}test.obj
	
	        link c:\obj\test.obj graphics.lib;
	
	     test.obj: test.c test.h
	
	        cl /c /Foc:\obj\test.obj test.c
	
	If TEXT.EXE were up to date with C:\OBJ\TEST.OBJ but TEST.C or TEST.H was not up
	to date with TEST.OBJ, NMAKE would not build any files because C:\OBJ\TEST.OBJ
	does not have any dependencies. The TEST.OBJ dependency line refers only to the
	current directory. To work around this situation, modify the code to include the
	following line:
	
	     c:\obj\test.obj: test.c test.h
	
	Then, if TEST.C or TEST.H changed, NMAKE would update C:\OBJ\TEST.OBJ and
	TEST.EXE.
	
	Additional query words: kbinf 1.10 1.20 1.30 1.40 1.50
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE140DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2 kbNMAKE140NT kbNMAKE150NT
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3,1.4; NT:1.4,1.5; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	

{% endraw %}
