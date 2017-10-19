---
layout: page
title: "Q265796: HOWTO: Run ADOCE on the Pocket PC Platform"
permalink: /kb/265/Q265796/
---

## Q265796: HOWTO: Run ADOCE on the Pocket PC Platform

	Article: Q265796
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbADO kbGrpDSVB kbDSupport kbVBM300 kbOSWinCE300
	Last Modified: 19-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0, used with:
	   - Microsoft Windows CE Platform SDK for Pocket PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to target the Pocket PC platform with a project built
	with eMbedded Visual Basic 3.0 (eVB) that uses the Microsoft ADO for Windows CE
	SDK (ADOCE). A code sample is included to illustrate this functionality.
	
	MORE INFORMATION
	================
	
	To target a Pocket PC device with an eVB application by using ADOCE, the
	following are required:
	
	- eMbedded Visual Basic 3.0.
	
	- The Pocket PC Platform SDK that ships with the eMbedded Visual Tools 3.0.
	
	  For information on how to order the eMbedded Visual Tools 3.0, please see the
	  following Microsoft Web site at:
	
	  http://www.microsoft.com/mobile/developer/default.asp
	
	- A Pocket PC device (optional).
	
	Step-by-Step Example
	--------------------
	
	Following is a sample that illustrates how to create a table and how to query
	mSysTables and mSysFields to verify the existence of the table. The database
	table is created in the \databases folder.
	
	1. Create a new Windows CE for the Pocket PC project in eMbedded Visual Basic.
	  Form1 is created by default.
	
	2. Add a CommandButton, two Label, and two ListBox controls to Form1. Do not be
	  concerned with the placement of these controls.
	
	3. On the Project menu, click to choose References, and then add a reference to
	  Microsoft CE ADO Control 3.0.
	
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
	         Label2.Move 120, 2270, 2000, 255
	         List1.Move 120, 960, 3375, 1230
	         List2.Move 120, 2520, 3375, 1230
	     End Sub
	
	     Private Sub Command1_Click()
	         Dim sSQL
	         Set MyRecordSet = CreateObject("ADOCE.Recordset.3.0")
	         
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
	         
	         Set MyRecordSet = CreateObject("ADOCE.Recordset.3.0")
	         
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
	         Set MyRecordSet = CreateObject("ADOCE.Recordset.3.0")
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
	
	  Private Sub Form_OKClick()
	      App.End
	  End Sub
	
	5. Run the project. Click the CommandButton to create the table, and then click
	  the table name in the table list to view the fields that you created.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q241402 HOWTO: Run ADOCE on a Palm-Size PC Device
	
	Additional query words: vbce vbce6
	
	======================================================================
	Keywords          : kbADO kbGrpDSVB kbDSupport kbVBM300 kbOSWinCE300 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
