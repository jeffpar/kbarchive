---
layout: page
title: "Q137970: BUG: Precision for a Projected Column Always Reported as 255"
permalink: kb/137/Q137970/
---

## Q137970: BUG: Precision for a Projected Column Always Reported as 255

	Article: Q137970
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0,3.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	BUG# NT: 2350 (QJET)
	
	SYMPTOMS
	========
	
	SQLDescribeCol always returns pcbColDef = 255 for a scalar function projected
	column of SQL_VARCHAR data type of defined length.
	
	This problem occurs with all 16- and 32-bit Access drivers. This does not happen
	with SQL Server drivers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Access Driver versions
	2.00.2317 and 3.00.2106. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	To reproduce this problem:
	
	- The 'name' field is of type SQL_VARCHAR of defined length.
	
	- Select name, UCASE(name) from oof
	
	  SQLDescribeCol for column 2 returns pcbColDef = 255.
	
	also
	
	- Select name, {fn UCASE(name)} from oof
	
	  SQLDescribeCol for column 2 returns pcbColDef = 255.
	
	Additional query words: odbc access driver connectivity sql
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300 kbODBC200
	Version           : WINDOWS:2.0,3.0
	Issue type        : kbbug
	
	=============================================================================
	
