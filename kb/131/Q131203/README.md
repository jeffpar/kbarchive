---
layout: page
title: "Q131203: FIX: Missing '::' in Error C2579 for Ambiguous Overload"
permalink: /kb/131/Q131203/
---

## Q131203: FIX: Missing '::' in Error C2579 for Ambiguous Overload

{% raw %}

	Article: Q131203
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A member function that is an ambiguous overload of another member function of
	the class causes the compiler to generate a correct C2579 error message to
	indicate that the parameter list is not sufficiently different to overload the
	function. This behavior is as it should be.
	
	However, in the error message, the scope resolution operator (::) is missing
	between the class name and the function name used to indicate the problem. For
	example, compiling the sample code shown in article causes the compiler to
	generate this error :
	
	  
	
	  error C2579: 'TestClassTestFunc(int)' : parameter list not
	               sufficiently different from
	               'TestClassTestFunc(const int)'
	
	The error should look like this:
	
	  
	
	  error C2579: 'TestClass::TestFunc(int)' : parameter list not
	               sufficiently different from
	               'TestClass::TestFunc(const int)'
	
	This only happens with Visual C++, 32-bit Edition, versions 2.0 and 2.1. This
	does not happen with Visual C++ version 1.0 for Windows NT nor does it happen
	with the 16-bit versions of Visual C++.
	
	NOTE: In Visual C++ 4.0, the text message of error C2579 has been corrected. It
	now appears as follows:
	
	  
	
	  error C2579: '<function_name>(<parameter_list1>)' :
	     parameter list not sufficiently different from
	     '<function_name>(<parameter_list2>)'
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	  /* Compiler Options: /c
	  */ 
	
	  class TestClass
	  {
	   public:
	       void TestFunc(const int i) {};
	       void TestFunc(int i) {};       // Expecting C2579
	  };
	
	Additional query words: 2.00 2.10 8.0 8.00 8.0c 8.00c 9.0 9.00 9.1 9.10
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
