---
layout: page
title: "Q267745: BUG: Hierarchical Flexgrid Row or Cell Selection Fails"
permalink: kb/267/Q267745/
---

## Q267745: BUG: Hierarchical Flexgrid Row or Cell Selection Fails

	Article: Q267745
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbVBp500bug kbVBp600bug kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Hierarchical Flexgrid control does not properly select rows or cells after
	it has been bound to an empty recordset and then rebound to a recordset that
	contains data. When you click a cell or a row, no row or cell is selected, or a
	row or cell that was not clicked is selected. When you use the EnterCell
	property of the grid to display the value in the cell you clicked, a value from
	a cell located above the cell you clicked displays instead.
	
	RESOLUTION
	==========
	
	To work around this problem, test for the condition of an empty recordset prior
	to binding a recordset to the Hierarchical Flexgrid control. If the recordset is
	empty, disable the grid and do not set the empty recordset to the Datasource
	property. Later, if a recordset is retrieved that does contain data, enable the
	grid and bind the control as usual.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	The same behavior occurs when you filter the recordset when it produces an empty
	recordset.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project and set a reference to the
	  Microsoft ActiveX Data Objects Library. Form1 is created by default.
	
	2. From the Project menu, click Components. In the Components dialog box, select
	  the Microsoft Hierarchical Flexgrid component. Place an instance of the
	  Hierarchical Flexgrid control onto Form1.
	
	3. Copy and then paste the following code into Form1:
	
	  Private Sub Form_Load()
	      Dim rs As ADODB.Recordset, cn As ADODB.Connection
	      Set rs = New ADODB.Recordset
	      Set cn = New ADODB.Connection
	      
	      ' Open a connection.
	      cn.Open "Driver={Microsoft Access Driver (*.mdb)};DBQ=C:\Program Files\Microsoft Visual Studio\VB98\nwind.mdb"
	      'cn.Open "DSN=NorthWind"  'Using DSN to Nwind.mdb
	      
	      ' Open an empty recordset and bind it to the grid.
	      rs.Open "Select * from Employees where EmployeeId = 0", cn
	      Set MSHFlexGrid1.DataSource = rs
	      
	      ' Now close the recordset and reopen it and bind it again to the grid.
	      rs.Close
	      rs.Open "Select * from Employees", cn
	      Set MSHFlexGrid1.DataSource = rs
	  End Sub
	
	  Private Sub MSHFlexGrid1_EnterCell()
	    Debug.Print MSHFlexGrid1.Text
	  End Sub
	
	NOTE: You might need to modify the connection string and query for this example
	to work properly. This example uses the sample Northwind database that is
	installed by default with Microsoft Access.
	
	4. Run the project, and try to click a cell in the grid. The cell is not
	  properly selected, and either no cells are selected, or a random cell is
	  selected instead. Also, note that the Debug window displays a value from a
	  cell that is located above the clicked cell.
	
	
	Additional query words: empty recordset
	
	======================================================================
	Keywords          : kbVBp500bug kbVBp600bug kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
