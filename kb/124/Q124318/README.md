---
layout: page
title: "Q124318: BUG: Invalid Connection String Error with Certain Passwords"
permalink: /kb/124/Q124318/
---

## Q124318: BUG: Invalid Connection String Error with Certain Passwords

	Article: Q124318
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1588 (2.00.2317)
	
	SYMPTOMS
	========
	
	When attempting to connect to a Microsoft Access data source, SQLConnect may
	return an error for those account whose password contains a semicolon (;). The
	error message returned is:
	
	  SQLSTATE="01S00",
	  szErrorMsg="[Microsoft][ODBC Microsoft Access 2.0 Driver]Invalid
	  connection string attribute <xxxx>"
	
	For example, assume a user account has a login id of John and a password of ;John
	in the Microsoft Access database and the data source name is mysource.
	
	Then
	
	  SQLConnect(hdbc,"mysource",8,"John",4,";John",,5)
	
	returns
	
	  SQLSTATE="01S00",
	  szErrorMsg="[Microsoft][ODBC Microsoft Access 2.0 Driver]Invalid
	  connection string attribute John"
	
	CAUSE
	=====
	
	The problem happens because a semicolon is a separator in the connection string
	and having it in the password causes a conflict.
	
	WORKAROUND
	==========
	
	To work around this problem, you can use the SQLDriverConnect call and either do
	not pass a password or pass an incorrect password. As a result, you are prompted
	for the password. When prompted, you can enter the password with the semicolon,
	and the connection will succeed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Access Driver version
	2.00.2317. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 ODBC Access MFC Visual C++ MSVC Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
