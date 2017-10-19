---
layout: page
title: "Q68337: INFO: ftell() May Return an Invalid Value with a Text File"
permalink: /kb/068/Q68337/
---

## Q68337: INFO: ftell() May Return an Invalid Value with a Text File

	Article: Q68337
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
	
	When ftell() is used on a file opened in text mode that contains only linefeeds
	(0x0A) with no carriage returns (0x0D), ftell() may return an incorrect value on
	the first call, causing all subsequent return values to be wrong as well.
	Opening the file in binary mode eliminates this problem.
	
	MORE INFORMATION
	================
	
	A text file, by definition, contains CR-LF pairs that are condensed to single LF
	(linefeed) characters on input. A file that contains LF characters with no CR
	(carriage return) characters is an ill-formed text file and should be processed
	in binary mode.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main( void)
	  {
	     FILE *ptr;
	     char a[80];
	     fpos_t offset;
	     int row;
	     char buffer[42] = "0123456789012345678901234567890123456789\n";
	                     /* |    10   |    10   |    10   |   10   | */ 
	
	     /* Create a file called TESTFILE.TXT that contains 12 lines of
	        40 chars each with linefeeds only. */ 
	     ptr = fopen( "TESTFILE.TXT", "wb" );
	
	     for( row = 0; row < 12; row++ )
	        fprintf( ptr, buffer );
	
	     fclose( ptr );
	
	     /* Open the file in text mode. */ 
	     ptr = fopen( "TESTFILE.TXT", "r" );
	
	     /* Positions (or should position) the file pointer at an offset.
	        of 41 */ 
	     fgets( a, 79, ptr );
	
	     offset = ftell( ptr );
	     printf( "offset = %ld\n", offset );   /* Prints out 30. */ 
	     fclose( ptr );
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
