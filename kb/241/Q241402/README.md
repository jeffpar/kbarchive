---
layout: page
title: "Q241402: HOWTO: Run ADOCE on a Palm-Size PC Device from VBCE6"
permalink: /kb/241/Q241402/
---

## Q241402: HOWTO: Run ADOCE on a Palm-Size PC Device from VBCE6

	Article: Q241402
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211 kbDSupport
	Last Modified: 05-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps that are required to target Palm-size PC
	devices with a project built with the Windows CE Toolkit for Visual Basic 6.0
	(VBCE) that uses the Microsoft ADO for Windows CE SDK (ADOCE). A code sample is
	included to illustrate this functionality.
	
	MORE INFORMATION
	================
	
	In order to target a Palm-size PC device with a VBCE application that uses
	ADOCE, the following are required:
	
	- Microsoft Visual Basic 6.0.
	
	- The Windows CE Toolkit for Visual Basic 6.0.
	
	- A Palm-size PC device that runs Windows CE 2.11.
	
	- The Palm-size PC 1.2 Platform SDK that can be downloaded from the following
	  Microsoft Web site:
	
	  http://www.microsoft.com/msdownload/cetools/ppcsdk_color.asp
	
	Recommended: Now available for download is the Microsoft ActiveX Data Objects for
	Windows CE, version 3.1:
	
	  http://msdn.microsoft.com/downloads/sample.asp?url=/msdn-files/027/001/491/msdncompositedoc.xml
	
	
	Following is a sample that illustrates how to create a table and how to query
	mSysTables and mSysFields to verify the existence of the table. The database
	table is created in the \databases folder.
	
	NOTE: If you're using ADOCE 3.1 with your project, the syntax for the
	CreateObject call in the code below will be:
	
	  CreateObject("ADOCE.Recordset.3.1")
	
	Step-by-Step Example
	--------------------
	
	1. Create a new PsPC Project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton, two Label and two ListBox controls to the form. Do not
	  be concerned with placement of the controls.
	
	3. On the Project menu, select References, and then add a reference to Microsoft
	  CE ADO Control.
	
	4. Paste the following code into Form1:
	
	  Option Explicit
	  Dim MyRecordSet
	  Dim lMyRecordCount As Long
	  Dim lRecordIndex As Long
	  Dim sMyTable As String
	
	  Private Sub Form_Load()
	      'initialize controls
	      Form1.Caption = "CE Database View"
	      Command1.Caption = "Create a Table"
	      Label1.Caption = "Tables:"
	      Label2.Caption = "Fields:"
	      Form1.Move 0, 0, 3705, 4275
	      Command1.Move 120, 120, 2175, 375
	      Label1.Move 120, 720, 2000, 255
	      Label2.Move 120, 2280, 2000, 255
	      List1.Move 120, 960, 3375, 1230
	      List2.Move 120, 2520, 3375, 1230
	  End Sub
	
	  Private Sub Command1_Click()
	      Dim sSQL
	      Set MyRecordSet = CreateObject("ADOCE.Recordset")
	      
	      On Error Resume Next
	      sSQL = "DROP TABLE TestTable"
	      MyRecordSet.Open sSQL, , 2, 3
	      MyRecordSet.Close
	      On Error GoTo 0
	      
	      sSQL = "CREATE TABLE TestTable (Id INT, Title TEXT)"
	      MyRecordSet.Open sSQL, , 2, 3
	      Set MyRecordSet = Nothing
	      PopulateTableList
	  End Sub
	
	  Private Sub PopulateTableList()
	      
	      ' Load the ListBox with the Names of Non-System Tables.
	      List1.Clear
	      
	      Set MyRecordSet = CreateObject("ADOCE.Recordset")
	      
	      MyRecordSet.Open "MSysTables", "", 1, 3
	      lMyRecordCount = MyRecordSet.RecordCount
	      
	      For lRecordIndex = 0 To lMyRecordCount - 1
	          sMyTable = MyRecordSet.Fields("TableName").Value
	          If Mid(sMyTable, 1, 4) <> "MSys" Then
	              List1.AddItem sMyTable
	          End If
	          MyRecordSet.MoveNext
	      Next
	      
	      MyRecordSet.Close
	  End Sub
	
	  Private Sub List1_Click()
	      Dim sSQL
	      Dim iTableID
	      
	      'clear the list of fields
	      List2.Clear
	      
	      'get selected table
	      sMyTable = List1.List(List1.ListIndex)
	      
	      'obtain the TableID for use in pulling the fields
	      Set MyRecordSet = CreateObject("ADOCE.Recordset")
	      sSQL = "SELECT TableID FROM MSysTables " & _
	          "WHERE [TableName] = """ & sMyTable & """"
	          
	      MyRecordSet.Open sSQL, , 1, 3
	      iTableID = MyRecordSet.Fields("TableID").Value
	      MyRecordSet.Close
	      
	      'query mSysFields for the selected table's fields
	      sSQL = "SELECT FieldName FROM MSysFields " & _
	          "WHERE [TableID] = """ & iTableID & """"
	          
	      MyRecordSet.Open sSQL, , 1, 3
	      lMyRecordCount = MyRecordSet.RecordCount
	      For lRecordIndex = 0 To lMyRecordCount - 1
	          List2.AddItem MyRecordSet.Fields("FieldName").Value
	          MyRecordSet.MoveNext
	      Next
	      MyRecordSet.Close
	  End Sub
	
	5. Run the project. Click the CommandButton to create the table, then click the
	  table name in the table list to view the fields that you created.
	
	Additional query words: vbce vbce6 adoce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbGrpDSVB kbOSWinCE211 kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCETK100VB600
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
