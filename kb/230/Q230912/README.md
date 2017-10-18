---
layout: page
title: "Q230912: PRB: Not a Valid Month Error when Inserting to Oracle Date Field"
permalink: kb/230/Q230912/
---

## Q230912: PRB: Not a Valid Month Error when Inserting to Oracle Date Field

	Article: Q230912
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.0,2.0,2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.4403,Build 2.573.6526,Build 2.573
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbMDAC kbODBC kbOracle kbVBp600 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbD
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.4403, Build 2.573.6526, Build 2.573.7713.2 
	- Microsoft Data Access Components versions 2.0, 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Existing code that successfully inserts records into a Date field in an Oracle
	table breaks when upgrading the Microsoft ODBC driver for Oracle from version
	2.00.XXXX (Msorcl10.dll) to version 2.573.XXXX (Msorcl32.dll).
	
	For example, the following insert statement works with the old version of
	Microsoft ODBC driver for Oracle (Msorcl10.dll):
	
	  .....
	  sSql = "INSERT INTO DATETEST VALUES ('1988-12-01 10:23:03')"
	  conn.Execute sSql
	
	However, with the newer version of the Microsoft ODBC driver for Oracle
	(Msorcl32.dll), the same insert statement gives the following error:
	
	  Microsoft OLE DB Provider for ODBC Drivers error '80040e07'
	  [Microsoft][ODBC driver for Oracle][Oracle]ORA-01843: not a valid month
	  /Project/xxx.asp, line xx
	
	CAUSE
	=====
	
	In the old version of Microsoft ODBC driver for Oracle (Msorcl10.DLL), the ODBC
	driver does the following when it connects:
	
	  ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD HH:MI:SS'
	
	This explains why an insert of a date field in the following format worked in the
	previous driver:
	
	  'YYYY-MM-DD HH:MI:SS'
	
	With the Microsoft ODBC driver for Oracle (Msorcl32.dll), this feature has been
	removed. The new driver does not set the date format for Oracle date fields
	automatically.
	
	RESOLUTION
	==========
	
	To allow existing insert statements to work correctly with the new driver,
	modify your code as follows:
	
	  conn.Execute "ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD HH:MI:SS'"
	
	  sSql = "INSERT INTO DATETEST VALUES ('1988-12-01 10:23:03')"
	
	  conn.Execute sSql
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbMDAC kbODBC kbOracle kbVBp600 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC260 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC200 kbMDAC210 kbMDAC250 kbMDAC260 kbODBCOracle206325 kbODBCOracle25732927 kbODBCOracle25734403 kbODBCOracle25736526 kbMDAC270 kbODBCOracle257377132 kbODBCOracle100Search kbODBCOracle250Search
	Version           : :1.0,2.0,2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2
	Issue type        : kbprb
	
	=============================================================================
	
