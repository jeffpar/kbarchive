---
layout: page
title: "Q79845: INFO: Old Style (K&amp;R) Declarations Are Not Supported in C++"
permalink: kb/079/Q79845/
---

## Q79845: INFO: Old Style (K&amp;R) Declarations Are Not Supported in C++

	Article: Q79845
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft C/C++ Compiler versions 7.0 and later do not support Old Style
	function declarations in C++ files. Old Style declarations are still supported
	in C files.
	
	Old Style declarations, sometimes called K&R declarations, are declarations
	in which there are no parameters listed inside the parentheses. For example:
	
	  void KRfunc();  /* declaration */ 
	  void KRfunc(a, b)   /* definition */ 
	  int a;
	  char b;
	  { }
	
	C++ requires ANSI-style function prototypes (or declarations), which list the
	type of each parameter accepted by the function, as shown here:
	
	     void ANSIfunc(int a, char b);
	
	This type of declaration is required because in C++ each function has a
	signature. The signature consists of the name of the function and the types of
	the parameters it accepts. The compiler cannot construct the signature of a
	function from the K&R declaration.
	
	REFERENCES
	==========
	
	For more information about parameter lists in function declarations and how
	these are handled by C and C++, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q94579 Creating a Function Pointer to a C++ Member Function
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangCPP kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
