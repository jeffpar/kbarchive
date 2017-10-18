---
layout: page
title: "Q157617: BUG: SQLStatistics Does Not Return Unique Index Information"
permalink: kb/157/Q157617/
---

## Q157617: BUG: SQLStatistics Does Not Return Unique Index Information

	Article: Q157617
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,2.65; winnt:6.5
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 6.5 
	- Microsoft ODBC Driver for SQL Server, version 2.65 
	- Microsoft Open Database Connectivity, version 2.5 
	-------------------------------------------------------------------------------
	
	BUG #: 16050 (sql server: 6.5)
	
	SYMPTOMS
	========
	
	When an ODBC application uses a SQLStatistics function call to retrieve the
	index information associated with the views, the SQLStatistics function does not
	return any index information for the views.
	
	When Microsoft Access database users create link tables to SQL Server tables
	using SQL Server data sources, the SQL Server ODBC Driver uses SQLStatistics to
	automatically retrieve the index information and set up the link tables, without
	prompting the users to select a unique index for the tables.
	
	Microsoft Access database users may be prompted to select the unique index record
	identifier when they create link tables to SQL Server views, because
	SQLStatistics does not return any information associated with the views.
	
	CAUSE
	=====
	
	SQLStatistic uses the Microsoft SQL Server stored procedure sp_statistics to
	retrieve the unique index information, and sp_statistics does not return unique
	index information for views.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server version
	6.5, Open Database Connectivity 2.5, and ODBC Driver version 2.65. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 2.50 2.65
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ650 kbODBCSearch kbODBCSQLServ265 kbODBC250
	Version           : WINDOWS:2.5,2.65; winnt:6.5
	Issue type        : kbbug
	
	=============================================================================
	
