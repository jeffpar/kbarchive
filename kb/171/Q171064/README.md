---
layout: page
title: "Q171064: FIX: C2512 Instantiating Template in Member Initializer"
permalink: /kb/171/Q171064/
---

## Q171064: FIX: C2512 Instantiating Template in Member Initializer

	Article: Q171064
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0sp1,5.0sp3
	Operating System(s): 
	Keyword(s): kbVC600fix kbVS97sp3bug
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0sp3 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0sp3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a member initializer instantiates a template class that takes a const
	parameter in its constructor, you may receive the following error:
	
	  error C2512: no appropriate default constructor available
	
	RESOLUTION
	==========
	
	Declare a global object of the template class specialization that is used in the
	member initializer. When optimizations are used, this unreferenced global should
	be optimized away.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	This is a regression from Visual C++ 5.0.
	
	Sample Code
	-----------
	
	      // Compile options needed: none
	
	      struct _Tree {
	        _Tree(const int& _Parg) {}
	      };
	
	      template<class _Pr>
	      struct set {
	        _Tree _Tr;
	        set(const _Pr& _Pred = _Pr()) : _Tr(_Pred) {}
	      };
	
	      struct Boo
	      {
	        Boo();
	        set<int>& _xSet;
	      };
	
	      //set<int> x;  // uncomment for workaround
	
	      Boo::Boo()
	       : _xSet(*new set<int>)  //C2512 here
	      {}
	
	Additional query words: visual studio service pack
	
	======================================================================
	Keywords          : kbVC600fix kbVS97sp3bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0sp1,5.0sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
