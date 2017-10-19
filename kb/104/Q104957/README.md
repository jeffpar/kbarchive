---
layout: page
title: "Q104957: FIX: Cannot Make Server-Server RPCs in Non-trusted Mode"
permalink: /kb/104/Q104957/
---

## Q104957: FIX: Cannot Make Server-Server RPCs in Non-trusted Mode

	Article: Q104957
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCSS: 2774 (1.01.2920)
	
	SYMPTOMS
	========
	
	Using the ODBC SQL Server driver version 1.01.2920 or earlier, it is not
	possible to perform server to server RPC's in non-trusted mode. As a result,
	users of Microsoft Access or Microsoft Visual Basic version 3.0 for Windows
	cannot perform server to server RPCs on SQL Servers.
	
	Server to Server RPC refers to:
	
	A client logs on to a server called server1. It then issues a procedure call of
	the form:
	
	  exec server2.pubs.dbo.testproc
	
	This causes server1 to log onto server2 and execute the procedure testproc owned
	by the dbo of the pubs database. Thus, testproc is executed remotely on
	server2.
	
	In SQL Server, server to server RPCs can be done in 2 modes: trusted and
	non-trusted. In trusted mode, the remote server (server2 in the example above)
	accepts remote logins from other servers without verifying the login. Untrusted
	mode specifies that server2 should verify passwords before accepting remote
	logins.
	
	Using the ODBC SQL Server driver version 1.01.2820 or earlier, it is not possible
	to execute server to server RPC's in non-trusted mode. Attempting to do so will
	produce the error message:
	
	  [Microsoft][ODBC SQL Server Driver][SQL Server] Login to site <remote-
	  servername> failed.
	  szSqlState = "S0002", *pfNativeError = 7221
	
	WORKAROUND
	==========
	
	Use trusted mode RPCs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SQL Server Driver version
	1.01.2820 or earlier. This problem has been fixed in SQL Server Driver version
	1.02.3231, which ships with SQL Server version 4.2 for Windows NT. The driver
	may also be obtained from your primary support provider.
	
	
	Additional query words: 1.01.2920 VB
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
