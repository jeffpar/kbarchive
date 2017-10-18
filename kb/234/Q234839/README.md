---
layout: page
title: "Q234839: MOD2000: Admin Can't Check In File with VBA Source Code Control"
permalink: kb/234/Q234839/
---

## Q234839: MOD2000: Admin Can't Check In File with VBA Source Code Control

	Article: Q234839
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Admin of a Microsoft Visual SourceSafe database cannot check in files that
	are checked out by another user. If you are an Admin and try to use the VBA
	Source Code Control Add-in to check in or undo the check out of an object that
	another user has checked out, you receive the following error message:
	
	  The selected item is not checked out to you.
	
	If you try to perform the check in operation in Visual SourceSafe Explorer, you
	receive the following error message:
	
	  File Not Found.
	
	CAUSE
	=====
	
	The VBA Source Code Control Add-in does not support the additional privileges
	that Visual SourceSafe gives the Admin user. Also, the add-in does not create a
	separate file in the working folder of the source code control project when an
	object is checked out.
	
	RESOLUTION
	==========
	
	The Admin user can undo the check out in Visual SourceSafe Explorer, but all of
	the user's changes are lost.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create and save a new workbook in Microsoft Excel 2000.
	
	2. Open the Visual Basic Editor (press ALT+F11).
	
	3. Load the VBA Source Code Control Add-in, if it is not already loaded.
	
	  NOTE: To load the VBA Source Code Control Add-in, click Add-in Manager on the
	  Add-ins menu, select the VBA Source Code Control Add-In, and then select one
	  of the Load Behavior options.
	
	4. Start the VBA Source Code Control Add-in, and then log on to Visual
	  SourceSafe as a user other than Admin.
	
	5. Add the workbook and the sheets that it contains to source code control.
	
	6. Use the VBA Source Code Control Add-in to check out Sheet1. Make
	  modifications to Sheet1, and then save your changes.
	
	7. Quit and restart Excel.
	
	8. Open the Visual Basic Editor, and log into Visual SourceSafe as Admin.
	
	9. Try to check in Sheet1. Note that you receive the following error message:
	
	  The selected item is not checked out to you.
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : :; WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
