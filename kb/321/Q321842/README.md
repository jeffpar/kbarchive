---
layout: page
title: "Q321842: ODBC Call Fail on SQL Query with Parameter Markers in Subquery"
permalink: /kb/321/Q321842/
---

## Q321842: ODBC Call Fail on SQL Query with Parameter Markers in Subquery

	Article: Q321842
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,2.0,2.5,2.65,2.65.0212,2000.80.194,3.0,3.5,3.6,3.7
	Operating System(s): 
	Keyword(s): kbProgramming kbDatabase
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 1.0, 2.0, 2.5, 2.65, 2.65.0212, 2000.80.194, 3.0, 3.5, 3.6, 3.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ODBC application programming interface (API) calls such as SQLDescribeCol,
	SQLDescribeParam, and SQLNumResultCols, that retrieve meta data, fail when an
	application tries to use the calls with Microsoft ODBC Driver for SQL Server on
	parameters that are part of the subqueries.
	
	CAUSE
	=====
	
	The driver does not retrieve information for parameters that are not bound in
	subqueries.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	SQLNumResultCols returns an incorrect column count, and SQLDescribeCol returns
	an error similar to the following:
	
	  [Microsoft][ODBC SQL Server Driver]Prepared statement is not a
	  cursor-specification
	
	If the parameters have been bound by the application through the SQLBindParameter
	API, the driver uses that information and the meta data calls do not fail.
	
	To reproduce this behavior from the ODBC Test tool, follow these steps:
	
	1. Connect to the NorthWind database in SQL Server.
	
	2. Call SQLPrepare on the following line of code:
	
	  select T1.EmployeeID as c1 from (select * from EMPLOYEES where EMPLOYEES.EmployeeID   = ?) T1
	
	Note that SQLNumResultCols returns 0 instead of 1. If SQLBindParameter was called
	before SQLNumResultCols, the correct column count is retrieved.
	
	REFERENCES
	==========
	
	
	
	Additional query words: SQLSRV32.DLL ODBC32.DLL CATALOG
	
	======================================================================
	Keywords          : kbProgramming kbDatabase 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ100 kbODBCSQLServ200 kbODBCSQLServ250 kbODBCSQLServ265 kbODBCSQLServ2650212 kbODBCSQLServ200080194 kbODBCSQLServ300 kbODBCSQLServ350 kbODBCSQLServ360 kbODBCSQLServ370
	Version           : :1.0,2.0,2.5,2.65,2.65.0212,2000.80.194,3.0,3.5,3.6,3.7
	Issue type        : kbprb
	
	=============================================================================
	
