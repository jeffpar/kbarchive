---
layout: page
title: "Q149092: HOWTO: Add Records and Edit Data in a DBGrid Cell"
permalink: kb/149/Q149092/
---

## Q149092: HOWTO: Add Records and Edit Data in a DBGrid Cell

	Article: Q149092
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbCtrl kbVBp400
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to programmatically edit the data and add new records
	to a DBGrid control. You can change the contents of a cell and those changes
	will appear on the screen, but they are not written to the data source bound to
	the DBGrid control. To write these changes to the data source, you must instead
	edit the underlying recordset.
	
	MORE INFORMATION
	================
	
	The following example creates a simple database containing one table with four
	fields and five records. Each record is a number in the field. The database is
	going to be the data source.
	
	When you click on a cell, the data in that cell is shown in a TextBox. When you
	change the contents of that cell, the changes are shown on the DBGrid control.
	However, when you execute the UpdateControls method through a command button,
	the changes disappear from the cell, indicating the data source was not
	updated.
	
	You must click the Update Recordset button when you make your changes in the
	TextBox to ensure that the changes are written to the data source. The Update
	Recordset button updates the underlying recordset of the Data control. Since the
	DBGrid control is bound to the Data control, the changes appear in the DBGrid
	control.
	
	Creating the Sample Application
	-------------------------------
	
	The following sample application demonstrates how to edit the contents of a
	DBGrid cell:
	
	1. Start Visual Basic. Once it is running, on the File menu, click New Project.
	  Add a Data control, a DBGrid control, a TextBox, and three Command buttons.
	  Set the following properties for each control:
	
	  Control       Default Name       Property       Value
	  -----------------------------------------------------
	
	  DBGrid        DBGrid1            DataSource     Data1
	
	2. Copy the following code sample to the Form1 code window:
	
	        Option Explicit
	        Dim rs1 As Recordset
	        Dim db As Database
	        Dim td As TableDef
	        Dim fl As Field
	        Dim igRow As Integer, igColumn As Integer
	        Dim iFields As Integer, iRecords As Integer
	        Dim vargBookmark As Variant
	
	        Private Sub Command1_Click()
	           ' The Create Database button: By clicking this button, you create
	           ' a database with four fields and five records.
	
	           Set db = CreateDatabase("C:\test.mdb", dbLangGeneral)
	           Set td = db.CreateTableDef("Table1")
	
	           ' After you create the database, you need to add fields to it.
	           For iFields = 1 To 4 ' The last number can be changed to the
	                                ' number of fields you want in the database.
	              Set fl = td.CreateField("Field " & CStr(iFields), dbText)
	              td.Fields.Append fl
	           Next iFields
	
	           db.TableDefs.Append td
	
	           ' Now that you have added fields to the database, you need to add
	           ' some records through a recordset.
	           Set rs1 = db.OpenRecordset("Table1", dbOpenTable)
	           For iRecords = 1 To 5  'For each row
	              rs1.AddNew          'Add a new record
	
	              For iFields = 1 To 4        ' For each field in the record, add
	                 rs1("Field " & CStr(iFields)) = CStr(iFields) ' a number.
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
	           Command2.Visible = True
	           Command4.Visible = True
	        End Sub
	
	        Private Sub Command2_Click()
	           ' The Update Database button: By clicking this button, you save
	           ' the contents of the text box to the database. Since the contents
	           ' of the recordset are being modified, the contents are saved to
	           ' the database after you execute the Update method.
	
	           Data1.Recordset.Edit
	           Data1.Recordset.Fields(igColumn) = Text1.Text
	           Data1.Recordset.Update
	        End Sub
	
	        Private Sub Command3_Click()
	           ' The Update DBGrid button: By clicking this button, you execute
	           ' the UpdateControls method on the Data control to demonstrate
	           ' that changing the cell in a bound DBGrid control does not save
	           ' the new information to the database. To save these changes, you
	           ' must modify the underlying recordset from the Data control.
	
	           Data1.UpdateControls
	        End Sub
	
	        Private Sub Command4_Click()
	           ' The Add New Record button: By clicking this button, you add new
	           ' records to the recordset. Use the following code to add a new
	           ' record to the DBGrid control.
	
	           ' Set DBGrid and Data Control Properties to allow new records to
	           ' be added.
	           DBGrid1.AllowAddNew = True
	           Data1.EOFAction = vbAddNew
	           Data1.Recordset.MoveLast
	           Data1.Recordset.MoveNext
	           DBGrid1.Row = DBGrid1.VisibleRows - 1
	           Data1.Recordset.AddNew
	           For iFields = 1 To 4    ' For each field in the record,
	                                   ' add the contents of the text box.
	              Data1.Recordset("Field " & CStr(iFields)) = Text1.Text
	           Next iFields
	           Data1.Recordset.Update
	
	        End Sub
	
	        Private Sub DBGrid1_Change()
	           Command3.Visible = True
	        End Sub
	
	        Private Sub DBGrid1_MouseUp(Button As Integer, Shift As Integer, _
	                                    X As Single, Y As Single)
	           Command2.Visible = True
	           igColumn = DBGrid1.ColContaining(X)
	           igRow = DBGrid1.RowContaining(Y)
	           vargBookmark = DBGrid1.RowBookmark(igRow)
	
	           Text1.Text = DBGrid1.Columns(igColumn).CellValue(vargBookmark)
	
	        End Sub
	
	        Private Sub Form_Load()
	           Command1.Visible = False
	           Command2.Visible = False
	           Command3.Visible = False
	           Command4.Visible = False
	           Command1.Caption = "Create Database"
	           Command2.Caption = "Update Database"
	           Command3.Caption = "Update DBGrid"
	           Command4.Caption = "Add New Record"
	
	           ' If the database does not exist, show the Create Database button.
	           If Dir("C:\test.mdb") = "" Then
	              Command1.Visible = True
	           Else
	              ' Open an existing database.
	              Set db = OpenDatabase("C:\test.mdb")
	              Set rs1 = db.OpenRecordset("Select * from Table1")
	              Set Data1.Recordset = rs1
	              Command4.Visible = True
	           End If
	
	        End Sub
	
	        Private Sub Text1_Change()
	           Command2.Visible = True
	        End Sub
	
	Running the Sample Application
	------------------------------
	
	1. On the Run menu, click Start, or press F5.
	
	2. Click on a cell on the DBGrid control and change the contents of that cell.
	  Click the Update DBGrid button. Note that your changes disappear from the
	  DBGrid. Clicking on a blank area on the DBGrid control gives error 6148 -
	  Invalid row number.
	
	3. Click on a cell. Note that the contents of the cell appear on the TextBox.
	  Change the contents of the TextBox and then click the Update Recordset
	  button. Note that your changes now appear on the DBGrid control.
	
	4. Click the Add New Records button to add a new record to the DBGrid control.
	  The contents of the text box will be added as a new record.
	
	======================================================================
	Keywords          : kbcode kbCtrl kbVBp400 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
