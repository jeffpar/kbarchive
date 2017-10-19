---
layout: page
title: "Q65304: INFO: C2059, C2065, C2143 May Be Caused by Not Including Header"
permalink: /kb/065/Q65304/
---

## Q65304: INFO: C2059, C2065, C2143 May Be Caused by Not Including Header

	Article: Q65304
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600
	Last Modified: 29-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft C/C++, when the compiler encounters a previously undeclared token
	used in a context that assumes its existence, the compiler will generate an
	error. For example, if a function has been prototyped to take a pointer of type
	FILE as a parameter and if STDIO.H has not been included previously, the
	compiler issues one or more errors (see the Sample Code below).
	
	In these cases, there are several possible compiler errors that may be generated,
	the most likely of which being:
	
	  C2059: syntax error : 'token'
	
	  -or-
	
	  C2065: 'identifier' : undeclared identifier
	
	  -or-
	
	  C2143: syntax error : missing 'token1' before 'token2'
	
	To eliminate these errors, declare the desired token before using it in a
	statement. In many cases, this means including the appropriate system header
	file, such as STDIO.H.
	
	MORE INFORMATION
	================
	
	When using the above compilers, the following Sample Code fails compilation. To
	fix, uncomment the inclusion of STDIO.H.
	
	Sample Code
	-----------
	
	  /* Compile option needed: none
	   */ 
	
	  //#include <stdio.h>
	
	  void test(FILE *fp);  // This line may cause errors C2143 and C2059.
	
	  void main ()
	  {
	    FILE *fp;          // This line may cause the C2065 error.
	
	    test(fp);
	
	  }
	
	  void test(FILE *vp)  // This line may cause errors C2143 and C2059.
	  {
	  }
	
	Additional query words: 8.00 8.00c 9.00
	
	======================================================================
	Keywords          : kbcode kbCompiler kbVC100 kbVC150 kbVC200 kbVC210 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,2.1,4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
