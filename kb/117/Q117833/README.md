---
layout: page
title: "Q117833: FIX: C2662: &quot;'&#95;&#95;vbaseDtor' cannot convert 'this' pointer&quot;"
permalink: /kb/117/Q117833/
---

## Q117833: FIX: C2662: &quot;'&#95;&#95;vbaseDtor' cannot convert 'this' pointer&quot;

	Article: Q117833
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist kbfixlist
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Compiling the sample code shown below using the C/C++ compilers for MS-DOS
	versions 7.0, 8.0, and 8.0c, or the C/C++ 32-bit compiler for Windows NT,
	version 8.0, causes the compiler to generate one of the following error
	messages:
	
	  error C2662: '__vbaseDtor': cannot convert 'this' pointer from 'const
	  class::DerivedClass __near *' to 'class::DerivedClass __near *const'
	
	  -or-
	
	  error C2662: '__vbaseDtor' : cannot convert 'this' pointer from 'const class
	  ::DerivedClass *' to 'class ::DerivedClass *const '
	
	The error message usually is generated when the program tries to instantiate a
	local constant object of a class that is virtually derived from a base class in
	which a user-defined destructor is defined.
	
	RESOLUTION
	==========
	
	To alleviate the C2662 error, use one of the following workarounds:
	
	- Instantiate the constant object in file scope. For example, declare it as a
	  global object.
	
	-or-
	
	- Delare the constant object static. For example:
	
	        static const DerivedClass myobject;
	
	-or-
	
	- Use the compiler supplied default destructor for the base class by removing
	  the user-defined destructor in the base class.
	
	-or-
	
	- Do not declare the object constant by removing keyword const.
	
	-or-
	
	- If possible, do not derive the class virtually.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the products and versions listed
	above. This problem was corrected in C/C++ compiler version 9.0, included with
	Visual C++ 32-bit Edition, version 2.0.
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem:
	
	Sample Code
	-----------
	
	  /* Compile options needed: None
	  */ 
	
	     class BaseClass
	     {
	        public:
	          ~BaseClass(){}
	     };
	
	     class DerivedClass: virtual public BaseClass
	     {
	       public:
	         DerivedClass(){}
	         ~DerivedClass(){}
	     };
	
	     void main()
	     {
	       const DerivedClass _myClass;
	     }
	
	Additional query words: 1.00 1.50 7.00 8.00 8.00c
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,1.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
