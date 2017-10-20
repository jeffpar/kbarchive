---
layout: page
title: "Q199156: PRB: DAO Field Object Assignment Slows as Field Count Increases"
permalink: /kb/199/Q199156/
---

## Q199156: PRB: DAO Field Object Assignment Slows as Field Count Increases

{% raw %}

	Article: Q199156
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAO350bug kbDatabase kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Assigning values to DAO recordset Field objects is slow for recordsets with many
	fields. (This may be perceived as slow database edits or updates). Note that the
	affected code is:
	
	  rs.Fields(x) =<value>
	
	and not:
	
	  rs.Update, rs.Edit, or rs.AddNew
	
	If these methods are slow, it is likely a different problem.
	
	RESOLUTION
	==========
	
	There are two ways to work around this problem.
	
	One possibility is to use DAO 3.0 rather than DAO 3.5 or DAO 3.51. This can be
	done by changing the library selected in Visual Basic's References dialog. Use
	the References command on the Project menu to view this dialog.
	
	NOTE: DAO 3.0 is not distributed with Visual Basic 5.0 or Visual Basic 6.0.
	
	You can also work around this problem by using a DDL (Data Definition Language)
	query rather than DAO code to create the tables. If the application's database
	already exists, DDL can be used to create a copy of the table in a new database,
	and DML (Data Manipulation Language) statements, such as INSERT INTO, can be
	used to move the data to the new database. For more information on creating
	tables via DDL, read the "CREATE TABLE Statement" Help topic in the Visual Basic
	on-line Help.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code creates two databases with tables named according to the
	number of fields in that table. That is, Table20 contains 20 fields, and so
	forth. The databases are identical except that the tables in one are created via
	the CreateTableDef() method, whereas the tables in the other are created via DDL
	queries. For each table in each database, the table will be opened and a new
	value assigned to a field. This assignment will be timed and the results written
	to an output file. Note that the actual data in the database will never be
	updated.
	
	The output files are comma-delimited text files, named according to the
	corresponding database. The first column contains the number of fields in the
	table tested; the second column contains the approximate time, in seconds, that
	was required to assign a value to a field in the corresponding recordset
	object.
	
	NOTE: All times are approximate and are intended only to illustrate the issue
	involved. Times will vary greatly depending on the specifics of the environment
	in which the test is run.
	
	1. Create a new Standard Exe project in Visual Basic and add a new module to the
	  project. Check Microsoft DAO 3.51 object Library under Project References.
	
	2. In Project - Project1 Properties, change the Startup Object to Sub Main.
	
	3. Place the following code in the General Declarations section of Module1 and
	  run the project by pressing the F5 key:
	
	     Option Explicit
	
	     Const strWrkDir = "c:\temp\"
	     Const maxfld = 200
	
	     Dim dbfastname As String
	     Dim dbslowname As String
	
	     Sub CreateDBSlow()
	         Dim db As Database
	         Dim td As TableDef
	         Dim fld As Field
	         Dim cTbl As Integer
	         Dim cFld As Integer
	
	         Set db = DBEngine.CreateDatabase(dbslowname, dbLangGeneral)
	         For cTbl = 1 To maxfld   
	             Set td = db.CreateTableDef("Table" & cTbl)
	             For cFld = 1 To cTbl
	                 Set fld = td.CreateField("Field" & cFld, dbText)
	                 td.Fields.Append fld
	                 Set fld = Nothing
	             Next cFld
	             db.TableDefs.Append td
	             Set td = Nothing
	         Next cTbl
	         db.Close
	
	     End Sub
	
	     Sub CreateDBFast()
	         Dim db As Database
	         Dim td As TableDef
	         Dim fld As Field
	         Dim cTbl As Integer
	         Dim cFld As Integer
	         Dim strSQL As String
	
	         Set db = DBEngine.CreateDatabase(dbfastname, dbLangGeneral)
	         For cTbl = 1 To maxfld
	             strSQL = "CREATE TABLE Table" & cTbl & " ("
	             For cFld = 1 To cTbl
	                 strSQL = strSQL & "Field" & cFld & " text,"
	             Next cFld
	             strSQL = Left(strSQL, Len(strSQL) - 1) & ")"
	             db.Execute strSQL
	         Next cTbl
	         db.Close
	
	     End Sub
	
	     Sub DoTest(dbName As String)
	         Dim db As Database
	         Dim rs As Recordset
	         Dim sStart As Single
	         Dim sStop As Single
	         Dim cTbl As Integer
	
	         Open dbName &; ".txt" For Output As 1
	         Set db = DBEngine.OpenDatabase(dbName)
	         For cTbl = 1 To maxfld
	             Set rs = db.OpenRecordset("Select * From Table" & cTbl)
	             rs.AddNew
	             sStart = Timer
	             rs.Fields(0) = ""
	             sStop = Timer
	             rs.Close
	             Set rs = Nothing
	             Write #1, cTbl, sStop - sStart
	         Next cTbl
	         Close 1
	
	     End Sub
	
	     Sub Main()
	
	         dbfastname = strWrkDir & "fastdb.mdb"
	         dbslowname = strWrkDir & "slowdb.mdb"
	
	         CreateDBSlow
	         CreateDBFast
	         DoTest dbslowname
	         DoTest dbfastname
	
	         MsgBox "Test Complete"
	
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDAO350bug kbDatabase kbVBp500 kbVBp600 
	Component         : dao
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
