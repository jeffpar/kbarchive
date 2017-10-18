---
layout: page
title: "Q214619: FIX: Type Definition Is Not Inherited in Derived Template Class"
permalink: kb/214/Q214619/
---

## Q214619: FIX: Type Definition Is Not Inherited in Derived Template Class

	Article: Q214619
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCompiler kbCPPonly kbLangCPP kbVC600bug kbDSupport
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile a template class that references a type that is defined in a
	base template class, the following error message might appear:
	
	  error C2653: '<type-name>' : is not a class or namespace name
	
	RESOLUTION
	==========
	
	To work around this problem, reimplement the typedef down the hierarchy of
	derived classes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following sample code reproduces the behavior:
	
	Compile options needed: None.
	
	  template <class T>
	  struct A 
	  {
	      typedef int MyIntA;
	  };
	
	  template <class T>
	  struct B 
	  {
	      typedef A<T> ATempl;
	  };
	
	  template <class T>
	  struct C : public B<T> 
	  {
	      // Uncomment the following line for the workaround.
	      // typedef A<T> ATempl; 
	  };
	
	  template <class T>
	  struct D: public C< A<T> > 
	  {
	      typedef typename ATempl::MyIntA MyIntD; // Does not inherit from 
	                                              // class B.
	  };
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbCompiler kbCPPonly kbLangCPP kbVC600bug kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
