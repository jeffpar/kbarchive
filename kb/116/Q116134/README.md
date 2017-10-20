---
layout: page
title: "Q116134: FIX: Visual Workbench Ignores Request Not to Rebuild Project"
permalink: /kb/116/Q116134/
---

## Q116134: FIX: Visual Workbench Ignores Request Not to Rebuild Project

{% raw %}

	Article: Q116134
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbide kbVCkbbuglist kbfixlist
	Last Modified: 26-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Workbench for Windows, version 1.0, used with:
	   - Microsoft Visual C++, versions 1.0, 1.5 
	   - *EDITOR Please do not choose this product*Microsoft Visual C++ 32-bit Edition* use 241, 265, 225, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a new project or changing options for an existing project, the
	Visual Workbench displays the following dialog box when the user chooses the
	Build button from the toolbar or chooses Build from the Project menu:
	
	  
	
	       ----------------------------------------------
	       | The current project has changed. Would you |
	       | like to build the affected files?          |
	       |                                            |
	       |     [Yes]       [No]       [Cancel]        |
	       ----------------------------------------------
	
	Even if the user chooses "No," the Visual Workbench builds the project.
	
	RESOLUTION
	==========
	
	If you do not want to build the project, you must choose Cancel from the dialog
	box shown above to prevent the build process from starting. Otherwise, choose
	Stop Build from the Project menu to cancel the build if "Yes" or "No" was chosen
	from the dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was fixed in Microsoft Visual C++,
	32-bit Edition, version 4.0
	
	MORE INFORMATION
	================
	
	To reproduce the problem, do the following:
	
	1. Start the Visual Workbench.
	
	2. Create a source file and save it.
	
	3. Choose New from the Project menu to create a new project, and then add the
	  source file that you just created to the project.
	
	4. Choose Build from the Project menu. At this time, the dialog box with the
	  text "The current project has changed. Would you like to build the affected
	  files?" will appear.
	
	5. Choose "No". The Visual Workbench will proceed with a build anyway. To cancel
	  the build, choose Stop Build from the Project menu.
	
	NOTE: This problem can also be reproduced by taking an existing project and
	changing the compiler options, linker options, or project target.
	
	Additional query words: 1.00 1.10 1.50 2.00
	
	======================================================================
	Keywords          : kbide kbVC kbbuglist kbfixlist
	Technology        : kbVSsearch kbAudDeveloper
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
