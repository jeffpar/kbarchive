---
layout: page
title: "Q32539: PRB: fclose() on Unopened Files Causes Protection Violation"
permalink: /kb/032/Q32539/
---

## Q32539: PRB: fclose() on Unopened Files Causes Protection Violation

	Article: Q32539
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to close a file with the fclose() function fails and one of the
	following occurs:
	
	- A protection violation or application error occurs
	
	- A "R6001 - null pointer assignment" error occurs
	
	CAUSE
	=====
	
	The specified file was not open.
	
	16-bit applications: The source code is compiled in the compact or large memory
	models. In the small memory model, fclose() may return EOF as expected or it may
	generate an error cited above.
	
	RESOLUTION
	==========
	
	Modify the source code to only close files that are already open.
	
	MORE INFORMATION
	================
	
	An attempt to close a file that is not open is a user error. The C run- time
	library does not verify the validity of file handles passed to the fclose()
	function.
	
	The code example below demonstrates this behavior.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed - 16-bit: /AL
	   *                        - 32-bit: none
	   */ 
	
	  #include <stdio.h>
	  FILE *myfile;
	  int status;
	
	  main()
	  {
	     myfile = fopen("myfile.dat", "r");
	     if (myfile == NULL)
	        printf("file open error\n");
	     status = fclose(myfile);
	     printf("file close status = %d\n", status);
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
