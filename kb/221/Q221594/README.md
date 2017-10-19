---
layout: page
title: "Q221594: HOWTO: Populate a ListView With an ADOCE Recordset in VBCE6"
permalink: /kb/221/Q221594/
---

## Q221594: HOWTO: Populate a ListView With an ADOCE Recordset in VBCE6

	Article: Q221594
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0,2.11
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB
	Last Modified: 26-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Toolkit for Visual Basic 6.0, version 1.0 
	- Microsoft Windows CE version 2.11 for the Handheld PC 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Handheld PC Pro (H/PC Pro) class of devices ship with Windows CE 2.11, which
	includes a built-in Windows CE version of ActiveX Data Object (ADOCE) and Pocket
	Access. Pocket Access databases (.cdb files) can be programmed through the
	ADOCERecordset Object from the Windows CE Toolkit for Visual Basic 6.0 (VBCE6).
	
	This article demonstrates how to use ADOCE to open the Northwind.cdb Customers
	table and populate a ListView control from within a VBCE application.
	
	MORE INFORMATION
	================
	
	Step by Step Example
	--------------------
	
	1. Start a new Windows CE HPC Pro Project in Visual Basic 6.0. Form1 is created
	  by default.
	
	2. Select References from the Project menu and add a reference to Microsoft CE
	  ADO Control (ADOCE) 2.0.
	
	3. Select Components from the Project menu and add a reference to Microsoft CE
	  ListView Control 6.0.
	
	4. Place a CommandButton and a ListView control on Form1.
	
	5. Paste the following code into the code module of Form1:
	
	  Option Explicit
	
	  Private Sub Command1_Click()
	     Open_RS
	  End Sub
	
	  Private Sub Open_RS()
	      
	      'This code should create a message box with the CompanyName of
	      'the first record of your RecordSst displayed as the message text.
	      
	      'Define Constants
	      Const adOpenKeyset = 1
	      Const adLockOptimistic = 3
	      Const adCmdText = 1
	      Const adCmdTable = 2
	      Const adCmdStoredProc = 4
	      Const adCmdUnknown = 8
	      
	      'Dimension and open a Recordset Object
	      Dim rs As ADOCERecordset
	      Set rs = CreateObject("adoce.recordset")
	      
	      'Open the RS Object and point the ActiveConnection
	      'Property to your Northwind Database
	      rs.Open "Customers", "\My Documents\Northwind.cdb", _
	          adOpenKeyset, adLockOptimistic, adCmdTable
	
	      'fill listview
	      Dim clmX As ColumnHeader
	      Dim itmX As ListItem
	
	      ListViewCtrl1.View = lvwReport 'use reportview no icons
	      Set clmX = ListViewCtrl1.ColumnHeaders.Add(, , "CustomerID", _
	                 ListViewCtrl1.Width / 3)
	      Set clmX = ListViewCtrl1.ColumnHeaders.Add(, , "CompanyName", _
	                 ListViewCtrl1.Width / 3)
	      Set clmX = ListViewCtrl1.ColumnHeaders.Add(, , "ContactName", _
	                 ListViewCtrl1.Width / 3)
	
	      While Not rs.EOF
	          Set itmX = ListViewCtrl1.ListItems.Add(, , rs.Fields("CustomerID"))
	          itmX.SubItems(1) = rs.Fields("CompanyName")
	          itmX.SubItems(2) = rs.Fields("ContactName")
	          rs.MoveNext
	      Wend
	  End Sub
	
	6. Run the project.
	
	Additional Information
	----------------------
	
	Open a Recordset Object using the ADOCE Open method. This method takes the
	following five arguments:
	
	1. Source - String containing either the table name, a SQL statement, or the
	  name of a stored procedure.
	
	2. Active Connection - String specifying the path to your Pocket Access (.cdb)
	  database.
	
	  NOTE: It is important to specify this path because it defaults to the Object
	  Store of the H/PC Pro device if omitted.
	
	3. Cursor Type - Optional. An integer specifying the type of cursor that will be
	  provided.
	
	4. Lock Type - Optional. An integer specifying the concurrency the provider will
	  use.
	
	5. Options - Optional. An integer that indicates how the provider evaluates the
	  Source Parameter.
	
	REFERENCES
	==========
	
	More information on the ADOCE Open method can be found in the Windows CE Toolkit
	Online Help from the ADO Reference page.
	
	Additional query words: wince ado vb vbce vbce6 wce
	
	======================================================================
	Keywords          : kbToolkit kbVBp600 kbOSWinCEsearch kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbWinCETKVBSearch kbWinCESearch kbWinCE211HPC kbWinCETK100VB600
	Version           : :1.0,2.11
	Issue type        : kbhowto
	
	=============================================================================
	
