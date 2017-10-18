---
layout: page
title: "Q147882: HOWTO: DAO: Assign a Recordset to a Data Control in VB"
permalink: kb/147/Q147882/
---

## Q147882: HOWTO: DAO: Assign a Recordset to a Data Control in VB

	Article: Q147882
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some improvements have been made to the data control in Microsoft Visual Basic
	version 4.0 and higher for Windows. One of these improvements is the capability
	to assign back the results of a Recordset object to the data control itself.
	This was not possible in Microsoft Visual Basic version 3.0 for Windows.
	
	This article demonstrates how to assign a Table-type, Dynaset-type, or
	Snapshot-type Recordset object back to a data control's Recordset property.
	
	MORE INFORMATION
	================
	
	The OpenRecordset method has three possible types of records that it can
	produce. Below is a portion of the Visual Basic Online Help that describes the
	Openrecordset method that mentions these three types:
	
	  dbOpenTable to open a table-type Recordset object.
	  dbOpenDynaset to open a dynaset-type Recordset object.
	  dbOpenSnapshot to open a snapshot-type Recordset object.
	
	Also, the following was taken directly from Chapter 4 of the "Guide to Data
	Access Objects" book contained in the "Professional Features" Visual Basic
	manual:
	
	  When you open a database using the data control, a Recordset object is
	  automatically created based on the control's RecordSource property. You can
	  address this Recordset with the following syntax:
	
	  Data1.Recordset
	
	All of the Recordset properties and methods discussed in this chapter can be used
	with the data control's Recordset. In addition, you can assign the data
	control's Recordset object to any Recordset variable you create. For example:
	
	     Dim MyRecordset As Recordset
	     Set MyRecordset = Data1.Recordset
	
	Conversely, you can assign a Recordset object that you create programmatically or
	with a data control to another data control, using the following syntax:
	
	     Set Data1.Recordset = MyRecordset
	
	When you assign a new Recordset object to the data control's Recordset property,
	you must use the data control's Refresh method to rebuild the Recordset and
	allow the data control to properly display it. In addition, you must make sure
	that the DataField property of all bound controls attached to the data control
	reflect valid fields in the new Recordset.
	
	Step-by-Step Example
	--------------------
	
	1. Start Visual Basic or on the File menu, click New Project (ALT, F, N) if
	  Visual Basic is already running. Form1 is created by default.
	
	2. Add three command buttons (Command1, Command2, and Command3), add two text
	  boxes (Text1, and Text2) and one data control to Form1.
	
	3. Set the following properties:
	
	  Default     Property          Value of Property
	  -------------------------------------------------
	
	  Command1    Caption          Assign Table-type
	  Command2    Caption          Assign Dynaset-type
	  Command3    Caption          Assign Snapshot-type
	  Data1       DatabaseName     BIBLIO.MDB
	  Data1       RecordSource     Titles
	  Text1       DataSource       Data1
	  Text1       Datafield        Title
	  Text2       DataSource       Data1
	  Text2       Datafield        Year Published
	
	4. Add the following code to the Command1_Click event:
	
	     Private Sub Command1_Click()
	       Dim ws As Workspace
	       Dim db As Database
	       Dim tbl As Recordset
	       Set ws = DBEngine.Workspaces(0)
	       Set db = ws.OpenDatabase("Biblio.mdb")
	       Set tbl = db.OpenRecordset("titles", dbOpenTable)
	       Set Data1.Recordset = tbl
	     End Sub
	
	5. Add the following code to the Command2_Click event:
	
	     Private Sub Command2_Click()
	       Dim ws As Workspace
	       Dim db As Database
	       Dim rs As Recordset
	       Set ws = DBEngine.Workspaces(0)
	       Set db = ws.OpenDatabase("Biblio.mdb")
	       Dim StrSQL As String
	       StrSQL = "Select * from titles where title like 'a*' "
	       Set rs = db.OpenRecordset(StrSQL, dbOpenDynaset)
	       Set Data1.Recordset = rs
	     End Sub
	
	6. Add the following code to the Command3_Click event:
	
	     Private Sub Command3_Click()
	       Dim ws As Workspace
	       Dim db As Database
	       Dim sn As Recordset
	       Set ws = DBEngine.Workspaces(0)
	       Set db = ws.OpenDatabase("Biblio.mdb")
	       Dim StrSQL As String
	       StrSQL = "Select * from titles where title like 'the*' "
	       Set sn = db.OpenRecordset(StrSQL, dbOpenSnapshot)
	       Set Data1.Recordset = sn
	     End Sub
	
	7. On the Run menu, click Start (ALT, R, S), or press the F5 key to run the
	  program. Click the Command1 button to view the records as a table-type
	  Recordset, click the Command2 button to view the records as a Dynaset-type
	  Recordset, or click the Command3 button to view the records as a
	  Snapshot-type Recordset.
	
	Additional query words: kbVBp400 kbVBp600 kbVBp500 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Issue type        : kbhowto
	
	=============================================================================
	
