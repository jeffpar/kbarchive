---
layout: page
title: "Q136005: HOW TO: Declare Classes That Refer to Each Other"
permalink: /kb/136/Q136005/
---

## Q136005: HOW TO: Declare Classes That Refer to Each Other

	Article: Q136005
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbVC100 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600
	Last Modified: 13-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In C++, you may need to have two classes that contain data members that refer to
	the other class as in this example:
	
	  class B
	  {
	   A * x;
	  };
	
	  class A
	  {
	   B * x;
	  };
	
	This article shows by example how to declare two classes that contain pointers to
	the other class. The two classes (A and B) are derived from other classes (C and
	D) to better demonstrate this issue.
	
	If the two classes are not declared correctly, errors such as the following can
	occur:
	
	  test1.h(8) : error C2501: 'B' : missing decl-specifiers
	  test1.h(8) : error C2143: syntax error : missing ';' before '*'
	  test1.h(8) : error C2501: 'x' : missing decl-specifiers
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  //================================
	  // test1.h
	  //================================
	
	  #ifndef _a_
	  #define _a_
	
	  class B;
	
	  class A : public D
	  {
	   B * x;
	  };
	
	  #endif
	
	  //================================
	  // test2.h
	  //================================
	
	  #ifndef _b_
	  #define _b_
	
	  class A;
	
	  class B : public C
	  {
	   A * y;
	  };
	
	  #endif
	
	  //=================================
	  // test.cpp
	  //=================================
	
	  class C
	  {
	   int q;
	   };
	
	  class D
	  {
	   int p;
	  };
	
	  #include "test1.h"
	  #include "test2.h"
	
	  void main(void)
	  {
	  }
	
	Additional query words: 8.00 8.00c 9.00 9.10
	
	======================================================================
	Keywords          : kbcode kbVC100 kbVC151 kbVC152 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC500 kbVC600 kbHOWTOmaster 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC220 kbVC410 kbVC500 kbVC600 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1,2.2,4.0,4.1,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
