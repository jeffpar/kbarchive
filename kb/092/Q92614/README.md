---
layout: page
title: "Q92614: INFO: Initializing const Member Data"
permalink: /kb/092/Q92614/
---

## Q92614: INFO: Initializing const Member Data

	Article: Q92614
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 2.0, 2.1, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	The sample source code below demonstrates how to initialize a const member
	of a class. Note that the code uses a member initialization list because a
	const member may not appear on the left side of the assignment operator.
	The value must be set when the object is constructed because the value of a
	const member can be set only at initialization.
	
	If an application attempts to initialize a const member with the assignment
	operator, the compiler generates the following error messages:
	
	  error C2758: 'a' : must be initialized in constructor base/member initializer
	  list
	
	  error C2166: lvalue specifies const object
	
	Using Visual C++ 32-bit Edition, version 4.0, this error is reported as:
	
	  error C2166: l-value specifies const object
	
	The member initialization list is the preferred method to initialize the
	members of a class. For example, when initializing an object of a user-
	defined type, it is more efficient to use a member initialization list to
	initialize a data member than to perform an assignment in the constructor.
	The latter approach requires two calls: one to construct the data member
	and another to the operator=() function to assign a value to the member.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed: none
	   */ 
	
	  #include <iostream.h>
	
	  class demo
	  {
	     const int a;
	
	  public:
	     demo(int val = 0) : a(val) {}
	     int get_a(void) { return a; }
	  };
	
	  void main()
	  {
	     demo first;
	     demo second(5);
	
	     cout << "First = " << first.get_a() << endl;
	
	     cout << "Second = " << second.get_a() << endl;
	  }
	
	Output
	------
	
	First = 0
	Second = 5
	
	SUMMARY
	=======
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangCPP kbVC100 kbVC150 kbVC151 kbVC200 kbVC210 kbVC400 kbVC500 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC151 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :1.0,1.5,1.51,2.0,2.1,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
