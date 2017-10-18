---
layout: page
title: "Q186380: BUG: Error When Using Table Aliases with Oracle ODBC Driver"
permalink: kb/186/Q186380/
---

## Q186380: BUG: Error When Using Table Aliases with Oracle ODBC Driver

	Article: Q186380
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,Build 2.573.2927,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbODBC kbOracle kbDSupport kbMDAC250bug
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.0, versions Build 2.73.7269, Build 2.73.7283.01, Build 2.73.7283.03 
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to use table aliases in SELECT statements with the Microsoft Oracle
	ODBC driver and you are using the Keyset cursor type, you receive the following
	error:
	
	  [Microsoft][ODBC driver for Oracle]Cannot use Keyset-driven cursor on join,
	  with union, intersect or minus or on read only result set"
	
	CAUSE
	=====
	
	When the driver re-writes the SQL statement to send to the Oracle server it
	doesn't create the correct syntax.
	
	Internally, Oracle returns the following error message:
	
	  ORA-00964: table name not in FROM list
	
	In turn, The Microsoft Oracle ODBC driver maps that error message to the message
	listed in the SYMPTOMS section of this article.
	
	RESOLUTION
	==========
	
	The solution depends on the nature of the application. If the application needs
	to use Keyset cursors, it may not use table aliases. If the application must use
	table aliases, the cursor type must be changed to FORWARD-ONLY or STATIC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior using ODBCTest
	------------------------------------------
	
	1. Make a full connection to an Oracle DataSource. ODBC Behavior is set to 2.0,
	  and Cursor Library is set to "Use Driver".
	
	2. From the Attr menu select SQLSetStmtAttr.
	
	3. Set the attribute SQL_ATTR_CURSOR_TYPE=6 to SQL_CURSOR_KEYSET_DRIVEN=1, and
	  then click OK.
	
	4. Set the attribute SQL_ATTR_CONCURRENCY=7 to SQL_CONCUR_VALUES=4, and then
	  click OK.
	
	5. Type in the following statement in the "henv" window.
	
	  SELECT * FROM demo.customer myalias
	
	6. Click on the toolbar button for SQLExecDirect (the button with exclamation
	  point), or select the Stmt menu and chose SQLExecDirect. The error message
	  appears.
	
	NOTE: This error occurs regardless of the program's front end. This error has
	been reported in Visual Basic and Visual C++.
	
	
	Additional query words: kbDSupport kbOracle kbDatabase kbODBC kbDriver odbcOracle
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbODBC kbOracle kbDSupport kbMDAC250bug 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle2737269 kbODBCOracle273728303 kbODBCOracle25732927 kbODBCOracle273728301 kbODBCOracle200Search kbODBCOracle250Search
	Version           : :2.5,Build 2.573.2927,Build 2.73.7269,Build 2.73.7283.01,Build 2.73.7283.03
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
