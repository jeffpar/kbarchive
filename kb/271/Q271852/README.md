---
layout: page
title: "Q271852: BUG: MS Oracle ODBC Driver Truncates Spaces in Column Name"
permalink: kb/271/Q271852/
---

## Q271852: BUG: MS Oracle ODBC Driver Truncates Spaces in Column Name

	Article: Q271852
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250bug kbM
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202, Build 2.573.4403, Build 2.573.5303, Build 2.573.6019, Build 2.573.6526, Build 2.573.7326, Build 2.573.7626, Build 2.573.7713.2 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Microsoft's Oracle ODBC driver with the ODBC SQLDescribeCol
	function, incorrect values may be returned for the column name and column name
	length.
	
	CAUSE
	=====
	
	This problem occurs when you have a trailing space in the table's column name.
	The Microsoft Oracle ODBC driver truncates any trailing spaces when the column
	information is returned by the SQLDescribeCol function.
	
	RESOLUTION
	==========
	
	You can work around this problem in either of the following ways:
	
	- Use the SQLColumns ODBC API instead of SQLDescribeCol to retrieve the exact
	  name of the column. SQLColumns returns the correct name, without truncating
	  the trailing spaces.
	
	  -or-
	
	- You can also query the catalog information from Oracle to retrieve the column
	  name. To do this, use the USER_TAB_COLUMNS table with the following SQL
	  statement:
	
	  Select COLUMN_NAME from USER_TAB_COLUMNS WHERE TABLE_NAME='TEST'
	
	This statement returns the correct column name, including the trailing spaces.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use the ODBC Test program (the Obdcte32.exe file that comes with the
	  Microsoft Data Access Components Software Development Kit) to connect to any
	  Oracle server.
	
	2. Create a table by using the following commands and script. Call SQLExecDirect
	  to execute the following SQL statement:
	
	  Create table Test(" Col " VarChar2(10))
	
	3. Call SQLExecDirect to execute the following SQL statement:
	
	  Select * from Test
	
	4. Call SQLDescribeCol for column number 1. The output window displays the
	  following:
	
	  SQLDescribeCol:
	  ...
	  Return:	SQL_SUCCESS=0
	  Out: *ColumnName = " col", *NameLengthPtr = 4, *DataTypePtr = SQL_CHAR=1, *ColumnSizePtr = 10, *DecimalDigits = 0, *NullablePtr = SQL_NULLABLE=1
	
	NOTE: We have created a column whose name is of length 5. SqlDescribeCol has
	returned *NameLengthPtr = 4, instead of 5 as expected. Also note that the column
	name is returned as " col" instead of as " col ". The trailing space has been
	truncated by the driver.
	
	Additional query words: msorcl32
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250bug kbMDAC260bug 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle25734403 kbODBCOracle25736526 kbMDAC270 kbodbcOracle25737626 kbodbcoracle25735303 kbODBCOracle25736019 kbODBCOracle25737326 kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.5,2.6,2.7,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202,Build 2.573.4403,Build 2.573.5303,Build 2.573.6019,Build 2.573.6526,Build 2.573.7326,Build 2.573.7626,Build 2.573.7713.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
