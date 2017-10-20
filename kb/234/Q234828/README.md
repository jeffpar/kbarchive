---
layout: page
title: "Q234828: MOD2000: Confusing Error Adding Project to Visual SourceSafe"
permalink: /kb/234/Q234828/
---

## Q234828: MOD2000: Confusing Error Adding Project to Visual SourceSafe

{% raw %}

	Article: Q234828
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta modSSafe
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a new project to Visual SourceSafe, you must create a new Visual
	SourceSafe project. Visual SourceSafe does not allow you to add objects to an
	existing project, even if the project is empty. If you try to use an existing
	project name, you receive the following error message:
	
	  Project <name> already exists. You must create a new VSS project to use
	  with this VSS project.
	
	RESOLUTION
	==========
	
	When you add a new project to Visual SourceSafe control, type a unique name for
	the project in the "Create a new project in the folder" box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new workbook in Excel, and then save it.
	
	2. Press ALT+F11 to open the Visual Basic Editor.
	
	3. Use the Add-in Manager to load the Source Code Control add-in if it is not
	  already loaded.
	
	4. Click VBA Source Code Control on the Add-ins menu to add the current project
	  to source code control. When prompted for a VSS project name, type an
	  existing one.
	
	  Note that you receive the following error message:
	
	  Project <name> already exists. You must create a new VSS project to use
	  with this VSS project.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdta modSSafe 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : :; WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
