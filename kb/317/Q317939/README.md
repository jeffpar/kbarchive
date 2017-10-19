---
layout: page
title: "Q317939: PRB: Can't Convert to FrontPage Web Project After Unbinding"
permalink: /kb/317/Q317939/
---

## Q317939: PRB: Can't Convert to FrontPage Web Project After Unbinding

	Article: Q317939
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbGrpDSSSafe
	Last Modified: 16-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	- Microsoft Visual Studio.NET (2002), Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you unbind a file share Web project and choose to convert it to a
	Microsoft FrontPage Web project, the project remains a file share project.
	
	CAUSE
	=====
	
	The conversion to a FrontPage Web project does not take effect until the project
	is closed and reopened.
	
	RESOLUTION
	==========
	
	Close and then reopen the solution.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Microsoft Visual Basic file share Web project.
	
	2. Add a solution to source control.
	
	3. Unbind the project and the solution. To do this, on the File menu, click
	  Sourcesafe, and then click Change Source Control.
	
	4. In Solution Explorer, right-click the project, click Properties, and then
	  select FrontPage on the Web Settings list.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbGrpDSSSafe 
	Technology        : kbVSsearch kbSSafeSearch kbAudDeveloper kbVSNETPro kbSSafe600C kbVSNETSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
