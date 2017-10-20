---
layout: page
title: "Q293293: PRB: Cannot Update SCC Status From ProjectHook.Init()"
permalink: /kb/293/Q293293/
---

## Q293293: PRB: Cannot Update SCC Status From ProjectHook.Init()

{% raw %}

	Article: Q293293
	Product(s): Microsoft FoxPro
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Article idea submitted by: Ted Roche
	
	
	When you try to update files that are under Source Code Control (that is, Visual
	SourceSafe) from the ProjectHook's Init event, the Source Code Control methods
	that are associated with the File objects fail.
	
	CAUSE
	=====
	
	The Visual FoxPro (VFP) documentation states, "Note that the project object and
	its properties and methods are not available in the ProjectHook object Init
	event." Because the project object logs on to the Source Code Control database,
	any attempt to operate on the files at this time fails.
	
	RESOLUTION
	==========
	
	Use a different method to operate on the files, For example, set a flag so that
	the first operation on any file causes the latest version of all the files to be
	brought down to the working folder.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Project Hook class in the class designer.
	
	2. Add the following code to the Init event:
	
	  This.oProject = _VFP.ActiveProject
	  WAIT WINDOW NOWAIT "Project Hook Enabled"
	  This.GetLatestAll()
	
	3. Create a class method called GetLatestAll, and add the following code to it:
	
	  LOCAL oFile, m.i
	
	  FOR m.i = 1 TO This.oProject.Files.Count
	     oFile = This.oProject.Files[m.i]
	     ? oFile.Name
	     ? oFile.SCCStatus
	     IF NOT oFile.SCCStatus = 0    && SCCFILE_NOTCONTROLLED
	        ? oFile.GetLatestVersion()
	     ENDif
	  ENDfor  && each file
	
	4. Add the following code to the class's Destroy event:
	
	  This.oProject = NULL
	
	5. Save the class, and add it to a project that is under Source Control.
	
	6. Open the project, and note that although each file and its SCCStatus are
	  listed, each call to GetLatestVersion fails.
	
	REFERENCES
	==========
	
	For more information on ProjectHooks, see chapter 32, "Application Development
	and Developer Productivity," in the Visual FoxPro Programmer's Guide.
	
	For more information about Source Code Control, see chapter 29, "Developing in
	Teams," in the Visual FoxPro Programmer's Guide.
	
	(c) Microsoft Corporation 2001, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words: Source Safe Project Hook
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
