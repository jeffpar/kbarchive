---
layout: page
title: "Q234835: MOD2000: Errors After You Rename Project in VSS Explorer"
permalink: /kb/234/Q234835/
---

## Q234835: MOD2000: Errors After You Rename Project in VSS Explorer

	Article: Q234835
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta modSSafe
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you rename a project that was created with the VBA Source Code Control Add-in
	in the Visual SourceSafe (VSS) Explorer, you lose the connection to the project
	in the Visual Basic Editor. You receive an error similar to the following when
	you try to perform an action by using the Visual Source Code Control Add-in:
	
	  The current VBA Project cannot be found in current Source Safe database.
	  Would you like to remove this project from source code control?
	
	You then receive the following error message:
	
	  Object variable or With block variable not set
	
	RESOLUTION
	==========
	
	If you rename the VSS project back to the original name, you regain the
	connection. The original project name is stored in the VSSODE module of the
	current VBA project. To determine the original name, open the VSSODE.bas file in
	the VSS Explorer. Then, look for the line where <original_projectname> is
	the original name of the project:
	
	  ' SCC_Project_Name =$/<original_projectname>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and save a new workbook in Microsoft Excel.
	
	2. Press ALT+F11 to open the Visual Basic Editor.
	
	3. Use the Add-in Manager to load the VBA Source Code Control Add-in if it is
	  not already loaded.
	
	4. Click the VBA Source Code Control command on the Add-ins menu to add the
	  project to source code control.
	
	5. Leaving the Visual Basic Editor open, open the Visual SourceSafe Explorer.
	
	6. In the Visual SourceSafe Explorer, rename the project that you created in
	  step 4.
	
	7. Switch back to the Visual Basic Editor, and then try to check out an object
	  from the source code control project
	
	8. Click No when prompted to remove the project from Visual SourceSafe.
	
	NOTE: If you close and restart Excel after the project is renamed, you are
	prompted multiple times to remove the project from Visual SourceSafe when you
	reopen the Visual Basic Editor in the workbook that you created in step 4.
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kberrmsg kbdta modSSafe 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : :; WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
