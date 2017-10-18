---
layout: page
title: "Q116442: BUG: C1001 Generated Using typedef for Member Functions"
permalink: kb/116/Q116442/
---

## Q116442: BUG: C1001 Generated Using typedef for Member Functions

	Article: Q116442
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVCkbbuglist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you compile C++ code that uses a typedef for member functions:
	
	- If the code is compiled with C/C++ Compiler for MS-DOS, version 8.0c, and you
	  use the /Fr or /FR compiler option, the following error message is
	  generated:
	
	  fatal error C1001: internal compiler error
	  (compiler file 'msc1.cpp', line 585)
	
	- If the code is compiled with the C/C++ Compiler for Windows NT, version 8.0,
	  and you use the /Fr or /FR compiler option, the following error message is
	  generated:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 602)
	  Please choose the Technical Support command on the Visual Workbench Help menu,
	  or open the Technical Support help file for more information
	
	- If neither the /Fr or /FR option is used, the C/C++ Compiler for MS-DOS,
	  version 8.0c, and the C/C++ Compiler for Windows NT, version 8.0, do not
	  generate the C1001 error message; however, the member functions are not
	  prototyped correctly.
	
	- Regardless of the compiler option used, the C/C++ Compiler for MS-DOS,
	  versions 7.0 and 8.0, do not generate the C1001 error; however, the member
	  functions are not prototyped correctly.
	
	RESOLUTION
	==========
	
	To work around this problem, do one of the following:
	
	- Compile the code without the /Fr or /FR option.
	
	-or-
	
	- Prototype the functions without the typedef.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this bug and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	You can use the following sample code to demonstrate this problem. If one of the
	workarounds is used, then the error message generated is:
	
	  error C2511: 'memberFunc' : overloaded member function not found in
	  'CClassName'
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Fr or /FR
	  */ 
	
	     typedef void VOIDFUNC(void);
	
	     class CClassName
	     {
	        VOIDFUNC memberFunc;
	     };
	
	     void CClassName::memberFunc(void)
	     {
	     }
	
	Additional query words: 7.00 8.00 8.00c 9.00 1.00 1.50 2.00 noupdate
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbbug
	
	=============================================================================
	
