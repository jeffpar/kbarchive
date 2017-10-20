---
layout: page
title: "Q70142: INFO: Function Pointers to Functions with Different Parameters"
permalink: /kb/070/Q70142/
---

## Q70142: INFO: Function Pointers to Functions with Different Parameters

{% raw %}

	Article: Q70142
	Product(s): Microsoft C Compiler
	Version(s): MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample code below illustrates how to use function pointers to call functions
	that take different parameters than those with which the pointer was declared.
	The function is cast to the type of the function pointer during the first
	assignment, then the function pointer is cast to the type of the function to be
	called. Using typedefs generally makes it easier than casting the pointer
	directly.
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  #include <stdio.h>
	
	  typedef int  (*myintchartype) (char *, char *);
	  typedef void (*myvoidtype) (void);
	  typedef int  (*myintvoidtype) (void);
	
	  int func1(char *, char *);
	  void func2(void);
	
	  void main(void)
	  {
	     myintvoidtype ptr;
	
	     ptr = (myintvoidtype) func1;
	     ((myintchartype) ptr)("one", "two");
	
	     ptr = (myintvoidtype) func2;
	     ((myvoidtype) ptr)();
	  }
	
	  int func1(char *a, char *b)
	  {
	     return printf("func1 took two parameters: %s and %s\n", a, b);
	  }
	
	  void func2(void)
	  {
	     printf("func2 did not take any parameters\n");
	  }
	
	Additional query words: argument list
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : MS-DOS:6.0,6.00a,6.00ax,7.0; OS/2:6.0,6.00a; WINDOWS:1.0,1.5; WINDOWS NT:1.0,2.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
