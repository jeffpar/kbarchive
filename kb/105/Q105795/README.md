---
layout: page
title: "Q105795: BUG: Cannot Have a Pathname &gt; 29 Char for SYSTEM.MDA"
permalink: kb/105/Q105795/
---

## Q105795: BUG: Cannot Have a Pathname &gt; 29 Char for SYSTEM.MDA

	Article: Q105795
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 1852 (1.01.1928)
	
	SYMPTOMS
	========
	
	The ODBC Access driver does not recognize a SYSTEM.MDA file for which the path
	is longer than 29 characters.
	
	The ODBC Access driver can be used to connect to secure Access databases. To do
	this, the user should specify a SYSTEM.MDA file associated with the Access
	database--by selecting the Options button in the Access Datasource Setup dialog
	box, and specifying a complete path for the SYSTEM.MDA file.
	
	If this path is longer than 29 characters, the driver gives the following error
	during SQLConnect or SQLDriverConnect:
	
	  szSqlState = '08004', *pfNativeError = -1023
	  szErrorMsg="[Microsoft][ODBC Single-Tier Driver][ODBC File
	  Library]Invalid path
	
	For example, the following path will work for SYSTEM.MDA (it is 29 characters
	long):
	
	  c:\temp\snuffy1\ok\system.mda
	
	while the following does not work (it is 30 characters long):
	
	  c:\temp\snuffy1\bad\system.mda
	
	WORKAROUND
	==========
	
	Move the SYSTEM.MDA file to a different directory so that the path is less than
	29 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Access Driver version
	1.01.1928. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.1928 ODBC ACCESS
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
