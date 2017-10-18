---
layout: page
title: "Q244801: PRB: Run-time Bound ADO Recordset Skips Second Record"
permalink: kb/244/Q244801/
---

## Q244801: PRB: Run-time Bound ADO Recordset Skips Second Record

	Article: Q244801
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbADO200 kbADO201 kbADO210 kbDataBinding kbVBp600 kbDataEnv kbGrpDSVBDB kbGrpDSMDAC kbD
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.01, 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a recordset with a server-side forward-only, or dynamic cursor and
	binding to a textbox at run-time it is possible for the recordset to skip the
	second record. The textbox will initially display the first record. A MoveNext
	causes it to display the third record. With the dynamic cursor, a MovePrevious
	will then display the second record correctly. This behavior is only exhibited
	immediately after binding or after a ReQuery. This behavior is also shown if the
	textbox is bound from the Data Environment.
	
	RESOLUTION
	==========
	
	The recordset can be displayed correctly by reading one of the fields prior to
	binding to the text box. For a run-time bound control, use the following code
	prior to binding the textbox.
	
	  Dim strTemp as String
	  strTemp = rs(0)         'rs is the Recordset
	
	When using the Data Environment, the only way around this problem is to bind the
	textbox at run-time and use the workaround earlier. When you want to call the
	ReQuery method, you should re-bind the recordset. The following code shows the
	workaround with ReQuery.
	
	  rs.ReQuery
	  Dim strTemp as String
	  strTemp = rs(0)
	  Set Text1.DataSource = rs
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a New .exe Project.
	
	2. Add the Microsoft ActiveX Data Objects 2.x Library to your project.
	
	3. Add a Textbox (Text1) and two Buttons (Command1 and Command2) to your form.
	
	4. Add the following code to your project.
	
	  Option Explicit
	
	  Dim rs As Recordset
	
	  Private Sub Command1_Click()
	     With rs
	        .MoveNext
	        If .EOF Then
	           .MoveLast
	        End If
	     End With
	  End Sub
	
	  Private Sub Command2_Click()
	     With rs
	        .MovePrevious
	        If .BOF Then
	           .MoveFirst
	        End If
	     End With
	  End Sub
	
	  Private Sub Form_Load()
	     Dim cn As Connection
	     Set cn = New Connection
	     cn.CursorLocation = adUseServer
	     cn.Open "DSN=Northwind"
	     
	     Set rs = New Recordset
	     Set rs.ActiveConnection = cn
	     rs.CursorType = adOpenDynamic
	     rs.Open "SELECT EmployeeID FROM Employees ORDER BY EmployeeID"
	     
	     'Uncomment the next two lines to fix problem
	     'Dim strTemp As String
	     'strTemp = rs("EmployeeID")
	     
	     Set Text1.DataSource = rs
	     Text1.DataField = "EmployeeID"
	     
	     Command1.Caption = "Next"
	     Command2.Caption = "Previous"
	  End Sub
	
	5. Run the Project. The textbox displays the first record.
	
	6. Click Next. The textbox will now show the third record.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO200 kbADO201 kbADO210 kbDataBinding kbVBp600 kbDataEnv kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC250 kbADO250 kbMDAC260 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO201 kbADO200 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.0,2.01,2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
