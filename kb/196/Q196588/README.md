---
layout: page
title: "Q196588: BUG: Picture Field Dropped as Text Box on Data Report"
permalink: kb/196/Q196588/
---

## Q196588: BUG: Picture Field Dropped as Text Box on Data Report

	Article: Q196588
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbVBp600bug kbDataEnv kbGrpDSVBDB
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a Picture field on a DataReport, it appears as a text box
	instead of an image box. When you run the report, the picture field displays as
	a special character.
	
	Similar behavior occurs with Binary Large Object (BLOB) fields.
	
	CAUSE
	=====
	
	You cannot drop a Picture field as an image box, because image controls are not
	bound controls.
	
	An error message should have occurred in this situation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard .exe project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Project menu, choose Add Data Report. Next, from the Project menu,
	  choose Add Data Environment.
	
	3. Set the Connection property of the Data Environment to a data source that
	  contains a picture field. (The employee table in the NWIND database works in
	  this example).
	
	4. Add a Command Object to the Data Environment and set the SQL statement to the
	  following:
	
	        Select * from Employees
	
	5. Insert a picture field and text field onto the Data Report.
	
	  Notice that the picture field is inserted as a text field. If you run the
	  program no error message displays, but the picture field appears as a special
	  character in the report.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbVBp600bug kbDataEnv kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
