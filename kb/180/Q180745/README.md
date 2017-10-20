---
layout: page
title: "Q180745: BUG: Err 4408 Generates Communication Link Failure, Connection"
permalink: /kb/180/Q180745/
---

## Q180745: BUG: Err 4408 Generates Communication Link Failure, Connection

{% raw %}

	Article: Q180745
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,3.0; winnt:6.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 6.5 
	- Microsoft Open Database Connectivity, versions 2.5, 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 17795 (6.5)
	
	SYMPTOMS
	========
	
	If you perform a join on a multitable view and it exceeds the 16-table limit,
	including worktables, an ODBC client will receive the error message:
	
	  MessageText = "[Microsoft][ODBC SQL Server Driver][SQL Server]The query and
	  the views in it exceed the limit of 16 tables."
	
	Any additional query on the same statement or on a new statement using the
	version 3.50.305 SQL Server driver will generate the error message:
	
	  MessageText = "[Microsoft][ODBC SQL Server Driver]Connection failure"
	
	WORKAROUND
	==========
	
	To work around this problem, drop the current connection and reconnect the
	client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server Driver
	versions 2.65.0252 and 3.50.305. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ650 kbODBCSearch kbODBC300 kbODBC250
	Version           : WINDOWS:2.5,3.0; winnt:6.5
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
