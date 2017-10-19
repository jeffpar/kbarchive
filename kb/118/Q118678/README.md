---
layout: page
title: "Q118678: FIX: Internal Make Error U1073"
permalink: /kb/118/Q118678/
---

## Q118678: FIX: Internal Make Error U1073

	Article: Q118678
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you build projects that use a relative reference to an include file
	(#include "include\test.h"), the following error message is returned:
	
	  Internal Make : fatal error U1073: don't know how to make 'include\test.h'
	
	CAUSE
	=====
	
	When a scan of all directories is done, the TEST.H file will be added to the
	dependencies. The .MAK file will include "INCLUDE\TEST.H" as a dependency,
	instead of "C:\INCLUDE\TEST.H".
	
	RESOLUTION
	==========
	
	Include the root directory as an include search path by:
	
	1. Choosing Directories from the Options menu.
	
	2. Entering the root directory in the "Include Files Path" field.
	
	NOTE: Adding the path to the "Include Path" field in the Preprocessor category of
	the C/C++ Compiler Options dialog box does not resolve this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	Additional query words: 1.00 1.10 1.50 1.51 1.52
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
