---
layout: page
title: "Q190409: BUG: Font Changes After Open Stored Procedure in Data View"
permalink: /kb/190/Q190409/
---

## Q190409: BUG: Font Changes After Open Stored Procedure in Data View

	Article: Q190409
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbcode kbnokeyword kbVBp600bug kbGrpDSVBDB
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Data View Stored Procedure Design window, the font of the Data
	View window changes to the font of the Code window.
	
	RESOLUTION
	==========
	
	To restore the font, you have to exit Visual Basic and restart.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic and choose Standard EXE.
	
	2. Change the font of the Code window to better demonstrate the problem. From
	  the Tools menu, click Options. Select the second tab, Editor Format, then
	  change the font size to 12. Click OK to save the changes and exit.
	
	3. From the View menu, select Data View Window. This brings up the Data View
	  window.
	
	4. Right click Data Links, then select Add a Data Link. Provide the necessary
	  information to establish a connection to your data source, for example, SQL
	  Server. When this is done, DataLink1 is created in the Data View window
	
	5. Locate a stored procedure in DataLink1. Right-click the stored procedure and
	  select Design. This brings up the Stored Procedure Code Design window.
	
	6. At the same time, note that the font of the Data View tree changes to match
	  the font of the Code Design window.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbnokeyword kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
