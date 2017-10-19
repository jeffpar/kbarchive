---
layout: page
title: "Q306886: BUG: Split Causes DataGrid to Repaint Itself Continuously"
permalink: /kb/306/Q306886/
---

## Q306886: BUG: Split Causes DataGrid to Repaint Itself Continuously

	Article: Q306886
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB kbMDACNoSweep
	Last Modified: 06-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Splits property, if you set the ScrollBar property to
	dbgAutomatic, the DataGrid control may repaint itself continuously.
	
	This behavior causes CPU utilization to remain at 100 percent. Under certain
	circumstances, you receive the following error message:
	
	  Run-time Error 28 "Out of Stack Space"
	
	The application quits, and the Visual Basic Integrated Development Environment
	(IDE) closes unexpectedly.
	
	RESOLUTION
	==========
	
	To work around this problem, set the ScrollBar property for each Splits property
	to dbgBoth.
	
	If you set ScrollBar to dbgAutomatic, dbgNone, or dbgVertical, the grid is
	displayed and continuously repainted until you receive the "Out of Stack Space"
	error message. If you use the dbgHorizontal setting, you do not receive the same
	error message consistently. If you use the dbgHorizontal setting, sometimes the
	CPU utilization remains at 100 percent.
	
	You can use the property pages of the DataGrid control to change the ScrollBar
	property at design time. You can also set this property in code before you
	display the DataGrid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, click References, and select the Microsoft ActiveX Data
	  Objects Library check box.
	
	3. On the Project menu, click Components, and then select the following
	  components:
	
	   - Microsoft DataGrid Control 6.0 (OLEDB)
	   - Microsoft ADO Data Control 6.0 (OLEDB)
	
	4. Place an ADO Data Control on Form1. Adodc1 is added by default. Set the
	  following properties for Adodc1:
	
	  ConnectionString: Type a valid Northwind database connection
	  CursorLocation: adUseClient
	  RecordSource: SELECT * FROM Employees
	
	5. Place a DataGrid on Form1. DataGrid1 is added by default. Set the following
	  properties for DataGrid1:
	
	  DataSource: Adodc1
	
	6. Place a Command button on Form1. Command1 is added by default. Add the
	  following code to Form1:
	
	   Option Explicit
	
	     Private Sub Command1_Click()
	        Dim I As Integer
	        
	        With DataGrid1
	           For I = 1 To .Splits(0).Columns.Count - 1
	              .Splits(0).Columns(I).Visible = False
	           Next I
	           .Splits.Add (1)
	           '.Splits(0).ScrollBars = dbgBoth
	           
	           .Splits(1).Columns(0).Visible = False
	           For I = 1 To .Splits(1).Columns.Count - 1
	              .Splits(1).Columns(I).Visible = True
	           Next I
	           
	           '.Splits(1).ScrollBars = dbgBoth
	        End With
	     End Sub
	
	     Private Sub Form_Load()
	        Command1.Caption = "Show Split"
	     End Sub
	
	7. Run the code. Click Show Split to split the grid.
	
	  Notice that CPU utilization is 100 percent, and the DataGrid flickers. If you
	  try to size the grid, the scroll bar may redraw incorrectly. You receive the
	  above-mentioned error message, and the Visual Basic IDE stops responding and
	  then closes unexpectedly.
	
	8. Stop the application, and uncomment the two lines that explicitly set the
	  ScrollBar property of each of the splits.
	
	  '.Splits(0).ScrollBars = dbgBoth
	
	  -and-
	
	  '.Splits(1).ScrollBars = dbgBoth
	
	9. Run the application again. Notice that the grid is split properly.
	
	Additional query words: CPU 100% Run-time Error 28
	
	======================================================================
	Keywords          : kbGrpDSVBDB kbMDACNoSweep 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
