---
layout: page
title: "Q279526: FIX: SQL Server ODBC Driver Ignores Authentication Setting"
permalink: /kb/279/Q279526/
---

## Q279526: FIX: SQL Server ODBC Driver Ignores Authentication Setting

	Article: Q279526
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.6,3.6
	Operating System(s): 
	Keyword(s): kbMDAC kbODBC kbGrpDSMDAC kbDSupport kbSQLServ2000 kbMDAC260sp1Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.6 
	- Microsoft SQL Server 2000 (all editions) 
	- Microsoft Data Access Components version 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the SQL Server ODBC driver version 2000.080.0194, which was
	released with SQL Server 2000 and Microsoft Data Access Components (MDAC) 2.6
	RTM, the authentication settings for ODBC data source names (DSNs) are ignored.
	The driver attempts to log directly into SQL Server using NTLM authentication
	(integrated security) without prompting for a user ID and password.
	
	This can cause authentication failures, messages that database objects are not
	available, or unintentional modification of the wrong objects when copies of
	objects are maintained in multiple databases.
	
	
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
	
	  Date          Version          Size             File name
	  ------------------------------------------------------------
	  09/22/2000    2000.80.207.0    471,119 bytes    Sqlsrv32.dll	
	  09/22/2000    2000.80.207.0     90,112 bytes    Sqlsrv32.rll		
	  09/22/2000    2000.80.207.0     28,742 bytes    Odbcbcp.dll	
	
	
	
	
	WORKAROUND
	----------
	
	When possible, use an earlier version of the SQL Server ODBC driver such as the
	MDAC 2.5 version (3.70.0820).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Microsoft Data Access Components 2.6 Service Pack 1.
	
	MORE INFORMATION
	================
	
	The SQL Server ODBC driver allows you to configure datasources to use either
	Microsoft Windows NT authentication (integrated security) or SQL Server
	authentication to log into the database.
	
	The 2000.080.0194 version of the driver ignores the authentication specified in
	the data source name (DSN), and attempts to log into the database with NT
	authentication.
	
	If the Windows NT account does not have permission to log on to the server,
	authentication errors are thrown. If the account has login permissions, but a
	different database is specified as the default database, "invalid object" errors
	can be thrown. If multiple copies of objects are kept in separate databases,
	unintentional modification of the wrong objects can occur.
	
	This problem can cause unexpected behavior in numerous applications. For example,
	when you use Microsoft Access to link or query tables in a SQL Server database,
	no login dialog box is presented (because integrated security does not prompt
	for a login), and tables from the default database for the NT account are
	presented. No opportunity is given to change the database or login.
	
	When you use Microsoft Project with a project that has been saved to a SQL Server
	database, a connection error is thrown followed by a dialog box that requires
	the user to clear the Use Trusted Connection check box and enter a valid user ID
	and password.
	
	Additional query words: authentication ntlm integrated security login log on sql server odbc driver invalid object
	
	======================================================================
	Keywords          : kbMDAC kbODBC kbGrpDSMDAC kbDSupport kbSQLServ2000 kbMDAC260sp1Fix 
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ2000Search kbODBCSearch kbMDACSearch kbMDAC260 kbODBCSQLServ360 kbSQLServ2000
	Version           : :2.6,3.6
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
