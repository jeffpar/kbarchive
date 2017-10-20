---
layout: page
title: "Q41212: INFO: Must Use Prototype Before Intrinsic or Function Pragmas"
permalink: /kb/041/Q41212/
---

## Q41212: INFO: Must Use Prototype Before Intrinsic or Function Pragmas

{% raw %}

	Article: Q41212
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5,1.51,1.52; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC6
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are a number of C Run-time routines that have both a function version and
	an intrinsic version. If the following statement is used in an application to
	force use of the function version:
	
	  #pragma function( a_CFunction )
	
	where a_CFunction is a C Run-time library routine, the compiler generates the
	following error:
	
	  error C2164: 'a_CFunction': intrinsic was not declared.
	
	if the /Oi option is not used. The same is true for the following statement to
	force use of the intrinsic:
	
	  #pragma intrinsic( a_CFunction )
	
	MORE INFORMATION
	================
	
	When you don't use the /Oi or /Ox option, you need to declare a function
	prototype before you can use the function or intrinsic pragmas. For example, to
	properly use the memcpy function in the Sample Code below, either STRING.H or
	MEMORY.H must be included. Consult the C Run-time documentation for the
	appropriate header (.H) file to include.
	
	For more information about #pragma intrinsic or C Run-time functions that have
	intrinsic versions, consult the documentation provided with your Microsoft
	compiler or development environment.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #pragma function( memcpy )
	
	  char s1[] = "string";
	  char s2[10];
	
	  void main( )
	  {
	     memcpy( s2, s1, 7 );
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; WINDOWS:1.0,1.5,1.51,1.52; WINDOWS NT:1.0,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
