---
layout: page
title: "Q117888: FIX: Relative Include Files May Not be a Dependency"
permalink: /kb/117/Q117888/
---

## Q117888: FIX: Relative Include Files May Not be a Dependency

{% raw %}

	Article: Q117888
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
	
	Dependendcies to files that are included using a relative reference such as,
	
	    #include "\include\test.h"
	
	will not be generated when a Scan All Dependencies is performed on a project.
	
	RESOLUTION
	==========
	
	Adding the project root directory to one of the Include file paths (under
	Options.Directories or Options.Project.Compiler.Preprocessor) AND changing the
	#include statement to remove the leading backslash (such as in "include\test.h")
	will resolve this problem. Additionally, specifying the entire path to the
	include file will alleviate this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed above. This
	problem was corrected in Visual C++ 2.0.
	
	MORE INFORMATION
	================
	
	The following sample code will not include test1.h as a project dependency.
	
	Sample Code
	-----------
	
	  /* Compile options needed:   none
	  */ 
	
	  #include "\include\test1.h"
	  #include "test.h"
	
	  void main() {}
	
	Additional query words: 1.00 1.10
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
