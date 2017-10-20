---
layout: page
title: "Q201061: FIX: MDAC 2.0 SQL Server ODBC Driver Hangs On SQLDescribeCol()"
permalink: /kb/201/Q201061/
---

## Q201061: FIX: MDAC 2.0 SQL Server ODBC Driver Hangs On SQLDescribeCol()

{% raw %}

	Article: Q201061
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.5,3.6
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQLServ650bug kbODBC350bug kbODBC360bug kbSQLServ650bug kbSQLServ65
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 3.5, 3.6 
	-------------------------------------------------------------------------------
	
	BUG #: 50383 (SQLBUG_70)
	
	SYMPTOMS
	========
	
	Applications using the following versions of the Microsoft SQL Server ODBC
	Driver hang on calls to SQLDescribeCol(), after SQLPrepare() is called, if the
	prepared SQL statement contains derived tables:
	
	- Version 3.50.0305
	
	- Version 3.50.0306
	
	- Version 3.60.0319
	
	WORKAROUND
	==========
	
	Call SQLDescribeCol() after calling SQLExecute() and SQLExecDirect().
	
	NOTE: This problem does not occur in version 2.65.0252 or earlier versions of the
	driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft SQL Server ODBC
	Driver versions 3.50.0305, 3.50.0306, or 3.60.0319.
	
	This problem was corrected in the Microsoft SQL Server ODBC Driver version
	3.70.0623.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	Using ODBCTest connect to the pubs database in SQL Server and call SQLPrepare()
	on the following query. Next, call SQLDescribeCol() on the first column.
	
	  select c35
	  from (select T1.discounttype c35, sum(T1.discount) c36
	        from pubs.dbo.discounts T1 group by T1.discounttype) D2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQLServ650bug kbODBC350bug kbODBC360bug kbSQLServ650bug kbSQLServ650sp5fix kbDSupport kbbuglist
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ350 kbODBCSQLServ360
	Version           : WINDOWS:3.5,3.6
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
