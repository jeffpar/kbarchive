---
layout: page
title: "Q191723: BUG: DataGrid Column Appears To Be Missing"
permalink: /kb/191/Q191723/
---

## Q191723: BUG: DataGrid Column Appears To Be Missing

	Article: Q191723
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Visible property of the left-most column in a DataGrid is set to False,
	the column will not become visible after its visible property is reset to True.
	This problem does not occur with other columns in the grid. If the grid has a
	horizontal scroll bar, the left-most column can be scrolled to. If the grid does
	not have a horizontal scroll bar, the left most column cannot be seen.
	
	RESOLUTION
	==========
	
	Set the LeftCol Property of the DataGrid to 0, after you set the Visible
	Property to True.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an Jet 3.5 (Access97) database that contains a table with two fields
	  in it.
	
	2. Create a Standard EXE Project in Visual Basic. Form1 is created by default.
	
	3. From Project/Components, select the "Microsoft ADO Data Control 6.0 (OLEDB)"
	  and "Microsoft DataGrid Control 6.0 (OLEDB)."
	
	4. Place an ADO Data Control and DataGrid on the Form.
	
	5. Insert the following code:
	
	        Private Sub Form_Load()
	          Adodc1.ConnectionString = "Provider=Microsoft.Jet.OLEDB.3.51; _
	          Data Source=c:\mydb.mdb"
	          Adodc1.RecordSource = "Select * from mytable"
	          Set DataGrid1.DataSource = Adodc1
	
	          DataGrid1.Columns(0).Visible = False
	          DataGrid1.Columns(0).Visible = True
	          'DataGrid1.LeftCol = 0  ' uncomment this line as workaround
	
	        End Sub
	
	6. Press the F5 key to run code and note that only the second column appears.
	
	Additional query words: kbCtrl kbVBp600bug kbdse kbDSupport kbVBp kbDataBinding
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
