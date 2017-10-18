---
layout: page
title: "Q177145: PRB: Error Changing DynamicCurrentControl of Grid Column"
permalink: kb/177/Q177145/
---

## Q177145: PRB: Error Changing DynamicCurrentControl of Grid Column

	Article: Q177145
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you switch between controls in a grid's column at run-time the following
	error message appears:
	
	  Expression is invalid, use a valid expression for
	  DynamicCurrentControl.
	
	RESOLUTION
	==========
	
	When you set or change the DynamicCurrentControl property of a grid's Column,
	use '"combo1"' (an additional pair of quotes around the control string) instead
	of "combo1." Here's an example:
	
	     ThisForm.Grid1.Column1.DynamicCurrentControl = '"combo1"'
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a database, named Data1, and add a new table, Table1, with two fields.
	  The first field will be ID(C10) and the second field will be Name(C20). Next,
	  insert some records into the table.
	
	2. Create a new form and include Table1 in its DataEnvironment. Drag the table
	  onto the form to create a grid control based on the table.
	
	3. Add a combo box control in Grid.Column1.
	
	4. Add a command button to the form, and type the following code in the Click
	  event:
	
	        ThisForm.Grid1.Column1.DynamicCurrentControl = "combo1"
	        ThisForm.Refresh
	
	5. Run the form and click the command button to produce the error:
	
	        Expression is invalid, use a valid expression for
	        DynamicCurrentControl.
	
	  NOTE: Using views causes the same error.
	
	Additional query words: DynamicCurrentControl grid combobox views
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
