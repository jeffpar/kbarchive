---
layout: page
title: "Q150418: How To Create an Access Database Through Visual Basic 4.0"
permalink: /kb/150/Q150418/
---

## Q150418: How To Create an Access Database Through Visual Basic 4.0

{% raw %}

	Article: Q150418
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create an Access database programmatically with a
	code example. The code is useful if you need a database with a specific number
	of fields and records for testing purposes.
	
	MORE INFORMATION
	================
	
	An Access database called TEST.MDB is created when you click the command button.
	In this example, the database contains 55 records with each record containing 40
	integer fields. By changing some of the code, you alter the number of records
	and fields and the contents of the records.
	
	In the Form_Load event, the code checks to see if the database exists. If the
	database does not exist, a command button is shown on the form. Clicking the
	command button creates the database.
	
	Code Example
	------------
	
	1. Start Visual Basic 4.0. If it is already running, from the File menu, click
	  New Project.
	
	2. Add a command button, data control, and a DBGrid control on Form1. Set the
	  DataSource property of the DBGrid control to the Data control.
	
	3. Copy the following code sample to the Form1 code window:
	
	        Option Explicit
	        Dim rs1 As Recordset
	        Dim rs2 As Recordset
	        Dim db As Database
	        Dim td As TableDef
	        Dim fl As Field
	
	        Private Sub Command1_Click()
	           Dim iFields As Integer, iRecords As Integer
	
	           ' Create the database.
	           Set db = CreateDatabase("C:\test.mdb", dbLangGeneral)
	           Set td = db.CreateTableDef("Table1")
	
	           'Now that the database is created, add fields to the database
	           For iFields = 1 To 5 'The last number can be changed.
	              Set fl = td.CreateField("Field " & CStr(iFields), dbInteger)
	              td.Fields.Append fl
	           Next iFields
	
	           db.TableDefs.Append td
	
	           ' Now that the database has fields, add records through a
	           ' recordset.
	           Set rs1 = db.OpenRecordset("Table1", dbOpenTable)
	           For iRecords = 1 To 10  ' For each row
	              rs1.AddNew           ' add a new record.
	
	              For iFields = 1 To 5      ' For each field in the record
	                 rs1("Field " & CStr(iFields)) = iFields  ' add a number.
	              Next iFields
	
	              rs1.Update
	           Next iRecords
	
	           ' Close both the recordset and database.
	           rs1.Close
	           db.Close
	
	           ' Populate the DBGrid control with the contents of the Recordset.
	           Set db = OpenDatabase("C:\test.mdb")
	           Set rs1 = db.OpenRecordset("Select * from Table1")
	           Set Data1.Recordset = rs1
	
	           Command1.Visible = False
	        End Sub
	
	        Private Sub Form_Load()
	           If Dir("C:\test.mdb") = "" Then
	              Command1.Caption = "Create Database"
	              Command1.Visible = True
	           End If
	
	        End Sub
	
	4. Press the F5 key, or click Start on the Run menu to run the program. Click
	  the Command button, and populate the DBGrid control. Note that the file
	  TEST.MDB is also created.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00 | 4.00
	
	=============================================================================
	

{% endraw %}
