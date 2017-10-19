---
layout: page
title: "Q156504: PRB: Intellidrop from View into Designer Causes Requeries"
permalink: /kb/156/Q156504/
---

## Q156504: PRB: Intellidrop from View into Designer Causes Requeries

	Article: Q156504
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Each time you drag and drop a field from a View to a Form or Report, the View is
	requeried.
	
	CAUSE
	=====
	
	The information for the view is not cached; it is dynamically retrieved as
	needed.
	
	WORKAROUND
	==========
	
	Issue the USE command to open the view first. Then when you drag and drop
	fields, Intellidrop is able to get the information from the view that is already
	open.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Testdata database in the Visual FoxPro Samples\Data folder.
	
	2. Create a new report.
	
	3. In the DataEnvironment of the report, add the Invoice view from the Testdata
	  database.
	
	4. Drag a field from the view in the DataEnvironment to the Report Design
	  Surface.
	
	5. Drag another field from the view in the DataEnvironment to the Report Design
	  Surface.
	
	When the first field is dragged, the view is prompted for a dStart_Date and
	dEnd_Date. When the second field is dragged, the view is prompted to the same
	query again.
	
	Here are the steps to a workaround for the above example:
	
	1. Open the Testdata database in the Visual FoxPro Samples\Data folder.
	
	2. In the Command window type USE Invoice to open the view.(You are prompted for
	  a dStart_Date and dEnd_Date.)
	
	3. Create a new Report.
	
	4. In the DataEnvironment of the Report, add the Invoice view from the TESTDATA
	  Database.
	
	5. Drag a field from the view in the DataEnvironment to the Report Design
	  Surface. Drag another field from the view in the DataEnvironment to the
	  Report.
	
	The view does not prompt for the query again and again as shown in the above
	example.
	
	NOTE: The dialog box prompts for a Date type value. If you enter the date as a
	text string "07/01/93" (without the quotation marks) an "Operator/operand type
	mismatch" error is received. You must enter the dates in the following manner:
	{07/01/93}
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
