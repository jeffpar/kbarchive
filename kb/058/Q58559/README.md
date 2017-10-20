---
layout: page
title: "Q58559: PRB: Executable Code Between Declarations Causes C2143 or C214"
permalink: /kb/058/Q58559/
---

## Q58559: PRB: Executable Code Between Declarations Causes C2143 or C214

{% raw %}

	Article: Q58559
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC100 kbVC150 kbVC151 kbVC152fix kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C for OS/2 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft C, compiler errors C2143 and C2144 are defined as follows:
	
	  C2143: syntax error : missing 'token1' before 'token2'
	
	  C2144: syntax error : missing 'token' before type 'type'
	
	CAUSE
	=====
	
	You may receive this error message if your program places executable code before
	a data declaration, an acceptable practice in Kernighan-and-Ritchie C. This
	practice has been outlawed in later versions of the ANSI drafts.
	
	This error message will normally occur if a required closing curly brace (}),
	right parenthesis [)], or semicolon (;) is missing.
	
	RESOLUTION
	==========
	
	Placing all data declarations before all executable code corrects the
	programming error.
	
	  void main( )
	  {
	     int i;
	     printf( "Hello world!\n" );
	     {
	        int j;
	     }
	  }
	
	NOTE: In the C++ language, it is legal to declare data within a block of
	executable code.
	
	MORE INFORMATION
	================
	
	The following code demonstrates this error message:
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  void main(void)
	  {
	     int i;
	     printf("Hello World\n");
	     int j;
	  }
	
	Compiling this code with a version of Microsoft C prior to C/C++ 7.0 will return
	the following error message:
	
	  C2144: syntax error : missing ';' before type 'int'
	
	C/C++ version 7.0 and Visual C/C++ issue the following error:
	
	  C2143: syntax error : missing ';' before 'type'
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbVC100 kbVC150 kbVC151 kbVC152fix kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC151 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
