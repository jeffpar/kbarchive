---
layout: page
title: "Q117834: FIX: Wrong Output Library Name Used with VCNT Makefile"
permalink: /kb/117/Q117834/
---

## Q117834: FIX: Wrong Output Library Name Used with VCNT Makefile

	Article: Q117834
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the makefile created by the Visual Workbench for Windows NT on a
	command line, or as an external makefile to build a static library, the output
	library name is not formed as the project name plus the .LIB extension. Instead,
	the library name is formed using the base name of the first object module
	specified on the output-dependency line in the makefile.
	
	RESOLUTION
	==========
	
	Currently, there are not any flags that can be set from the Visual Workbench to
	change this behavior. However, you can use the following workarounds by
	modifying the makefile directly:
	
	- Add option /OUT to the section in the makefile that is creating the response
	  file. For example:
	
	      echo >NUL @<<$(PROJ).CRF
	        /OUT:$(PROJ).lib
	        module1.obj
	        module2.obj
	        ...
	
	-or-
	
	- Add option /OUT on the link line where the LIB.EXE file is being invoked. For
	  example:
	
	        link -LIB /OUT:$(PROJ).lib @$(PROJ).CRF
	
	-or-
	
	- Create a batch file to rename the library.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
