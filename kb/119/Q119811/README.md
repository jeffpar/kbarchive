---
layout: page
title: "Q119811: BUG: Dbase or FoxPro: Fox Memo Select Stopped by Dbase"
permalink: kb/119/Q119811/
---

## Q119811: BUG: Dbase or FoxPro: Fox Memo Select Stopped by Dbase

	Article: Q119811
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2129 (1.01.1928)
	
	SYMPTOMS
	========
	
	The ODBC FoxPro driver is unable to fetch data from a Microsoft FoxPro table
	that contains memo fields when it follows any CREATE TABLE statement executed
	with the ODBC Dbase driver during a session operating on the same ODBC
	environment handle allocated via SQLAllocEnv().
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Desktop Database
	Drivers version 1.01.1928. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The following is the ODBC Application Programming Interface (API) call sequence
	that recreates this problem:
	
	1. Connect to any ODBC Dbase datasource.
	
	2. Create any form of Dbase table with the ODBC Dbase driver, Then free the
	  statement handle used for this operation with SQLFreeStmt() but do not call
	  SQLDisconnect().
	
	3. Connect to an FoxPro ODBC datasource that provides access to a FoxPro table
	  containing at least one memo field.
	
	4. Attempt to execute a SQL SELECT query on the FoxPro table containing the memo
	  field via SQLExecDirect() or attempt to prepare such a statement with
	  SQLPrepare(); either way, the same problem will be created.
	
	  The error message received is:
	
	  [Microsoft][ODBC Single-Tier Driver][ODBC File Library]General Isam error.
	  [Microsoft][ODBC Single-Tier Driver]Unable to open table: <table_name>.
	
	To recreate this problem in MS Query:
	
	1. Define a Dbase and a FoxPro ODBC datasource. You will need to create a Fox
	  table ahead of time with your Fox datasource. It can have any number of
	  columns but must contain one memo field.
	
	  For example,
	
	  create table fox1 (col1 memo)
	
	2. In MS Query, from the File menu, select Execute SQL....
	
	3. Click the Data Sources... button, and choose the Dbase datasource you have
	  defined; click the Use button.
	
	4. Create any form of Dbase table.
	
	  For example:
	
	  create table dbase1 (col1 char(30)).
	
	  Then click the Execute button to execute the SQL statement. You should receive
	  the message:
	
	  Microsoft Query
	  Executed SQL Statement successfully
	
	5. Click the Data Sources... button and choose the FoxPro datasource you have
	  defined, click the Use button.
	
	6. Try to query on the Fox table with the SQL statement:
	
	  select * from fox1,
	
	  Click the Execute button to execute the SQL statement. You will get the
	  message:
	
	  Microsoft Query
	  General ISAM error
	  Unable to open table: fox1.
	
	Additional query words: 1.01.1928 Dbase FoxPro Fulfillment Kit MSDN Excel Word Visual C++ MFC
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
