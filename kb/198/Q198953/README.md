---
layout: page
title: "Q198953: HOWTO: Expand An Array Pointer in the Visual C++ Debugger"
permalink: /kb/198/Q198953/
---

## Q198953: HOWTO: Expand An Array Pointer in the Visual C++ Debugger

	Article: Q198953
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Starting with Visual C++ version 6.0, it is now possible to expand an array
	pointer to view all array elements in the Visual C++ Debugger Watch window. This
	feature is not documented.
	
	In the Watch window, type an expression that evaluates to a pointer followed by a
	comma and the number of elements in the array.
	
	MORE INFORMATION
	================
	
	1. Build the debug version of the following code as a console application.
	
	     // Filename main.cpp
	     // No compile option needed
	
	     #include <iostream.h>
	
	     void main(void)
	     {
	       int * p;
	       char* ptr = "Hello World";
	       p = new int [10];
	
	       for(int i=0; i<=9; i++){*(p+i) = i+1;}
	       cout << i <<endl;
	     }
	
	2. Step into the code with the debugger and stop at the last line of code.
	
	3. In the Watch or Quickwatch window, add the variable "p" (without the
	  quotation marks) or "ptr" (without the quotation marks). You will see a '+'
	  symbol next to the variable.
	
	4. Click the '+' symbol to expand the variable. You will see only the first
	  element of the array to which it points.
	
	5. Now, type "p,10" (without the quotation marks) or "ptr,11" (without the
	  quotation marks) in the Watch window.
	
	6. Click the '+' symbol to expand the variable. Now you see all elements of the
	  array to which it points.
	
	If you want to see a specific range of elements, then enter the address of the
	first element to specify the starting index, followed by the format specifier as
	described in the preceding steps. For example, "(p+3),8" (without the quotation
	marks) shows elements p[3..10], and "(ptr+3),10" (without the quotation marks)
	shows elements ptr[3..12]. Unfortunately, the starting index in the Watch window
	will be [0], which actually corresponds to index 3 in this example. You have to
	remember that the offset 3 has to be added to each displayed index to get the
	actual index of the array element.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbDebug kbide kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
