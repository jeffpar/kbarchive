---
layout: page
title: "Q29557: printf() Default Floating-Point Precision Is 6 Decimals"
permalink: /kb/029/Q29557/
---

## Q29557: printf() Default Floating-Point Precision Is 6 Decimals

{% raw %}

	Article: Q29557
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.0, 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.50 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	By default, the printf() function displays a floating-point number to six digits
	of precision. This default also holds for double precision numbers.
	
	To display additional digits of precision, specify a value for the precision
	field in the printf() format specification, as follows:
	
	  %[<flags>][<width>][.<precision>]<type>
	
	MORE INFORMATION
	================
	
	The code example below demonstrates documented printf() behavior that may appear
	to be a problem with the function.
	
	     #include <stdio.h>
	
	     main()
	     {
	        double d = 1.2345678912;
	
	        printf("%e\n", d);
	        printf("%le\n", d);
	     }
	
	This code example produces the following output:
	
	  1.234568e+000
	  1.234568e+000
	
	To display the value d to its full precision, modify the code example to use the
	following statement:
	
	     printf("%.15le", d);
	
	Additional query words: kbinf 1.00 1.50 2.00 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	

{% endraw %}
