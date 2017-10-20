---
layout: page
title: "Q130276: FIX: C2065 Error on Functions Returns Template Class By Value"
permalink: /kb/130/Q130276/
---

## Q130276: FIX: C2065 Error on Functions Returns Template Class By Value

{% raw %}

	Article: Q130276
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Any reference to a template function that returns a template class by value
	generates these errors:
	
	  error C2065: 'function name' : undeclared identifier
	
	  error C2064: term does not evaluate to a function C2065
	
	RESOLUTION
	==========
	
	Modify the function to return a reference to the template class instead of
	returning by value. In the "Sample Code" section of this article, function 'f1'
	returns a template class by value and fails. Function 'f2' returns a template
	class by reference and succeeds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options required: none
	  */ 
	  template<class T>
	  class M {
	  public:
	     T m;
	  };
	
	  template<class T>
	  M<T> f1(const M<T>& x) {return x;}
	
	  template<class T>
	  M<T>& f2(const M<T>& x) {return x;}
	
	  void test(void)
	  {
	     M<int> x;
	     M<int> y = f1(x);  // errors C2065 & C2064
	     M<int> z = f2(x);  // no error
	  }
	
	NOTE: Although this has been fixed under Visual C++ 4.0, the definition of
	function f2:
	
	     template<class T>
	     M<T>& f2(const M<T>& x) {return x;}
	
	causes the following compilation errors:
	
	  error C2446: [*] 'return' : no conversion from 'const class M<int>' to
	  'class M<int> &' (new behavior; please see help)
	
	  error C2561: 'f2' : function must return a value
	
	To avoid this, the return value of that statement should be casted appropriately,
	as follows:
	
	     M<T>& f2(const M<T>& x) {return (M<T>&)x;}
	
	Additional query words: 2.00 2.10 9.00 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
