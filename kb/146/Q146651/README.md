---
layout: page
title: "Q146651: HOWTO: Call SQL Stored Procedures from Visual Basic"
permalink: /kb/146/Q146651/
---

## Q146651: HOWTO: Call SQL Stored Procedures from Visual Basic

{% raw %}

	Article: Q146651
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
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
	
	This article describes how to call Microsoft SQL stored procedures from
	Microsoft Visual Basic for Windows. A stored procedure is a precompiled
	collection of SQL statements, often including control-of-flow language.
	
	MORE INFORMATION
	================
	
	The method of calling depends on whether the SQL stored procedure returns
	records or not. For example:
	
	1. Stored procedures that do not return records (or rows) can be executed from
	  Visual Basic with the ExecuteSQL() method as follows:
	
	        i% = MyDb.ExecuteSQL("sp_name")
	
	  This executes the stored procedure sp_name and returns the affected number of
	  rows in i%. The ExecuteSQL method is strictly for action queries such as:
	
	        Delete Authors where name like "fred%"
	
	  The ExecuteSQL() method is valid only for SQL statements that do not return
	  records (or rows). An SQL statement that uses "SELECT..." returns records,
	  while an SQL statement that uses "DELETE..." does not. Neither Execute() nor
	  ExecuteSQL() return a recordset, so using ExecuteSQL() on a query that
	  selects records produces an error.
	
	2. Stored procedures that return records (or rows) require a Dynaset or Snapshot
	  to capture the values. Listed below are two examples:
	
	  Example Using a Data Control on a Visual Basic Form:
	
	        Data1.Options = dbSQLPassThrough
	        Data1.Recordsource = "sp_name"  ' name of the stored procedure.
	        Data1.Refresh   ' Refresh the data control.
	
	  When you use the SqlPassThrough bit, Visual Basic's Microsoft Access database
	  engine ignores the syntax used and passes the command through to the SQL
	  server.
	
	  Alternative Example Using Object Variables:
	
	     Dim Ds as Recordset
	     ' Open your desired database here.
	     Set MyDB = DBEngine.Workspaces(0).OpenDatabase(...
	     Set Ds = MyDB.OpenRecordset("sp_name", dbOpenDynaset, _
	     dbSQLPassThrough)
	
	  You can also use 'dbOpenSnapshot' in place of 'dbOpenDynaset' above.
	
	  How to Pass Parameters to a Stored Procedure
	  --------------------------------------------
	
	  To pass parameters, include them after the name of the stored procedure in a
	  string. For example:
	
	        ' String specifying SQL.
	        command.SQLx = "My_StorProc parm1, parm2, parm3"
	        ...
	        ' For stored procedure that doesn't return records.
	        i = MyDB.ExecuteSQL(SQLx)
	        ...
	        'For stored procedure that returns records.
	        set Ds = MyDB.OpenRecordset(SQLx, dbOpenDynaset, dbSQLPassThrough)
	
	  The object variable (Ds) contains the first set of results from the stored
	  procedure (My_StorProc).
	
	  Another Example
	  ---------------
	
	  The following contains more example code showing both methods:
	
	        Dim db as Database
	        Dim l as Long
	        Dim Ss as Recordset
	        Set Db = DBEngine.Workspaces(0).OpenDatabase _
	        ("", False, False, "ODBC;dsn=yourdsn;uid=youruid;pwd=yourpwd:")
	        ' For SPs that don't return rows.
	        l=Db.ExecuteSQL("YourSP_Name")
	        ' For SPs that return rows.
	        Set Ss = Db.OpenRecordset("YourSP_Name", dbOpenSnapshot, _
	         dbSQLPassThrough)
	        Col1.text = Ss(0) ' Column one.
	        Col2.text = Ss!ColumnName
	        Col3.Text=Ss("ColumnName")
	
	
	REFERENCES
	==========
	
	More information about calling stored procedures is documented in the following
	Microsoft SQL manual which covers the Visual Basic Library for SQL Server:
	
	- "Microsoft SQL Server Programmer's Reference for Visual Basic"
	
	See the functions SqlRpcInit% (pages 200-201), SqlRpcParam%, and SqlRpcSend%.
	These functions call stored procedures more quickly than do the methods
	described above.
	
	Additional query words: kbVBp400 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
