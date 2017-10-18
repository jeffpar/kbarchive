---
layout: page
title: "Q152055: FIX: No Error and Constructor Not Called if Prototype Missing"
permalink: kb/152/Q152055/
---

## Q152055: FIX: No Error and Constructor Not Called if Prototype Missing

	Article: Q152055
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 4.0, 4.1, 4.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a class declaration does not contain a default constructor declaration, but
	there is a definition of a default constructor, no error message is generated
	and the constructor is never called. The problem can be reproduced by building
	the sample code below.
	
	RESOLUTION
	==========
	
	Make sure that each constructor implementation has its prototype in the class
	declaration.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     /* Compile options needed: none
	     */ 
	
	     #include <iostream.h>
	
	     class MyClass
	     {
	     public:
	        int m_n;
	        // No declaration of a default constructor
	     };
	
	     MyClass::MyClass() :    // C2600 here.
	         m_n (42)
	     {
	     }
	
	     void main()
	     {
	         MyClass t;     // Default constructor is not called
	
	         cout << "m_n is " << t.m_n << endl;
	         cout << "It should be 42 ";
	         cout << "if the correct default constructor was called." << endl;
	     }
	
	Visual C++ 5.0 generates the following error when compiling the sample code
	above:
	
	  error C2600: 'MyClass::MyClass' : cannot define a compiler-generated special
	  member function (must be declared in the class first)
	
	Additional query words: kbVC400bug
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbLangCPP kbVC kbVC500fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.0,4.1,4.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
