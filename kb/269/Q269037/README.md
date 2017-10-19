---
layout: page
title: "Q269037: BUG: DataCombo Loses BoundText When Recordset Re-Queried"
permalink: /kb/269/Q269037/
---

## Q269037: BUG: DataCombo Loses BoundText When Recordset Re-Queried

	Article: Q269037
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB kbDSupport kbATM kbmdac270 kbado270
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you re-query a recordset, then binding a new recordset or otherwise
	resetting the RowSource property on a DataCombo control causes the BoundText
	property of a DataCombo to return the Text property.
	
	RESOLUTION
	==========
	
	To work around the problem, set the DataCombo.Text property to itself as
	follows:
	
	DataCombo1.Text = DataCombo1.Text
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form in the Visual Basic form editor with three command buttons, a
	  DataCombo control, the ADO data control, and a ListBox control.
	
	2. Add the following code to the form:
	
	  Private Sub Command1_Click()
	    ' First show that the BoundText displays a number
	    List1.AddItem DataCombo1.BoundText
	  End Sub
	  Private Sub Command2_Click()
	    ' Now it displays a name!
	    ' This is where we break the bindings and display the results
	    ' When command1 executes DataCombo1 will show datacombo1.text 
	    ' instead of datacombo1.boundtext.
	    Adodc1.Refresh
	    Command1_Click
	  End Sub
	  Private Sub Command3_Click()
	    ' Here we implement the fix.
	    DataCombo1.Text = DataCombo1.Text
	    Command1_Click
	  End Sub
	  Private Sub Form_Load()
	    ' You may need to change the path in the following
	    ' line to point to NWIND.MDB
	    Adodc1.ConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;" & _
	      "Data Source=E:\Program Files\Microsoft Visual Studio\VB98\NWIND.MDB"
	    Adodc1.RecordSource = "Employees"
	    DataCombo1.BoundColumn = "EmployeeID"
	    DataCombo1.ListField = "LastName"
	    Set DataCombo1.RowSource = Adodc1
	    Set DataCombo1.DataSource = Adodc1
	    DataCombo1.Text = "1. Select a name"
	    Command1.Caption = "2. List BoundText"
	    Command2.Caption = "3. Requery Recordset"
	    Command3.Caption = "4. Reset BoundText"
	  End Sub
	
	3. Run the program, and follow the numbered captions.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB kbDSupport kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : WINDOWS:2.5,2.6,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
