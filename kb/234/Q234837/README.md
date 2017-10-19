---
layout: page
title: "Q234837: MOD2000: Renamed Objects Lose Connection to VSS"
permalink: /kb/234/Q234837/
---

## Q234837: MOD2000: Renamed Objects Lose Connection to VSS

	Article: Q234837
	Product(s): Microsoft SourceSafe
	Version(s): ; WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 02-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 2000 Developer 
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you rename an object that you have checked out by using the VBA Source
	Code Control Add-in, you receive the following error message:
	
	  457: This key is already associated with an element of this collection.
	
	If you then try to check the object in, you receive the following message:
	
	  You do not have any files checked out from Source Code Control.
	
	If you then refresh the Source Code Control (SCC) Status list, you see that the
	object is renamed, but also that it is removed from source code control.
	
	RESOLUTION
	==========
	
	To regain the Source Code Control connection, rename the object back to its
	original name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Install Microsoft Office 2000 Professional.
	
	2. Install Microsoft Visual SourceSafe 6.0, which is available on the Microsoft
	  Office 2000 Developer CD.
	
	3. Open Visual SourceSafe Explorer, and then create a new SourceSafe database
	  named "test" (without the quotation marks).
	
	4. Close Visual SourceSafe Explorer.
	
	5. Open Microsoft Excel 2000, and then save the current workbook as Book1.xls.
	
	6. Open the Visual Basic Editor by pressing ALT+F11.
	
	7. Click the Add-ins menu. If you do not have the VBA Visual Source Code Control
	  add-in installed, you can load it by clicking Add-in Manager on the Add-ins
	  menu, clicking VBA Source Code Control, and then clicking to select the
	  Load/Unload check box.
	
	8. Create a new project, and then save it.
	
	9. On the Add-ins menu, click VBA Source Code Control, and then add the current
	  project to Microsoft Visual SourceSafe.
	
	10. Check out Sheet1.
	
	11. In the Properties window, modify the (Name) property to rename Sheet1 to
	  "NewName" (without the quotation marks). Note that after you enter the name,
	  you receive the following message:
	
	  457: This key is already associated with an element of this collection.
	
	12. Click OK and try to check Sheet1 into Visual Source Safe. Note that you
	  receive the following message:
	
	  You do not have any files checked out from Source Code Control.
	
	13. On the Add-ins menu, click VBA Source Code Control, and then click Refresh
	  File Status. Note that the sheet is renamed to NewName and is no longer
	  under Source Code Control.
	
	14. However, if you then open the Visual SourceSafe Explorer, Sheet1 is still
	  checked out and maintains the complete object history.
	
	  At this point, if you rename the NewName sheet to Sheet1, the connection to
	  Source Code Control is restored.
	
	Additional query words: pra
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbSSafeSearch kbOfficeSearch kbAudDeveloper kbOffice2000Search kbOffice2000 kbSSafe600 kbOffice2000DevSearch
	Version           : :; WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
