---
layout: page
title: "Q115437: FIX: Problems Using Parentheses to Denote Array Subscripts"
permalink: /kb/115/Q115437/
---

## Q115437: FIX: Problems Using Parentheses to Denote Array Subscripts

{% raw %}

	Article: Q115437
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling the sample code below with Visual C++ 32-bit Edition causes the
	compiler to generate the following error message:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 602)
	
	The compiler should instead generate the following error:
	
	  error C2064: term does not evaluate to a function
	
	Compiling the sample code with Visual C++, version 1.5, under Windows NT gives
	the following error message:
	
	  fatal error C1001: internal compiler error
	  (compiler file 'msc1.cpp', line 585)
	
	Again, "error C2064: term does not evaluate to a function" should display.
	
	When the code below is compiled with Visual C++, versions 1.0 and 1.5 under
	Windows 3.1, no errors are generated. The compiler effectively ignores the
	erroneous line. If we compile at warning level 4 (CL /W4), the following warning
	is generated:
	
	  warning C4100: 'push_this' : unreferenced formal parameter
	
	This warning shows that the erroneous line was ignored.
	
	CAUSE
	=====
	
	Incorrectly compiled code uses parentheses () instead of brackets [] to denote
	array subscripts.
	
	RESOLUTION
	==========
	
	Fix the code by changing the parentheses to brackets.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This bug was corrected in C/C++ compiler version 9.0, included
	in Visual C++ 32-bit Edition, version 2.0.
	
	Sample Code
	-----------
	
	      // Compile options needed:    none
	        #include <iostream.h>
	
	        class stack_class {
	             int stack_data[10];
	             int stack_ptr;
	        public:
	             void init(void);
	             int push(int push_this);
	        };
	
	        void stack_class::init(void) {stack_ptr = -1;};
	
	        int stack_class::push(int push_this)
	        {
	             if (stack_ptr >= 99)
	                  return(0);
	
	             //ERROR: (++stack_ptr) - Change to [++stack_ptr]
	             stack_data(++stack_ptr) = push_this;
	                  return(1);
	        };
	
	        void main()
	        {
	             stack_class stack;
	
	             stack.push(100);
	        }
	
	Additional query words: 1.00 1.50 8.00 8.00c
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
