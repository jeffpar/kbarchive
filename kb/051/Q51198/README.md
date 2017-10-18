---
layout: page
title: "Q51198: INFO: Formal Parameters Default to Type int"
permalink: kb/051/Q51198/
---

## Q51198: INFO: Formal Parameters Default to Type int

	Article: Q51198
	Product(s): Microsoft C Compiler
	Version(s): MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5;WINNT:1.0,2.0,4.0,5.0 ;
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C, a function declaration such as the following does not generate a
	compiler error even though the variable "voida" is not referenced:
	
	     void main (voida)
	     {
	     }
	
	NOTE: This is true only for the C compiler, not the C++ compiler.
	
	MORE INFORMATION
	================
	
	The C and QuickC compilers do not generate an error because the variable "voida"
	defaults to a variable of type int. The compilers understand the above function
	definition because they recognize the "old style" of ANSI C declarations as well
	as the new. In general, the equivalents of the above code are as follows:
	
	  Old Style                           New Style
	  ---------                           ---------
	
	  void function (voida)               void function (int voida)
	  int voida; <- default if missing    {
	  {                                   }
	  }
	
	
	Please refer to "The C Programming Language" by Brian Kernighan and Dennis
	Ritchie for a discussion on differences between old and new style with regards
	to function definition.
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : MS- DOS:6.0,6.00a,6.00ax,7.0;OS/2:6.0,6.00a;WIN3X:1.0,1.5;WINNT:1.0,2.0,4.0,5.0 ;
	
	=============================================================================
	
