---
layout: page
title: "Q102163: PRB: F5 Key Does Not Build and Run Application in One Step"
permalink: /kb/102/Q102163/
---

## Q102163: PRB: F5 Key Does Not Build and Run Application in One Step

{% raw %}

	Article: Q102163
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbide kbVC kbprb
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Visual Workbench Integrated Debugger, used with:
	   - Microsoft Visual C++, versions 1.0, 1.50, 1.51, 1.52 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	An attempt to build and run the project loaded in the Visual Workbench by
	pressing the F5 key fails when one of the project targets is out- of-date.
	
	CAUSE
	=====
	
	This behavior is by design. If an application takes a long time to build, you
	may not expect the application to run after a background compilation initiated
	with the F5 key.
	
	RESOLUTION
	==========
	
	Press the F5 key once to build the project. Then press the F5 key again to run
	the application.
	
	MORE INFORMATION
	================
	
	In the Visual Workbench, if a project file changes and the user presses the F5
	key to run the program, the following message box appears:
	
	  One or more targets are out of date, or do not exist. Would you like to build
	  them?
	
	If you choose Yes, Visual Workbench compiles and links the application. If you
	press the F5 key a second time, after the build process completes, the program
	runs.
	
	Additional query words: 1.00 1.10 1.50 2.00 2.10
	
	======================================================================
	Keywords          : kbide kbVC kbprb 
	Technology        : kbVCsearch kbAudDeveloper
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
