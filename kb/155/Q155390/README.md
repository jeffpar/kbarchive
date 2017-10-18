---
layout: page
title: "Q155390: PRB: Unable to Add Project Error in Visual Basic Integration"
permalink: kb/155/Q155390/
---

## Q155390: PRB: Unable to Add Project Error in Visual Basic Integration

	Article: Q155390
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe, 16-bit, for Windows, versions 4.0, 5.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new project to Visual SourceSafe using the Visual Basic 4.0
	integration, you may receive the error message:
	
	  Unable to add the project to source code control
	
	When you add an existing project, the error will read:
	
	  Add failed - Files were not added to source code control
	
	WORKAROUND
	==========
	
	Clear the "Remove local copy after Add or Check In" checkbox as described below
	when adding projects to Visual SourceSafe.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The above error will occur when the "Remove local copy after Add or Check In"
	checkbox is checked in the Advanced settings dialog box for Visual Basic/Visual
	SourceSafe integration. With Visual SourceSafe versions 4.x, this checkbox may
	be found by clicking Visual SourceSafe on the Add Ins menu and clicking the
	Options sub-menu. Next, click Advanced Command to bring up the Advanced dialog
	box and click the Local Files tab. In version 5.0, this checkbox is disabled.
	The setting is inherited from the current Visual SourceSafe setting that is
	located on the Local Files tab on the Tools menu under Options in the Visual
	SourceSafe Explorer.
	
	In both cases, although the working directory may be incorrect, the project is
	actually added to Visual SourceSafe.
	
	The underlying problem is that Visual SourceSafe has deleted the files from the
	hard drive but Visual Basic is still trying to use them. The error messages are
	misleading.
	
	Steps To Reproduce Behavior
	---------------------------
	
	Assuming that "Remove local copy after Add or Check In" is checked:
	
	1. Create a new project in Visual Basic. From the File menu, choose Save
	  Project, and then save the project as "TestProj.vbp."
	
	2. When prompted to "Add this project to Source Code Control," click Yes.
	
	3. Select a project in the "Add SourceSafe Project" dialog box and click OK.
	
	4. When prompted to create a new Visual SourceSafe project, click Yes.
	
	5. In the "Add to SourceSafe dialog," select all the files in the project and
	  click OK.
	
	You will then receive the error:
	
	  Unable to add the project to source code control
	
	However, when you run Visual SourceSafe, you will see that the project has been
	created.
	
	
	Additional query words: buglist
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
