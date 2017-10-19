---
layout: page
title: "Q99871: NEW.H Does Not Contain new() that Takes a void&#42;"
permalink: /kb/099/Q99871/
---

## Q99871: NEW.H Does Not Contain new() that Takes a void&#42;

	Article: Q99871
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbLangCPP kbVC
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft C/C++ for MS-DOS, version 7.0 
	   - Microsoft Visual C++, versions 1.0, 1.50, 1.51 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The form of operator new that takes a parameter of type "void *" was added in
	the March '93 ANSI C++ draft document, as Section 17.1.1.3. As such, it is not
	supported by the Win32 Software Development Kit (SDK) compiler.
	
	This feature may be added to a future Microsoft C/C++ compiler; however, there
	are certain considerations. If this addition is made to NEW.H, then every C++
	program that includes NEW.H in more than one module will receive multiple
	definition errors. Either the definition must be declared in the CRT or declared
	INLINE. Furthermore, because the user should be able to replace the definition
	of "operator new", the definition must be replaced in the C Run-Time library
	(CRT) to ensure that it is not inlined into some modules, which would prevent it
	from being user-replaced.
	
	NOTE: This change was made Visual C++, 32-bit Edition, version 4.0.
	
	Additional query words: kbinf 1.00 1.50 2.00 2.10 2.50 7.00 8.00 8.00c 9.00 9.10 MFC Foundation Classes
	
	======================================================================
	Keywords          : kbLangCPP kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	
	=============================================================================
	
