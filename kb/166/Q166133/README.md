---
layout: page
title: "Q166133: BUG: Execute &lt;name&gt;.EXE Menu Item Does Not State Name of SP"
permalink: kb/166/Q166133/
---

## Q166133: BUG: Execute &lt;name&gt;.EXE Menu Item Does Not State Name of SP

	Article: Q166133
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbEEdition kbide kbVC kbVC500bug kbVC600bug kbNoUpdatekbbuglist
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a workspace contains both a non-database project and a database project and
	you edit or highlight a stored procedure in a database project, the Execute menu
	option on the Build menu doesn't show the name of the current stored procedure.
	Instead, it shows the name of the non-database project .exe. When you click
	Execute, it runs the currently selected stored procedure, not the .exe listed on
	the menu.
	
	RESOLUTION
	==========
	
	If you open the stored procedure for editing after setting the active project to
	the database project, it clears the menu and indicates Execute without showing
	the name of the object being executed.
	
	NOTE: If you don't have any stored procedures open for editing, you cannot run
	any stored procedure from the build menu and the toolbar "!" will be dimmed out.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new workspace and add a non-database project to the workspace.
	
	2. Add a database project to the same workspace that has stored procedures in
	  it.
	
	3. Open a stored procedure in the database project by double-clicking the stored
	  procedure or right-clicking the stored procedure.
	
	4. From the Project Menu set the active project to the non-Database project.
	
	5. Set the active project to the Database project.
	
	6. Click the "Build" menu and notice that it contains an enabled Execute
	  <name>.exe (Ctr-F5) item.
	
	If "Execute" is chosen, it will run the currently selected stored procedure
	rather than the .exe. To run the .exe, set the active project back to the .exe's
	project through the Project menu.
	
	Additional query words: database project
	
	======================================================================
	Keywords          : kbProgramming kbEEdition kbide kbVC kbVC500bug kbVC600bug kbNoUpdate kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
