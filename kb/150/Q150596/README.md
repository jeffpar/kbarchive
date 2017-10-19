---
layout: page
title: "Q150596: FIX: Error Message &quot;Variable is Not Found&quot; When Running Form"
permalink: /kb/150/Q150596/
---

## Q150596: FIX: Error Message &quot;Variable is Not Found&quot; When Running Form

	Article: Q150596
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp kbvfp300bBUG kbvfp500fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a form with a grid on it, the error message "Variable Is Not Found"
	appears. If you click OK, the form is displayed but the grid is empty. If you
	close the form and run it again, the error is not displayed. However, the grid
	is still empty.
	
	CAUSE
	=====
	
	The ControlSource property of the grid columns is set to a table field that is
	not open.
	
	WORKAROUND
	==========
	
	Open the table before running the form or add the table to the DataEnvironment
	of the form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	This behavior occurs because the grid columns have a ControlSource set to a
	field that cannot be found because the table has not been opened.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Create a new form.
	
	2. Add the Customer table from the \VFP\Samples\Data directory to the
	  DataEnvironment of the form.
	
	3. Drag the Cursor object from the DataEnvironment and drop it on the form to
	  create a grid.
	
	4. Set the following properties for the grid:
	
	  Grid1.ColumnCount = 2
	  Grid1.Column1.ControlSource = Cust_id
	  Grid1.Column2.ControlSource = Company
	
	5. Save and run the form. Note that the grid has information in it. Close the
	  form and modify it.
	
	6. Open the DataEnvironment, and delete the Cursor1 object. Save and run the
	  form.
	
	7. The error "Variable Is Not Found" is displayed.
	
	8. Click OK, and the form is displayed but the grid is empty.
	
	NOTE: If you close the form and run it again, you do not see the error message,
	but the grid is still empty. Running the form after exiting and restarting
	Visual FoxPro causes the error message to be displayed.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp kbvfp300bBUG kbvfp500fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
