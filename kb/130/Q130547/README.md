---
layout: page
title: "Q130547: FIX: C2300 on Explicit Destructor Call in Class Template"
permalink: /kb/130/Q130547/
---

## Q130547: FIX: C2300 on Explicit Destructor Call in Class Template

	Article: Q130547
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A class template that makes an explicit call to destructor through a pointer of
	the template argument <type_name> generates the following error if the
	class template is instantiated with a class type:
	
	  error C2300: 'MyClass' : class does not have a destructor called '~Item'
	
	RESOLUTION
	==========
	
	You can work around this problem by using the scope resolution operator (::)
	when calling the destructor:
	
	     cpR->Item::~Item();
	
	If the pointer points to an object of a derived class, the objects's virtual
	destructor is not called. In this case, it may be nessary to call another
	virtual function instead, which then calls the virtual destructor.
	
	Also, this syntax can cause problems if the template is instantiated with a
	simple type. See the "References" section of this article for more information.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  // Compile options needed: none
	  template<class Item>
	  class classX {
	     public:
	     void funcX();
	     Item* cpR;
	  };
	
	  template<class Item>
	  void classX<Item>::funcX() {
	     cpR->~Item();
	  };
	
	  class MyClass {
	     public:
	     ~MyClass() {};
	  };
	
	REFERENCES
	==========
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q130546 BUG: C2227 & C2653 on Explicit Destructor Call in Template
	
	Additional query words: 2.00 2.10 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
