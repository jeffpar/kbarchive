---
layout: page
title: "Q130954: BUG: 'Out of String Space' Error Returned by the Access Driver"
permalink: /kb/130/Q130954/
---

## Q130954: BUG: 'Out of String Space' Error Returned by the Access Driver

	Article: Q130954
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJet: 2138 (2.00.2317)
	
	SYMPTOMS
	========
	
	Under certain circumstances, when you disconnect and connect to a Microsoft
	Access database frequently, the 16-bit Access 2.00.2317 driver returns the
	following error:
	
	  Out of String Space.
	
	CAUSE
	=====
	
	If the following steps are executed, the 16-bit Access driver produces the above
	error.
	
	1. Configure two datasources to point to two different Access databases (.MDB
	  files), say DB1 and DB2.
	
	2. Start the 16-bit ODBC Test.
	
	3. Make a connection to DB1.
	
	4. Run a query "select * from <view name>".
	
	5. Make a connection to DB2.
	
	6. Run a query "select * from <table name>".
	
	7. Disconnect from DB1.
	
	8. Reconnect to DB1.
	
	9. Run the query same query in step four.
	
	This last step should cause the "Out of String Space" error.
	
	WORKAROUND
	==========
	
	If you do not close the connection to DB1, you can execute the query in step
	four, "select * from <view name>", as many times as you wish. It only
	happens if you disconnect and reconnect. Also, this problem does not occur with
	the 32-bit driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the ODBC Access 2.00.2317
	driver. There are no plans of fixing this bug in the 16-bit driver.
	
	Additional query words: 2.00.2317 Access Driver VC++ MFC
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
