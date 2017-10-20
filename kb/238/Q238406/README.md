---
layout: page
title: "Q238406: PRB: Resetting DataCombo RowSource Resets BoundColumn Property"
permalink: /kb/238/Q238406/
---

## Q238406: PRB: Resetting DataCombo RowSource Resets BoundColumn Property

{% raw %}

	Article: Q238406
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP5
	Operating System(s): 
	Keyword(s): kbCtrl kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO260 kbATM kbmdac2
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you programmatically reset the RowSource property of a Visual Basic 6.0
	DataCombo or DataList control, the BoundColumn property is reset so that it is
	the same as the ListField property. As a result, incorrect data may be inserted
	into the Data Source record.
	
	RESOLUTION
	==========
	
	To resolve this problem, explicitly set the DataCombo's BoundColumn property to
	the correct field name. Then, assign the DataCombo's Text property back to
	itself (that is, set the Text property equal to the Text property).
	
	MORE INFORMATION
	================
	
	When you set the RowSource property of the DataCombo control, it resets the
	BoundColumn property to the same field name as the ListField property. You can
	see this in the DataCombo's Properties window at design time. When you add a
	DataCombo to a form and set the RowSource, RowMember, and ListField properties,
	the BoundColumn property initially takes on the same field name as the ListField
	property. The same behavior occurs at run time if you reset the RowSource
	property in code.
	
	The following sample application demonstrates the problem and the workaround.
	
	Steps to Reproduce:
	-------------------
	
	1. In Microsoft Visual Basic 6.0, create a new Standard EXE project.
	
	2. On the Project menu, click Components, and select the following controls:
	
	   - Microsoft ADO Data Control 6.0 (OLEDB)
	
	   - Microsoft DataList Controls 6.0 (OLEDB)
	
	3. Place the following controls onto Form1:
	
	   - ADO Data Control
	     Name: ADODC1
	     CommandType: adCmdTable
	     ConnectionString: Provider=Microsoft.Jet.OLEDB.4.0;Data Source=Nwind.MDB
	     RecordSource: Customers
	
	   - DataCombo
	     Name: DataCombo1
	     RowSource: ADODC1
	     ListField: CompanyName
	     BoundColumn: CustomerID (note that CompanyName is the default)
	
	   - Command Button
	     Name: Command1
	
	   - Command Button
	     Name: Command2
	
	4. In Form1's Code window, paste the following code:
	
	  Private Sub Command1_Click()
	    MsgBox "Text: " & DataCombo1.Text & ", BoundText: " & DataCombo1.BoundText
	  End Sub
	
	  Private Sub Command2_Click()
	    With DataCombo1
	      Set .RowSource = Adodc1.Recordset
	  '    .BoundColumn = "CustomerID"
	  '    .Text = .Text
	    End With
	  End Sub
	
	5. Run the project. In the DataCombo, select a CompanyName.
	
	6. Click Command1. The CompanyName is displayed in the Text property, and the
	  5-letter CustomerID is displayed in the BoundText property.
	
	7. Click Command2 to programmatically change the RowSource property. Click
	  Command1 again. The BoundText property now displays the CompanyName instead
	  of the CustomerID.
	
	8. End the project. Uncomment the two lines in Command2_Click event procedure to
	  reset the BoundColumn and Text properties in code.
	
	9. Run the project. Click Command1, click Command2, and then click Command1. The
	  BoundText property now displays the CustomerID even after you click Command2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbDataBinding kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP5
	Version           : :6.0,6.0 SP3,6.0 SP5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
