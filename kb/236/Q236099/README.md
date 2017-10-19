---
layout: page
title: "Q236099: FIX: C1001: Internal Compiler Error in Template.cpp, Line 6514"
permalink: /kb/236/Q236099/
---

## Q236099: FIX: C1001: Internal Compiler Error in Template.cpp, Line 6514

	Article: Q236099
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling code that uses templates and contains a mismatched number of
	parameters between the declaration and implementation of the template classes,
	the compiler may give the following error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR (compiler file '.\template.cpp',
	  line 6514)
	
	The line number is 6529 if you have installed Visual Studio 6.0 Service Pack 3
	(SP3).
	
	CAUSE
	=====
	
	The compiler failed to correctly parse the code and was unable to generate a
	syntax error message.
	
	RESOLUTION
	==========
	
	Check the number of parameters in the declaration and implementation of the
	template classes. Correct the code so that the parameters match.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the bug:
	
	  template <class T, bool bArray = false>
	  class Test
	  {
	  public:
	     Test(T *p);
	     T* _p;
	  };
	
	  template <class T>                // Comment this line and uncomment 
	                                    // the next line for fix.
	  //template <class T, bool bArray>
	
	  inline Test<T>::Test<T>(T *p)
	  {
	     _p = p;
	  }
	
	  void main()
	  {
	     Test<int, false> pInt = new int;
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbVC600bug kbDSupport kbGrpDSVCCompiler kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
