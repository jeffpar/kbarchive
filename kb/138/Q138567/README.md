---
layout: page
title: "Q138567: BUG: Incorrect Function Name Binding in Function Templates"
permalink: kb/138/Q138567/
---

## Q138567: BUG: Incorrect Function Name Binding in Function Templates

	Article: Q138567
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC kbVC400bug kbVC500bug kbVC600bug
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Given a function template G whose definition includes a function call to F that
	does not depend on a template parameter, the compiler does not bind function
	names at the point of the template definition. Instead the compiler binds them
	when the function template is instantiated. This could cause unexpected runtime
	results.
	
	CAUSE
	=====
	
	This is a fairly recent change to the ANSI C++ working paper. The current
	version of the Microsoft compilers do not support this feature.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Based on the ANSI C++ working paper draft (14.2.7), if a name can be bound at
	the point of the template definition and it is not a function called in a way
	that depends on a template parameter, it will be bound at the template
	definition point and the binding is not affected by later declarations.
	
	Sample Code to Demonstrate Problem
	----------------------------------
	
	     /* Compile options needed: Default
	     */ 
	
	     #include <iostream.h>
	
	     void F(char)  { cout << "In F(char)" << endl; }
	
	     template <class T>
	     void G( T t )
	     {
	         F(1);   // F() is not dependent on T or t
	     }
	
	     void F(int) { cout <<"In F(int)" << endl; }
	
	     void main()
	     {
	         G(2);
	         G('a');
	     }
	
	     /* The output from the program */ 
	
	     In F(int)
	     In F(int)
	
	     /* The output should be */ 
	
	     In F(char)
	     In F(char)
	   
	
	Additional query words: 9.00 10.00 10.10 10.20
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbVC400bug kbVC500bug kbVC600bug 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :2.0,2.1,2.2,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
