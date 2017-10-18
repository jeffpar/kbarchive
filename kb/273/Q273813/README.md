---
layout: page
title: "Q273813: FIX: &quot;Incorrect Syntax near the Keyword 'by'&quot; Error Message"
permalink: kb/273/Q273813/
---

## Q273813: FIX: &quot;Incorrect Syntax near the Keyword 'by'&quot; Error Message

	Article: Q273813
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.6,3.7,7.0,7.0 Service Pack 1,7.0 Service Pack 2
	Operating System(s): 
	Keyword(s): kbDriver kbMDAC kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250bug kbMDAC
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	- Microsoft Data Access Components versions 2.5, 2.6 
	- Microsoft SQL Server 2000 (all editions) 
	- Microsoft SQL Server versions 7.0, 7.0 Service Pack 1, 7.0 Service Pack 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a table has been created in SQL Server that contains column names of "C",
	"CA" or "CAS", and if a statement is prepared that uses parameters against these
	columns, attempting to call the SQLDescribeParam function for these parameters
	generates the following error message:
	
	  42000 [Microsoft][ODBC SQL Server Driver][SQL Server]Incorrect syntax near
	  the keyword 'by'.
	
	This error message occurs when you use SQL Server ODBC driver version 3.70.0820
	(Microsoft Data Access Components [MDAC] 2.5, Microsoft Windows 2000) and later.
	This error also occurs in the Microsoft SQL Server 2000 ODBC driver, version
	2000.080.0194.00.
	
	CAUSE
	=====
	
	In the call to SQLDescribeParam, a SQL statement is being constructed by the
	driver to retrieve the parameter metadata. The driver checks to see if a CASE
	function is included in this statement, and is incorrectly comparing the "C",
	"CA" and "CAS" column names against the CASE keyword. The comparison returns
	True, and the driver appends a GROUP BY clause on the end of the statement.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Data
	Access Components 2.6. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q300635 INFO: How to Obtain the Latest MDAC 2.6 Service Pack
	
	Hotfix
	------
	
	The English version of this fix should have the following file attributes or
	later:
	
	Microsoft SQL Server 7.0
	
	  Date         Version     Size             File name
	  -------------------------------------------------------
	  9/08/2000    3.70.9.0    524,560 bytes    Sqlsrv32.dll
	  9/08/2000    3.70.9.0     24,848 bytes    Odbcbcp.dll
	
	Microsoft SQL Server 2000
	
	  Date          Version          Size             File name
	  ------------------------------------------------------------
	  09/11/2000    2000.80.203.0    471,119 bytes    Sqlsrv32.dll	
	  09/11/2000    2000.80.203.0     90,112 bytes    Sqlsrv32.rll		
	  09/11/2000    2000.80.203.0     28,742 bytes    Odbcbcp.dll	
	
	
	
	WORKAROUND
	----------
	
	To work around this problem:
	
	- If possible, do not include the names of the columns in the SQL statement.
	  For example, instead of using syntax like:
	
	  Insert into CATest (CA) values (?)
	
	  use the following:
	
	  Insert into CATest values (?, ?, ...)
	
	-or-
	
	- Concatenate the parameters directly into the SQL statement instead of using
	  parameter markers. For example, use the following syntax:
	
	  Insert into CATest (CA) values ('abc')
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Data Access Components (MDAC) 2.5 Service
	Pack 2, MDAC 2.6 Service Pack 1, and MDAC 2.7.
	
	MORE INFORMATION
	================
	
	This error occurs primarily when you construct INSERT statements, and when the
	column names of "C", "CA" or "CAS" are included in the field list. The error
	message does not occur if the SQL statement does not contain a field list.
	
	An ODBC trace or a SQL Profiler trace shows that the driver's internal SELECT
	statement has been incorrectly formed as:
	
	  Select CA from CATestgroup by
	
	Because the SELECT statement is incorrectly formed, the error message occurs when
	the statement is sent to the server for processing.
	
	This fix is available for the Microsoft SQL Server 7.0 SP2 ODBC driver, and the
	Microsoft SQL Server 2000 ODBC driver. NOTE: Please use the files in
	SQL70_ColName_Fix.exe for SQL Server 7.0 and use the files in
	SQL2000_ColName_Fix.exe for SQL Server 2000.
	
	Additional query words: sqlsrv32.dll incorrect syntax keyword by
	
	======================================================================
	Keywords          : kbDriver kbMDAC kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250bug kbMDAC260bug kbMDAC250SP1bug kbMDAC260sp1Fix kbmdac270 kbmdac270fix 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ700 kbSQLServ2000Search kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbSQLServ700SP1 kbSQLServ700SP2 kbODBCSQLServ370 kbSQLServ2000
	Version           : :2.5,2.6,3.7,7.0,7.0 Service Pack 1,7.0 Service Pack 2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
