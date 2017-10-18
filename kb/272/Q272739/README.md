---
layout: page
title: "Q272739: BUG: C2876 with using Declaration on Private Base Class Member"
permalink: kb/272/Q272739/
---

## Q272739: BUG: C2876 with using Declaration on Private Base Class Member

	Article: Q272739
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC600 kbVC600bug kbDSupport
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message when you compile a source file:
	
	  error C2876: 'Base::fun' : not all overloads are accessible
	
	Please refer to the sample code in the "More Information" section for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The compiler does not allow a private base class member name to be injected into
	a derived class by a using declaration even though the derived class is declared
	as a friend class of the base class.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample code demonstrates the bug:
	
	  //test.cpp
	  // compiler option needed: none
	  class Derived;
	  class Base
	  {
	  friend class Derived;
	  void fun(void);
	  };
	
	  class Derived : public Base
	  {
	  protected:
	  using Base::fun;
	  };
	
	Additional query words: C2876
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC600 kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
