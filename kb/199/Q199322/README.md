---
layout: page
title: "Q199322: PRB: OEM to ANSI Translation Fails While Creating New DSN"
permalink: /kb/199/Q199322/
---

## Q199322: PRB: OEM to ANSI Translation Fails While Creating New DSN

	Article: Q199322
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.5,3.6
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, versions 3.5, 3.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating a new data source (DSN), the Microsoft SQL Server ODBC driver
	(Sqlsrv32.dll) offers the following four translation options:
	
	- Let SQL Server ODBC driver choose the translation method.
	
	- Do not perform character set translation.
	
	- Perform OEM to ANSI translation.
	
	- Use the ODBC translator.
	
	You get the correct translation if you either select to let the driver choose the
	translation method or select the option to use the ODBC translator and specify
	the correct code page translator yourself. However, if you select the option to
	perform OEM to ANSI translation, no translation occurs. This is the same effect
	as if you had selected the option not to perform character set translation.
	
	WORKAROUND
	==========
	
	To work around this problem and duplicate the behavior of the OEM to ANSI
	translation option from previous drivers, you must specify the OEM code page of
	the client, not the server. To do this, select the option to use the ODBC
	translator and manually select the correct code page translator. For example,
	for U.S. English Windows clients, you would use code page 437.
	
	MORE INFORMATION
	================
	
	For more information on the SQL Server ODBC driver, see Appendix E, "ODBC
	Drivers for SQL Server and Open Data Services" in the SQL Server Books Online.
	
	Also, see the following articles in the Microsoft Knowledge Base:
	
	  Q153449 INF: SQL Server Code Pages and AutoAnsiToOem Behavior
	
	  Q75435 Windows, Code Pages, and Character Sets
	
	
	
	Additional query words: open database connectivity autotranslate OEMTOANSI auto ODS
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbSQLServ kbGrpDSVCDB kbGrpDSMDAC kbDSupport 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ350 kbODBCSQLServ360
	Version           : :3.5,3.6
	Issue type        : kbprb
	
	=============================================================================
	
