---
layout: page
title: "Q167749: FIX: Access to Nested Base Class Member Functions Blocked"
permalink: /kb/167/Q167749/
---

## Q167749: FIX: Access to Nested Base Class Member Functions Blocked

	Article: Q167749
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbLangCPP kbVC kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 10-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a class derived from a nested class calls a base class member function
	explicitly, the compiler generates error C2352 (relative to the sample code
	below):
	
	  main.cpp(13) : error C2352: 'A::B::f' : illegal call of non-static member
	  function
	
	RESOLUTION
	==========
	
	In the definition of the derived class, use typedef to define an alias for the
	base class (see the sample code), and use this alias to qualify calls to the
	base class methods.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile Options: None */ 
	     class A {
	     public:
	       class B {
	       public:
	            void f();
	       };
	     };
	
	     class C : public A::B {
	     public:
	       void g() { A::B::f(); } // <== C2352 at this line
	     };
	
	  Workaround
	  Use a typedef for class A::B as follows:
	
	  class C : public A::B 
	  {
	     public:
	        typedef A::B BaseClass;
	        void f() { BaseClass::f(); } // <== No Error Any More
	  };
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProgramming kbLangCPP kbVC kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
