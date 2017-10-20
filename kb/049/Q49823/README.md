---
layout: page
title: "Q49823: PRB: Inconsistent Use of fscanf %x.xf Formatting"
permalink: /kb/049/Q49823/
---

## Q49823: PRB: Inconsistent Use of fscanf %x.xf Formatting

{% raw %}

	Article: Q49823
	Product(s): Microsoft C Compiler
	Version(s): 5.1 6.0 6.0a 6.0ax 7.0 1.0 1.5 2
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft C run-time library function fscanf() with the format
	specifier %x.xf to read floating-point values usually produces undesirable
	results. This happens especially if the file contains floating point information
	that was not recorded using the same %x.x specifier that is being used to read.
	
	The sample code below can be used as an example of expected behavior. The first
	output line shows the input values, the second shows what an incorrect fscanf()
	format specifier reads, and the third is the correct data read by fscanf(). The
	output from the program is as follows:
	
	  Values: 3.104000, 34.235340, 834.343201, 5968.394043
	  After Read: 3.100000, 419561472.000000, 0.000003, 4.227506
	  After Rewind: 3.104000, 34.235340, 834.343201, 5968.394043
	
	The output of the second line (After Read) may differ between compilers and may
	depend upon the compiler options, but is still not the expected values.
	
	CAUSE
	=====
	
	This is not a problem with the fscanf() function; it is due to using a different
	floating point specifier to read the value than was used to write the value.
	
	In the sample code below, the first value is read correctly. After the first
	value is read, the file pointer points to the second 0 (zero) in 3.104000. When
	the second value is read, the information in the file does not conform to
	floating-point format, and zeros are read after that. The compiler has no way of
	knowing how far to move the file pointer to get to the next value.
	
	RESOLUTION
	==========
	
	Read floating point values with the same specifier that was used to write them.
	Once a value has been read correctly, it may be truncated or formatted as
	desired.
	
	MORE INFORMATION
	================
	
	For more information on the scanf() family of functions, please refer to the
	Visual C++ Books Online.
	
	The following sample code demonstrates the importance of reading floating point
	values with the same type specifier that was used in writing them. Refer to the
	SUMMARY above for the expected program output.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include<stdio.h>
	
	  void main( void )
	  {
	     float a = 3.104f, b = 34.23534f, c = 834.3432f, d = 5968.394f;
	     float ar, br, cr, dr;
	     FILE *stream;
	
	     if( (stream = fopen( "file.tst", "a" )) == NULL )
	        printf( "ERROR:  Unable to open output file" );
	     else
	        fprintf( stream, "%f,%f,%f,%f\n", a, b, c, d );
	     fclose( stream );
	     if( (stream = fopen( "file.tst", "r" )) == NULL )
	        printf( "ERROR:  Unable to open input file" );
	     else
	                      /* NOTE:  %x.x format specifier */ 
	     {                /*  |  */ 
	        printf("Values: %f, %f, %f, %f\n", a, b, c, d );
	        fscanf( stream, "%4f,%4f,%4f,%4f", &ar, &br, &cr, &dr );
	        printf("After Read: %f, %f, %f, %f\n", ar, br, cr, dr );
	        rewind(stream);
	        fscanf( stream, "%f,%f,%f,%f", &ar, &br, &cr, &dr );
	        printf("After Rewind: %f, %f, %f, %f\n", ar, br, cr, dr );
	     }
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 5.1 6.0 6.0a 6.0ax 7.0 1.0 1.5 2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
