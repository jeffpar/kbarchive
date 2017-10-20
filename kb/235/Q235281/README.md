---
layout: page
title: "Q235281: FIX: Negative 0 (zero) Causes ODBC SQL Server Driver Error"
permalink: /kb/235/Q235281/
---

## Q235281: FIX: Negative 0 (zero) Causes ODBC SQL Server Driver Error

{% raw %}

	Article: Q235281
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.7; winnt:7.0
	Operating System(s): 
	Keyword(s): kbSQLServ700bug kbDSupport kbSQLServ700sp2fix
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 7.0 
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a SQL Server query returns a negative zero, and the client application binds
	the results as a SQL_C_DOUBLE, the following error is reported to the client:
	
	  [Microsoft][ODBC SQL Server Driver]Invalid character value for cast
	  specification
	
	CAUSE
	=====
	
	SQL Server is returning a negative zero, and the SQL Server driver is reporting
	this as an error. To reproduce the error run the following query:
	
	  SELECT 0.0 * -1
	
	When you fetch the resulting column from this query you receive the error. In a
	more complex scenario the following query also causes the error:
	
	  SELECT col1 * -1 FROM mytable
	
	WORKAROUND
	==========
	
	Either bind the column as a SQL_C_CHAR or SQL_C_LONG to avoid the error. You can
	also check that the resulting data does not contain a negative zero.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SQL Server 7.0. This problem has
	been corrected in U.S. Service Pack 2 for Microsoft SQL Server 7.0. For
	information about how to download and install the latest SQL Server Service
	Pack, see the following Microsoft Web site:
	
	  http://support.microsoft.com/highlights/sql.asp
	
	For more information, contact your primary support provider.
	
	Additional query words: ODBC
	
	======================================================================
	Keywords          : kbSQLServ700bug kbDSupport kbSQLServ700sp2fix 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ700 kbODBCSearch kbODBCSQLServ370
	Version           : WINDOWS:3.7; winnt:7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
