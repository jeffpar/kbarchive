---
layout: page
title: "Q41159: INFO: rewind(stdin) Clears Keyboard Buffer"
permalink: /kb/041/Q41159/
---

## Q41159: INFO: rewind(stdin) Clears Keyboard Buffer

	Article: Q41159
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5,1.51,1.52; WINDOWS NT:1.0,2.0,2.1,4.0,
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC6
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To clear the keyboard buffer in Microsoft C use the function rewind() with the
	stream STDIN, which is associated with the keyboard by default. The function
	fflush() clears the buffers that C programs use for stream level I/O. It does
	not clear the device buffer.
	
	MORE INFORMATION
	================
	
	The following is an example that shows what happens when the keyboard buffer is
	not cleared, and then how to clear it:
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     int ch ;
	
	     puts( "Input two or more chars. One is read now." );
	     ch = getchar();
	     putchar( ch );
	     putchar( '\n' );
	
	     puts( "The next char is taken from stdin." );
	     ch = getchar( );
	     putchar( ch );
	     putchar( '\n' );
	
	     rewind( stdin );
	     puts( "Input two or more chars. One is read now." );
	     ch = getchar();
	     putchar( ch );
	     putchar( '\n' );
	
	     rewind( stdin );
	     puts( "You must enter another char because of the rewind(stdin)" );
	     ch = getchar( );
	     putchar( ch );
	     putchar( '\n' );
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5,1.51,1.52; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
