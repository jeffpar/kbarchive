---
layout: page
title: "Q239719: INFO: Support Limits of MS Oracle ODBC Driver/OLEDB Provider"
permalink: /kb/239/Q239719/
---

## Q239719: INFO: Support Limits of MS Oracle ODBC Driver/OLEDB Provider

	Article: Q239719
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202
	Operating System(s): 
	Keyword(s): kbDriver kbODBC kbOLEDB kbOracle kbProvider kbGrpDSVCDB kbGrpDSMDAC kbMDACNoSweep
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202 
	- Microsoft OLE DB Provider for Oracle, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft ODBC Driver for Oracle (MSORCL32.DLL) version 2.573.4202 (and
	earlier versions) and the Microsoft OLE DB Provider for Oracle (MSDAORA.DLL)
	version 2.10.4202 (and earlier versions)have not been tested with Oracle 8i. So
	connectivity to Oracle 8i is not supported with this version or earlier versions
	of the Microsoft Driver/Provider.
	
	They have been successfully tested to run with the Oracle 8.x (excluding Oracle
	8i) client software going against an Oracle 8.x server.
	
	MORE INFORMATION
	================
	
	The Microsoft ODBC Driver for Oracle version 2.573.4202 and the Microsoft OLE DB
	Provider for Oracle version 2.10.4202 do not support any Oracle 8.x specific
	(including Oracle 8i) features. Oracle 8.x specific datatypes are one such
	example of an unsupported feature. Datatypes such as CLOB, BLOB, BFILE, NCHAR,
	NCLOB, NVARCHAR2, which were introduced with Oracle 8.x, are not supported using
	this version or earlier versions of the Microsoft Driver/Provider.
	
	The MDAC 2.5 versions of the provider (2.50.4403) and driver (2.573.4403) were
	tested against Oracle 8i servers and support connectivity. If Oracle 8i
	connectivity is required please upgrade to at least the MDAC 2.5 version of the
	provider and driver.
	
	REFERENCES
	==========
	
	Information on the system requirements needed to use the Microsoft ODBC
	Driver/OLEDB Provider can be obtained from the MSOracle32Readme.txt file for the
	Driver/Provider.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q244661 INFO: Microsoft Oracle ODBC Driver and Provider Support Connectivity
	  to Oracle 8i
	
	Additional query words: Oracle8i msorcl32.dll msdaora.dll Oracle8.x
	
	======================================================================
	Keywords          : kbDriver kbODBC kbOLEDB kbOracle kbProvider kbGrpDSVCDB kbGrpDSMDAC kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbOLEDBProvOracle200 kbOLEDBProvOracle210 kbOLEDBProvSearch kbODBCOracle250Search
	Version           : :2.0,2.1,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
