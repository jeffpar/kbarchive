---
layout: page
title: "Q42075: INFO: Next scanf/fscanf Apparently Is Skipped During Run Time"
permalink: kb/042/Q42075/
---

## Q42075: INFO: Next scanf/fscanf Apparently Is Skipped During Run Time

	Article: Q42075
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a function of the scanf() family reads a white-space character--blank ('
	'), tab ('\t'), or newline ('\n')--it does not ordinarily store that character
	into the location provided by the argument pointer. However, as documented in
	the Microsoft C Run-Time Library Reference, if the %c type field format
	specifier is used, the scanf() functions will store a white- space character.
	This behavior can cause unexpected results.
	
	MORE INFORMATION
	================
	
	After the first character is read in the sample code below, the following
	white-space character that is still in the internal buffer for stdin is read and
	stored by the second scanf(). This effectively causes the second prompt to be
	skipped (the message is printed, but the program does not wait to accept a
	character).
	
	To obtain the desired behavior, use the format specifier %1s instead of %c. Don't
	forget to pass scanf() an array of at least two characters, because the scanf()
	family will also store a terminating character ('\0') when "s" is used for the
	type field format.
	
	Alternatively, the fflush() function can be used to flush all characters,
	including white-spaces, out of the specified buffer after each scanf() or
	fscanf(). Use flushall() to flush all file buffers.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main()
	  {
	    char a,b[2];
	    do
	    {
	        printf( "Enter a single character\n" );
	        scanf( "%c", &a );
	
	        printf( "Enter another character\n" );
	        scanf( "%c", b );
	    }
	    while ( a != 'y' );
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
