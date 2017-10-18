---
layout: page
title: "Q229272: FIX: Datacombo Returns -2147217848 (80040e4e) Change Canceled"
permalink: kb/229/Q229272/
---

## Q229272: FIX: Datacombo Returns -2147217848 (80040e4e) Change Canceled

	Article: Q229272
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.5,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO250 kbADO260 kbMDACNoSweep
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a DataCombo control, if the DataField property of the DataCombo is
	bound to a numeric data type a problem may occur under the following
	circumstances:
	
	  The user clicks the combo box and moves the mouse over the entries in the
	  drop-down portion of the combo box but does NOT choose an item from the list.
	  The user then clicks another control so that the DataCombo loses focus and an
	  attempt is made to update the underlying data source specified in the
	  DataField property.
	
	This action fails because the Text property of the combo is an empty string
	(non-numeric) and the bound field is a numeric type. In this case the following
	error message is returned:
	
	  -2147217848 (80040e4e) The change was canceled during notification; no
	  columns are changed.
	
	RESOLUTION
	==========
	
	To work around this error check the Text property of the Datacombo. If it is
	blank, cancel the update to the underlying records. This work around is
	demonstrated in the code sample in the MORE INFORMATION section.
	
	STATUS
	======
	
	This problem was fixed in Visual Basic 6.0 Service Pack 4 (SP4).
	
	For additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project.
	
	2. Choose Components from the Project menu and then add a reference to Microsoft
	  Datalist Controls 6.0 (OLEDB). Choose References from the Project menu and
	  check Microsoft Active Data Objects.
	
	3. Add a regular text box and a Datacombo to the default form.
	
	4. Paste the following code into the default form:
	
	  Private rsRowsource As ADODB.Recordset
	  Private rsDataSource As ADODB.Recordset
	  Private Sub DataCombo1_Validate(Cancel As Boolean)
	      On Error Resume Next
	      
	  '    Uncomment this code as a workaround 
	  '---------------------------------------
	  '    If DataCombo1.Text = "" Then
	  '        rsDataSource.Cancel
	  '        rsDataSource.Move 0
	  '        Exit Sub
	  '
	  '    End If
	
	      rsDataSource.Move 0
	      MsgBox Err.Number & vbCrLf & Err.Description
	
	  End Sub
	  Private Sub Form_Load()
	      
	      Set rsRowsource = New ADODB.Recordset
	      rsRowsource.Fields.Append "ID", adInteger
	      rsRowsource.Fields.Append "Descr", adVarWChar, 255
	      rsRowsource.Open
	      
	      For x = 1 To 5
	          rsRowsource.AddNew Array("ID", "Descr"), Array(x, "Descr" & Str(x))
	      Next x
	      
	      Set rsDataSource = New ADODB.Recordset
	      rsDataSource.Fields.Append "ID", adInteger
	      rsDataSource.Fields.Append "Foreign_ID", adInteger
	      rsDataSource.Open
	          
	      DataCombo1.ListField = rsRowsource(1).Name
	      DataCombo1.DataField = rsDataSource(1).Name
	      DataCombo1.BoundColumn = rsDataSource(0).Name
	      Set DataCombo1.RowSource = rsRowsource
	      Set DataCombo1.DataSource = rsDataSource
	
	      rsDataSource.AddNew
	      
	  End Sub
	
	5. Run the project. Click the DataCombo and move the mouse over the selections;
	  however, do not select one.
	
	6. Now click the other Textbox control so that the DataCombo loses focus. You
	  will see the preceding error message display. Uncomment the commented lines
	  of code to see the workaround.
	
	REFERENCES
	==========
	
	For more information on the DataCombo control, please see the Visual Basic 6.0
	On-line help.
	
	Additional query words: datacombo dropdown
	
	======================================================================
	Keywords          : kbCtrl kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO250 kbADO260 kbMDACNoSweep 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO250 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :2.0,2.1,2.5,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
