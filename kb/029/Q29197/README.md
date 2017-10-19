---
layout: page
title: "Q29197: INFO: Pointer Subtraction Yields Signed Value"
permalink: /kb/029/Q29197/
---

## Q29197: INFO: Pointer Subtraction Yields Signed Value

	Article: Q29197
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an application subtracts the value of one pointer from another, it uses
	signed arithmetic. This behavior can be confusing when the pointers differ by
	more than the size of a signed int value because the subtraction returns a
	negative result.
	
	This behavior is expected and is documented in the Microsoft C "Language
	Reference" manual and in the ANSI C Standard.
	
	MORE INFORMATION
	================
	
	Consider the following source code fragment:
	
	  long size;
	  char *ptr1, *ptr2;
	
	  if (size < (ptr2 - ptr1))
	     ...
	
	On a system where the size of an int is 16-bits, if size is 32,000, ptr1 is 0,
	and ptr2 is 33,000, then the result of the subtraction is too large to be
	represented by a signed value and becomes negative. The comparison of size with
	the result fails, even though ptr1 and ptr2 are farther apart than "size"
	elements.
	
	This behavior is documented in the "C Language Reference" manual, on page 129 for
	Microsoft C/C++ version 7.0 and in the "Subtraction (-)" subsection of the "C
	Additive Operators" section for Microsoft Visual C++, as follows:
	
	  When two pointers are subtracted, the difference is converted to a signed
	  integral value by dividing the difference by the size of a value of the type
	  that the pointers address. The size of the integral value is defined by the
	  type ptrdiff_t in the standard include file STDDEF.H.
	
	This is also documented on page 3.3.6 of the November 9, 1987, edition of the
	Draft Proposed ANSI C Standard, as follows:
	
	  The size of the result is implementation-defined, and its type (a signed
	  integral type) is ptrdiff_t defined in the <stddef.h> header. As with
	  any other arithmetic overflow, if the result does not fit in the space
	  provided, the behavior is undefined.
	
	To treat a pointer as an unsigned quantity, cast it to an unsigned, as follows:
	
	  long size;
	  char *ptr1, *ptr2;
	
	  if (size < ((unsigned) ptr2 - (unsigned) ptr1))
	     ...
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC410 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,4.1,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
