---
layout: page
title: "Q240137: PRB: Invalid Return from SQL Server ODBC Driver ver. 3.70.0623"
permalink: kb/240/Q240137/
---

## Q240137: PRB: Invalid Return from SQL Server ODBC Driver ver. 3.70.0623

	Article: Q240137
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.6,3.0,3.0b,3.7,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbSQL kbvfp300 kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When executing a SQL Server stored procedure and passing parameters through SQL
	pass through, a return of -1 (error) might be received even though the stored
	procedure is successfully executed. This occurs when writing data from a FoxPro
	memo field to a SQL text column.
	
	CAUSE
	=====
	
	SQL Server Transact-SQL supports two methods of building SQL statements at run
	time in scripts, stored procedures, and triggers:
	
	- The EXECUTE statement, which does not support parameter substitution in the
	  executed string.
	
	- The stored procedure sp_executesql, which does support parameter substitution
	  in the executing string.
	
	When parameter place holders are detected in the SQL statement passed to the SQL
	Server ODBC driver version 3.70, sp_executesql is called and the statement to be
	executed is passed as a parameter.
	
	The SQL statement, passed as a parameter to sp_executesql, is not compiled until
	the sp_executesql statement is executed. The contents of the statement are then
	compiled and executed as an execution plan separate from the execution plan of
	the batch that called sp_executesql. The sp_executesql batch cannot reference
	variables declared in the batch calling sp_executesql. Local cursors or
	variables in the sp_executesql batch are not visible to the batch calling
	sp_executesql, and changes in database context last only until the end of the
	sp_executesql statement.
	
	The SQL Server driver version 3.70 uses sp_executesql for parameterized queries
	and there is no way to turn off the SQLPrepare logic of the driver. It tries to
	generate a temporary table but the temp table releases outside of the context of
	the stored procedure.
	
	RESOLUTION
	==========
	
	There are four ways to address this issue:
	
	1. Use version 3.6 of the SQL Server ODBC driver.
	
	2. Define the field in the FoxPro table that is to be written to the SQL TEXT
	  column as character 254, rather than MEMO.
	
	3. Add a "SELECT 1" to the SQL stored procedure.
	
	4. Use ASYNCHRONOUS processing.
	
	Of these, the use of ASYNCHRONOUS processing is most favorable because:
	
	1. Keeping the SQL driver at an earlier version may prove impossible as new
	  products are installed that may update it.
	
	2. Developers might need to write data from memo fields.
	
	3. Adding a "SELECT 1" to the SQL stored procedure forces it to return a 1
	  (success) each time it is called, regardless of whether it actually works.
	
	Note that because of the way ASYNCHRONOUS processing works (FoxPro does not wait
	for an SQLEXEC to finish before continuing processing), code that follows an
	SQLEXEC() command might fail if the code is dependant on the return of that
	call. A loop, checking for success of the SQLEXEC call, might be necessary.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	This section assumes that the user has at least an intermediate working knowledge
	of Microsoft SQL Server and Microsoft Visual FoxPro.
	
	NOTE: Before beginning, be sure to have SQL Server 6.5 or later available and
	have version 3.70.0623 of SQLSRV32.DLL on the test client machine.
	
	1. Copy the code in step 6 below into a new FoxPro program on a machine with
	  Visual FoxPro and version 3.70.0623 of SQLSRV32.DLL.
	
	2. Adjust the FIRST #DEFINE, adding a valid SQL SERVER name.
	
	3. Run the program once. This creates a sample table (named TEST_TABLE) and a
	  stored procedure (named TEST_TABLE_PROC) in the PUBS database on the
	  Microsoft SQL Server.
	
	4. Change the "#DEFINE MAKE_SQL_CONTENT" to .F. and run the program again. This
	  runs the test code only. Note the error that occurs. The browse window
	  contains data from the server that was written there successfully, despite
	  the error.
	
	5. Change the "#DEFINE ASYNC_2_USE" to .T. to turn on ASYNCHRONOUS processing.
	
	6. Re-run the program. Note that the error does not occur, as ASYNCHRONOUS is
	  now set to .T. at the time the stored procedure is run.
	
	  ************* START CODE ***************
	  #DEFINE SQLSERVER "<SERVER NAME HERE>"   &&  Substitute your own Microsoft SQL Server name here.
	  #DEFINE ASYNC_2_USE .F.
	  #DEFINE MAKE_SQL_CONTENT .T.
	  LOCAL llOldAsync, lnHandle, lcString, lnRetVal
	
	  CLEAR
	  =SQLSETPROP(0, 'asynchronous', .F.)  && Set a default
	  lnHandle = SQLSTRINGCONN("driver={sql server};server="+SQLSERVER+";database=pubs;uid=sa;pwd=")
	  IF (lnHandle < 0)
	  	MESSAGEBOX (MESSAGE(), 16, [Error!])
	  	RETURN .F.
	  ENDIF
	  ? "Connection Successful"
	
	  IF MAKE_SQL_CONTENT
	  *-- Create test_table on server in PUBS database
	  	=SQLEXEC (lnHandle, [DROP TABLE test_table])
	  	lnRetVal = SQLEXEC (lnHandle, [CREATE TABLE test_table (int_column int, text_column text)])
	  	IF (lnRetVal < 0)
	  		MESSAGEBOX (MESSAGE(), 16, [Error!])
	  		RETURN .F.
	  	ENDIF
	  	? "SQL Table Created"
	  *-- Create a stored procedure to insert data into the test table we just made.
	  	=SQLEXEC (lnHandle, [DROP PROCEDURE test_table_proc])
	  	lcString = [CREATE PROCEDURE test_table_proc (@tnint_column int, @tttext_column text) AS ]
	  	lcString = lcString + [BEGIN INSERT INTO test_table VALUES (@tnint_column, @tttext_column) END]
	  	lnRetVal = SQLEXEC (lnHandle, lcString)
	  	IF (lnRetVal < 0)
	  		MESSAGEBOX (MESSAGE(), 16, [Error!])
	  		RETURN .F.
	  	ENDIF
	  	? "SQL Stored Procedure Created"
	
	  ELSE
	
	  *-- Create front-end cursor to store data
	  	CREATE CURSOR data_for_table (int_column INT, text_column MEMO)
	  	INSERT INTO data_for_table VALUES (1, TTOC(DATETIME()))
	  *-- Send data to the server
	  	lcString = [{CALL test_table_proc (?data_for_table.int_column, ?data_for_table.text_column)}]
	  	llOldAsync = SQLGETPROP(lnHandle, 'asynchronous')
	  	SQLSETPROP(lnHandle, 'asynchronous', ASYNC_2_USE)
	          lnRetVal = 0
	  	lnRetVal  = SQLEXEC (lnHandle, lcString)
	  *!*	May have to do this if you use async = .t. and return 0 occurs
	  *!*		DO WHILE lnRetVal = 0
	  *!*			lnRetVal  = SQLEXEC (lnHandle, lcString)
	  *!*			IF (lnRetVal < 0)
	  *!*				MESSAGEBOX (MESSAGE(), 16, [Error!])
	  *!*			ENDIF
	  *!*			?lnRetVal
	  *!*		ENDDO
	          IF (lnRetVal < 0)
	  		MESSAGEBOX (MESSAGE(), 16, [Error!])
	  	ENDIF
	  	? "Return Value from SQL Server data put: " + ALLT(STR(lnRetVal))
	  	SQLSETPROP(lnHandle, 'asynchronous', llOldAsync)
	  	=SQLEXEC (lnHandle, 'select * from test_table', 'ccur')
	  	BROWSE NOWAIT
	
	  ENDIF
	  =SQLDISCONNECT (lnHandle)
	  ************* END CODE ***************
	
	This code should cause the following error when ASYNCHRONOUS process if set to
	.F.:
	
	  Connectivity error: Unable to retrieve specific error information. Driver is
	  probably out of resources
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Trevor Hancock, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSQL kbvfp300 kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbMDAC250 kbCodeSnippet kbMDAC260 kbSQLProg 
	Technology        : kbVFPsearch kbSQLServSearch kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCSQLServ370 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,2.6,3.0,3.0b,3.7,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
