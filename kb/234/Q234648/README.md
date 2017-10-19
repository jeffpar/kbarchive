---
layout: page
title: "Q234648: BUG: WinCE Toolkit for Visual C++ 6.0 Forces a Rebuild All"
permalink: /kb/234/Q234648/
---

## Q234648: BUG: WinCE Toolkit for Visual C++ 6.0 Forces a Rebuild All

	Article: Q234648
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbide kbToolkit kbVC600bug kbOSWinCEsearch kbDSupport kbGrpDSTools kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The WinCE toolkit for Visual C++ 6.0 forces a Rebuild All of the current project
	when the Build menu item is selected from the Build menu.
	
	RESOLUTION
	==========
	
	The workaround is to build from the context menu of the project in FileView
	pane. The FileView pane is a part of the Workspace window. The Workspace window
	can be activated by selecting the Workspace menu item from the View menu.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project using the AppWizard.
	
	2. Build it by selecting the Build Menu item located under the Build menu.
	  Alternatively, you may press the F7 key, which is the default shortcut for
	  the Build Menu item.
	
	3. Close the workspace and reopen it.
	
	4. Repeat step 2, Visual C++ does a Rebuild All instead of a build.
	
	5. Repeat step 2, it does a regular build.
	
	The problem in step 4 occurs only once for the session involving the workspace.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbToolkit kbVC600bug kbOSWinCEsearch kbDSupport kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	
	=============================================================================
	
