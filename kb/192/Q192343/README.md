---
layout: page
title: "Q192343: HOWTO: Associating the Default ProjectHook Class to a Project"
permalink: kb/192/Q192343/
---

## Q192343: HOWTO: Associating the Default ProjectHook Class to a Project

	Article: Q192343
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines the different ways to associate the default ProjectHook
	Class, AppHook, to a project.
	
	MORE INFORMATION
	================
	
	Visual FoxPro version 6.0 ships with a default ProjectHook class called AppHook,
	which is stored in the AppHook.vcx class library. The class library is saved in
	the following directory:
	
	  ..\VFP98\Wizards\
	
	Following are some of the ways you can associate the default ProjectHook class to
	a Visual FoxPro project:
	
	Using the Options Dialog
	------------------------
	
	1. In Visual FoxPro, from the Tools menu, choose Options.
	
	2. In the Options dialog box, click the Projects tab, and then select the
	  Project Class check box to display the Project Reference dialog box.
	
	3. Navigate to the "..\vfp98\Wizards\" directory.
	
	4. Select AppHook.vcx, and then select apphook from the Class Name text box.
	
	5. In the Options dialog box you can select OK to specify the Project Hook Class
	  for the current session or "Set As Default" to specify the class as the
	  default for all new projects.
	
	Using the Project Builder
	-------------------------
	
	1. Without a default ProjectHook class specified in the Projects tab of the
	  Options dialog box, create a new project.
	
	2. Right-click the project and select Builder from the shortcut menu.
	
	3. In the Microsoft Visual FoxPro dialog box that appears, select Yes then click
	  OK in the second dialog box.
	
	4. When you exit from the Builder, and go back to the Project Designer, the
	  default ProjectHook class AppHook is now associated with the project.
	
	Using Program Code
	------------------
	
	1. Without a default ProjectHook class specified in the Projects tab of the
	  Options dialog box, create a new project.
	
	2. Execute the following code to associate the default ProjectHook class apphook
	  to the project:
	
	     _  vfp.activeproject.projecthooklibrary=HOME()+"\wizards\AppHook.VCX"
	        && In previous command, make sure to specify the appropriate path
	        _vfp.activeproject.projecthookclass ="apphook
	
	Using the Project Information Selection
	---------------------------------------
	
	1. Without a default ProjectHook class specified in the Projects tab of the
	  Options dialog, create a new project.
	
	2. From the Project menu, choose Project Info.
	
	3. In the Project Information <project name> dialog box, select Project
	  Class, and then navigate to the AppHook.vcx file.
	
	  NOTE: Except for the "Using Program Code" method, the project needs to be
	  closed and then reopened before the ProjectHook object is instantiated.
	
	Additional query words: kbProjManager kbVFp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
