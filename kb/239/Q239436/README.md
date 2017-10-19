---
layout: page
title: "Q239436: PRB: LNK2001 on Template Member Functions"
permalink: /kb/239/Q239436/
---

## Q239436: PRB: LNK2001 on Template Member Functions

	Article: Q239436
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbLangCPP kbLinker kbVC kbVC500 kbVC600 kbDSupport
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You receive a LNK2001 error message on template member functions unless the
	member functions are also defined in the same translation unit.
	
	CAUSE
	=====
	
	The compiler does not support the use of the "export" keyword as specified in
	the C++ standard below:
	
	  
	
	  Section 14:
	
	  Para# 7: Declaring a class template exported is equivalent to declaring all of
	  its non-inline function members, static data members, member classes, member
	  class templates and non-inline function member templates which are defined in
	  that translation unit exported.
	
	  Para# 8: Templates defined in an unnamed namespace shall not be exported. A
	  template shall be exported only once in a program. An implementation is not
	  required to diagnose a violation of this rule. A non-exported template that
	  is neither explicitly specialized nor explicitly instantiated must be defined
	  in every translation unit in which it is implicitly instantiated (temp.inst)
	  or explicitly instantiated (temp.explicit); no diagnostic is required. An
	  exported template need only be declared (and not necessarily defined) in a
	  translation unit in which it is instantiated. A template function declared
	  both exported and inline is just inline and not exported.
	
	RESOLUTION
	==========
	
	You have the following two options:
	
	- Keep the template declaration and definition together in one translation
	  unit.
	
	- If you know in advance how your template class will be used in your
	  application, you can perform explicit instantiation for the template class.
	
	  For example, for class MyStack declared in Myprog.h
	
	  template <class T> MyStack;
	
	  and implemented in Myprog.cpp, the following explicitly instantiates MyStack
	  for int variables:
	
	  template class MyStack<int>;
	
	MORE INFORMATION
	================
	
	Explicit instantiation allows you to create an instantiation of a template class
	or function without actually using it in your code. The idea is to explicitly
	instantiate all possible types for the template class in the implementation
	file. Thus, when the .cpp file is compiled, the code is generated for these
	instantiations, alleviating the LNK2001 error.
	
	Please refer to the Visual C++ Help for more information regarding explicit
	instantiation.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q128789 BUG: LNK2001 on Member Function When Use Nested Class Template
	
	Additional query words:
	
	======================================================================
	Keywords          : kbLangCPP kbLinker kbVC kbVC500 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
