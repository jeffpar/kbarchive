---
layout: page
title: "Q66738: PRB: Unpredictable Results When &gt;1 va_arg() in Parameter List"
permalink: /kb/066/Q66738/
---

## Q66738: PRB: Unpredictable Results When &gt;1 va_arg() in Parameter List

	Article: Q66738
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbDSuppor
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), used with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the va_arg() macro is used more than once in a function parameter list, an
	application produces different results depending on the version of the C
	compiler used to build the application.
	
	CAUSE
	=====
	
	The C standard does not precisely define expression evaluation order. In many
	cases, the compiler implementation determines the order in which an application
	evaluates expressions.
	
	RESOLUTION
	==========
	
	To preserve the original order of the arguments, use the va_arg() macro only
	once in a given expression. One method is to evaluate the expression in a loop
	that processes each variable argument and stops when the last parameter is
	reached.
	
	MORE INFORMATION
	================
	
	The va_arg() macro provides a method to access the arguments of a function when
	the function can accept a variable number of arguments. The macro returns a
	variable parameter by incrementing the value of the arg_ptr that points to the
	list of arguments. The values returned depend on the order in which the
	application evaluates the va_arg() macros.
	
	However, because the C language does not guarantee the order in which most
	expressions are evaluated, application code should not depend on a particular
	evaluation order. The sample code below demonstrates this behavior and the
	unwanted side effects that can occur when code that depends on evaluation order
	is compiled with different versions of the same compiler.
	
	Sample Code #1
	--------------
	
	  #include <stdio.h>
	  #include <stdarg.h>
	
	  void myfunc(int, ...);
	
	  void main(void)
	  {
	     myfunc(1, 2, 3, 4);
	  }
	
	  void myfunc(int first, ...)
	  {
	     va_list arg_ptr;
	     va_start(arg_ptr, first);
	
	     printf("%d %d %d %d\n", first, va_arg(arg_ptr, int),
	                                    va_arg(arg_ptr, int),
	                                    va_arg(arg_ptr, int));
	  }
	
	When this sample is compiled with C version 5.1 or C/C++ version 8.0 for MS- DOS,
	the sample produces the following output:
	
	  1 4 3 2
	
	However, when this sample is compiled with Microsoft C versions 6.0, 6.0a, 6.0ax,
	Microsoft C/C++ version 7.0, or Microsoft Visual C++ 32-bit Edition, versions
	1.0 through 4.2, the sample produces the following output:
	
	  1 4 4 4
	
	In Microsoft Visual C++ versions 5.0 and 6.0, the output is the same as C 5.1 and
	C/C++ 8.0.
	
	In the following sample code, the expressions are evaluated correctly without
	regard to the expression evaluation order.
	
	Sample Code #2
	--------------
	
	  #include <stdio.h>
	  #include <stdarg.h>
	
	  void myfunc(int, ...);
	
	  void main(void)
	  {
	     myfunc(1, 2, 3, 4, -1);     /* -1 is a flag */ 
	  }
	
	  void myfunc(int first, ...)
	  {
	     int temp;
	     va_list arg_ptr;
	     va_start(arg_ptr, first);
	
	     temp = first;
	     while(temp != -1)        /* test for flag (-1) */ 
	     {
	        printf("%d ", temp);
	        temp = va_arg(arg_ptr, int);
	     }
	  }
	
	The output is as follows:
	
	   1 2 3 4
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
