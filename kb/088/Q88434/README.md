---
layout: page
title: "Q88434: INFO: Casting Difference Between C and C++ May Cause C2105"
permalink: /kb/088/Q88434/
---

## Q88434: INFO: Casting Difference Between C and C++ May Cause C2105

	Article: Q88434
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:; WINDOWS:1.0,1.5; winnt:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbLangC kbLangCPP kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 10-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In C++, the result of a cast to a reference type is an lvalue; casts to any
	other type are not lvalues. This is explicitly stated in the "C++ Annotated
	Reference Manual," by Ellis and Stroustrup, on page 69. In a .C file, explicit
	casting to any data type may result in an lvalue only if Microsoft language
	extensions are enabled. The same error is generated in a .C file if Microsoft
	extensions are disabled.
	
	This difference can cause problems in code that compiles without error using a C
	compiler. The sample code below illustrates this with a simple increment of a
	casted result. If it is compiled as a C source file, no errors are generated
	(although using warning level 4 generates "C4213: nonstandard extension used :
	cast on l-value"). However, if it is compiled as a C++ source file, the
	following error is generated:
	
	  error C2105: '++' needs lvalue
	
	Microsoft C/C++ does provide a mechanism for achieving this by implementing a
	cast to a reference that achieves the same effect:
	
	  ++(long*&)p;
	
	Sample Code
	-----------
	
	  /* Compile options needed:  none
	  */ 
	
	  void main()
	  {
	     char *p;
	
	     ((long *)p)++;   // If the file is saved as a .CPP, this 
	  }                   // causes an error.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbLangC kbLangCPP kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : MS-DOS:; WINDOWS:1.0,1.5; winnt:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
