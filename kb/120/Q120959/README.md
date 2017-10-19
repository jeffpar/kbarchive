---
layout: page
title: "Q120959: DOC: Documentation on fmod() Is Incorrect"
permalink: /kb/120/Q120959/
---

## Q120959: DOC: Documentation on fmod() Is Incorrect

	Article: Q120959
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbCRT kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The fmod(x,y) function returns the floating point remainder of x/y, where x and
	y are floating point numbers. If y is 0.0, fmod should return a NAN(not a
	number) which it does, but the documentation on fmode says incorrectly that it
	should return 0.
	
	The document has been corrected in Visual C++ 2.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	
	  #include <stdio.h>
	  #include <math.h>
	
	  void main(void)
	  {
	   double x=10.0, y=0.0, z;
	
	   z=fmod(x,y);
	   printf("The remainder of %.2f/%.2f is %f\n", x, y, z);
	  }
	
	
	Output
	------
	
	The remainder of 10.00/0.00 is -1.#IND00 // Correct output
	
	Additional query words: 1.00 2.00 double remainder
	
	======================================================================
	Keywords          : kbdocfix kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	
