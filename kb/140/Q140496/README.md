---
layout: page
title: "Q140496: INF: SQLColAttributes Clarification in ODBC 2.10b SDK RELNOTE2"
permalink: /kb/140/Q140496/
---

## Q140496: INF: SQLColAttributes Clarification in ODBC 2.10b SDK RELNOTE2

	Article: Q140496
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.1 
	-------------------------------------------------------------------------------
	
	In the RELNOTE2.WRI file that is shipped with the ODBC Software Development
	Kit (SDK) 2.10b, there is an indication that the descriptor
	SQL_COLUMN_UPDATABLE describes the updatability of the base column, not the
	result set. This is indicated in the Problems and Information section for
	SQLColAttributes(). This section also indicates that the description of
	SQL_COLUMN_UPDATABLE in the SQLColAttributes section of the ODBC 2.0
	"Programmer's Reference and SDK Guide" should be changed to indicate that
	this descriptor describes the updatability of the base column.
	
	Both of the above statements in the RELNOTE2.WRI are incorrect. The
	definition in the ODBC 2.0 "Programmer's Reference" remains as is,
	indicating that SQL_COLUMN_UPDATABLE describes the updatability of the
	column in the result set which may be different from the updatability of
	the column in its base table. It may be possible, in future releases of the
	ODBC API specification, that a column will be added in the SQLColumns
	result set that indicates the updatability of the column in its base table.
	If you want to express your opinion regarding whether or not this should be
	done or how it should or should not be implemented, please feel free to
	send internet mail to:
	
	  ODBCWISH@MICROSOFT.COM.
	
	Additional query words: odbc docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC210
	Version           : WINDOWS:2.1
	
	=============================================================================
	
