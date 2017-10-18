---
layout: page
title: "Q125306: BUG: Cannot Insert BLOB Data Sized Between 64K and 128K"
permalink: kb/125/Q125306/
---

## Q125306: BUG: Cannot Insert BLOB Data Sized Between 64K and 128K

	Article: Q125306
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# Addon_Bugs: 10577 (2.00.1912)
	
	SYMPTOMS
	========
	
	When SQLSetParam is used to insert image/text data where the total size (such
	as, the cbcoldef argument for SQLSetParam) is between 64K and 128K, you may
	receive the following SQLState 01004 message from the SQL Server driver:
	
	  Data Truncated.
	
	NOTE: This message is received on SQLExecDirect, SQLExecute, or SQLPutData,
	depending on whether data-at-execution parameter was used or not.
	
	WORKAROUND
	==========
	
	Use the ODBC version 2.0 function SQLBindParameter instead of SQLSetParam. This
	problem only occurs when SQLSetParam is used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the SQL Server driver version
	2.00.1912. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 2.00.1912 Windows NT kbbug2.00.1912 kbprg
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
