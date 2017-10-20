---
layout: page
title: "Q57244: INFO: Workaround for Converting a Float/Double to a String"
permalink: /kb/057/Q57244/
---

## Q57244: INFO: Workaround for Converting a Float/Double to a String

{% raw %}

	Article: Q57244
	Product(s): Microsoft C Compiler
	Version(s): MS- DOS:5.1,6.0,6.00a,6.00ax,7.0;WIN3X:1.0,1.5;WINNT:1.0,2.0,2.1,4.0,5.0;
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The gcvt() function returns an exponential number in the string even if the
	number fits in the specified precision when the number is of the form 0.0x,
	where x is any digit(s). Because of this behavior with the gcvt() function,
	floating-point numbers cannot be converted to a string.
	
	MORE INFORMATION
	================
	
	Another function that converts a floating-point number to a string is fcvt().
	Unfortunately, fcvt() does not do all the conversion for you because it leaves
	out both the decimal point and the sign of the number.
	
	You can also use the sprintf() or printf() function with the "%lf" format
	specifier to obtain the correct results. However, if you do not want to use any
	printf() constructs, supporting code is needed to completely convert the
	floating-point number to a string. The following program shows one possible way
	this can be done, and the printf() statements can be replaced by puts()
	statements:
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	  #include <stdlib.h>
	  #include <malloc.h>
	  #include <string.h>
	
	  #define PRECISION   8
	
	  char *double_to_char (double) ;
	
	  char *temp2 ;
	
	  void main (void)
	  {
	     char buf[32];
	
	     temp2 = double_to_char ((double) 0.0004567891) ;
	     printf ("temp = %s\n", temp2) ;
	     free (temp2) ;
	
	     gcvt ((double) 0.0004567891, PRECISION, buf) ;
	     printf ("temp = %s\n", buf) ;
	
	     temp2 = double_to_char ((double) 123.564) ;
	     printf ("temp = %s\n", temp2) ;
	     free (temp2) ;
	
	     temp2 = double_to_char ((double) -43.7864383846738) ;
	     printf ("temp = %s", temp2) ;
	     free (temp2) ;
	  }
	
	  /*  Translates a double to an ASCIIZ string. */ 
	
	  char *double_to_char (double number)
	  {
	     char *buffer,
	          *temp ;
	
	     int  decimal_spot,
	          sign,
	          count,
	          current_location = 0 ;
	
	     temp = fcvt (number, PRECISION, &decimal_spot, &sign) ;
	
	     if (strlen (temp) > PRECISION)
	        buffer = (char *) malloc (strlen (temp) + 3) ;
	     else
	        buffer = (char *) malloc (PRECISION + 3) ;
	
	     if (buffer == NULL)
	     {
	        printf ("Memory allocating attempt has failed in"
	                "'double_to_char'\n") ;
	        exit (-1) ;
	     }
	
	  /* Add negative sign if required. */ 
	
	     if (sign)
	        buffer [current_location++] = '-' ;
	
	  /* Place decimal point in the correct location. */ 
	
	     if (decimal_spot > 0)
	     {
	        strncpy (&buffer [current_location], temp, decimal_spot) ;
	        buffer [decimal_spot + current_location] = '.' ;
	        strcpy (&buffer [decimal_spot + current_location + 1],
	                        &temp [decimal_spot]) ;
	     }
	     else
	     {
	        buffer [current_location] = '.' ;
	        for(count = current_location;
	               count<abs(decimal_spot)+current_location; count++)
	           buffer [count + 1] = '0' ;
	        strcpy (&buffer [count + 1], temp) ;
	     }
	
	     return (buffer) ;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS- DOS:5.1,6.0,6.00a,6.00ax,7.0;WIN3X:1.0,1.5;WINNT:1.0,2.0,2.1,4.0,5.0;
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
