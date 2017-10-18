---
layout: page
title: "Q303105: PRB: Cursor Moves to First Column If You Use Keyboard to Scroll"
permalink: kb/303/Q303105/
---

## Q303105: PRB: Cursor Moves to First Column If You Use Keyboard to Scroll

	Article: Q303105
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0 SP5
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB kbDSupport kbVS600sp5
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a DataGrid control is bound to a multiple-column recordset, when you position
	the cursor in any column after the second column and scroll down past the
	visible area, the cursor shifts from the nth column, at which it was positioned,
	into the first column.
	
	If the cursor appears in a column that does not allow the first column to be
	seen, the cursor apparently dissapears because the cursor changes into the first
	column, which is not visible. If you scroll left to the first column, the cursor
	becomes visible.
	
	This problem only occurs with the Visual Basic 6.0 Service Pack 5 DataGrid
	control.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Data Project in Visual Basic. frmDataEnv is created by default.
	
	2. Add an ADO Data Control and a DataGrid control to frmDataEnv.
	
	3. Set the ConnectionString property of the ADO Data Control to point to a valid
	  Northwind database.
	
	4. Set the ADODC1 RecordSource property to point to the Orders table.
	
	5. Leave all the defaults in the DataGrid. Point its Datasource property to
	  ADODC1.
	
	6. Run the project.
	
	7. Click on the OrderDate column of the first row in the DataGrid. You can also
	  click on any other column except the first column to reproduce the behavior.
	
	8. Use the arrow keys to scroll down. Notice that when you pass the last visible
	  row, the cursor shifts from the OrderDate (or the current column) to the
	  first column.
	
	Additional query words: datagrid field move cursor cell
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbDSupport kbVS600sp5 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600SP5
	Version           : :6.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	
