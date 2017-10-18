---
layout: page
title: "Q115327: FIX: SETUP.EXE Cannot Start via a UNC Connection"
permalink: kb/115/Q115327/
---

## Q115327: FIX: SETUP.EXE Cannot Start via a UNC Connection

	Article: Q115327
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,2.1
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 22-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Start SETUP.EXE through a universal naming convention (UNC) connection (for
	example, type "\\netroot\share\subdir\msvc\SETUP.EXE"). Installation fails and
	the following message box is displayed:
	
	  Setup cannot initialize the file list
	
	RESOLUTION
	==========
	
	Assign a drive letter to the network share and run the SETUP.EXE file (for
	example, use "x:\subdir\msvc\SETUP.EXE").
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was fixed in Visual C++ 2.2, but has not been
	fixed in the 16-bit version of our compiler. We will post new information here
	in the Knowledge Base as it becomes available.
	
	Additional query words: 1.00 1.50 1.51 1.52 2.00 2.10
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbVCsearch kbAudDeveloper kbvc150 kbvc100 kbVC151 kbVC200 kbVC210 kbVC152
	Version           : :1.0,1.5,1.51,1.52,2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
