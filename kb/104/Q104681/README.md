---
layout: page
title: "Q104681: FIX: StreBlt Sample Causes Windows NT to Hang"
permalink: /kb/104/Q104681/
---

## Q104681: FIX: StreBlt Sample Causes Windows NT to Hang

	Article: Q104681
	Product(s): Microsoft C Compiler
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbCompilerkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft C/C++ Compiler (CL.EXE), included with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Running the StreBlt GDI StretchBlt Win32 application programming interface (API)
	sample can cause Windows NT to hang.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with Windows NT 3.1. This problem
	is illustrated by the StreBlt sample supplied with Visual C++ 32- bit Edition.
	The problem was fixed in Windows NT 3.5.
	
	NOTE: This sample was not included with Visual C++, 32-bit Edition, version 4.0.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, follow these steps:
	
	1. Build the StreBlt sample using the supplied makefile.
	
	2. The sample displays a dialog box for the main window. There are three
	  drop-down list controls titled StretchBltMode, Pattern, and Standard ROPs.
	  Select the following in these drop-down lists:
	
	     StretchBltMode    BLACKONWHITE
	     Pattern           NULL_BRUSH
	     Standard ROPs     PATPAINT
	
	At this point Windows NT will hang.
	
	Additional query words: 8.00 9.00 1.00 2.00
	
	======================================================================
	Keywords          : kbCompiler kbbuglist kbfixlist
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : :1.0,2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
