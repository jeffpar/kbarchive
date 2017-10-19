---
layout: page
title: "Q12297: PRB: Rounding Error Casting Double to Long"
permalink: /kb/012/Q12297/
---

## Q12297: PRB: Rounding Error Casting Double to Long

	Article: Q12297
	Product(s): Microsoft Programming Utilities
	Version(s): 5.1,6.0,6.0a,6.0ax; MS-DOS:7.0; WINDOWS:1.0,1.5,1.51,1.52
	Operating System(s): 
	Keyword(s): kb16bitonly kbprb
	Last Modified: 09-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	- Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	- Microsoft C/C++ for MS-DOS, version 7.0 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application produces incorrect results when it casts an expression of type
	double to type long.
	
	CAUSE
	=====
	
	The error is caused by differences in arithmetic precision.
	
	STATUS
	======
	
	The C and C++ standards specify that when an application converts a
	floating-point number to an integer, the number is truncated toward zero. When
	rounding is the preferred behavior, the application can add or subtract 0.5 as
	appropriate so truncation provides the correct result. The text below presents a
	macro for this purpose.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates this behavior when compiled with any
	floating point math option other than /FPa. The application displays -4049 as
	the value for Long2 and Long4, which is incorrect. The application displays the
	correct value -4050 for Long1 and Long3.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: /FPc or /FPc87 or /FPi or /FPi87
	   */ 
	
	  #include "stdio.h"
	  main()
	  {
	     long    val1, val2, val3;
	     double  mul1, mul2;
	     val1 = 45000;
	     mul1 = 0.09;
	     mul2 = (double)val1 * mul1 * -1.00;
	     printf("%7ld Long1 ", (long)mul2);
	     val2 = (long)mul2;
	     printf("%7ld Long2 ", (long)((double)val1 * mul1 * -1.00));
	     printf("%7ld Long3 ", val2);
	     val3 =(long)((double)val1 * mul1 * -1.00);
	     printf("%ld Long4 \n", val3);
	  }
	
	The application produces the incorrect results by converting a 10-byte real value
	to a long; the application produces correct results by converting a 10-byte real
	to an 8-byte real and converting that value to a long.
	
	According to the type conversion rules, the conversion from a 10-byte real to an
	8-byte real rounds the number from -4049.99999999999985 to -4050.0. When the
	application converts this value to a long, the value -4050 results. However,
	when the application directly converts the double value to a long, the
	application truncates toward zero. In this example, -4049.99999999999985 becomes
	-4049.
	
	Many numbers (such as .01) are repeating fractions in the binary numbering system
	which cannot be represented exactly. Any representation of these numbers is
	slightly more or less than the "true" value. When a calculation involves one of
	these values, the representation error propagates and can be magnified. Because
	the error is present only in the least significant part of the number, errors
	occur only when a calculation loses precision in an intermediate value.
	
	The conversions always truncate toward zero. The following macro effectively
	rounds the number by increasing the magnitude of the number by 0.5 then
	converting the number to an integer.
	
	     #define ROUNDL( d ) ((long)((d) + ((d) > 0 ? 0.5 : -0.5)))
	
	The problem does not occur with the Microsoft Visual C++ 32-bit Editions as Win32
	does not support the long double data type for compatibility reasons.
	
	For more information on converting floating-point numbers to integers, see the
	type conversions section of the "C Language Reference" manual.
	
	Additional query words: 1.00 1.50 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kb16bitonly kbprb 
	Technology        : kbVCsearch kbAudDeveloper kbPTProdChange kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbCComp510DOS kbCComp600DOS kbCComp600aDOS kbCComp600axDOS kbCComp510OS2 kbCComp600OS2 kbCComp600aOS2 kbCVC700DOS kbVC151 kbVC152
	Version           : :5.1,6.0,6.0a,6.0ax; MS-DOS:7.0; WINDOWS:1.0,1.5,1.51,1.52
	Issue type        : kbprb
	
	=============================================================================
	
