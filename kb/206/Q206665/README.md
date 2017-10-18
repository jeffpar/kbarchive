---
layout: page
title: "Q206665: FIX: Project Settings Not Updated for All Projects"
permalink: kb/206/Q206665/
---

## Q206665: FIX: Project Settings Not Updated for All Projects

	Article: Q206665
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0; winnt:6.0
	Operating System(s): 
	Keyword(s): kbinterop kbSSafe600bug kbVC600bug kbVS600 kbVS600sp3fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following problem can occur when multiple developers are working with a
	Visual C++ workspace, under Source Control, containing multiple projects.
	
	CAUSE
	=====
	
	The Get Latest Version command from the Visual SourceSafe menu doesn't refresh
	all the projects in the workspace even though their settings have changed.
	
	RESOLUTION
	==========
	
	The solution is to close the workspace and re-open it after doing the Get Latest
	Version.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	When one user changes the project settings on multiple projects and other users
	have this workspace open already, they can issue a Get Latest Version from the
	Visual SourceSafe menu and refresh all the local files on their system. Not all
	the projects may be reloaded, and they will not have the changes reflected in
	the IDE.
	
	Closing and re-opening the project will reload all the information from the files
	for each project.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual C++ project and add a second project to the workspace.
	
	2. Add the workspace to Visual SourceSafe.
	
	3. Go to a second computer and attach to this project. From File menu, select
	  Open Workspace, and click the Source Control button.
	
	4. Check out the project files and change the project settings for both projects
	  on one of the computers.
	
	5. Check the files back in.
	
	6. On the other computer, with nothing highlighted in the FileView, select the
	  Project menu, select Source Control and Get Latest Version. Next, select all
	  files.
	
	7. Look at the settings on the second computer and notice how they didn't get
	  updated.
	
	8. Closing and re-opening the project will refresh the settings to be what they
	  were changed to on the first computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbSSafe600bug kbVC600bug kbVS600 kbVS600sp3fix 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC600 kbVC32bitSearch kbSSafe600
	Version           : WINDOWS:6.0; winnt:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
