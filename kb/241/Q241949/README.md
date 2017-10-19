---
layout: page
title: "Q241949: BUG: C2059 Error on Out-Of-Class Definition of Member Templates"
permalink: /kb/241/Q241949/
---

## Q241949: BUG: C2059 Error on Out-Of-Class Definition of Member Templates

	Article: Q241949
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message appears if you define a member template class or
	function outside the class:
	
	  error C2059: syntax error : ''template<''
	  error C2065: 'T' : undeclared identifier
	
	CAUSE
	=====
	
	The compiler does not support out-of-class definition of member template
	functions and classes. Please refer to the C++ Standard, section 14.5.2, for
	information on member templates.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code example demonstrates the error:
	
	  //test.cpp
	  // compiler option needed: none
	
	  template<class T> class string {
	  public:
	  	template<class T2> int compare(const T2&);
	  	template<class T2> string(const string<T2>& s) {}  // inline definition OK 
	  	//  ...
	  };
	   
	  template <class T> template<class T2> int string<T>::compare(const T2& s)
	  				// error C2059 and C2065 
	  {
	  	//  ...		// Out-of-class-definition		
	  }
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500 kbVC500bug kbVC600 kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
