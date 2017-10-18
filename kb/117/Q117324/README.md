---
layout: page
title: "Q117324: Dependencies May Not Be Updated as Expected"
permalink: kb/117/Q117324/
---

## Q117324: Dependencies May Not Be Updated as Expected

	Article: Q117324
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbide kbVC
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When making changes to a project, it is common to choose Scan All Dependencies
	from the Project menu periodically to ensure that the dependency list is
	current. If the changes that were made to the files in the project have not been
	saved before doing a dependency scan, new dependencies are not reflected.
	
	A dependency scan does not automatically save modifications to the files in a
	project. Choosing Save All from the File menu before choosing Scan All
	Dependencies ensures that the dependency list is updated.
	
	This behavior has changed starting with Visual C++ 2.0.
	
	Additional query words: kbinf 1.00 1.50 1.10
	
	======================================================================
	Keywords          : kbide kbVC 
	Technology        : kbVCsearch kbAudDeveloper
	
	=============================================================================
	
