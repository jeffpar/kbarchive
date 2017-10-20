---
layout: page
title: "Q42019: PRB: Missing Closing &quot;)&quot; in Macro Causes Unexpected EOF"
permalink: /kb/042/Q42019/
---

## Q42019: PRB: Missing Closing &quot;)&quot; in Macro Causes Unexpected EOF

{% raw %}

	Article: Q42019
	Product(s): Microsoft C Compiler
	Version(s): 6.0 6.0a 6.0ax 7.0 1.0 1.5 2.0 2
	Operating System(s): 
	Keyword(s): kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler generates one of the following errors:
	
	  C1057 unexpected EOF in macro expansion ( missing ')'? )
	
	  -or-
	
	  fatal error C1057: unexpected end of file in macro expansion
	
	CAUSE
	=====
	
	This behavior is by design. It informs the user of a syntax error.
	
	RESOLUTION
	==========
	
	Examine the code line indicated by the compiler error. Ensure that the macro is
	used properly with both opening and closing parentheses and all parameters
	required.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	The following sample code generates the error:
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	  #define add(wx, wy)  (wx) + (wy)
	
	  void main( )
	  {
	     int i;
	     i = add( 1, 2 );
	     printf( "i = %d\n", i );
	
	     i = add( 1, 2 ;             /* missing ')' */ 
	
	     printf( "Hello World\n" );
	     for( i = 0; i < 10; i++ )
	     {
	        printf( "i + 10 = %d\n", add( i, 10 ) );
	     }
	  }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 6.0 6.0a 6.0ax 7.0 1.0 1.5 2.0 2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
