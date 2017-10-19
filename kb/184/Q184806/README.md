---
layout: page
title: "Q184806: FIX: SQLPutData Truncates LONG RAW Data Using Oracle ODBC Driver"
permalink: /kb/184/Q184806/
---

## Q184806: FIX: SQLPutData Truncates LONG RAW Data Using Oracle ODBC Driver

	Article: Q184806
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kbDriver kbODBC kbOracle kbODBC200bug kbODBC200fix kbGrpDSMDAC kbGrpDSODBC kbMDACNoSwee
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using the Microsoft ODBC Driver for Oracle (build 2.73.728303) that ships with
	MDAC 1.5c causes a SQL_SUCCESS_WITH_INFO message and a "Data Truncated" error
	when trying to store LONG RAW data with SQLPutData and using SQLBindParameter
	with the ColumnSize (6th Parameter) set to 0 or less than the actual length of
	the data. This occurs even though SQLGetInfo for SQL_NEED_LONG_DATA_LEN returns
	a "No". Also, no data is written to the LONG RAW field.
	
	The problem occurs if you bind the parameter as a SQL_C_BINARY and SQL_BINARY
	like this:
	
	  g_rc = SQLBindParameter(g_hstmt, 1, SQL_PARAM_INPUT, SQL_C_BINARY,
	  SQL_BINARY, 0, 0, NULL, 0, &cbVal1);
	
	RESOLUTION
	==========
	
	Make the Columnsize parameter of the SQLBindParameter equal to or greater than
	the actual value of the data length passed in SQLPutData. Upgrade to the
	Microsoft Oracle ODBC Driver available in Visual Studio 6.0 or Microsoft Data
	Access Components version 2.0 or later. You can download the MDAC Components
	from the following Web address:
	
	  http://www.microsoft.com/data/
	
	STATUS
	======
	
	This bug has been fixed in version 2.573.2927 of the Microsoft Oracle ODBC
	Driver.
	
	Additional query words: msoracle
	
	======================================================================
	Keywords          : kbDriver kbODBC kbOracle kbODBC200bug kbODBC200fix kbGrpDSMDAC kbGrpDSODBC kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle273728301 kbODBCOracle200Search
	Version           : :Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
