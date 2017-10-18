---
layout: page
title: "Q167306: FIX: Initializer for Empty Struct Causes C2059 or C1001"
permalink: kb/167/Q167306/
---

## Q167306: FIX: Initializer for Empty Struct Causes C2059 or C1001

	Article: Q167306
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbVC400bug kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Specifying an empty initializer for an empty structure may cause the following
	error:
	
	  Text1.cpp(5) : error C2059: syntax error : '}'
	
	Specifying a value in place of the empty initializer generates the following
	error:
	
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'E:\utc\src\\P2\p2symtab.c', line 2387) Please choose the
	  Technical Support command on the Visual C++ Help menu, or open the Technical
	  Support help file for more information
	
	RESOLUTION
	==========
	
	Do not specify an initializer for the structure. Initialize them from a function
	instead.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This problem was corrected in Microsoft Visual C++ .NET.
	
	MORE INFORMATION
	================
	
	  /* Compile Options needed: None */ 
	
	   struct S {};
	   struct A {
	  S s;
	  int i;
	   } a = { {/*0*/},  3 }; // Uncomment the 0 to generate the C1001 error
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbVC400bug kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :4.2,5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
