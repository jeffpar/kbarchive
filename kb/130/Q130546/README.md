---
layout: page
title: "Q130546: FIX: C2227 &amp; C2653 on Explicit Destructor Call in Template"
permalink: /kb/130/Q130546/
---

## Q130546: FIX: C2227 &amp; C2653 on Explicit Destructor Call in Template

	Article: Q130546
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC400fix
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling a program that includes a class template that makes an explicit
	reference to the destructor of the template argument <type_name> generates
	the following errors if the class template is instantiated with a simple type:
	
	  error C2227: left of '->type_name' must point to class/struct/union
	  error C2653: 'type_name' : is not a class name
	
	RESOLUTION
	==========
	
	The Annotated C++ Reference Manual (Jan '94), section 12.4 contains the
	following example:
	
	     int* p;
	     / ...
	     p->int::~int();
	
	But this syntax is not supported by Visual C++, even through a typeddef or
	template type. The only workaround is to remove the explicit call to the
	destructor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.0.
	
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
	        cpR->Item::~Item();
	     };
	
	     template classX<int>;
	
	REFERENCES
	==========
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q129132 BUG: Can't Use Simple Type in Explicit Call of a Destructor
	
	  Q130547 BUG: C2300 on Explicit Destructor Call in Class Template
	
	Additional query words: 9.00 9.10 Intrinsic
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC400fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
