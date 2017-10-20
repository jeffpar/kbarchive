---
layout: page
title: "Q186726: Error 80004005 Occurs When Retrieving Data from SQL Server"
permalink: /kb/186/Q186726/
---

## Q186726: Error 80004005 Occurs When Retrieving Data from SQL Server

{% raw %}

	Article: Q186726
	Product(s): Internet Information Server
	Version(s): WINNT:4.0,6.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft SQL Server version 6.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Active Server Pages (ASP) to retrieve data from a Microsoft SQL
	Server database, the following error occurs:
	
	  Microsoft OLE DB Provider for ODBC Drivers error '80004005'
	  [Microsoft][ODBC SQL Server Driver][DBNMPNTW]ConnectionWrite
	  (GetOverLappedResult( )).
	
	WORKAROUND
	==========
	
	If SQL Server is running on the same server as Internet Information Server
	(IIS), use a local named pipe connection instead of a network named pipe
	connection.
	
	In the SQL Server connection string, DSN configuration, and Global.asa file,
	change
	
	     SERVER=<computername>
	
	to:
	
	     SERVER=(local)
	
	MORE INFORMATION
	================
	
	The name "(local)" (with parentheses, but without quotation marks) is a special
	keyword recognized by the SQL Server ODBC driver; it indicates that a local
	connection should be used.
	
	Additional query words: fetch structured query language source dsn akz
	
	======================================================================
	Keywords          :  
	Technology        : kbSQLServSearch kbiisSearch kbAudDeveloper kbiis400 kbSQLServ650
	Version           : WINNT:4.0,6.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
