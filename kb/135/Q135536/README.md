---
layout: page
title: "Q135536: FIX: C2985 Error When Template Class Has Static Data Member"
permalink: /kb/135/Q135536/
---

## Q135536: FIX: C2985 Error When Template Class Has Static Data Member

	Article: Q135536
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20
	Operating System(s): 
	Keyword(s): kbGenInfo kbLangCPP kbVC kbArtTypeINFkbbuglist kbfixlist
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A template class that contains a static data member of a type that was not
	pre-defined, such as a struct or a class, causes this error:
	
	  
	
	  C2985 <var name> : invalid static data member; template class < template
	  class name> already has a function member of the same name.
	
	This error occurs on the line where the static data member is externally
	declared.
	
	RESOLUTION
	==========
	
	Explicitly initialize the static data member when it is declared. This may
	require adding a constructor to the structure (see the sample code).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	Sample Code
	-----------
	
	  /* Compile options needed: None (compiler defaults will do)
	  */ 
	  struct A {
	  //   A() {}  // ctor added for explicit initialization
	     void some_funct(){}
	  };
	  template <class T> struct B {
	      static A static_member;
	      void func() { static_member.some_funct(); }
	  };
	  // error will occur on the following line:
	
	  template <class T> A B<T>::static_member /* = A() */ ;
	
	  void main()
	  {
	     B<int> b;
	
	     b.func();
	  }
	
	This code, as shown, generates the error. To work around the problem, change the
	line where A() is declared and defined from a comment into an executed line, and
	do the same for the = A() on the line where the error is occurring. This
	explicitly initializes the data member when it is declared.
	
	Additional query words: 2.00 2.10 2.20 9.0 9.00 9.1 9.10 visualc VC cl
	
	======================================================================
	Keywords          : kbGenInfo kbLangCPP kbVC kbArtTypeINF kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbVC220 kbVC200 kbVC210
	Version           : 2.00 2.10 2.20
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
