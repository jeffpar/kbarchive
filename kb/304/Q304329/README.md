---
layout: page
title: "Q304329: Fix:Microsoft Oracle ODBC Driver Crashes When TNS Does Not Exist"
permalink: /kb/304/Q304329/
---

## Q304329: Fix:Microsoft Oracle ODBC Driver Crashes When TNS Does Not Exist

	Article: Q304329
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.6,2.6 SP1,Build 2.573.6526,Build 2.573.7326
	Operating System(s): 
	Keyword(s): kbDatabase kbMDAC kbODBC kbOracle kbGrpDSVCDB kbMDAC260bug kbMDAC260fix kbSQLServ2000SP
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Data Access Components versions 2.6, 2.6 SP1 
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.6526, Build 2.573.7326 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When connecting with an ODBC connection (with or without a data source name)
	using the Microsoft ODBC driver for Oracle, if the specified Transparent Network
	Substrate (TNS) name does not exist for the Oracle server, an application may
	receive an access violation. This occurs whether using SQLConnect() or
	SQLDriverConnect().
	
	CAUSE
	=====
	
	This problem occurs only when ODBC connection pooling is enabled. When the
	Microsoft ODBC driver for Oracle returns a connection failure (because the TNS
	name does not exist), the ODBC Driver Manager pools the failed connection but
	does not mark the connection as dead. The connection handle is used later and an
	access violation occurs.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SQL Server 2000, the
	latest service pack for MDAC 2.6, or the MDAC hotfix referenced below: For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q290211 INF: How to Obtain the Latest SQL Server 2000 Service Pack
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q300635 INFO: How to Obtain the Latest MDAC 2.6 Service Pack
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Microsoft ODBC for Oracle ODBC driver that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date           Time   Version        Size      File name     
	  ----------------------------------------------------------
	  29-JUNE-2001   14:29  3.520.7629.0   221,456   Odbc32.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in SQL
	Server 2000 Service Pack 2 and MDAC 2.6 Service Pack 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbMDAC kbODBC kbOracle kbGrpDSVCDB kbMDAC260bug kbMDAC260fix kbSQLServ2000SP2Fix kbSQLServ2000preSP2Fix kbmdac260sp2fix 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC260 kbODBCOracle25736526 kbMDAC260SP1 kbODBCOracle25737326 kbODBCOracle250Search
	Version           : :2.6,2.6 SP1,Build 2.573.6526,Build 2.573.7326
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
