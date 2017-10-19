---
layout: page
title: "Q173410: INFO: Server-Side Cursors Are Forced w/More Than One Command Obj"
permalink: /kb/173/Q173410/
---

## Q173410: INFO: Server-Side Cursors Are Forced w/More Than One Command Obj

	Article: Q173410
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbprogramming kbODBC kbOLEDB
	Last Modified: 19-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB, version 1.1 
	- Microsoft OLE DB Provider for ODBC, version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The OLE DB Provider for ODBC may force the use of server-side cursors if both of
	the following conditions are true:
	
	- The backend database server is Microsoft SQL Server.
	
	  -and-
	
	- More than one Command object exists within the same session object.
	
	Server-side cursors will be implicitly forced with any queries, even they are if
	not requested by the application.
	
	MORE INFORMATION
	================
	
	The Microsoft SQL Server ODBC driver can have only one active statement unless
	server-side cursors are used. An ODBC application may receive the following
	error message if it attempts to have more than one active statement without
	using server-side cursors:
	
	  szSqlState = "S1000", *pfNativeError = 0
	  szErrorMsg = "[Microsoft][ODBC SQL Server Driver]Connection is busy with
	  results for another hstmt"
	
	Using the OLE DB Provider for ODBC, an OLE DB application is like an ODBC
	application. The OLE DB Provider for ODBC translates OLE DB interface requests
	into ODBC APIs, and then sends ODBC requests to ODBC drivers. OLE DB session
	objects are mapped to ODBC connections, and command objects are mapped to
	statements.
	
	Dealing with the SQL Server ODBC driver, the OLE DB Provider for ODBC forces the
	use of server-side cursors if there is more than one command object or statement
	opened. With more than one command object or statement opened, the application
	may run into the one active statement limitation. Therefore, the OLE DB Provider
	for ODBC automatically uses server-side cursors to avoid the limitation. The
	type of server-side cursor enforced by the ODBC Provider is forward-only and
	read-only. For example, the forward and read-only server-side cursors will be
	forced with the following code:
	
	     IcommandText         *pICommandText1;
	     IcommandText         *pICommandText1;
	     Icommand             *pIDBCommand;
	     WCHAR  *stmt_string = SysAllocString((LPOLESTR)L"SELECT * FROM TITLES");
	
	     ...connect to the OLE DB Provider for ODBC, create session and command object .....
	
	     pIDBCommand-
	     >CreateCommand(NULL,IID_ICommandText,(IUnknown**)&pICommandText1)
	     pIDBCommand-
	     >CreateCommand(NULL,IID_ICommandText,(IUnknown**)&pICommandText2)
	
	     pICommandText1->SetCommandText ( DBGUID_DBSQL,  stmt_string )
	     pICommandText1->Execute(NULL, IID_NULL, NULL, NULL,NULL)
	
	With server-side cursors being enforced, an application cannot execute SQL
	statements that generate more than one resultset. SQL Server only allows
	executing server-side cursors with SQL statements that generate a single
	resultset. At this point, the application will have to release all the command
	objects except one, so that server-side cursor will not be enforced. Then the
	multiple-resultset SQL statements can be executed successfully.
	
	For additional information for server-side cursors and multiple resultsets,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q156500 INF: Processing Procedures and Batches with Multiple SELECTS
	
	Additional query words: busy oledb
	
	======================================================================
	Keywords          : kbprogramming kbODBC kbOLEDB 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbOLEDB110 kbOLEDBProvODBC110 kbOLEDBProvSearch
	Version           : :1.1
	Issue type        : kbinfo
	
	=============================================================================
	
