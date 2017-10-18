---
layout: page
title: "Q120044: BUG: Access ODBC: SQLGetInfo(SQL_NON_NULLABLE_COLUMNS)"
permalink: kb/120/Q120044/
---

## Q120044: BUG: Access ODBC: SQLGetInfo(SQL_NON_NULLABLE_COLUMNS)

	Article: Q120044
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# SQLDBASE: 2131 (1.01.1928)
	
	SYMPTOMS
	========
	
	Calling SQLGetInfo with InfoType=SQL_NON_NULLABLE_COLUMNS for Microsoft Access
	ODBC driver returns the value as SQL_NNC_NON_NULL, which implies that the
	columns may be non-nullable and that the data source supports the NOT NULL
	column constraint in CREATE TABLE statement. However, the Microsoft Access ODBC
	driver does not allow NON NULL constraint in the CREATE TABLE. Therefore, the
	value returned should be SQL_NNC_NULL to indicate that all columns must be
	nullable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Access ODBC driver version
	1.01.1908. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.1928 ODBC Simba MSVC C++ Desktop Drivers DDD
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
