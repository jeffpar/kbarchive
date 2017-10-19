---
layout: page
title: "Q313898: BUG: StartUp Project Changes When You &quot;Get Latest Version&quot;"
permalink: /kb/313/Q313898/
---

## Q313898: BUG: StartUp Project Changes When You &quot;Get Latest Version&quot;

	Article: Q313898
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 32-bit, for Windows 6.0, used with:
	   - Microsoft Visual Studio, Enterprise Edition 6.0 
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your solution is under Source Code Control and you make changes to your
	StartUp Project in a way that affects the project file, and then another user
	selects Get Latest Version from the Source Code Control system, your StartUp
	Project reloads correctly but a different project is selected as the StartUp
	Project.
	
	RESOLUTION
	==========
	
	Click the StartUp Project again, right-click the project name, and then click
	"Set as StartUp Project".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The following is a list of examples of actions that change the project file:
	
	- Add a project item
	- Remove a project item
	- Rename a project item
	- Add a reference
	- Remove a reference
	- Change a project property
	
	NOTE: This is not a complete list of actions that can change the contents of a
	project file.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Visual Basic Distributed Enterprise Template Application.
	
	2. Set the StartUp Project to any project except BusinessFacadeProjects.
	
	3. Click to select the root Enterprise Template Project node.
	
	4. On the Project menu, click Unload Project.
	
	5. Right-click the root Enterprise Template Project node.
	
	6. Click Reload Project.
	
	7. Examine the expanded node. Startup Project is set to the
	  BusinessFacadeProjects project.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
