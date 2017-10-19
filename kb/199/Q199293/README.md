---
layout: page
title: "Q199293: PRB: Numeric Value Out of Range Error with MS Oracle ODBC Driver"
permalink: /kb/199/Q199293/
---

## Q199293: PRB: Numeric Value Out of Range Error with MS Oracle ODBC Driver

	Article: Q199293
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,Build 2.573.2927,Build 2.573.3513
	Operating System(s): 
	Keyword(s): kberrmsg kbProgramming kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbGrp
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A client application may receive the following error when using Msorcl32.dll
	version 2.5 (build 2.573.2927, 2.573.3513, and 2.573.4403):
	
	  [Microsoft][ODBC Driver for Oracle]Error in column #: Numeric value out of
	  range.
	
	CAUSE
	=====
	
	The earlier versions of the driver return hard-coded values for precision and
	scale when the Oracle database does not return these values. In the Oracle ODBC
	driver version 2.5, these values are set to zero in such cases according to the
	ODBC specifications.
	
	In such cases, some applications that depend on these values usually bind the
	columns in the resultset to the lowest possible datatype (integer) for numeric
	datatypes. When the values go out of range for these data columns, the Oracle
	driver throws the error message.
	
	For example, do the following:
	
	1. Create a sequence generator using the following code:
	
	  Create SEQUENCE test_seq
	  INCREMENT BY 10
	  START WITH 32766
	
	2. From Microsoft Access (do a pass-through query):
	
	SELECT test_seq.NEXTVAL FROM SYS.DUAL
	
	RESULTS: An "ODBC Call failed" is returned and the error above because the next
	value 32776 is out of range with respect to the integer datatype.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following four workarounds:
	
	- Use the ODBC driver for Oracle version 2.573.6526 that ships with Microsoft
	  Data Access Components (MDAC) version 2.6. You can download MDAC 2.6 from the
	  following Microsoft Web site:
	
	  http://www.microsoft.com/data/download.htm
	
	- Use version 1.0 of the driver.
	
	- Modify your SQL statements such that they return commonly used datatypes. For
	  example:
	
	Select TO_CHAR(test_seq.NEXTVAL) from SYS.DUAL.
	
	- Use precision and scale on Oracle's NUMBER datatype. For instance,
	  NUMBER(10,3).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbProgramming kbDatabase kbDriver kbODBC kbOracle kbGrpDSMDAC kbDSupport kbGrpDSODBC 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle250Search
	Version           : :2.5,Build 2.573.2927,Build 2.573.3513
	Issue type        : kbprb
	
	=============================================================================
	
