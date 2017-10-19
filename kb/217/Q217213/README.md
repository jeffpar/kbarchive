---
layout: page
title: "Q217213: HOWTO: Open a Password-Protected Paradox Table Using DAO"
permalink: /kb/217/Q217213/
---

## Q217213: HOWTO: Open a Password-Protected Paradox Table Using DAO

	Article: Q217213
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0,7.0,97
	Operating System(s): 
	Keyword(s): kbDAOsearch kbDAO350 kbDatabase kbJET kbVBp kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0, 6.0 
	- Microsoft Access for Windows 95, version 7.0 
	- Microsoft Access 97 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Data Access Object (DAO) documentation that comes with Microsoft Access and
	Visual Basic Online help shows how to open a Paradox table. However, it does not
	show how to open a table that is password protected.
	
	MORE INFORMATION
	================
	
	To open a Paradox table, the documentation states that you must specify Paradox
	3.x, Paradox 4.x, or Paradox 5.x in the connect string. However, the
	documentation omits the PWD argument in the connect string. PWD is used to
	specify the Paradox password, just as it is used when opening password-protected
	ODBC or Jet tables.
	
	The following code samples show the correct use of the PWD option when opening
	password-protected Paradox tables. In each of the samples, the table is
	C:\MYDATA\Table1.DB and the password is "ABC".
	
	NOTE: The period in the Paradox file name needs to be replaced by the # symbol.
	This is because Microsoft Jet uses the period to separate database and table
	names and to separate table and field names. For example, Table1.DB needs to be
	written as Table1#DB when referring to the table in Jet.
	
	Attaching/Linking a password-protected table:
	---------------------------------------------
	
	  Dim db As DAO.Database
	  Dim td As DAO.TableDef
	  Dim rs As DAO.Recordset
	
	  Set db = OpenDatabase(App.Path & "\NWIND.MDB")
	
	  Set td = db.CreateTableDef("Table1")
	  td.Connect = "Paradox 4.x;PWD=ABC;DATABASE=C:\MYDATA;"
	  td.SourceTableName = "Table1#DB"
	  db.TableDefs.Append td
	
	  Set rs = db.OpenRecordset("Table1")
	
	Opening directly using a Database object:
	-----------------------------------------
	
	In this case, the database is the directory where the tables reside. If all
	tables have the same password, you can open them from the same Database object.
	If the tables have different passwords, you will need to open a different
	Database object for each unique password.
	
	  Set db = DBEngine(0).OpenDatabase("C:\MYDATA", 0, 0, "Paradox 4.x;PWD=ABC;")
	
	  Set rs = db.OpenRecordset("Table1#DB")
	
	Referencing a Paradox table directly in SQL statements
	------------------------------------------------------
	
	Microsoft Jet allows use of an IN clause or the [Database].[Table] syntax to
	reference a table outside the current database. The [Database].[Table] syntax is
	preferred.
	
	  Set db = OpenDatabase(App.Path & "\NWIND.MDB")
	
	  Set rs = db.OpenRecordset("SELECT * FROM [Paradox 3.x;DATABASE=C:\MYDATA;PWD=ABC].[Table1#DB]")
	  '
	  ' Or
	  '
	  Set rs = db.OpenRecordset("SELECT * FROM [Table1#DB] IN '' [Paradox 3.x;DATABASE=C:\MYDATA;PWD=ABC]")
	  '
	  ' Or
	  '
	  Set rs = db.OpenRecordset("SELECT * FROM [Table1#DB] IN 'C:\MYDATA' [Paradox 3.x;PWD=ABC]")
	
	You can also use action queries with the same direct SQL technique:
	
	  ' Make a new table Access "LocalTable" from data in Paradox table.
	
	  Set db = OpenDatabase(App.Path & "\NWIND.MDB")
	
	  db.Execute "SELECT * INTO LocalTable FROM [Paradox 3.x;DATABASE=C:\MYDATA;PWD=ABC].[Table1#DB]"
	
	  ' Append data into an Access table "LocalTable" from Paradox table.
	
	  db.Execute "INSERT INTO LocalTable SELECT * FROM [Paradox 3.x;DATABASE=C:\MYDATA;PWD=ABC].[Table1#DB]"
	
	  ' Append data into a Paradox table from an Access table "LocalTable". 
	
	  db.Execute "INSERT INTO [Paradox 3.x;DATABASE=C:\MYDATA;PWD=ABC].[Table1#DB] SELECT * FROM LocalTable"
	
	  ' Delete records from a Paradox table.
	
	  db.Execute "DELETE FROM [Paradox 3.x;DATABASE=C:\MYDATA;PWD=ABC].[Table1#DB] WHERE Field1 = 55"
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Malcolm
	Stewart, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	For additional information on using DAO to open a Paradox table, please search
	for "Paradox and connect" in Online Help in Visual Basic 4.0, Visual Basic 5.0,
	or Visual Basic 6.0.
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbDAOsearch kbDAO350 kbDatabase kbJET kbVBp kbGrpDSVBDB 
	Component         : dao JET
	Technology        : kbVBSearch kbAudDeveloper kbAccessSearch kbZNotKeyword6 kbAccess97 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbAccess97Search kbAccess95Search kbVB400Search kbVB400 kbZNotKeyword3 kbAccess700
	Version           : WINDOWS:4.0,5.0,6.0,7.0,97
	Issue type        : kbhowto
	
	=============================================================================
	
