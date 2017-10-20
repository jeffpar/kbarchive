---
layout: page
title: "Q145889: INFO: Why Floating Point Numbers May Lose Precision"
permalink: /kb/145/Q145889/
---

## Q145889: INFO: Why Floating Point Numbers May Lose Precision

{% raw %}

	Article: Q145889
	Product(s): Microsoft C Compiler
	Version(s): windows:1.00,1.50; winnt:1.00,2.00,4.00
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbGenInfo kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC220 kbVC40
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 2.2, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	The information in this article is included in the documentation starting
	with Visual C++ 5.0. Look there for future revisions.
	
	SUMMARY
	=======
	
	Floating point decimal values generally do not have an exact binary
	representation. This is a side effect of how the CPU represents floating point
	data. For this reason, you may experience some loss of precision, and some
	floating point operations may produce unexpected results.
	
	This behavior is the end result of one of the following:
	
	- The binary representation of the decimal number may not be exact.
	
	-or-
	
	- There is a type mismatch between the numbers used (for example, mixing float
	  and double).
	
	To resolve the behavior, you can either ensure that the value is greater or less
	than what you need, or you can get and use a Binary Coded Decimal (BCD) library
	that will maintain the precision.
	
	MORE INFORMATION
	================
	
	Microsoft uses the Institute of Electrical and Electronics Engineers, Inc.
	(IEEE) floating point format for floating point number representation. For
	information about the actual binary representation of floating point values in a
	CPU and how precision and accuracy are affected in a floating point calculation,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q36068 INFO: IEEE Floating-Point Representation and MS Languages
	
	  Q125056 INFO: Precision and Accuracy in Floating-Point Calculations
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	        Value of c is printed with a decimal point precision of 10 and
	        6 (printf rounded value by default) to show the difference
	     */ 
	
	     #include <stdio.h>
	     #define EPSILON 0.0001   // Define your own tolerance.
	     #define FLOAT_EQ(x,v) (((v - EPSILON) < x) && (x <( v + EPSILON)))
	
	     void main()
	     {
	      float a,b,c
	      a=1.345f;
	      b=1.123f;
	      c=a+b;
	
	     //if (FLOAT_EQ(c, 2.468))        // Remove comment for correct result.
	
	      if (c == 2.468)                 //Comment this line for correct result.
	       printf("They are equal\n");
	      else
	       printf("They are not equal!!The value of c is %13.10f,or %f",c,c);
	     }
	
	The Output Result
	-----------------
	
	They are not equal. The value of c is 2.4679999352 or 2.468000.
	
	For EPSILON, you may use the constants FLT_EPSILON defined for float as
	1.192092896e-07F or DBL_EPSILON defined for double as 2.2204460492503131 e-016.
	You need to include float.h for these constants. These constants are defined as
	the smallest positive number x, such that x+1.0 is not equal to 1.0. Because
	this is a very small number it is advisable that you employ user-defined
	tolerance for calculations involving very large numbers.
	
	REFERENCES
	==========
	
	For information on other predefined constants, please see:
	
	  Microsoft Developer Network: C Floating-Point Constants Microsoft
	
	Additional query words: 1.00 1.50 2.00 4.00 8.00 8.00c 9.00 9.10 10.00 floating point
	
	======================================================================
	Keywords          : kbcode kbCompiler kbGenInfo kbVC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC220 kbVC400 kbVC600 kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152
	Version           : windows:1.00,1.50; winnt:1.00,2.00,4.00
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
