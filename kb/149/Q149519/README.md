---
layout: page
title: "Q149519: IIS IDC to SQL with Pipe/Connection Busy, Timeout Expired"
permalink: /kb/149/Q149519/
---

## Q149519: IIS IDC to SQL with Pipe/Connection Busy, Timeout Expired

	Article: Q149519
	Product(s): Internet Information Server
	Version(s): 1.0 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Internet Information Server (IIS) with the Internet Database Connector,
	functioning as a client to Microsoft SQL Server may generate multiple error
	messages as databases are added to the Microsoft SQL Server.
	
	MORE INFORMATION
	================
	
	The following errors have been seen when you use the IIS Internet Database
	Connector to make SQL requests to a Microsoft SQL Server that has a growing
	number of databases.
	
	  [State=01000][Error=231][Microsoft][ODBC SQL Server Driver]Pipe Busy.
	
	  [State=08001][Error=3][Microsoft][ODBC SQL Server Driver]Connection is busy.
	
	  [State=S1T00][Error=0][Microsoft][ODBC SQL Server Driver]Timeout expired.
	
	This may be due to the SQL configuration parameter Open Databases being set too
	low, (20 is the default setting for SQL Server version 6.0). If you slowly add
	databases to the SQL system, and finally exceed the configured value, you may
	not generate any "out of open databases" messages being logged to SQL.
	Increasing the SQL configuration parameter Open Databases may resolve this
	issue.
	
	For more information on setting this parameter consult the Microsoft "SQL
	Administrators Companion."
	
	Additional query words: prodiis winnt sql
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbiis100
	Version           : 1.0 3.51
	
	=============================================================================
	
