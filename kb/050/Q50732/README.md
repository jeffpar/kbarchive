---
layout: page
title: "Q50732: INFO: Pointer to Undeclared Structure Does Not Generate Error"
permalink: /kb/050/Q50732/
---

## Q50732: INFO: Pointer to Undeclared Structure Does Not Generate Error

{% raw %}

	Article: Q50732
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Code that declares a pointer to a nonexistent structure compiles without warning
	or error. This is correct behavior.
	
	Note that dereferencing a pointer to an undefined structure, or attempting to use
	a field, will produce errors. In general, you are allowed to make a reference to
	an undefined struct as long as the operation doesn't need to know the size of
	that struct or the names of its fields. This method of declaration is commonly
	used in linked lists.
	
	Sample Code
	-----------
	
	     void main (void)
	     {
	        struct non_existent *ptr;         // legal
	        struct x
	        {
	         struct x *previous;      // legal, note that struct x is
	         struct x *next;          // not yet defined
	        };
	     }
	
	Additional query words: 8.00
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
