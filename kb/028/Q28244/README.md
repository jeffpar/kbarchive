---
layout: page
title: "Q28244: INFO: qsort() Can Sort Data Structures Based on Multiple Fields"
permalink: kb/028/Q28244/
---

## Q28244: INFO: qsort() Can Sort Data Structures Based on Multiple Fields

	Article: Q28244
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 29-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft C/C++ for MS-DOS 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The qsort() function in the Microsoft C run-time library does not restrict the
	methods an application can use to compare items. When qsort() compares two data
	elements, it calls an application-supplied comparison routine.
	
	To sort an array of structures using more than one field as a key, create a
	comparison function that relates the appropriate fields in each structure and
	returns a comparison value to indicate the result.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCRT kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
