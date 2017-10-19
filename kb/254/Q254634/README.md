---
layout: page
title: "Q254634: PRB: Updating DAO Recordset from Excel Increases File Size"
permalink: /kb/254/Q254634/
---

## Q254634: PRB: Updating DAO Recordset from Excel Increases File Size

	Article: Q254634
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0,3.5,3.6,6.0
	Operating System(s): 
	Keyword(s): kbDAOsearch kbVBp600 kbGrpDSVBDB kbDSupport
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- The DAO SDK, versions 3.0, 3.5, 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a Data Access Object (DAO) recordset from an Excel spreadsheet and
	update a record, the size of the Excel file increases dramatically when the
	recordset is closed.
	
	CAUSE
	=====
	
	Jet rewrites an alternate form for the data to each cell in the worksheet; in
	cells that appear to contain data and those that do not. This alternate form
	causes the file size to inflate.
	
	RESOLUTION
	==========
	
	Use OLE Automation to open an instance of the workbook prior to opening the
	recordset. If the workbook file is already open by using OLE Automation, DAO
	builds the recordset using OLE Automation instead of using Jet. When the
	recordset is updated and saved, the Excel file size is approximately the same as
	before the recordset was opened.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, click to select References, and then select:
	
	Microsoft DAO 3.6 Object Library
	
	-and-
	
	Microsoft Excel Object Library 9.0
	
	3. Add a CommandButton control to Form, and set the following properties:
	
	    Control                 Name                Caption/Text
	 Command Button           cmdUpdate          Update DAO Recordset
	
	4. Paste the following code into the General Declarations section of the form.
	  If you don't have an existing Excel spreadsheet to use for a data source, you
	  can create one by exporting a table from the NorthWind database using
	  Microsoft Access. The Customers table was exported for this example.
	
	  Dim db As DAO.Database
	  Dim rs As DAO.Recordset
	  Dim xlFileName As String
	
	  Private Sub Form_Load()
	      xlFileName = App.Path & "\Customers.xls"
	      DisplayFileSize xlFileName, "Before DAO Update"
	  '    Set xlObj = GetObject(xlFileName)  ' UnComment to retain file size
	      Set db = OpenDatabase(xlFileName, _
	               False, False, "Excel 8.0;")
	      Set rs = db.OpenRecordset("Customers$")
	      rs.MoveFirst
	
	  End Sub
	
	  Private Sub cmdUpdate_Click()
	      rs.Edit
	      rs.Fields("CompanyName").Value = "New Company"
	      rs.Update
	      rs.Close
	      db.Close
	      DisplayFileSize xlFileName, "After DAO Update"
	      Unload Me
	  End Sub
	
	  Public Sub DisplayFileSize(sFile As String, sMessage As String)
	      MsgBox sMessage & vbCrLf _
	               & vbCrLf & "File Size is " & _
	               Format(FileLen(sFile), "###,###,###."), _
	               vbInformation, sFile
	               
	  End Sub
	
	5. Run the project. A message box reports the size of the Excel file before any
	  processing takes place. Click the Update DAO RecordsetCommandButton control.
	  A message boxes reports the Excel file size after the update. Note that the
	  file size increases dramatically.
	
	6. Uncomment the code in the form_load that starts with "Set xlObj = . . ." and
	  run the project again. Note that when you click CommandButton for Update DAO
	  Recordset again, the file returns to its original size.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAOsearch kbVBp600 kbGrpDSVBDB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbDAOsearch kbZNotKeyword6 kbSDKDAOSearch kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600 kbSDKSearch kbSDKDAO300 kbSDKDAO350 kbSDKDAO360
	Version           : :3.0,3.5,3.6,6.0
	Issue type        : kbprb
	
	=============================================================================
	
