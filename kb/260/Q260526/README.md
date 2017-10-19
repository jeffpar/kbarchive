---
layout: page
title: "Q260526: PRB: Using TOP Clause Returns No Data from SQL 7.0/2000 Table"
permalink: /kb/260/Q260526/
---

## Q260526: PRB: Using TOP Clause Returns No Data from SQL 7.0/2000 Table

	Article: Q260526
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbSQLServ650 kbSQLServ700 k
	Last Modified: 17-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the TOP clause in a SQL SELECT statement that is retrieving data from
	a table in a SQL Server 7.0 or SQL Server 2000 database, no data is returned to
	Visual FoxPro.
	
	CAUSE
	=====
	
	The TOP clause is new to SQL Server 7.0 and SQL Server 2000. The reason that no
	data is being returned is that the compatibility mode on the database from which
	the data is being retrieved is set to 6.5.
	
	RESOLUTION
	==========
	
	Change the compatibility mode of the database to 7.0 or 8.0 (for SQL Server
	2000). This allows the correct data to be returned. The different modes for
	SP_DBCMPTLEVEL are 60, 65, 70, 80; see SP_DBCMPTLEVEL in SQL Server Books Online
	for more information.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The compatibility of a SQL Server 7.0 or SQL Server 2000 database can be changed
	by using the SP_DBCMPTLEVEL command. For example, you can issue the command
	SP_DBCMPTLEVEL pubs, 70 in the SQL Server 7.0 Query Analyzer window, or send it
	through the Visual FoxPro ODBC driver using the SQLEXEC command.
	
	Create a program (.prg) file and run the following code, changing the database
	name to your database wherever necessary:
	
	  *!* Make changes to the connect string, adding your server, database,
	  *!*      login, and password.
	  MyConnect_Str = 'DRIVER={SQL Server}; SERVER=YourServer;' + ;
	                  'DATABASE=YourDatabase;UID=sa;PWD='
	  *!* Connects to SQL Server using the connect string.
	  MyHandle = SQLSTRINGCONN(MyConnect_Str)
	  IF MyHandle > 0
	  *!* Comment out the next line and uncomment the line after to return data.
	      Change_Ver = SQLEXEC(MyHandle, "SP_DBCMPTLEVEL pubs, 65") &&Returns Error
	  *!* Change_Ver = SQLEXEC(MyHandle, "SP_DBCMPTLEVEL pubs, 70") &&Returns Top 5
	     MyExec = SQLEXEC(MyHandle, "SELECT  TOP 5 * FROM authors")
	        IF MyExec < 1
	           WAIT WINDOW "SELECT statement failed!"
	        ELSE
	           BROWSE
	           USE	
	        ENDIF
	  ELSE
	        WAIT WINDOW "Connection failed!"
	  ENDIF 
	
	REFERENCES
	==========
	
	For additional information on determining SQL Server Compatibility Levels, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q233508 HOWTO: Determine Compatibility Level of a SQL Server 7 Database
	
	Additional query words:
	
	======================================================================
	Keywords          : kbODBC kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbSQLServ650 kbSQLServ700 kbGrpDSFox kbDSupport kbCodeSnippet kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
