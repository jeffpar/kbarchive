---
layout: page
title: "Q119279: FIX: Include Files May Be Incorrectly Added as a Dependency"
permalink: /kb/119/Q119279/
---

## Q119279: FIX: Include Files May Be Incorrectly Added as a Dependency

	Article: Q119279
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a header file (also known as an include file) does not exist, the way it
	appears in the source file determines whether it is included as a dependency.
	The file is included if it has a "\" or a "/" in its file specification.
	Additionally there is no warning that the file does not exist when a dependency
	scan is done.
	
	RESOLUTION
	==========
	
	Adding the filename to the SYSINCL.DAT file (if you are using Visual C++ for
	Windows, versions 1.0 and 1.5) or to the MSVCINCL.DAT file (if you are using
	Visual C++ for Windows NT, version 1.0) then restarting Visual C++ prevents the
	file from being included in the project. SYSINCL.DAT resides in the \MSVC\BIN
	directory. MSVCINCL.DAT can be found in the Windows or Windows NT directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	The following TEST.H files are included as a dependency in the project's
	makefile.
	
	Sample Code
	-----------
	
	     #include ".\test.h"
	     #include "abc$def/test.h"
	
	Additional query words: 1.00 1.50 1.10
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
