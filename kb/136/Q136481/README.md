---
layout: page
title: "Q136481: INF: Running ODBC Applications as Windows NT Services"
permalink: /kb/136/Q136481/
---

## Q136481: INF: Running ODBC Applications as Windows NT Services

	Article: Q136481
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5
	Operating System(s): 
	Keyword(s): kberrmsg kbfile
	Last Modified: 11-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	ODBC applications running as Windows NT services may encounter the following
	error when attempting to connect to an ODBC data source:
	
	  szSqlState = "IM002"
	  pfNativeError = 0
	  szErrorMsg = "[Microsoft][ODBC Driver Manager] Data source name not found and
	  no default driver specified"
	
	MORE INFORMATION
	================
	
	When a standard ODBC data source is defined, it is specific to the Windows NT
	account under which the ODBC Administrator process is running. This is because
	the data source definition is stored in the HKEY_CURRENT_USER hive in the
	Windows NT registry. Applications running in environments which do not have that
	specific user's hive set up as HKEY_CURRENT_USER will not have access to that
	data source.
	
	Applications running as Windows NT services can be made to run under a Windows NT
	account using the control panel, but may be running at times when that user's
	hive is not the one set up as HKEY_CURRENT_USER. For example, if the NT account
	is not logged on, their hive will not be set as HKEY_CURRENT_USER, and the NT
	service will not be able to access the ODBC data source. This also applies to
	DLLs running as SQL Server version 6.0 Extended Stored Procedures because they
	run as part of the SQL Server process, which always runs as a Windows NT
	service. This same problem also affects applications running under the Windows
	NT Scheduler service, which covers applications started with the Windows NT AT
	command.
	
	Microsoft ODBC version 2.5 addresses this problem by introducing the concept of a
	system data source. The definitions of system data sources are stored in the
	registry HKEY_LOCAL_MACHINE hive under SOFTWARE/ODBC/ODBC.INI where they will
	always be accessible to Windows NT services.
	
	ODBC 2.5 started shipping with Microsoft SQL Server version 6.0 and Microsoft
	Office 95, and will ship with future releases of other ODBC- capable products.
	
	Users who do not already have an ODBC 2.5 driver installed can obtain the ODBC
	2.5 ODBC Administrator and Driver Manager by downloading the file ODBC25.exe
	from the Microsoft Software Library (MSL).
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  ODBC25.exe
	  (http://support.microsoft.com/download/support/mslfiles/ODBC25.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	The file ODBC25.exe also includes documentation on the new features in ODBC 2.5,
	such as the system data sources.
	
	Additional query words: 2.50 drivers msnSQL
	
	======================================================================
	Keywords          : kberrmsg kbfile 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC250
	Version           : WINDOWS:2.5
	Issue type        : kbprb
	
	=============================================================================
	
