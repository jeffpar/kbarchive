---
layout: page
title: "Q43971: INFO: qsort(): Parameters to the Compare Function"
permalink: /kb/043/Q43971/
---

## Q43971: INFO: qsort(): Parameters to the Compare Function

	Article: Q43971
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.
	Operating System(s): 
	Keyword(s): kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 5.1, 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you define or prototype a comparison function for the run-time library
	function qsort(), the formal parameters should be of type "const void *" because
	qsort() doesn't know the type of data that it is dealing with. Internally,
	qsort() is dealing with void pointers only. The const directive is there because
	the compare routine shouldn't modify the values that are being compared. Inside
	of your compare routine, you must cast the void pointers back to pointers of the
	correct type.
	
	If the declaration of the array to be sorted is:
	
	     ELEMENT_TYPE arr[10] ;
	
	where ELEMENT_TYPE is the type of the array elements, then the function for
	comparison should be prototyped as follows:
	
	     int comp( const void *, const void * ) ;
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : MS-DOS:5.1,6.0,6.00a,6.00ax,7.0; OS/2:5.1,6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
