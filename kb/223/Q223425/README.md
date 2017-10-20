---
layout: page
title: "Q223425: PRB: I-Beam Cursor Doesn't Appear When Adding New Record in Grid"
permalink: /kb/223/Q223425/
---

## Q223425: PRB: I-Beam Cursor Doesn't Appear When Adding New Record in Grid

{% raw %}

	Article: Q223425
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbVBp600 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to add a new row in the DataGrid, you might not be able to see the
	flashing I-beam Cursor in the new row. The same symptoms can occur when trying
	to edit the contents of any cell in the grid.
	
	CAUSE
	=====
	
	The row height of the DataGrid is too small to display the I-beam Cursor in the
	Grid.
	
	RESOLUTION
	==========
	
	You need to adjust the row height of the grid to be 195.0236 or more in order to
	be able to view the cursor. This can be done at run-time or design-time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic 6.0 project. Form1 is created by default.
	
	2. Under Components on the Project menu, check the Microsoft ADO Data control
	  (OLEDB) and Microsoft DataGrid control (OLEDB). Add an ADO Data control, and
	  a DataGrid control to Form1.
	
	3. Set the appropriate properties for the ADO Data control to connect with the
	  Server.
	
	4. Set the DataSource property for the DataGrid control to ADODC1.
	
	5. Right-click the DataGrid, click on Properties (or Custom property), and click
	  the General tab. Select the AllowAddNew property check box.
	
	6. In the RowHeight text box, type "180.2835" (without the quotation marks).
	
	7. Right-click the Datagrid control, click the Retrieve Fields menu option, and
	  then click YES in the message box.
	
	8. Run the project or press the DataGrid: The I-beam Cursor does not show up
	  when adding a new record in the F5 key.
	
	9. When you go to add a new a record, take note of the I-Beam cursor.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Ammar Abuthuraya, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
