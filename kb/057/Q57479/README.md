---
layout: page
title: "Q57479: INFO: fmod() Results Unexpected Due to Binary Representation"
permalink: /kb/057/Q57479/
---

## Q57479: INFO: fmod() Results Unexpected Due to Binary Representation

{% raw %}

	Article: Q57479
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.
	Operating System(s): 
	Keyword(s): kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	Although there isn't a problem with the fmod() function, the following
	program generates incorrect results when the divisor, f2, cannot be
	precisely represented in binary.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  / 
	
	  #include <stdio.h>
	  #include <math.h>
	
	  void main(void)
	  {
	
	   double f1, f2, f3;
	
	   scanf("%lf %lf", &f1, &f2);
	   f3 = fmod(f1, f2);
	   printf("f3 = %.15lf\n", f3);
	
	  }
	
	To illustrate the problem, enter the values 2.0 and 0.2 for f1 and f2,
	respectively. The fmod() function should return 0 (zero), the
	floating-point remainder of 2.0/0.2. Instead, it returns the value 0.2
	because 0.2 does not translate cleanly into binary representation. A
	value of 0.25 for f2 works correctly because it does translate
	precisely into binary.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
