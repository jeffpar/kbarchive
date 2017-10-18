---
layout: page
title: "Q116419: FIX: Conditional Directives Ignored by Dependency Scanning"
permalink: kb/116/Q116419/
---

## Q116419: FIX: Conditional Directives Ignored by Dependency Scanning

	Article: Q116419
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0 
	- Microsoft Visual C++, version 1.5 
	- Microsoft Visual C++, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Conditional compilation directives (#if, #endif, and so forth), put in so that
	you can selectively include header files within a source file, are handled
	inconsistently by the .MAK file dependency generator when it writes the .MAK
	file for a project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 2.0
	
	MORE INFORMATION
	================
	
	The following steps can be used to reproduce this problem:
	
	1. Create the following two files (assume the files JUNK.H and \TMP\JUNK.H do
	  not already exist):
	
	        //---------------------
	          // main.cpp
	          //---------------------
	          #undef SOMETHING
	          #include "test.h"
	
	          //---------------------
	          // test.h
	          //---------------------
	          #if defined (SOMETHING)
	          #include <junk.h>
	          #include <\tmp\junk.h>
	          #endif
	
	2. Create a new project for an MS-DOS or console application using the Visual
	  WorkBench.
	
	3. Add MAIN.CPP to the project dependencies from the dialog box you get by
	  choosing Edit from the Project menu.
	
	4. Open the .MAK file you created and look for the section describing the
	  dependencies for MAIN.CPP. (In Visual C++, version 1.5, the Visual WorkBench
	  creates a macro called MAIN_DEP to keep track of the dependencies.) Notice
	  that there is a dependency on TEST.H (which is correct) and that there is no
	  dependency on JUNK.H (which is also correct), but that there is a dependency
	  on \TMP\JUNK.H (which is incorrect).
	
	Additional query words: 1.00 1.50 1.10 S_VWB
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVCsearch kbVSsearch kbAudDeveloper _IKkbbogus kbvc150 kbvc100 kbVWB
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
