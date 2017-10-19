---
layout: page
title: "Q252948: FIX: SQLRowCount Returns -1 After Inserting a BLOB &gt;= 400K"
permalink: /kb/252/Q252948/
---

## Q252948: FIX: SQLRowCount Returns -1 After Inserting a BLOB &gt;= 400K

	Article: Q252948
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.7
	Operating System(s): 
	Keyword(s): kbODBC kbODBC370bug
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.7 
	-------------------------------------------------------------------------------
	
	BUG #: 54818 (SQLBUG_70)
	
	
	SYMPTOMS
	========
	
	After inserting 400K or more of data for a text or image column, a call to the
	ODBC SQLRowCount function incorrectly returns -1, if the following conditions
	are met:
	
	- You use the Microsoft ODBC Driver for SQL Server, version 3.7.
	
	- The backend is Microsoft SQL Server 7.0 or later.
	
	CAUSE
	=====
	
	If the amount of data that needs to be inserted is more than 400K, the ODBC
	Driver for SQL Server switches to another mechanism to insert the data.
	
	
	WORKAROUND
	==========
	
	Run the ODBCCMPT utility against your ODBC application. For more information,
	refer to Microsoft SQL Server 7.0 Books Online or the following Web address:
	
	  http://msdn.microsoft.com/library/psdk/sql/4_opingc.htm
	  (http://msdn.microsoft.com/library/psdk/sql/4_opingc.htm)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft ODBC Driver for
	SQL Server, version 3.7.
	
	This bug was corrected in SQL Server 7.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	Because Microsoft Access 97 uses the SQLRowCount function to verify a successful
	INSERT, the following error message occurs when you try to insert BLOB data that
	is 400K or more into an attached SQL Server table:
	
	  ODBC - Insert on a linked table 'table name' failed.
	
	Additional query words: sp_createorphan blob insert ole object
	
	======================================================================
	Keywords          : kbODBC kbODBC370bug 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ370
	Version           : :3.7
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
