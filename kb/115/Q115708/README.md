---
layout: page
title: "Q115708: FIX: C++ Compiler Treats &amp;array&#91;&#93;&#91;&#93; as 2-D Array of References"
permalink: /kb/115/Q115708/
---

## Q115708: FIX: C++ Compiler Treats &amp;array&#91;&#93;&#91;&#93; as 2-D Array of References

{% raw %}

	Article: Q115708
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to call a class constructor using a reference to a two dimensional
	array of objects will cause the compiler to incorrectly treat the array as a two
	dimensional array of references. In the sample below, the following errors will
	be incorrectly generated:
	
	  test.cpp(6) : error C2234: arrays of references are illegal
	  test.cpp(6) : error C2511: '__ctor' : overloaded member function not found in
	  'X'
	
	CAUSE
	=====
	
	The compiler is interpreting
	
	     int (&iref)[10][10];
	
	as if it was written:
	
	     int & iref[10][10];
	
	It is not legal in C++ to use a pointer to a reference, so an array of references
	is also not legal.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the C/C++ compiler for MS-DOS,
	versions 7.0, 8.0, and 8.0c and the 32-bit C/C++ compiler, version 8.0. This
	problem was corrected in compiler version 9.0, included with Visual C++ version
	2.0.
	
	MORE INFORMATION
	================
	
	The following code can be used to demonstrate this problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /c
	  */ 
	
	  class X
	  {
	      int m_arr[10][10];
	  public:
	      X() {}
	      X( int (&iref)[10][10] ) {}
	  };
	
	  void main()
	  {
	  }
	
	Additional query words: 7.00 8.00 8.00c 1.00 1.50
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
