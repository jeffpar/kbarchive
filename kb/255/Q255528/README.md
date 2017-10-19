---
layout: page
title: "Q255528: BUG:  Violation in Constructor w/ Variable Number of Arguments"
permalink: /kb/255/Q255528/
---

## Q255528: BUG:  Violation in Constructor w/ Variable Number of Arguments

	Article: Q255528
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCPPonly kbSTL kbVS600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An access violation may occur if you have a class derived from ostringstream and
	if this class has a constructor with variable number of arguments.
	
	CAUSE
	=====
	
	Incorrect code is generated when the first argument in the variable argument
	list is a zero.
	
	RESOLUTION
	==========
	
	To workaround the problem, use any one of the following three resolutions:
	
	1. Do not use variable number of arguments for the class constructor.
	
	2. Let the first argument in the constructor's variable argument list be a
	  non-zero value.
	
	3. Use a default class constructor with no arguments and then call another
	  member function with a variable argument list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	  Compile Options : cl /GX test.cpp
	
	  //Test.cpp
	
	  #include <iostream>
	  #include <sstream>
	  using namespace std;
	
	  class Test : public ostringstream
	  {
	  public:
	      Test(bool n,  ...)
	  	{
	  	}
	  };
	
	  void main()
	  {
	          cout << "Calling Test " << endl;
	          Test my_test1(true, 1); //OK.
	
	          cout << "Calling Test again " << endl;
	          Test my_test2(true, 0); //Causes Access Violation  
	
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCPPonly kbSTL kbVS600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	
