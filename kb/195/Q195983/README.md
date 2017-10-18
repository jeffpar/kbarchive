---
layout: page
title: "Q195983: PRB: DataGrid Control Does Not Return Contents of Edited Cell"
permalink: kb/195/Q195983/
---

## Q195983: PRB: DataGrid Control Does Not Return Contents of Edited Cell

	Article: Q195983
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbcode kbCtrl kbDatabase kbMDAC kbVBp600 kbGrpDSVBDB kbDSupport kbCodeSam kbMDAC260
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft DataGrid Control 6.0 (OLEDB) does not return the contents of an
	edited cell.
	
	Using the CellText properties of the Column object returns the original value of
	the text currently in the cell and not the text the user has edited. This
	behavior differs from the Data Bound Grid Control that returns the value of the
	user-edited text.
	
	This scenario may be problematic for a developer who would like to validate the
	contents of the cell before the contents are placed in the recordset.
	
	RESOLUTION
	==========
	
	The DataGrid control provides a window handle to the cell being edited. Using
	this handle and the GetWindowText API, the developer can get the contents of the
	edited cell before the contents are saved in the recordset.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic project and add a reference to the "Microsoft ActiveX
	  Data Objects Library." Also add the "Microsoft ADO Data Control" and the
	  "Microsoft DataGrid control" to the project's component list.
	
	2. Add a DataGrid (DataGrid1) and an ADO Data Control (ADODC1) to the default
	  Visual Basic form (Form1).
	
	3. Set the ConnectionString property of the ADO Data Control (ADODC1) to the
	  following (make sure to modify the path to reflect the location of the Biblio
	  sample database):
	
	        Provider=Microsoft.Jet.OLEDB.3.51;Persist Security Info=False;Data
	        Source=C:\Program Files\Microsoft Visual Studio\VB98\Biblio.mdb
	
	4. Set the CommandType property of the ADO Data Control (ADODC1) to:
	
	        2 - adCmdTable
	
	5. Set the RecordSource property of the ADO Data Control (ADODC1) to:
	
	        Authors
	
	6. Set the DataSource property of the Microsoft DataGrid Control (DataGrid1) to:
	
	        ADODC1
	
	7. Cut and paste the following code into the code window of the form (Form1):
	
	        Private Declare Function GetWindowText& Lib "user32" _
	            Alias "GetWindowTextA" _
	            (ByVal hwnd As Long, ByVal lpString As String, ByVal cch As Long)
	
	        Private Declare Function GetWindowTextLength& Lib "user32" _
	            Alias "GetWindowTextLengthA" _
	            (ByVal hwnd As Long)
	
	        Private Function GetCellText(GridControl As DataGrid) As String
	        'This function takes a DataGrid control and checks its
	        'edit status. The hWndEditor property is only valid
	        'when the grid is being edited.
	
	        Dim st As String
	        Dim ch As Long
	
	        If GridControl.EditActive Then
	            ch = GetWindowTextLength(GridControl.hWndEditor) + 1
	            st = Space(ch)
	
	            ch = GetWindowText(GridControl.hWndEditor, st, ch)
	
	            GetCellText = Trim(st)
	
	        End If
	
	        End Function
	
	        Private Sub DataGrid1_BeforeColUpdate _
	        (ByVal ColIndex As Integer, OldValue As Variant, Cancel As Integer)
	
	        MsgBox "Cell contents according to CellText property: " & _
	          DataGrid1.Columns(ColIndex).CellText(DataGrid1.Bookmark)
	
	        MsgBox "Cell contents according to Text property: " & _
	          DataGrid1.Text
	
	        MsgBox "Cell contents according to API Calls: " & _
	          DataGrid1.Tag
	
	        End Sub
	
	        Private Sub DataGrid1_Change()
	        ' Change is the easiest event to tap into.
	        ' It is fired every time the cell text changes.
	
	        ' Because you can only save the text when the cell is being edited,
	        ' you have to store the value in another variable if you want
	        ' to use that value in other events.
	
	        ' Place the contents of the cell into the TAG property as a buffer.
	        ' You could also use a variable to store the information.
	
	        DataGrid1.Tag = GetCellText(DataGrid1)
	        End Sub
	
	8. Run the program and modify some text. Notice how both the Text property and
	  the CellText property do not reflect the modified data.
	
	(c) Microsoft Corporation 1998. All Rights Reserved.
	Contributions by Jonathan Johnson, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbCtrl kbDatabase kbMDAC kbVBp600 kbGrpDSVBDB kbDSupport kbCodeSam kbMDAC260 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC250 kbMDAC260
	Version           : :2.5,2.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
