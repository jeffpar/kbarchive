---
layout: page
title: "Q142787: FIX: C1001 on Template Class of Type Pointer to Function"
permalink: /kb/142/Q142787/
---

## Q142787: FIX: C1001 on Template Class of Type Pointer to Function

	Article: Q142787
	Product(s): Microsoft C Compiler
	Version(s): 4.0 4.1 4.2s
	Operating System(s): 
	Keyword(s): kbCompiler kbVC500fix
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When instantiating a template class of type pointer to function and then using
	it as demonstrated in the sample code in the Samples section of this article,
	you may see the following internal compiler error:
	
	  
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 899)
	  Please choose the Technical Support command on the Visual C++
	  Help menu, or open the Technical Support help file for more
	  information
	
	RESOLUTION
	==========
	
	The syntax for instantiating a template class of type pointer to function is:
	
	     TS<void (*)(float)> pf ;
	
	where TS is the name of class template, and pf is the name of the template class
	being instantiated. You can now instantiate objects of type pf and use them to
	call functions that accept a float as an argument and return void.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates the problem and generates the internal
	compiler error C1001. The workaround is shown in the comments in the sample
	code.
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	        #include <iostream.h>
	
	        template <class T>
	        struct TS
	        {
	          void TestType(void);
	          TS(void) { TestType(); }
	        };
	
	       void f(float x)
	       {
	          cout << "x = " << x << endl ;
	       }
	
	       template <class T>
	       void TS<T>::TestType(void)
	       {
	          T t;
	          t(2.2); // this line generates a C1001
	       }
	
	       void main(void)
	       {
	
	         TS<void *(float)> pf;   // this line actually causes the error
	
	         //  Workaround: change the previous line to look like this:
	         //  TS<void (*)(float)> pf ;
	       }
	
	Additional query words: kbVC400bug 10.0 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : 4.0 4.1 4.2s
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
