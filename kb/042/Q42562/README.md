---
layout: page
title: "Q42562: PRB: C4057 or C4133 Occur Unexpectedly"
permalink: /kb/042/Q42562/
---

## Q42562: PRB: C4057 or C4133 Occur Unexpectedly

	Article: Q42562
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft C/C++ compiler (CL.EXE) versions 7.0, 8.0, and 8.0c for
	MS-DOS, the following warning is generated:
	
	  C4057: 'argument': indirection to slightly different base types
	
	Using the Microsoft C/C++ compiler (CL.EXE) versions 8.0 and 9.0 (32-bit
	edition), the following warning is generated:
	
	  C4133: 'argument' : incompatible types-from 'short *' to 'int *'
	
	Using the Microsoft C/C++ compiler (CL.EXE) version 10.0 and higher (32-bit
	edition), the following warning is generated:
	
	  C4133: 'function' : incompatible types-from 'short *' to 'int *'
	
	CAUSE
	=====
	
	These warnings are expected behavior. According to ANSI standards, variables of
	type int* are different from variables of type short*. And, although the
	compiler may be able to perform an implicit promotion/demotion among intergral
	types (char, short, int, long, etc.), pointers are not of integral type.
	
	RESOLUTION
	==========
	
	To remove these warnings, use an appropriate cast to instruct the compiler to
	explicitly convert the value from its current data type to the desired.
	
	MORE INFORMATION
	================
	
	The only restriction on the size of the short given by the ANSI standard is that
	it NOT be longer than an integer. Code should be written with this in mind so
	that it will be portable. In many implementations, such as WINDOWS NT, integers
	are not the same as shorts.
	
	Compiling the following program will generate the discussed warning:
	
	Sample Code
	-----------
	
	  /* Compile options needed: /c /W4
	  */ 
	
	  void ShortFunc( short, short * );
	  void Func( int, int * );
	
	  void main( )
	  {
	      short sTest;
	      short *sPoint;
	
	      ShortFunc( sTest, sPoint );
	      Func( sTest, sPoint );  /*  Generates warning  */ 
	      Func( sTest, (int *)sPoint );  /*  Does not generate warning  */ 
	  }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
