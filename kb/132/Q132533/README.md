---
layout: page
title: "Q132533: PRB: Form.SaveAs Appears to Change Order of Added Grid Column"
permalink: /kb/132/Q132533/
---

## Q132533: PRB: Form.SaveAs Appears to Change Order of Added Grid Column

{% raw %}

	Article: Q132533
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Form.Grid.AddColumn() method allows you to add a column at run time to the
	grid, and have that column visually inserted between two existing columns. If
	the Form.SaveAs method is then used to save the form, and the form is modified
	by using the Form Designer, the newly inserted column appears at the end of the
	list of columns.
	
	CAUSE
	=====
	
	This is by design. The ColumnOrder property of the new column is set to one more
	than the current number of grid columns. When the form is saved and reopened,
	the ColumnOrder property affects the display order of the columns in the grid.
	
	RESOLUTION
	==========
	
	After adding a column through the AddColumn() method, set the ColumnOrder
	property of the new column prior to saving the form. The preexisting columns
	will have their ColumnOrder property incremented by one so that they are
	properly displayed when the form is reopened.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form in the Form Designer. Add the Customer and Orders tables
	  from \VFP\SAMPLES\MAINSAMP\DATA\TASTRADE.DBC database to the data environment
	  of the form.
	
	2. Drag the Cust_id field from the Customer table to the form. Drag the Orders
	  table to the form.
	
	3. Set the following grid properties:
	
	     Grid1.ColumnCount = 2
	     Grid1.Column1.ControlSource = Orders.Order_id
	     Grid1.Column2.ControlSource = Orders.Order_date
	
	4. Save the form as frmGrid, and run the form.
	
	5. Issue the following commands in the Command window:
	
	     frmGrid.Grid1.AddColumn(2)
	     frmGrid.Grid1.Column3.Header1.Caption = "New"
	     frmGrid.SaveAs("frmNew")
	
	6. Note the position of the column with the header of [ASCII 147]New." Close the
	  instance of frmGrid and open frmNew in the Form Designer.
	
	7. Notice that the column with the New header, which appeared as the second
	  column when the form was running, now appears as the third column of the grid
	  in the Form Designer.
	
	Example Resolution
	------------------
	
	To resolve the problem, insert the following line of code prior to the
	frmGrid.SaveAs() line in step 5:
	
	     frmGrid.Grid1.Column3.ColumnOrder = 2
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
