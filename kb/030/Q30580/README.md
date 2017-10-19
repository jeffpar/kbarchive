---
layout: page
title: "Q30580: HOWTO: Declare an Array of Pointers to Functions"
permalink: /kb/030/Q30580/
---

## Q30580: HOWTO: Declare an Array of Pointers to Functions

	Article: Q30580
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,2.0,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 26-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C for MS-DOS 
	- Microsoft C/C++ for MS-DOS 
	- Microsoft Visual C++, versions 1.0, 1.5, 2.0, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ NET (2002) supported both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	The sample below demonstrates building an array that contains function addresses
	and calling those functions.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: none
	   */ 
	
	  #include <stdio.h>
	
	  void test1();
	  void test2();            /*  Prototypes */ 
	  void test3();
	
	  /* array with three functions */ 
	  void (*functptr[])() = { test1, test2, test3 } ;
	
	  void main()
	  {
	     (*functptr[0])();    /*  Call first function  */ 
	     (*functptr[1])();    /*  Call second function */ 
	     (*functptr[2])();    /*  Call third function  */ 
	  }
	
	  void test1()
	  {
	     printf("hello 0\n");
	  }
	
	  void test2()
	  {
	     printf("hello 1\n");
	  }
	
	  void test3()
	  {
	     printf("hello 2\n");
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangC kbVC kbVC100 kbVC150 kbVC200 kbVC400 kbVC410 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbZNotKeyword8 kbvc150 kbvc100 kbCCompSearch kbZNotKeyword3 kbVC410 kbVC500 kbVC600 kbVC200 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,2.0,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
