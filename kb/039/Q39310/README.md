---
layout: page
title: "Q39310: INFO: Selective Initialization of Array Elements Not Allowed"
permalink: /kb/039/Q39310/
---

## Q39310: INFO: Selective Initialization of Array Elements Not Allowed

	Article: Q39310
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 12-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ANSI C standard does not allow selective initialization of array elements
	with the following syntax:
	
	     char MyArray[10] = {'a','b',,'d',,'f','g',,'i','j'};
	
	This attempt at selective initialization is not correct and will generate a
	"Syntax Error" at compile time as follows.
	
	  error C2059: syntax error : ','
	
	The following two declarations will compile and are valid declarations for
	Microsoft C version 5.1 and later:
	
	1. The initialization of all the elements of the array is as follows:
	
	        char MyArray[10] = {'a','b','c','d','e','f','g','h','i','j'};
	
	2. The initialization of the first characters in the array is as follows:
	
	        char MyArray[10] = {'a','b','c','d','e'};
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
