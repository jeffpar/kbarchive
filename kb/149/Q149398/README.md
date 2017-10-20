---
layout: page
title: "Q149398: IIS Logging to SQL Server Fails w/ Blank Username and Password"
permalink: /kb/149/Q149398/
---

## Q149398: IIS Logging to SQL Server Fails w/ Blank Username and Password

{% raw %}

	Article: Q149398
	Product(s): Internet Information Server
	Version(s): WINNT:1.0,2.0,3.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using the IIS Service Properties Logging dialog box, and you select
	the Log to SQL/ODBC Database option, you have entered a correct DSN and Table.
	However, when you enter the username and password, they are replaced with blanks
	when the dialog box is opened again.
	
	The SQL Server log will record the following:
	
	  Failure condition - logon failed because there is no valid user account.
	
	The server will report the following error:
	
	  ODBC reported an error. The Datasource name "dsn" may be incorrect.
	  Check the server's event log for details.
	
	The Server's event log indicates that SQL Server rejects the transaction because
	it is not defined as a valid user.
	
	CAUSE
	=====
	
	This is caused by an improper configuration of the Microsoft SQL Server Login
	Security Mode for use with IIS. If the SQL Server Login Security Mode is set to
	Windows NT Integrated option, then SQL Server uses Windows NT authentication
	mechanisms for all connections and only trusted connections are allowed into SQL
	Server.
	
	The login name and SQL Server password submitted in the login request from a
	DB-Library or Open Database Connectivity (ODBC) client application are always
	ignored by SQL Server. Network users assigned user-level privileges to SQL
	Server log in using their network username or the default login ID (if the
	network username is not found in syslogins). Network usernames assigned system
	administrator-level privilege log in as SA. With this option, only named pipes
	or multi-protocol clients are supported. If you have installed additional
	Net-Libraries, this option is not available.
	
	WORKAROUND
	==========
	
	To resolve this issue set the Login Security Mode to Mixed. In this mode, SQL
	Server allows both trusted and nontrusted connections.
	
	For trusted (named pipes or multi-protocol) connections, SQL Server examines the
	requested login name as specified by the client DB-Library or ODBC application.
	If this login name matches the user's network username, or if the login name is
	null or blank spaces, SQL Server first tries the Windows NT Integrated login
	rules. If this fails, SQL Server uses the Standard rules. If the requested login
	name is any other value, the user must supply the correct SQL Server password,
	and SQL Server handles the login using the Standard rules described in the
	Microsoft SQL Server Help file.
	
	NOTE: All login requests from nontrusted connections are handled using the
	standard security rules.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300 kbiis200 kbiis100
	Version           : WINNT:1.0,2.0,3.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
