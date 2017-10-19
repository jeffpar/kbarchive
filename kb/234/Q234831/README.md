---
layout: page
title: "Q234831: MOD2000: Deleting VSSODE Module Damages VSS Control Connection"
permalink: /kb/234/Q234831/
---

## Q234831: MOD2000: Deleting VSSODE Module Damages VSS Control Connection

	Article: Q234831
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta modSSafe
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you delete the VSSODE module from a project that is under source code
	control, the source code control menu options change so that it looks like the
	project is no longer under source code control, and you cannot re-establish the
	connection to the Visual SourceSafe project. You do not receive a warning if you
	choose to delete the VSSODE module.
	
	CAUSE
	=====
	
	The VSSODE module contains information that is essential to maintaining your
	application under source code control. If you delete this module, you lose the
	connection to the objects in the Visual SourceSafe project.
	
	RESOLUTION
	==========
	
	Do not delete the VSSODE module. It is impossible to reconnect to the original
	project in Visual SourceSafe if this file is deleted.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new workbook in Microsoft Excel and save it.
	
	2. Press ALT+F11 to open the Visual Basic Editor.
	
	3. If the VBA Source Code Control add-in is not already loaded, use the Add-in
	  Manager to load it.
	
	4. On the Add-ins menu, point to VBA Source Code Control, and then click "Add
	  Project to SourceSafe".
	
	5. In the Visual Basic Editor Project Explorer, delete the VSSODE module.
	
	Note that the Source Code Control menu option is available, but it looks like the
	project is not under source code control.
	
	Additional query words: pra OFF2000
	
	======================================================================
	Keywords          : kbdta modSSafe 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbOffice2000DevSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
