---
layout: page
title: "Q139865: FIX: Programmatic Change in Grid Does Not Update ControlSource"
permalink: /kb/139/Q139865/
---

## Q139865: FIX: Programmatic Change in Grid Does Not Update ControlSource

	Article: Q139865
	Product(s): Microsoft FoxPro
	Version(s): 3.00 5.00
	Operating System(s): 
	Keyword(s): kbcode kbvfp kbvfp500fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying programmatically to change the value in a text box that is contained
	in a grid, you discover that the underlying data is not updated.
	
	WORKAROUND
	==========
	
	To work around the problem, use a REPLACE statement to change the underlying
	data, and use the REFRESH method to update the grid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro 5.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Open the Testdata.dbc database found in the \Vfp\Samples\Data directory.
	
	2. Create a new form.
	
	3. Add the Customer table from the Testdata database to the Data Environment of
	  the form.
	
	4. Add a grid by dragging the Grid icon from the Form Controls toolbar onto the
	  form.
	
	5. Set the RecordSource property of the grid to the Customer table.
	
	6. Add a command button to the form.
	
	7. Add the following code to the Command1 Click event procedure:
	
	        thisform.grid1.column2.text1.value='Hello World'
	        thisform.grid1.refresh
	
	8. Save the form as Test.scx, and run it.
	
	9. Click the Command1 button. You will notice that the grid does not have the
	  new value in the Company field.
	
	Place the following code in the Command1 Click event to work around the problem
	and place the correct value in Grid1:
	
	     REPLACE (thisform.grid1.column2.text1.controlsource) WITH 'Hello World'
	     thisform.grid1.refresh
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbvfp kbvfp500fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500
	Version           : 3.00 5.00
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
