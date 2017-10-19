---
layout: page
title: "Q51724: DOC: Clarification of the /H Identifier Length Option"
permalink: /kb/051/Q51724/
---

## Q51724: DOC: Clarification of the /H Identifier Length Option

	Article: Q51724
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbdocerr kbVC100 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 4.1, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, the /H option is used to set the maximum length of identifiers.
	Using /H can only decrease the maximum allowable length of identifiers, not
	increase it. An identifier declared with the CDECL type has an underscore (_)
	appended to the front at compile time. This character is part of the identifier
	and takes a significant location. Therefore, the maximum length of an identifier
	declared with the standard C declaration syntax is 32 characters.
	
	In C/C++ version 7.0, the default maximum length is also 32 characters. However,
	in this version, the /H option may be used to increase this to a maximum of 247
	characters.
	
	In Visual C++ 16-bit and Visual C++ 32-bit, there is no default maximum
	length--identifiers can be up to 2047 characters in length. Compiling a program
	with an identifier containing more than 2047 characters will generate fatal
	error C1064, compiler limit : token overflowed internal buffer.
	
	MORE INFORMATION
	================
	
	The following example shows how using /H can actually introduce errors if
	identifier lengths are limited too much:
	
	Sample Code
	-----------
	
	  /* When compiled with /H5, the following code will produce either
	   *    error L2025: _func : symbol defined more than once
	   *      -or-
	   *   error LNK2005: _func already defined in '.obj file'
	   *   fatal error LNK1169: one or more multiply defined symbols found
	   *      -or-
	   *   fatal error LNK1179: invalid or corrupt file: duplicate comdat
	
	  void func1(void);
	  void func2(void);
	
	  void main(void)
	  {
	       func1();
	  }
	
	  void func1(void)
	  {
	  }
	
	  void func2(void)
	  {
	  }
	
	You must also be careful when using the /H option because of predefined compiler
	identifiers. If the maximum identifier length is too small, certain predefined
	identifiers will be unresolved as well as certain library function calls. For
	example, if the printf function is used and the option /H5 is specified at
	compile time, the symbol _prin will be created in order to reference printf, and
	this will not be found in the library.
	
	Additional query words: 8.00 8.00c 9.00 10.00 10.10 kbCompiler kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbDSupport
	
	======================================================================
	Keywords          : kbdocerr kbVC100 kbVC200 kbVC210 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC410 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,4.1,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
