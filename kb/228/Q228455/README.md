---
layout: page
title: "Q228455: PRB: Missing /c Compiler Option Causes LNK1561 Linker Error"
permalink: kb/228/Q228455/
---

## Q228455: PRB: Missing /c Compiler Option Causes LNK1561 Linker Error

	Article: Q228455
	Product(s): Microsoft C Compiler
	Version(s): winnt:6.0
	Operating System(s): 
	Keyword(s): kbCompiler kbLinker kbVC600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When compiling a multiple source file project that creates a pre-compiled header
	file inside the Visual C++ Integrated Development Environment (IDE), the
	following error can occur:
	
	  Compiling...
	  StdAfx.cpp
	  LINK : fatal error LNK1561: entry point must be defined
	  Error executing cl.exe.
	
	NOTE: The linker error is generated during the compiler phase of the build.
	
	CAUSE
	=====
	
	The /c compiler option is missing from the build settings.
	
	RESOLUTION
	==========
	
	Add /c to the compiler options. To do this, you must edit the compiler options
	in the Project Options box in the C/C++ tab under Project Settings.
	
	NOTE: This box is only editable if the whole project is selected in the tree
	control on the Project Settings.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	By default, the Visual C/C++ compiler attempts to compile and link in a single
	step. The /c (Compile without Linking) option is used to tell the compiler to
	compile only. Since Visual C++ compiles and links in separate steps, then /c is
	required for all Visual C++ builds.
	
	To reproduce the error, create a default MFC project and remove the /c option
	from the Project Settings by editing the compiler options in the Project Options
	box in the C/C++ tab under Project Settings.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Kelly Marie Ward, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbLinker kbVC600 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	
