---
layout: page
title: "Q121018: PRB: Special Characters in Path Cause NMake Error U1007"
permalink: kb/121/Q121018/
---

## Q121018: PRB: Special Characters in Path Cause NMake Error U1007

	Article: Q121018
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,4.0,5.0
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Building a project that uses one of the special characters shown below works
	correctly in the Visual Workbench. But an attempt to build the same project from
	a command session fails, returning this error:
	
	  test.mak(98) : fatal error U1007: double quotation mark not allowed in name
	  Stop.
	
	CAUSE
	=====
	
	This is limitation of the NMAKE utility included with the products listed above.
	The following legitimate characters cause this problem:
	
	  $, %, @, #, !, ^, (, ), {, }, [, ], -, and the space character.
	
	When one of them is used in a path specification, Visual C++ puts quotation marks
	around the file specification in several places within the makefile. NMAKE
	cannot process files specified in this way.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Avoid using any of these special characters.
	
	-or-
	
	- Modify the makefile to remove the quotation marks and use the project as an
	  external makefile when using the Visual C++ Workbench to launch the build.
	
	-or-
	
	- Always use the Visual C++ Workbench to build the project.
	
	
	Additional query words: quotes
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVSsearch kbAudDeveloper
	Version           : :2.0,2.1,4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
