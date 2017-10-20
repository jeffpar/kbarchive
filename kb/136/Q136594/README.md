---
layout: page
title: "Q136594: FIX: Error Using Inline Assembly in a Template Class"
permalink: /kb/136/Q136594/
---

## Q136594: FIX: Error Using Inline Assembly in a Template Class

{% raw %}

	Article: Q136594
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If inline assembly is used in an inline member function defined within a
	templated class, the compiler generates these errors:
	
	If the assembly instruction is of the form _asm { int 3 }:
	
	  
	
	      error C2304: '<template class instance> }' : unexpected tokens
	                                                   following type
	      fatal error C1004: unexpected end of file found.
	
	If the assembly instruction is of the form _asm int 3:
	
	  
	
	      fatal error C1075: end of file found before the left <Unknown>
	                         at <filename line number> was matched.
	
	The type of error depends on whether the assembly instruction is enclosed in
	braces or not.
	
	NOTE: The same error occurs for macros like ASSERT and VERIFY, which expand to an
	_asm {int 3} instruction.
	
	RESOLUTION
	==========
	
	Define the member function outside the templated class using the "inline"
	keyword.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Reproduce Problem
	--------------------------------
	
	  /* Compile options needed: /Ob1 or /Ob2 for the workaround function
	  /*                                      to be inline
	  */ 
	
	  template <class type>
	  class myclass
	  {
	   public:
	     void good_fun();
	     void bad_fun() {
	     _asm {int 3}      // This generates a compiler error.
	     }
	  };
	
	  template <class type>
	  inline void myclass<type>::good_fun() {
	     _asm {int 3}      // This doesn't generate an error.
	  }
	
	  void main(void) {
	     myclass<int> mytest;
	  }
	
	In this code, the good_fun() compiles without any error.
	
	Additional query words: 2.00 2.10 2.20 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,2.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
