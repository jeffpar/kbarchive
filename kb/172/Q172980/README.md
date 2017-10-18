---
layout: page
title: "Q172980: FIX: Compiler Incorrectly Causes Default Constructor Reference"
permalink: kb/172/Q172980/
---

## Q172980: FIX: Compiler Incorrectly Causes Default Constructor Reference

	Article: Q172980
	Product(s): Microsoft C Compiler
	Version(s): WINNT:5.0
	Operating System(s): 
	Keyword(s): kbCompiler kbCPPonly kbVC500bug kbVS97sp2fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When instantiating a class template with a member function that has a default
	parameter, error C2512 may be generated.
	
	CAUSE
	=====
	
	This behavior can occur when the default parameter is an explicitly-created
	temporary of the parameterized type of the template. The sample code below
	demonstrates this.
	
	RESOLUTION
	==========
	
	Do not use an explicitly-generated temporary as a default argument.
	
	-or-
	
	Ensure that the template argument has a default constructor available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	Sample
	------
	
	     // compile options : /c
	     template<typename T>
	     class C
	     {
	     public:
	         void fn(const T & t = T());
	     };
	     class X
	     {
	     public:
	         X(int);
	         ~X();
	     };
	     C<X> l;
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbCPPonly kbVC500bug kbVS97sp2fix 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : WINNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
