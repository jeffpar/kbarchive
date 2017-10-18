---
layout: page
title: "Q207562: HOWTO: Delete Tables from a Windows CE Device from VBCE or eVB"
permalink: kb/207/Q207562/
---

## Q207562: HOWTO: Delete Tables from a Windows CE Device from VBCE or eVB

	Article: Q207562
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB kbDSupport kbCodeSnippet
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	- Microsoft eMbedded Visual Basic, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There is currently no functionality provided on a Windows CE device by which
	database tables existing in the database store can be directly deleted. This
	article illustrates how this can be accomplished from a Windows CE Toolkit for
	Visual Basic (VBCE) or eMbedded Visual Basic application.
	
	MORE INFORMATION
	================
	
	The following steps illustrate how to delete non system tables from the database
	store. The assumption is made that there are already tables in existence on the
	Windows CE device that can be deleted.
	
	Step by Step Example
	--------------------
	
	1. Create a new Windows CE project in either Visual Basic or eMbedded Visual
	  Basic. Form1 is created by default.
	
	2. Place a list box and a command button on Form1.
	
	3. From the Project menu, choose References and add a reference to either the
	  Microsoft CE ADO Control 3.0 or Microsoft CE ADO Control 3.1, whichever is
	  the most current version on your computer.
	
	4. Paste the following code into the code window of Form1:
	
	  Option Explicit
	
	  Private Sub Form_Load()
	      Dim MyRecordSet
	      Dim lMyRecordCount As Long
	      Dim lRecordIndex As Long
	      Dim sMyTable As String
	      
	      'initialize controls
	      Command1.Caption = "Drop Selected Tables"
	      Form1.Caption = "CE Drop Tables"
	      Command1.Move 60, 1920, 4695, 495
	      List1.Move 60, 60, 4695, 1815
	      Form1.Move 0, 0, 4950, 2880
	      
	      ' Load the ListBox with the Names of Non-System Tables.
	      Form1.List1.Clear
	      Set MyRecordSet = CreateObject("ADOCE.Recordset")
	      MyRecordSet.Open "MSysTables", "", 1, 3
	      lMyRecordCount = MyRecordSet.RecordCount
	      For lRecordIndex = 0 To lMyRecordCount - 1
	          sMyTable = MyRecordSet.Fields("TableName").Value
	          If Mid(sMyTable, 1, 4) <> "MSys" Then
	              Form1.List1.AddItem sMyTable
	          End If
	          MyRecordSet.MoveNext
	      Next
	      MyRecordSet.Close
	  End Sub
	
	  Sub Command1_Click()
	      Dim iIndex As Integer
	      Dim MyRecordSet
	
	      Set MyRecordSet = CreateObject("ADOCE.Recordset")
	      For iIndex = Form1.List1.ListCount - 1 To 0 Step -1
	          If Form1.List1.Selected(iIndex) Then
	              MyRecordSet.Open "DROP TABLE [" & _
	                  Form1.List1.List(iIndex) & "]", , 2, 3
	              Form1.List1.RemoveItem (iIndex)
	          End If
	      Next
	  End Sub
	
	Note that the CreateObject statements may need to be changed depending on whether
	you have ADOCE 3.0 or 3.1 on your computer. 5. Run the project.
	
	Note that you can select and delete the non system tables from the database store
	of your Windows CE device.
	
	REFERENCES
	==========
	
	Microsoft ActiveX Data Objects for the Windows CE operating system (ADOCE) 3.1
	for Windows 3.0 SDK:
	
	  http://msdn.microsoft.com/downloads/default.asp?url=/downloads/sample.asp?url=/msdn-files/027/001/491/msdncompositedoc.xml
	
	For additional information about Microsoft ADO for Windows CE SDK (ADOCE), please
	click the article numbers below to view the articles in the Microsoft Knowledge
	Base:
	
	  Q196034 HOWTO: Use ADOFILTR.DLL to Transfer Database Tables
	
	  Q221594 HOWTO: Populate a ListView With an ADOCE Recordset in VBCE6
	
	  Q265796 HOWTO: Run ADOCE on the Pocket PC Platform
	
	  Q241402 HOWTO: Run ADOCE on a Palm-Size PC Device
	
	Additional query words: vbce vbce6 evb adoce
	
	======================================================================
	Keywords          : kbToolkit kbVBp500 kbVBp600 kbOSWinCEsearch kbGrpDSVB kbDSupport kbCodeSnippet 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Issue type        : kbhowto
	
	=============================================================================
	
