---
layout: page
title: "Q223078: FIX: DataGrid Column Widths Incorrect When Using MDAC 2.1"
permalink: kb/223/Q223078/
---

## Q223078: FIX: DataGrid Column Widths Incorrect When Using MDAC 2.1

	Article: Q223078
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 18-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The width of a DataGrid column bound to an ADO field of type adBSTR is very
	narrow under MDAC 2.1 compared to the width of an adBSTR column under MDAC 2.0.
	
	CAUSE
	=====
	
	A bug fix in MDAC 2.1 changed the return value for GetColumnInfo calls on
	columns of type adBSTR. This fix exposed a limitation in the DataGrid
	control(MSDATGRD.OCX).
	
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
	
	Steps to Reproduce Behavior
	---------------------------
	
	To create this project, you must have MDAC 2.1 installed.
	
	1. Start Visual Basic 6.0.
	
	2. Create a Standard EXE project. Form1 is created by default.
	
	3. Add the following Project References:
	
	  Microsoft ActiveX Data Objects 2.1 Library
	
	4. Add the following Project Components:
	
	  Microsoft DataGrid Control 6.0 (OLEDB)
	
	5. Add the following control to Form1:
	
	  1 - Microsoft DataGrid Control 6.0 (OLEDB)
	
	6. Paste the following code into Form1's Code Window:
	
	  Private rs As ADODB.Recordset
	
	  Private Sub Form_Load()
	
	      'Create a new empty recordset with six fields
	      Set rs = New ADODB.Recordset
	      
	      With rs
	         .Fields.Append "Column1", adBSTR, 25
	         .Fields.Append "Column2", adInteger
	         .Fields.Append "Column3", adBSTR, 25
	         .Fields.Append "Column4", adVarChar, 25
	         .Fields.Append "Column5", adBSTR, 25
	         .Fields.Append "Column6", adDBTimeStamp, 25
	         .Open
	      End With
	     
	     'Bind the DataGrid to the new empty recordset
	      Set Me.DataGrid1.DataSource = rs
	
	  End Sub
	
	7. Run the project. Note the narrow widths of Column1, Column3, and Column5,
	  which display the adBSTR fields.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Matthew Hofacker, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbVBp600bug kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
