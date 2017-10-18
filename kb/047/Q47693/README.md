---
layout: page
title: "Q47693: INFO: Initializing Unions Initializes First Member of the Union"
permalink: kb/047/Q47693/
---

## Q47693: INFO: Initializing Unions Initializes First Member of the Union

	Article: Q47693
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When initializing a union, the initialization value is applied to the first
	member of the union even if the type of the value matches a subsequent member.
	As stated in the ANSI Standard, Section 3.5.7:
	
	     A brace-enclosed initializer for a union object initializes the
	     member that appears first in the declaration list of the union
	     type.
	
	Because you cannot initialize the value of any member of a union other than the
	first one, you must assign their values in a separate statement. Initializing a
	union with a value intended for a subsequent member causes that value to be
	converted to the type of the first member.
	
	MORE INFORMATION
	================
	
	The following example demonstrates the issue:
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  union { int   a;
	          float b;
	        } test = {3.6};    /* This is intended to initialize 'b'      */ 
	                           /* however, the value will be converted    */ 
	                           /* (first to a long and then to an int)    */ 
	                           /* in order to initialize 'a'.             */ 
	
	  void main (void)
	  {
	     float dummy = 0.0;            /* This causes the floating point  */ 
	                                   /* math package to be initialized.  */ 
	                                   /* Not necessary with VC++ for     */ 
	                                   /* Windows NT.                      */ 
	
	     printf ("test.a = %d,  test.b = %f\n", test.a, test.b);
	  }
	
	The output from the example, though not what is intended, is as follows:
	
	  test.a = 3, test.b = 0.00000
	
	To associate a value with "b", you can reverse the order of the members, as in
	the following:
	
	  union {
	          float b;
	          int a;
	        } test = {3.6};
	
	Or, you can retain the order of the elements and assign the value in a separate
	statement, as in the following:
	
	     test.b = 3.6;
	
	Either of these methods creates the following output:
	
	  test.a = 26214, test.b = 3.600000
	
	Under Windows NT, the output would be as follows:
	
	  test.a = 1080452710, test.b = 3.600000
	
	REFERENCES
	==========
	
	For examples and explanation of possible compiler errors and warnings generated
	when attempting to initialize a non-primary union element, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q39910 PRB: Initializing Non-Primary Union Element Produces Errors
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
