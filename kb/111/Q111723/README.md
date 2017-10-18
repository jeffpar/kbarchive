---
layout: page
title: "Q111723: BUG: SQL Server SQLSetParam Fails on the 252nd Parameter"
permalink: kb/111/Q111723/
---

## Q111723: BUG: SQL Server SQLSetParam Fails on the 252nd Parameter

	Article: Q111723
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSS: 2816 (1.01.2920)
	
	SYMPTOMS
	========
	
	The ODBC SQL Server driver returns an error with SQLSTATE S1093 when SQLSetParam
	is called for the 252nd time on a prepared statement with more than 252
	parameter markers in it.
	
	Because of this, users of Microsoft Access version 1.1 may see an error,
	
	  ODBC Call Failed
	
	when they try and update an attached table with more than 125 columns.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC SQL Server Driver version
	1.01.2920. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	For an ODBC application writer, do the following:
	
	  //create a table with 127 columns
	  CREATE TABLE lot_of_columns (col1 INT, col2 INT, ..., col127 INT)
	
	  //Prepare an update statement with 254 parameter markers
	  SQLPrepare: UPDATE lot_of_columns SET col1 = ?,..., col127 = ?
	            WHERE col1 = ?,..., col127 = ?
	
	SQLSetParam for each one of these parameters. The 252nd SQLSetParam returns
	SQL_ERROR:
	
	  SQLSTATE S1093, [Microsoft][ODBC SQL Server Driver]Invalid Parameter number
	
	For users of Microsoft Access version 1.1, do the following:
	
	1. Attach to a SQL Server table with 126 columns or more.
	
	2. Open this table in datasheet view.
	
	3. Try to update a column in this datasheet.
	
	The following error occurs:
	
	  ODBC - Call Failed. [Microsoft][ODBC SQL Server Driver]Invalid Parameter
	  number
	
	Additional query words: SQLSetParam S1093
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
