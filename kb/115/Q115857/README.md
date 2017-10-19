---
layout: page
title: "Q115857: PRB: Using #define to Specify Include File Fails with C2006"
permalink: /kb/115/Q115857/
---

## Q115857: PRB: Using #define to Specify Include File Fails with C2006

	Article: Q115857
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCompiler kbprbkbbuglist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling the source below using precompiled headers, you may get the
	following error from the C/C++ compiler for MS-DOS under Windows:
	
	  error C2006: #include expected a filename, found 'identifier'
	
	or the following error from the C/C++ compiler for MS-DOS under Windows NT:
	
	  fatal error C1001: internal compiler error
	  (compiler file 'msc1.cpp', line 585)
	
	or the following errors when compiling with Microsoft Visual C++, 32-bit Edition,
	versions 1.0 and 2.0:
	
	  error C2006: #include expected a filename, found 'identifier'
	  fatal error C1001: INTERNAL COMPILER ERROR
	  (compiler file 'msc1.cpp', line 602)
	
	  Please choose the Technical Support command on the Visual Workbench Help menu,
	  or open the Technical Support help file for more information
	
	or the following errors when compiling with Microsoft Visual C++, 32-bit Edition,
	version 4.0,
	
	  error C2006: #include expected a filename, found 'identifier'
	  fatal error C1903: unable to recover from previous error(s); stopping
	  execution
	
	CAUSE
	=====
	
	The problem is in using a defined constant to specify an include file in the
	#include directive. The directive is being processed before the macro is
	completely expanded, resulting in the error.
	
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate the problem.
	
	Sample Code
	-----------
	
	  /* Compile options needed: /Yu"stop.h"
	   * Previously created with /Yc"stop.h"
	   */ 
	
	FIRST.H
	-------
	
	  #define SecondH "Second.H"
	
	SECOND.H
	--------
	
	  #define SOMETHING
	
	STOP.H
	------
	
	  //This file is empty
	
	TEST.CPP
	--------
	
	  #include "First.H"
	  #include SecondH
	  #include "stop.h"
	
	Additional query words: 8.00 8.00c 9.00 1.00 1.50 2.00 4.00
	
	======================================================================
	Keywords          : kbCompiler kbprb kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Issue type        : kbprb
	
	=============================================================================
	
