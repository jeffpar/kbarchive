---
layout: page
title: "Q11558: HOW TO: Convert a String to a Floating-Point Number"
permalink: kb/011/Q11558/
---

## Q11558: HOW TO: Convert a String to a Floating-Point Number

	Article: Q11558
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In an application developed with Microsoft C or C/C++, the sscanf() function is
	a good alternative to the atof() function to convert a string of digits into a
	floating-point number. If a string does not represent a valid number, atof()
	returns the value zero; sscanf() returns more useful error information. The
	application can use the error value from sscanf() with the matherr() function to
	perform error handling. The atof() function does not call matherr() unless an
	actual math exception occurs.
	
	The text below presents two recommended methods to convert a string to a
	floating-point number.
	
	- Validate the string to convert prior to calling the atof() function. Make
	  sure that the string does not contain any non- numeric characters and that
	  the decimal point and sign characters are in the correct locations.
	
	- Use the sscanf() function. It is slower than the atof() function, but it
	  provides better information when an error occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 kbHOWTOmaster 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
