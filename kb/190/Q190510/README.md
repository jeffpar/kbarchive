---
layout: page
title: "Q190510: BUG: ClassWizard Is Disabled When Any Workspace Project Unloaded"
permalink: /kb/190/Q190510/
---

## Q190510: BUG: ClassWizard Is Disabled When Any Workspace Project Unloaded

{% raw %}

	Article: Q190510
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ClassWizard is disabled when the workspace contains an unloaded project.
	
	RESOLUTION
	==========
	
	Load all projects in the workspace. To load a project, follow these steps:
	
	1. Make sure the Workspace view is enabled. If it is not enabled, right- click
	  the blank space on the menu bar, then click Workspace.
	
	2. Click the FileView tab in the Workspace view.
	
	3. Right-click the unloaded project, then click Load Project. Unloaded projects
	  have an unavailable (grayed appearance) folder icon and "- not loaded"
	  appended to the project name.
	
	If this technique is inconvenient because of the large number of projects
	unloaded, use this alternative procedure to create a temporary workspace for the
	project(s) of interest:
	
	1. To create a new blank workspace, on the File menu, click New, then click the
	  Workspaces tab; create a new name and click OK. In this example, the new
	  workspace is named tempref.
	
	2. Right-click the workspace name in FileView, then click "Insert Project Into
	  Workspace."
	
	3. Browse for the project (.dsp file) to add to the temporary workspace. Click
	  the project file name and click OK.
	
	4. If necessary, repeat from step 2 to add more projects to the workspace.
	
	5. Use ClassWizard to modify the project(s).
	
	6. When finished using the workspace, close it and delete the Tempref.dsw,
	  Tempref.opt, and the Tempref.ncb files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	The technique of unloading a project is recommended for speeding up shared
	workspaces. Workspaces may be shared for large-scale development, where each
	developer works on a small subset of the projects in a workspace.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new MFC EXE AppWizard project. Name it NoLoad, click OK, then click
	  Finish. Click OK on the confirmation dialog box.
	
	2. Create a second new project as above. Name it Load. However, select "Add to
	  current workspace" on the New dialog box before clicking OK.
	
	3. In FileView, click the "+" symbols to expand both projects and their Source
	  Files folders.
	
	  NOTE: ClassWizard launches from both projects and their .cpp files. Test by
	  clicking a project or file name, then press CTRL+W or click View,
	  ClassWizard.
	
	4. Right-click the NoLoad project, then click Unload Project. This action
	  unloads the first project.
	
	  NOTE: ClassWizard is now disabled from both projects and all files in the
	  loaded project. Pressing CTRL+W causes a beep, and View, ClassWizard is
	  unavailable (grayed out).
	
	5. Right-click the NoLoad project, then click Load Project. This reloads the
	  first project.
	
	  NOTE: ClassWizard is now enabled for both projects.
	
	REFERENCES
	==========
	
	"Using Workspaces with Team Development in the Visual Studio Environment," in
	the online books under Backgrounders, Backgrounders, Visual Tools, Microsoft
	Visual Studio.
	
	Additional query words: kbvc600bug kbvc500bug kbWizard kbDSSTools
	
	======================================================================
	Keywords          : kbwizard kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
