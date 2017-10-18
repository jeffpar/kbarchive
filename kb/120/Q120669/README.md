---
layout: page
title: "Q120669: /Gt Switch Has the Default Value /Gt5"
permalink: kb/120/Q120669/
---

## Q120669: /Gt Switch Has the Default Value /Gt5

	Article: Q120669
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C/C++ Compiler (CL.EXE), included with:
	   - Microsoft Visual C++, Macintosh Cross-Development Addon, versions 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Global Threshold (/Gt<value>) option moves data items of the specified
	size or greater out of the default data segment. The default value for the /Gt
	option is 5, so if the /Gt is not specified or is specified without a value, it
	is as if the option /Gt5 is used.
	
	Specify other values for /Gt from Visual Workbench by selecting the Project menu,
	choosing Settings, choosing the C/C++ tab, selecting Code Generation from the
	Category list box, and using the edit field Global Threshold.
	
	Additional query words: kbinf 2.00 4.00 9.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbCVCComp
	Version           : winnt:
	
	=============================================================================
	
