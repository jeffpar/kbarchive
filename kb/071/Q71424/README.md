---
layout: page
title: "Q71424: INFO: Type float Variable Arguments Are Promoted to Type double"
permalink: /kb/071/Q71424/
---

## Q71424: INFO: Type float Variable Arguments Are Promoted to Type double

	Article: Q71424
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 27-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When passing arguments of type float to a function that accepts a variable
	number of arguments, those floats not explicitly declared in the prototype will
	be promoted to type double.
	
	In this case, the macros va_start and va_arg will use sizeof(float) to determine
	the argument size, when the actual size is sizeof(double). This will give
	unexpected results because the values on the stack will be interpreted
	incorrectly.
	
	MORE INFORMATION
	================
	
	The sample program below returns the sum of a variable list of floating- point
	values. The sum returned is not correct because the variables of type float
	(other than the float that was declared) are promoted to double, but are treated
	as floats by va_start and va_arg.
	
	Although this situation causes unintended results, this is expected behavior that
	conforms to the ANSI standard. Section 3.3.2.2 of the ANSI standard states:
	
	  If the expression that denotes the called function has a type that does not
	  include a prototype, the integral promotions are performed on each argument
	  and arguments that have type float are promoted to double. These are called
	  the default argument promotions. . . . If the expression that denotes the
	  called function has a type that includes a prototype, the arguments are
	  implicitly converted to the types of the corresponding parameters. The
	  ellipsis notation in a function prototype declarator causes argument type
	  conversion to stop after the last declared parameter. The default argument
	  promotions are performed on trailing arguments.
	
	To work around this situation, use doubles instead of floats for values that will
	be passed to functions that accept a variable number of arguments.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  #include <stdarg.h>
	
	  float sum( int num, float first, ... );
	
	  void main()
	  {
	     float total;
	
	     total = sum( 3, 11.11F, 22.22F, 33.33F );
	     printf( "11.11 + 22.22 + 33.33 = %f\n\n", total );
	  }
	
	  float sum( int num, float first, ... )
	  {
	     int count;
	     float sum, temp = first;
	     va_list marker;
	
	     sum = 0.0F;
	     va_start( marker, first );
	     for( count=1; count<num; count++ )
	     {
	         sum += temp;
	         temp = va_arg( marker, float );
	     }
	     sum += temp;
	
	     va_end( marker );
	     return( sum );
	  }
	
	Possible Program Output
	-----------------------
	
	  11.11 + 22.22 + 33.33 = -321864398408282700000000000.000000
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbLangC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
