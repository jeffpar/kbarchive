---
layout: page
title: "Q184749: HOWTO: Call Stored Procedures Using Data Access Objects"
permalink: /kb/184/Q184749/
---

## Q184749: HOWTO: Call Stored Procedures Using Data Access Objects

	Article: Q184749
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use Data Access Objects (DAO) to call Microsoft
	SQL stored procedures from Microsoft Visual Basic for Windows. A stored
	procedure is a precompiled collection of SQL statements, often including
	control-of-flow language.
	
	NOTE: This article assumes you already know how to open an ODBC database.
	
	MORE INFORMATION
	================
	
	The method of calling depends on whether the SQL stored procedure returns
	records or not. For example:
	
	1. Stored procedures that do not return records (or rows) can be executed from
	  Visual Basic with the Execute method in Visual Basic as follows:
	
	        MyDb.Execute "sp_name", dbSQLPassThrough
	        i = MyDb.RowsAffected
	
	  You can also use ExecuteSQL:
	
	        i = MyDb.ExecuteSQL("sp_name")
	
	  However, this syntax is obsolete, and you should replace it with the Execute
	  method and RowsAffected property syntax given at the beginning of this
	  section.
	
	
	  The Execute (and ExecuteSQL) method runs the stored procedure sp_name. The
	  RowsAffected property returns the number of rows the stored procedure
	  affected. This method is strictly for action queries such as:
	
	        Delete Authors where name like "fred%"
	    
	
	  Using Execute with an SQL statement that uses "SELECT..." returns records that
	  causes a run-time error.
	
	2. Stored procedures that return records (or rows) require a Snapshot-type
	  Recordset to capture the values. Listed below are two examples:
	
	  Example 1
	  ---------
	
	  The following example using a Data Control on a Visual Basic Form:
	
	        Data1.Options = dbSQLPassThrough
	        Data1.Recordsource = "sp_name"  ' Name of the stored procedure.
	        Data1.Refresh   ' Refresh the data control.
	
	  When you use the SQLPassThrough bit, the Microsoft Jet database engine ignores
	  the syntax used and passes the command through to the SQL server.
	
	  Example 2
	  ---------
	
	  Using Data Access Objects:
	
	        Dim Rs as Recordset
	        ' Open your desired database here.
	        Set MyDB = DBEngine.Workspaces(0).OpenDatabase(...
	        Set Rs = MyDB.OpenRecordset("sp_name", dbOpenSnapshot, _
	                 dbSQLPassThrough)
	   
	
	  You must use dbOpenSnapshot. dbOpenDynaset and dbOpenTable do not apply to
	  pass-through queries.
	
	  How to Pass Parameters to a Stored Procedure
	  --------------------------------------------
	
	  To pass parameters, include them after the name of the stored procedure in a
	  string. For example:
	
	        ' String specifying SQL.
	        SQL = "My_StorProc parm1, parm2, parm3"
	        ...
	        ' For a stored procedure that doesn't return records.
	        MyDb.Execute SQL, dbSQLPassThrough
	        i = MyDb.RowsAffected
	        ...
	        'For a stored procedure that returns records.
	        set Rs = MyDB.OpenRecordset(SQL, dbOpenSnapshot, dbSQLPassThrough)
	   
	
	  The object variable (Rs) contains the first set of results from the stored
	  procedure (My_StorProc).
	
	  Another Example
	  ---------------
	
	  The following contains more example code showing both methods:
	
	        Dim db as Database
	        Dim l as Long
	        Dim Rs as Recordset
	        Set Db = DBEngine.Workspaces(0).OpenDatabase _
	        ("", False, False, "ODBC;dsn=yourdsn;uid=youruid;pwd=yourpwd:")
	        ' For SPs that don't return rows.
	        Db.Execute "YourSP_Name", dbSQLPassThrough
	        l = Db.RowsAffected
	        ' For SPs that return rows.
	        Set Rs = Db.OpenRecordset("YourSP_Name", dbOpenSnapshot, _
	
	         dbSQLPassThrough)
	        Col1.text = Rs(0) ' Column one.
	        Col2.text = Rs!ColumnName
	        Col3.Text = Rs("ColumnName")
	   
	
	
	REFERENCES
	==========
	
	For additional information about calling stored procedures, please see the
	following:
	
	  Microsoft SQL Server "Microsoft SQL Server Programmer's Reference for Visual
	  Basic," version 4.2, pages 200-201
	
	See the functions SqlRpcInit%, SqlRpcParam%, and SqlRpcSend%. These functions
	call stored procedures more quickly than the methods described above.
	
	Additional query words: kbODBC kbVBp500 kbVBp600 kbVBp400 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	
