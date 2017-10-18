---
layout: page
title: "Q104672: INFO: Compiler Errors When Compiling a C++ File as a C File"
permalink: kb/104/Q104672/
---

## Q104672: INFO: Compiler Errors When Compiling a C++ File as a C File

	Article: Q104672
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kb
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following error is typically the first of many returned by the Microsoft
	C/C++ Compiler when attempting to compile a file that includes a C++ header file
	such as IOSTREAM.H in a C program:
	
	  ios.h(33) : error C2282: 'class' is followed by 'streambuf'. (missing ','?)
	
	In more recent versions of the compiler, the system header files use #ifdef
	__cplusplus to prevent the contents from being parsed when compiled as "C"
	code.
	
	There may also be multiple C2065, C2297, C2054, C2085, C2143, and C2144 errors,
	and eventually a C1003 error indicating that the error count reached 100.
	
	MORE INFORMATION
	================
	
	The C/C++ compiler invokes either the C compiler or the C++ compiler according
	to the file's extension. If it ends in .C, the C compiler is invoked; if it ends
	in .CPP or .CXX, the C++ compiler is invoked.
	
	To invoke the C++ compiler on a file that ends in .C or some other extension, use
	the /Tp switch to explicitly specify a C++ source file.
	
	The sample code below produces the errors
	
	  error C2065: 'cout' : undeclared identifier
	  error C2297: '<<' : illegal, right operand has type 'char [12]'
	
	if compiled with:
	
	  cl hello.c
	
	The code compiles fine if compiled with:
	
	  cl hello.cpp
	
	  -or-
	
	  cl /Tp hello.c
	
	Sample Code
	-----------
	
	  /* Compile options needed:  None
	  */ 
	
	  #include <iostream.h>
	
	  void main (void)
	  {
	       cout << "Hello World";
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
