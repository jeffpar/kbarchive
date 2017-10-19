---
layout: page
title: "Q124319: BUG: Syntax Error When Using Qualified Table Name with Quotes"
permalink: /kb/124/Q124319/
---

## Q124319: BUG: Syntax Error When Using Qualified Table Name with Quotes

	Article: Q124319
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 25-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1800 (2.00.2317)
	
	SYMPTOMS
	========
	
	When using table names qualified with the current qualifier and using identifier
	quote character to enclose the current qualifier and the table name, you receive
	a syntax error. This happens with dBASE, Paradox, Microsoft FoxPro, Btrieve,
	Microsoft Excel, and Text Open Database Connectivity (ODBC) drivers. It does NOT
	happen with the Microsoft Access driver.
	
	For example, in case of dBase driver, if the values returned by
	SQLGetConnectOption and SQLGetInfo are as shown:
	
	SQLGetConnectOption(hdbc,SQL_CURRENT_QUALIFIER,pvParam)
	     Returns "C:\Database"
	SQLGetInfo(hdbc, SQL_IDENTIFIER_QUOTE_CHAR, rgbInfoValue,cbInfoValueMax)
	     Returns "`"
	SQLGetInfo(hdbc, SQL_QUALIFIER_NAME_SEPARATOR,rgbInfoValue,cbInfoValueMax)
	     Returns "\"
	
	Then you let a table called testtable exist in the data source. The queries of
	the form below will receive syntax error SQLState=37000, szErrorMsg=,
	
	  Syntax error in FROM clause
	
	when executed using SQLExecDirect or SQLExecute calls.
	
	     Select * from 'C:\Database'\'testtable'
	     delete from 'C:\Database'\'testtable'
	     Update 'C:\Database'\'testtable' set <colname>=<new value>
	
	If you do not use the quote character around the qualifier and the table, these
	queries work fine.
	
	WORKAROUND
	==========
	
	If you do not use the quote character around the qualifier and the table name,
	the queries work correctly and do not return errors.
	
	Alternately, instead of using the backward slash (\) as a separator, if you use a
	period (.), which is the separator in the Microsoft Access ODBC driver, the
	queries work fine with the qualifier and table name enclosed in the quote
	character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC DeskTop Database Drivers
	Pack version 2.00.2317. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 ODBC MFC Access Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
