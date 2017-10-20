---
layout: page
title: "Q243810: FIX: Incorrect Errors Occur w/ SELECT Queries Using Oracle 8.0.5"
permalink: /kb/243/Q243810/
---

## Q243810: FIX: Incorrect Errors Occur w/ SELECT Queries Using Oracle 8.0.5

{% raw %}

	Article: Q243810
	Product(s): Open Database Connectivity (ODBC)
	Version(s): Build 2.573.2927,Build 2.573.3513,Build 2.573.3711
	Operating System(s): 
	Keyword(s): kbDriver kbODBC kbOracle kbODBC250bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260fix k
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a table that contains a date field is queried on an Oracle server, version
	8.0.5.0, from a parameterized SELECT statement, an invalid error occurs. For
	example, this code would cause the error:
	
	     SELECT * FROM table WHERE DATECOL = ?
	
	The Oracle driver reports the following error message from Oracle when trying to
	derive column information:
	
	  [Microsoft][ODBC driver for Oracle][Oracle]ORA-01003:no statement parsed
	
	CAUSE
	=====
	
	The Microsoft ODBC for Oracle driver (Msorcl32.dll) binds the parameter only
	after deriving column information from Oracle, and in the case of date fields it
	gets an error message from Oracle, which it incorrectly reports back.
	
	RESOLUTION
	==========
	
	One way of getting around the problem is to tell Oracle that the parameter will
	be a date parameter, which resolves the problem.
	Instead of this code:
	
	     SELECT * FROM temp1 WHERE c1 <= (?+1)
	
	Use this code:
	
	     SELECT * FROM temp1 WHERE c1 <= (to_date(to_char(?))+1)
	
	With this implementation, the column information is derived correctly.
	
	An updated version of the Microsoft ODBC for Oracle, the msorcl32.dll file
	version 2.573.4202.3, which corrects this problem, is installed in the Microsoft
	Data Access Components (MDAC SP2 GA) update 2.1.2.4202.3.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem with the Microsoft ODBC for
	Oracle driver (msorcl32.dll) versions 2.573.2927, 2.573.3513 and 2.573.3711,
	which report the error message from Oracle incorrectly.
	
	MORE INFORMATION
	================
	
	This problem can be reproduced using these steps:
	
	1. From SQL *Plus, or any Oracle client utility, connect to the correct database
	  and execute the following sql statements:
	
	     CREATE TABLE Temp1 (C1  DATE)
	     INSERT INTO Temp1(C1) VALUES ( {ts '1999-05-05 00:00:00'} )
	
	  This should successfully insert a row in the Temp1 table.
	
	2. Bind the date field parameter using SQLBindParameter:
	
	     InputOutputtype = SQL_PARAM_INPUT=1
	     ValueType = SQL_C_CHAR=1,
	     ParameterType = SQL_TYPE_TIMESTAMP=93
	     ColumnSize = 19
	     DecimalDigits = 0
	     ParameterValuePtr = "{ ts '1999-05-05 00:00:00'}"
	     BufferLength = 300
	     StrLen_or_IndPtr = SQL_NTS=-3
	     SQL_LEN_DATA_AT_EXEC = FALSE
	     BufferSize = 300
	
	3. Execute the parameterized select query using SQLExecDirect:
	
	     StatementText = "SELECT  * FROM Temp1 WHERE C1 <= (? +1)"
	     Statementlength = 40
	
	  A return value of 0(SQL_SUCCESS) is seen.
	
	4. Create another statement handle (hstmt) and perform steps 2 and 3 again
	  (SQLBindParameter and SQLExecDirect). The incorrect error message is seen.
	
	  The correct error message from Oracle that should be displayed is:
	
	  ORA-00932: inconsistent datatypes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDriver kbODBC kbOracle kbODBC250bug kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260fix kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle250Search
	Version           : :Build 2.573.2927,Build 2.573.3513,Build 2.573.3711
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
