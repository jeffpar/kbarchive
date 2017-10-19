---
layout: page
title: "Q38291: INFO: Cannot Define Other Preprocessor Directives with #define"
permalink: /kb/038/Q38291/
---

## Q38291: INFO: Cannot Define Other Preprocessor Directives with #define

	Article: Q38291
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft C for MS-DOS 
	   - Microsoft C for OS/2 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft C Compiler does not allow a "#define" statement to define another
	preprocessor directive. Although the preprocessor output option (/P or /E)
	generates the desired expansion, the Microsoft C Compiler generates the
	following error messages when compiling the code below:
	
	  error C2014: preprocessor command must start as first non-whitespace
	  error C2054: expected '(' to follow 'define'
	  error C2061: syntax error : identifier 'MAX'
	
	Microsoft C/C++ for Windows NT, version 8.0, generates the following errors on
	the code shown below:
	
	  error C2014: preprocessor command must start as first nonwhite space
	  error C2065: 'MAX' : undeclared identifier
	  error C2057: expected constant expression
	
	The Microsoft C/C++ compiler included with Visual C++, 32-bit edition, version
	4.0, generates the following errors on the code shown below:
	
	  error C2121: '#' : invalid character : possibly the result of a macro
	  expansion
	  error C2282: 'define' is followed by 'MAX' (missing ','?)
	
	The Microsoft C/C++ compiler included with Visual C++, 32-bit edition, versions
	5.0 and 6.0, generates the following errors on the code shown below:
	
	  error C2121: '#' : invalid character : possibly the result of a macro
	  expansion
	  error C2146: syntax error : missing ';' before identifier 'MAX'
	  error C2501: 'define' : missing storage-class or type specifiers
	  fatal error C1004: unexpected end of file found
	
	Sample Code
	-----------
	
	The following code demonstrates the problem:
	
	  /* Compile options needed: none
	  */ 
	
	  #define A( x )      x##define       MAX     100
	
	  A( # )
	  /*
	      Preprocessor output expands A( # ) to be:
	  #define       MAX     100
	  */ 
	
	  char w[ MAX ];
	  void main(void);
	  void main()
	  {
	     w[ 0 ] = w[ MAX ];
	  }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0,7.0
	Issue type        : kbinfo
	
	=============================================================================
	
