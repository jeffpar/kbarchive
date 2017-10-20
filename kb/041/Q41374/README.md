---
layout: page
title: "Q41374: Assignment of Void Pointer Does Not Give Warning Message"
permalink: /kb/041/Q41374/
---

## Q41374: Assignment of Void Pointer Does Not Give Warning Message

{% raw %}

	Article: Q41374
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,6.0,6.0a,6.0ax
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C for MS-DOS, versions 6.0, 6.0a, 6.0ax 
	   - Microsoft C for OS/2, versions 6.0, 6.0a 
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Sample Code below shows an inconsistency with the way that the Microsoft
	compilers listed above deal with pointer checking. The ANSI standard is unclear
	about whether an assignment to a void pointer should be checked to see if it is
	being assigned a nonpointer variable. The code below shows that character
	pointers are checked while void pointers are not; the code will generate the
	following warnings:
	
	16-bit compilers
	----------------
	
	The compiler generates the following warning for the void pointer in the sample
	code as well as the character pointer:
	
	     C4047: '=' different levels of indirection
	
	32-bit compilers
	----------------
	
	The compiler generates the following warming with the sample code:
	
	     C4047: "=": 'void *' differs in levels of indirection from 'int'
	
	7.0 and later
	-------------
	
	Compiler versions 7.0 and later generate the following error in both cases if the
	program is compiled as a C++ program (.cpp extension).
	
	  error C2446: '=' : no conversion from 'int ' to 'void *'
	
	MORE INFORMATION
	================
	
	Sample Code:
	------------
	
	  /* Compile options needed: none
	  */ 
	
	  int i;         /* i could be float, double, char, long, or unsigned */ 
	  char *p;
	  void *v;
	
	  void main()
	  {
	     p = i;      /* This will give a warning message */ 
	     v = i;
	  }
	
	Additional query words: kbinf 6.00 6.00a 6.00ax 7.00 8.00 8.00c 9.00 9.10 1.00 1.50 2.00 2.10
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,2.0,2.1,6.0,6.0a,6.0ax
	
	=============================================================================
	

{% endraw %}
