---
layout: page
title: "Q168378: BUG: Debug &quot;Additional Dlls&quot; Entry Shows on All Projects"
permalink: kb/168/Q168378/
---

## Q168378: BUG: Debug &quot;Additional Dlls&quot; Entry Shows on All Projects

	Article: Q168378
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbtool kbDebug kbide kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have more than one project in a workspace and you create an entry in the
	Additional DLLs category in the Debug tab of the Project Settings dialog box for
	one of these projects, all the other projects in the workspace are set with this
	entry in the Additional DLLs category.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a generic appwizard project, app1.
	
	2. Create another generic appwizard project, app2.
	
	3. From Project menu select, "Insert Project Into Workspace...", and insert app2
	  project (app2.dsp) to the existing workspace.
	
	4. Close and reload the project.
	
	5. In the Project menu, click Settings. In the Debug "Additional Dlls" category,
	  add some additional dlls to app2 - Win32 Debug project.
	
	6. Close and reload the workspace.
	
	7. In the Project menu, click Settings and examine the Debug "Additional Dlls"
	  category of app1 - Win32 Debug project, you will see the additional dll names
	  you entered for project app2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbDebug kbide kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
