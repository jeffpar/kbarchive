---
layout: page
title: "Q129731: BUG: ODBC OrdinalPosition Differs with dbSQLPassThrough"
permalink: /kb/129/Q129731/
---

## Q129731: BUG: ODBC OrdinalPosition Differs with dbSQLPassThrough

	Article: Q129731
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): kbDatabase kbODBCkbbuglist
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The values of OrdinalPosition for fields in a RecordSet created against an ODBC
	data source will be different depending on whether dbSQLPassThrough is used or
	not.
	
	CAUSE
	=====
	
	OrdinalPosition is not under the control of Visual Basic DAO for ODBC data
	sources. This information is retrieved from the back-end database engine.
	
	RESOLUTION
	==========
	
	OrdinalPosition on a database should not be expected to be in sync with
	collection indexes in Visual Basic. To get the OrdinalPosition as defined for
	the ODBC datasource, dbSQLPassThrough should be used.
	
	STATUS
	======
	
	Regarding: The difference in OrdinalPosition with or without dbSQLPassThrough:
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Regarding: The difference in OrdinalPosition versus the value in collection
	indexes:
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add the following code to the Form1_Load procedure:
	
	  NOTE: This example assumes an existing table "userid.table1" with three fields
	  (field1, field2, field3) on an ODBC DSN (mydatasource).
	
	     Sub Form_Load()
	        Dim Db as Database
	        Dim RS As Recordset, I As Integer
	        Dim TD As TableDef
	        Set DB = Workspaces(0).OpenDatabase("", False, False, _
	         "ODBC;dsn=mydatasource;UID=userid;pwd=userpassword")
	        Debug.Print
	        Debug.Print "From the TableDef ->"
	        Set TD = DB.TableDefs("userid.table1")
	        For I = 0 To TD.Fields.Count - 1
	        Debug.Print TD.Fields(I).Name;
	        Debug.Print " Count "; I;
	        Debug.Print " Ordinal Postion "; _
	           Str$(TD.Fields(I).OrdinalPosition)
	        Next I
	        Debug.Print
	
	        Set RS = DB.OpenRecordset("SELECT * FROM userid.table1", _
	           dbOpenSnapshot, dbSQLPassThrough)
	        Debug.Print "From the RecordSet ->"
	        For I = 0 To RS.Fields.Count - 1
	           Debug.Print RS.Fields(I).Name;
	           Debug.Print " Count "; I;
	           Debug.Print " Ordinal Position ";_
	              RS.Fields(RS.Fields(I).Name).OrdinalPosition
	        Next I
	        RS.Close
	        DB.Close
	     End Sub
	
	3. Start the program by choosing Start from the Run menu or by pressing the F5
	  key.
	
	  The output shows the difference between the enumerated position and
	  OrdinalPosition:
	
	  >From the TableDef ->
	  field1 Count 0 Ordinal Postion 0
	  field2 Count 1 Ordinal Postion 0
	  field3 Count 2 Ordinal Postion 0
	
	  >From the RecordSet ->
	  field1 Count 0 Ordinal Position 1
	  field2 Count 1 Ordinal Position 2
	  field3 Count 2 Ordinal Position 3
	
	4. Now change the OpenRecordSet line to:
	
	     Set RS = DB.OpenRecordset("SELECT * FROM table1", dbOpenSnapshot)
	
	5. Restart the program by choosing Restart from the Run menu or by pressing
	  SHIFT+F5.
	
	  Now, the output shows the enumerated position and OrdinalPosition in
	  agreement:
	
	  >From the TableDef:
	  ------------------
	  field1 Count 0 Ordinal Postion 0
	  field2 Count 1 Ordinal Postion 0
	  field3 Count 2 Ordinal Postion 0
	
	  >From the RecordSet:
	  -------------------
	  field1 Count 0 Ordinal Position 0
	  field2 Count 1 Ordinal Position 1
	  field3 Count 2 Ordinal Position 2
	
	Additional query words: 4.00 buglist4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	Issue type        : kbbug
	
	=============================================================================
	
