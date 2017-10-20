---
layout: page
title: "Q122267: BUG: C2511 Error on Member Function with Unknown Parameter"
permalink: /kb/122/Q122267/
---

## Q122267: BUG: C2511 Error on Member Function with Unknown Parameter

{% raw %}

	Article: Q122267
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,2.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbfixlist
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Class functions defined using an unknown data type as a parameter will cause the
	C/C++ compiler to generate the following incorrect error:
	
	  error C2511: 'Reg' : overloaded member function not found in 'Test'
	
	Reg is the function being defined with the unknown data type, and Test is the
	name of the class.
	
	RESOLUTION
	==========
	
	There are two possible workarounds to this problem. Using the Sample Code below,
	you would:
	
	- Make the function inline by placing the executable code in the class
	  definition, as in this example:
	
	        class MyClass
	        {
	           int Reg(const int *a, struct T *t) {return 0;};
	        };
	
	-or-
	
	- Define the unknown data type before the class definition, as in this
	  example:
	
	        struct T
	        {
	           int q;
	        };
	
	        class Test
	        {
	           int Reg(const int *a, struct T *t);
	        };
	
	        int Test::Reg(const int *a, struct T *t)
	        {
	           return 0;
	       }
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Microsoft Visual C++,
	32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	  /* Compile options needed: none
	  */ 
	
	  class Test
	  {
	     int Reg(const int *a, struct T *t);
	  };
	
	  int Test::Reg(const int *a, struct T *t)
	  {
	     return 0;
	  }
	
	Additional query words: 7.00 8.00 8.00c 9.00 1.00 1.50 1.51 2.00 buglist1.51 buglist2.00
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5,1.51,2.0
	
	=============================================================================
	

{% endraw %}
