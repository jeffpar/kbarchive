---
layout: page
title: "Q119161: FIX: Dependencies May Not Be Detected"
permalink: /kb/119/Q119161/
---

## Q119161: FIX: Dependencies May Not Be Detected

	Article: Q119161
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a project includes header files that include each other, not all of the
	dependencies are detected. This can cause the Visual Workbench to report that a
	source file is up to date when it is not up to date.
	
	RESOLUTION
	==========
	
	You may need to include some header files directly in the source file instead of
	in a header file. Please see the "MORE INFORMATION" section, below, for details.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. This problem was corrected in Visual C++ version 2.0.
	
	MORE INFORMATION
	================
	
	Situation 1
	-----------
	
	The problem can be seen in the following situation:
	
	  // sample1.cpp
	
	     #include "sample1.h"
	
	  // sample2.cpp
	
	     #include "sample2.h"
	
	  // sample1.h
	
	     #ifndef _SAMPLE1_H
	     #define _SAMPLE1_H
	     #include "sample2.h"
	     #include "test1.h"
	     #endif
	
	  // sample2.h
	
	     #ifndef _SAMPLE2_H
	     #define _SAMPLE2_H
	     #include "sample1.h"
	     #include "test2.h"
	     #endif
	
	  // test1.h
	  // nothing required for this sample.
	
	  // test2.h
	  // nothing required for this sample.
	
	The dependencies generated for this .MAK file will be as follows:
	
	     SAMPLE1_DEP = \ 
	         c:\sample\sample1.h
	         c:\sample\sample2.h
	         c:\sample\test2.h
	         c:\sample\test1.h
	
	     SAMPLE2_DEP = \ 
	         c:\sample\sample2.h
	         c:\sample\sample1.h
	         c:\sample\test2.h
	
	  SAMPLE2_DEP should also include c:\sample\test1.h
	
	Situation 2
	-----------
	
	The correct dependencies are generated when you make the following changes:
	
	  // sample1.cpp
	
	     #include "test2.h"
	     #include "sample1.h"
	
	  // sample2.cpp
	
	     #include "test1.h"
	     #include "sample2.h"
	
	  // All other files are unchanged.
	
	Additional query words: 1.00 1.50 1.10
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
