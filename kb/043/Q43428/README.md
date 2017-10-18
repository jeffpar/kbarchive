---
layout: page
title: "Q43428: INFO: Storage of Environment Variables"
permalink: kb/043/Q43428/
---

## Q43428: INFO: Storage of Environment Variables

	Article: Q43428
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The environ variable is an array of pointers to the strings that constitute the
	process's environment. The C startup code takes the environment information and
	initializes the environ variable to point to the environment table. The function
	getenv() uses the environ variable to access the environment table. environ can
	be used to obtain the environment table address directly.
	
	The following program prints out the address of the beginning of the environment
	table and the PATH environment variable:
	
	Sample Code
	-----------
	
	  #include <stdlib.h>
	  #include <stdio.h>
	
	  char *path;
	
	  void main (void)
	  {
	    path = getenv( "PATH" );
	    printf( "path: %s\nenviron: %x\n", path, environ );
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
