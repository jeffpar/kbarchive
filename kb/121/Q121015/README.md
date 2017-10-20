---
layout: page
title: "Q121015: FIX: Incorrect Template Declaration Causes Compiler Hang"
permalink: /kb/121/Q121015/
---

## Q121015: FIX: Incorrect Template Declaration Causes Compiler Hang

{% raw %}

	Article: Q121015
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbcode kbCompiler kbCPPonly kbVC
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The compiler may hang (stop processing) when compiling a template that includes
	a syntax error in the function declaration as shown in the samples in this
	article.
	
	RESOLUTION
	==========
	
	Press CTRL+BREAK to stop the build process and return the focus to Visual C++.
	Correcting the syntax error will allow the code to compile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	The following samples can be used to reproduce the problem:
	
	Sample Code 1
	-------------
	
	  /* Compile options needed: none
	  */ 
	
	  template <class T>
	
	  T max(T a, T b>    // Note: ">" on right should be a ")"
	      {
	      return a;
	      }
	
	  void main () {}
	
	Sample Code 2
	-------------
	
	  /* Compile options needed: none
	  */ 
	
	  template<class TYPE, class ARG_TYPE>
	  class CList
	  {
	  public:
	      TYPE* GetHead (void);
	  };
	
	  // 
	  //   SYNTAX ERROR: "TYPE(" instead of "TYPE*"
	  // 
	  template<class TYPE, class ARG_TYPE>
	  inline TYPE( CList<TYPE, ARG_TYPE>::GetHead (void)
	  {
	  }
	
	Additional query words: 2.00 9.00 hang lock-up freeze
	
	======================================================================
	Keywords          : kbcode kbCompiler kbCPPonly kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
