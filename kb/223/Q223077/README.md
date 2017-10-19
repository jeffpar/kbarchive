---
layout: page
title: "Q223077: FIX: VB 6.0 Adding Split to a DataGrid May Cause Error"
permalink: /kb/223/Q223077/
---

## Q223077: FIX: VB 6.0 Adding Split to a DataGrid May Cause Error

	Article: Q223077
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVB
	Last Modified: 25-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a Split to a DataGrid generates the following error when the DataGrid is
	bound to an ADO Data Control:
	
	  Run-time error '-2147417848 (80010108)':
	  Method 'DataSource' of object 'IDataGrid' failed
	
	The error occurs when the recordset is at BOF or at EOF or empty (both BOF and
	EOF) prior to binding the DataGrid.
	
	RESOLUTION
	==========
	
	There are two possible temporary workarounds:
	
	1. Put each newly-created DataGrid Split into a different ScrollGroup:
	
	  DataGrid1.Splits.Add 0
	  DataGrid1.Splits(0).ScrollGroup = 0
	  DataGrid1.Splits.Add 1
	  DataGrid1.Splits(1).ScrollGroup = 1
	
	  Note that this workaround applies to empty and non-empty recordsets.
	
	2. Move to a specific record (neither BOF nor EOF) in the ADO Data Control's
	  Recordset before binding:
	
	  Adodc1.Recordset.MoveFirst
	
	  Using this workaround, if the recordset were empty, you would modify your code
	  to bypass the code that adds Splits.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3. For more information
	about Visual Studio service packs, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	A Split object represents a split within a DataGrid control. Use splits to
	present your data in multiple vertical panes. The splits can scroll vertically
	together or independently of each other and display the same or different
	columns.
	
	The Splits collection contains all stored Split objects in a DataGrid control.
	
	To add a Split to a DataGrid at run-time, use the Add method of the Splits
	collection, together with a zero-based index:
	
	  DataGrid1.Splits.Add 0
	
	The ScrollGroup property is used to synchronize vertical scrolling between
	splits. All splits with the same ScrollGroup setting will be synchronized when
	vertical scrolling occurs within any one of them:
	
	  DataGrid1.Splits(0).ScrollGroup = 0
	
	Steps to Reproduce Behavior
	---------------------------
	
	This sample code uses the Northwinds database that comes with Visual Basic.
	
	1. Start Visual Basic 6.0. Create a Standard EXE project. Form1 is created by
	  default.
	
	2. Add the following Project Components:
	
	Microsoft ADO Data Control 6.0 (OLEDB)
	Microsoft DataGrid Control 6.0 (OLEDB)
	
	3. Add the following controls to Form1:
	
	1 - Microsoft ADO Data Control 6.0 (OLEDB)
	1 - Microsoft DataGrid Control 6.0 (OLEDB)
	
	4. Paste the following code into Form1's Code Window:
	
	  Private Sub Form_Load()
	     Dim strCn As String
	
	     strCn = "Provider=Microsoft.Jet.OLEDB.3.51;" & _
	             "Data Source=C:\Program Files\Microsoft Visual Studio\VB98\NWind.MDB"
	          
	     'Populate the ADO Data Control's Recordset
	     With Adodc1
	         .ConnectionString = strCn
	         .CursorLocation = adUseClient
	         .CursorType = adOpenStatic
	         .LockType = adLockOptimistic
	         .RecordSource = "SELECT * FROM Employees"
	         .Refresh
	     End With
	
	     'Move to BOF.
	      Adodc1.Recordset.MovePrevious
	     
	     'Add 2 splits to the DataGrid
	     DataGrid1.Splits.Add 0
	     DataGrid1.Splits.Add 1
	     
	     'Uncomment the next two lines per workaround 1 above.
	     'DataGrid1.Splits(0).ScrollGroup = 0
	     'DataGrid1.Splits(1).ScrollGroup = 1
	     
	     'Uncomment the next line per workaround 2 above.
	     'Adodc1.Recordset.MoveFirst
	     
	     'Bind the DataGrid to the ADO Data Control
	     Set DataGrid1.DataSource = Adodc1
	
	  End Sub
	
	5. To test, run the project, note the error, and end the project.
	
	6. For workaround 1, uncomment the lines of code that set the ScrollBar
	  properties, and then test the project.
	
	7. For workaround 2, uncomment the line that executes the MoveFirst method.
	  Comment out the lines that set the ScrollBar properties, and test the project
	  again.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Matthew Hofacker, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
