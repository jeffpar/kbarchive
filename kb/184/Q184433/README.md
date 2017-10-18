---
layout: page
title: "Q184433: BUG: Escape Seq in Params to Stored Procs Are Incorrectly Parsed"
permalink: kb/184/Q184433/
---

## Q184433: BUG: Escape Seq in Params to Stored Procs Are Incorrectly Parsed

	Article: Q184433
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Escape sequences for date, time, and datetime columns used for parameters to
	stored procedures are incorrectly parsed by the ODBC SQL Server Driver version
	number 3.50.0305 (Sqlsrv32.dll). The client receives the following error
	messages:
	
	  [Microsoft][ODBC SQL Server Driver]Fractional truncation [Microsoft][ODBC SQL
	  Server Driver][SQL Server]Procedure <procname> expects parameter
	  <paramname> which was not supplied.
	
	WORKAROUND
	==========
	
	To work around the problem, use an earlier version of the driver (for example,
	version 2.6x).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SQL Server Driver version
	3.50.0305. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ350
	Version           : WINDOWS:3.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
