---
layout: page
title: "Q50351: DOC: mktemp() Creates a Maximum of 27 Unique Filenames"
permalink: kb/050/Q50351/
---

## Q50351: DOC: mktemp() Creates a Maximum of 27 Unique Filenames

	Article: Q50351
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbCRT kbVC
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft C for MS-DOS, versions 5.1, 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft C online and printed documentation for the mktemp() function,
	it is not clear exactly how many filenames mktemp() can create. These references
	state the following:
	
	  When creating new names, mktemp uses, in order, "0" and the lowercase letters
	  "a" to "z".
	
	This information is correct. However, the documentation fails to mention that
	these are the only filenames that are created. Any further calls to mktemp()
	after these characters have been used will fail (that is, once "z" has been
	placed in the template). Therefore, the limit on the number of unique filenames
	that can be created by mktemp() is 27.
	
	NOTE: This problem was fixed in the Books On-line of Microsoft Visual C++, 32-bit
	Edition, version 4.0.
	
	Additional query words: 1.00 1.50 2.00 4.00 5.10 6.00 6.00a 6.00ax 7.00
	
	======================================================================
	Keywords          : kbdocfix kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : winnt:
	
	=============================================================================
	
