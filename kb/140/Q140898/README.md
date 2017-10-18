---
layout: page
title: "Q140898: BUG: Application Error Occurs When Rebinding a Bound DBGrid"
permalink: kb/140/Q140898/
---

## Q140898: BUG: Application Error Occurs When Rebinding a Bound DBGrid

	Article: Q140898
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbVBp400 kbGrpDSVBDBkbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application error occurs when a Visual Basic 32-bit program with a DBGrid
	control bound to a Data control rebinds the Data control to a recordset
	containing at least 26 fields and 11 records.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. Microsoft is researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The code example provides steps to reproduce this behavior. In this example,
	create a form containing a command button, data control, and a DBGrid control.
	Set the DataSource property of the DBGrid control to the data control. After
	copying the code to the Form1 code window, run the program and click any row in
	the DBGrid control except the first row. Click the Command1 button to swap the
	recordsets. An application error occurs.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start the 32-bit version of Visual Basic 4.0, or if it is already running,
	  click New Project on the File menu.
	
	2. Add a command button, data control, and a DBGrid control on the Form1 form.
	
	3. Use the following steps to set the DataSource property of the DBGrid control
	  to Data1.
	
	  a. Click the DBGrid control on the Form1 form.
	
	  b. In the Properties Window, click the DataSource property.
	
	  c. In the DataSource Property, click the down arrow. The Data1 option
	     appears. Click this option.
	
	4. Copy the following code sample to the Form1 code window:
	
	        Dim rs1 As Recordset
	        Dim rs2 As Recordset
	        Dim db As Database
	        Dim td As TableDef
	        Dim fl As Field
	
	        Private Sub Command1_Click()
	           Set Data1.Recordset = rs2
	           Set Data1.Recordset = rs1
	        End Sub
	
	        Private Sub Form_Load()
	        Dim x As Integer, y As Integer
	
	        'If the database does not exist, create the database
	        If Dir("C:\TEST.MDB") = "" Then
	           Set db = CreateDatabase("C:\test.mdb", dbLangGeneral)
	
	           'Create the table in the database
	           Set td = db.CreateTableDef("TABLE1")
	
	           'Create the fields in the database
	           For x = 1 To 26
	              Set fl = td.CreateField("Field " & CStr(x), dbInteger)
	              td.Fields.Append fl
	           Next x
	           db.TableDefs.Append td
	
	           'Add records to the database through a recordset
	           Set rs1 = db.OpenRecordset("TABLE1", dbOpenTable)
	           For y = 1 To 11      'For each row
	              rs1.AddNew        'Add a new record
	
	              For x = 1 To 26   'For each cell in the record
	                 rs1("Field " & CStr(x)) = x   'Add a number
	              Next x
	
	              rs1.Update
	           Next y
	
	           'Close both the recordset and database
	           rs1.Close
	           db.Close
	        End If
	
	        'Open the database and create the recordsets
	        Set db = OpenDatabase("C:\TEST.MDB")
	        Set rs1 = db.OpenRecordset("Select * From TABLE1")
	        Set rs2 = db.OpenRecordset("Select * From TABLE1")
	        Set Data1.Recordset = rs1
	
	        End Sub
	
	5. Press the F5 key or click Start on the Run menu to run the program.
	
	6. Click on any row on the DBGrid control except the first row.
	
	7. Click on the Command1 button to swap the recordsets. An application error
	  occurs and Visual Basic ends.
	
	Additional query words: 4.00 vb4win vb432 buglist4.00
	
	======================================================================
	Keywords          : kbVBp400 kbGrpDSVBDB kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400
	Version           : WINDOWS:4.0
	Issue type        : kbbug
	
	=============================================================================
	
