---
layout: page
title: "Q192330: HOWTO: Using the ProjectHook Class to Create a Generic Project"
permalink: /kb/192/Q192330/
---

## Q192330: HOWTO: Using the ProjectHook Class to Create a Generic Project

	Article: Q192330
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 6.0 introduces a project object association model and a new
	ProjectHook class for use specifically with projects. These additions allow
	developers to programmatically manipulate a Visual FoxPro 6.0 project as an
	object. This document demonstrates how to create a new ProjectHook baseclass,
	and configure Visual FoxPro to instantiate the ProjectHook class each time a
	project is created or modified.
	
	MORE INFORMATION
	================
	
	Prior to the introduction of Visual FoxPro 6.0, programmatic changes to a Visual
	FoxPro project could only be accomplished by manipulating the project's .pjx
	file.
	
	1. Using the Windows Explorer, create a new folder.
	
	2. Launch Visual FoxPro 6.0.
	
	3. Set the default directory to the directory created in step 1.
	
	4. Create a new ProjectHook Class:
	
	  a. From the File menu, choose New, and then select Program.
	
	  b. Type the following code in the program window:
	     **PROJECT HOOK TEST
	
	  c. Save the program as c:\Ph_main.prg and close the program window.
	
	  d. From the File menu, choose New and then select Class.
	
	  e. When the New Class dialog box opens, type the following and then click OK:
	
	  Class Name: MyHook
	  Based On: ProjectHook
	  Store In: HookClass
	
	  f. When the Class Designer window opens, open the INIT method of the class
	     and type the following code:
	
	              LOCAL cPrgPath
	              IF !FILE('PH_MAIN.PRG')
	                 cPrgPath = _vfp.ActiveProject.homedir+"\PH_main.prg"
	                 COPY FILE C:\PH_MAIN.PRG to (cPrgPath)
	                 _VFP.ActiveProject.Files.Add(cPrgPath)
	              ENDIF
	
	  g. Save the class and close the Class Designer.
	
	  h. Configure Visual FoxPro to use the ProjectHook class. a. From the Tools
	     menu, choose Options, and then click the Projects tab. b. Select the
	     Project Class check box on the bottom of the Projects tab. c. In the text
	     box next to the Project Class check box, enter the path to the class
	     created in step 4.
	
	  Now test the ProjectHook class by creating a new project. Note that when the
	  project is created, the MyHook class is instantiated and the Ph_main.prg file
	  is copied to the currently selected directory and included in the newly
	  created project.
	
	REFERENCES
	==========
	
	Visual FoxPro 6.0 Documentation, chapter 32: "Project Manager Hooks"
	
	Additional query words: kbVFp600 kbProjManager
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
