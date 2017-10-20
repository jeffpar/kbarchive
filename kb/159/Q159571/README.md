---
layout: page
title: "Q159571: PRB: SQLCancel Instead of SQLFreeStmt Causes a Memory Leak"
permalink: /kb/159/Q159571/
---

## Q159571: PRB: SQLCancel Instead of SQLFreeStmt Causes a Memory Leak

{% raw %}

	Article: Q159571
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,4.0; winnt:6.0,6.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server versions 6.0, 6.5 
	- Microsoft Open Database Connectivity, version 2.5 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an ODBC application uses SQLCancel instead of SQLFreeStmt to close an ODBC
	cursor after some data has been processed, the ODBC cursor library version 2.5
	may generate a memory leak.
	
	A Visual Basic 4.0 application may encounter this problem if the application uses
	the Requery method of an RDO Resultset. The ReQuery method internally invokes
	SQLCancel instead of SQLFreeStmt and SQL_CLOSE to close the statement handle,
	before binding the parameters and results.
	
	CAUSE
	=====
	
	An ODBC application should only call SQLCancel when dealing with asynchronous
	processing. ODBC applications should always use SQLFreeStmt and SQL_CLOSE rather
	than SQLCancel to close the statement handle.
	
	For more information on how to use SQLCancel, please refer to Microsoft ODBC 2.0
	Programmer's Reference and SDK Guide.
	
	MORE INFORMATION
	================
	
	A Visual Basic application can call the Close and OpenRecordset methods instead
	of ReQuery. The Close method invokes SQLFreeStmt and SQL_CLOSE to close the
	statement handle.
	
	
	Additional query words: 2.50 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ600 kbSQLServ650 kbZNotKeyword2 kbODBCSearch kbVB400Search kbVB400 kbODBC250
	Version           : WINDOWS:2.5,4.0; winnt:6.0,6.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
