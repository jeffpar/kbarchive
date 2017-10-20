---
layout: page
title: "Q116332: PRB: Floats May Be Rounded Up Using ODBC SQL Server Driver"
permalink: /kb/116/Q116332/
---

## Q116332: PRB: Floats May Be Rounded Up Using ODBC SQL Server Driver

{% raw %}

	Article: Q116332
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using SQL Server ODBC driver and SQL Server and if ODBC prepared execution is
	used, certain floating point values may be incorrectly converted. NOTE:
	Microsoft Access and Microsoft Visual Basic commonly use the ODBC prepared
	execution.
	
	For example, consider a SQL Server table with a float column. When an ODBC
	application successfully executes an insert into that table with the float
	column value = 2.9 using prepared execution. However, when a query to get the
	rows with the float values equal to 2.9 is executed, no rows are returned from
	SQL Server. The following query is an example:
	
	     CREATE TABLE  test(col1 float)
	
	     INSERT into test VALUES(2.9)
	
	     SELECT col1 FROM test WHERE col1=2.9
	
	However, the following query shows the row with col1=2.9
	
	  SELECT * FROM test
	
	This does not happen when the insert is done from a DB-Library (DB-Lib) client
	tool, or if direct, non-prepared execution is used. For the SQL Server driver,
	if the users do not have CREATE PROC permission, direct, non-prepared execution
	is used.
	
	In case of Microsoft Access and Visual Basic, the behavior is exhibited by doing
	the insert into either an attached table or by creating the dynaset, followed by
	running the query to retrieve the records where float column equals the value
	inserted.
	
	For example,
	
	     Dim db As Database
	     Dim ds As Dynaset
	
	     Set ds = db.CreateDynaset("SELECT * FROM test")
	     ds.AddNew
	     ds.Fields("col1") = 2.9
	     ds.Update
	
	Then a query which checks for equality of the float column to the value inserted
	does not show the record inserted above, whereas a non-qualified query shows the
	record. For example, the recordset for the ds1 dynaset does not show the record
	inserted, whereas ds2 dynaset will.
	
	     Set ds1 = db.CreateDynaset("SELECT * FROM test WHERE col1=2.9")
	
	     Set ds2 = db.CreateDynaset("SELECT * FROM test")
	
	For an ODBC application writer, the following steps will produce the behavior:
	
	     //Prepared execution to update the table
	     SQLPrepare: INSERT INTO test VALUES (?)
	
	     //Set parameters for the above prepared stmt
	     SQLSetParam:
	
	     //Execute the previously prepared stmt
	     //and verify that it returned SQL_SUCCESS
	     SQLExecute:
	
	     //Execute the following query
	     SQLExecDirect: SELECT * FROM test WHERE col1=2.9
	
	And then retrieve the result to see that the record inserted above does not show
	up. However, executing the following shows the record inserted above:
	
	     //Execute the following query
	     SQLExecDirect: SELECT * FROM test
	
	CAUSE
	=====
	
	The difference in behavior is because in the case of prepared execution, the
	ODBC driver is doing the conversion to float; whereas in the case of
	non-prepared execution and DB-Lib client tools, SQL Server is doing the
	conversion.
	
	WORKAROUND
	==========
	
	To workaround this problem, you can do an explicit convert on the SQL Server
	using a statement similar to the following:
	
	  UPDATE test SET f= (CONVERT(FLOAT, CONVERT(VARCHAR, col1)))
	
	You can also do the same thing within a trigger to automatically update the value
	for all new records inserted.
	
	Please note that this problem does not occur using pass-through mechanism since
	in that case, the conversion is done by SQL Server.
	
	Additional query words: 1.01.2807 VB DBLibrary stored procedure
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
