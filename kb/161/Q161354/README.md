---
layout: page
title: "Q161354: BUG: SQLGetInfo Gives Incorrect Result for SQL_DRIVER_HSTMT"
permalink: kb/161/Q161354/
---

## Q161354: BUG: SQLGetInfo Gives Incorrect Result for SQL_DRIVER_HSTMT

	Article: Q161354
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 4469 (odbc30)
	
	SYMPTOMS
	========
	
	SQLGetInfo may return the incorrect result for the SQL_DRIVER_HSTMT option if
	both of the following conditions are true:
	
	- The ODBC application is a 16-bit application.
	
	  -and-
	
	- The ODBC driver is 32-bit, and was compiled under the ODBC 2.5 SDK.
	
	The 16-bit ODBC application will encounter this problem only when using the ODBC
	SDK 3.0 thunking layer.
	
	WORKAROUND
	==========
	
	To work around this problem, use the thunking layer that came with the ODBC 2.5
	SDK. The following files need to be replaced:
	
	  Ds16gt.dll
	  Ds32gt.dll
	  Odbc16gt.dll
	  Odbc32gt.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Open Database Connectivity
	version 3.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: vc sql server
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	
	=============================================================================
	
