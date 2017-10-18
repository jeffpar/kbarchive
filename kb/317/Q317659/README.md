---
layout: page
title: "Q317659: PRB: If You Rebind Only the Solution File, Change Can't Check In"
permalink: kb/317/Q317659/
---

## Q317659: PRB: If You Rebind Only the Solution File, Change Can't Check In

	Article: Q317659
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c, used with:
	   - Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to rebind only the solution file that originally contained a project,
	and if you do not rebind the project, you cannot check in changes. The file is
	left in a state of pending check in.
	
	NOTE: This problem may also occur with multiple projects and files.
	
	CAUSE
	=====
	
	The solution file, which is still under source control, references a valid
	project that is also still under source control. This occurs, even though the
	project is unbound.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- If you want to keep the project, rebind both the solution and the project.
	
	  -or-
	
	- If you do not want to keep the project and its history, delete and remove the
	  project from the Visual SourceSafe explorer, and then rebind the solution.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database project in the Visual Studio .NET integrated development
	  environment (IDE).
	
	2. Add the solution file to source control.
	
	3. Unbind the solution. On the File menu, click Source Control, and then click
	  Change Source Control.
	
	4. Use the Change Source Control dialog box to rebind only the solution.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q305106 HOWTO: Reconnect a Project to Source Control in Visual Studio .NET
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbVSNETPro kbSSafe600C kbVSNETSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
