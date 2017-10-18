---
layout: page
title: "Q118378: BUG: Cannot Update More Than 64K of Long Data"
permalink: kb/118/Q118378/
---

## Q118378: BUG: Cannot Update More Than 64K of Long Data

	Article: Q118378
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2125 (1.01.1928)
	
	SYMPTOMS
	========
	
	When using SQLPutData in chunks to update SQL_LONGVARBINARY o SQL_LONGVARCHAR
	data to 64K or greater with the ODBC Desktop Database drivers, the following
	message is received:
	
	  
	  SQLState 22001 [Microsoft][ODBC Single Tier Driver] Maximum SQLPutData length
	  exceeded
	
	WORKAROUND
	==========
	
	Because inserts work but updates fail with the above operation, the only
	workaround is to make a copy of the row to updated, delete that row, and then
	insert the row again, along with the SQL_LONGVARCHAR or SQL_LONGVARBINARY data
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Desktop Database
	Drivers versions 1.01.1928 and 1.01.2115. We are researching this problem and
	will post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	According to the ODBC specification, SQLPutData can be used in chunks smaller
	than 64K to insert and update long data to the maximum limit set by that data
	source. This works for inserts with the Desktop Drivers, but fails for updates.
	
	For instance, if SQLBindParamter is used to set the length of the total data to
	be sent during execution time at 96K and SQLPutData is called to send data in
	32K chunks, the second call to SQLPutData will fail with the above message.
	
	Additional query words: 1.01.1928 1.01.2115 DDD Visual C++ Word Excel
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
