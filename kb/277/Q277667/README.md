---
layout: page
title: "Q277667: PRB: SELECT DISTINCT Fails with Microsoft ODBC for Oracle"
permalink: /kb/277/Q277667/
---

## Q277667: PRB: SELECT DISTINCT Fails with Microsoft ODBC for Oracle

	Article: Q277667
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Bu
	Operating System(s): 
	Keyword(s): kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbmdac270
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019, Build 2.573.6526, Build 2.573.7326, Build 2.573.7626, Build 2.573.7713.2 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a SELECT DISTINCT statement is used with the Microsoft ODBC for Oracle
	driver, the following error may occur:
	
	  DIAG [HYC00] [Microsoft][ODBC driver for Oracle]Cannot use Keyset-driven
	  cursor on join, with distinct clause, union, intersect or minus or on read
	  only result set (0)
	
	CAUSE
	=====
	
	The Microsoft ODBC for Oracle driver uses the hidden Oracle column ROWID, which
	assigns a unique ID for each row. Because this negates the uniqueness constraint
	imposed by the DISTINCT keyword, the driver issues the above error rather than
	bring back multiple copies of the same data.
	
	RESOLUTION
	==========
	
	If you require the use of the DISTINCT keyword, you can use the Microsoft OLE DB
	Provider for Oracle, because the provider doesn't use the ROWID column when
	DISTINCT is used. For additional information, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q258997 INFO: Oracle OLE DB Provider and ROWID Use
	
	There is no workaround for this behavior with the Microsoft ODBC for Oracle
	driver.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table to test with:
	
	  
	
	  CREATE TABLE FOO (C1 CHAR(20))
	
	2. Insert some data into the table:
	
	  
	
	  INSERT INTO FOO VALUES('aaa')
	  INSERT INTO FOO VALUES('bbb')
	
	3. Using the ODBC API SQLSetConnectAttr, set the connection attribute
	  SQL_CURSOR_TYPE to the value SQL_CURSOR_KEYSET_DRIVEN. This ensures that you
	  get a keyset cursor, which uses the hidden ROWID column.
	
	4. Execute the following SQL statement:
	
	  
	
	  SELECT DISTINCT * FROM FOO
	
	The ODBC call returns SQL_ERROR, and the associated error text will be the error
	shown in the "Symptoms" section of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMDAC kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbmdac270 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle25736526 kbMDAC270 kbodbcOracle25737626 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle25737326 kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019,Build 2.573.6526,Build 2.573.7326,Build 2.573.7626,Build 2.573.7713.2
	Issue type        : kbprb
	
	=============================================================================
	
