---
layout: page
title: "Q58667: HOWTO: Redirect stdout to and from a File Using C"
permalink: kb/058/Q58667/
---

## Q58667: HOWTO: Redirect stdout to and from a File Using C

	Article: Q58667
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
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
	
	This article explains how to redirect stdout to a file from a C program, then
	restore the original stdout at a later point in the same program.
	
	MORE INFORMATION
	================
	
	The C function typically used to redirect stdout or stdin is freopen(). To
	redirect stdout to a file called FILE.TXT, use the following call:
	
	  freopen( "file.txt", "w", stdout );
	
	This statement causes all subsequent output, which is typically directed towards
	stdout, to go to the file FILE.TXT.
	
	To return stdout to the display (the default stdout), use the following call:
	
	  freopen( "CON", "w", stdout );
	
	In both of these cases, check the return value of freopen() to make sure that the
	redirection actually took place.
	
	Below is a short program to demonstrate the redirection of stdout:
	
	Sample Code
	-----------
	
	  // Compile options needed: none
	
	  #include <stdio.h>
	  #include <stdlib.h>
	
	  void main(void)
	  {
	     FILE *stream ;
	     if((stream = freopen("file.txt", "w", stdout)) == NULL)
	        exit(-1);
	
	     printf("this is stdout output\n");
	
	     stream = freopen("CON", "w", stdout);
	
	     printf("And now back to the console once again\n");
	  }
	
	This program assumes that stdout is to be redirected toward the console at the
	end of the program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
