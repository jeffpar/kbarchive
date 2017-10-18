---
layout: page
title: "Q124316: BUG: Use of Vertical Bar (&#124;) Generates Syntax Error"
permalink: kb/124/Q124316/
---

## Q124316: BUG: Use of Vertical Bar (&#124;) Generates Syntax Error

	Article: Q124316
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 11 (2.00.2317)
	
	SYMPTOMS
	========
	
	When you execute a SELECT, INSERT, UPDATE or DELETE queries with a vertical bar
	(|) contained in a character string, you receive an error that there is a syntax
	error in string in query expression.
	
	For example, consider table test created like:
	
	  CREATE TABLE test (t text(20))
	
	Then executing any of the following,
	
	  INSERT INTO test VALUES('|')
	
	  DELETE FROM test WHERE t='|'
	
	  UPDATE test SET t='|'
	
	will return an error, with
	
	  SQLSTATE=S1010 and szErrorMsg="[Microsoft][ODBC Access 2.0 Driver]Syntax
	  error in string in query expression"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Access Driver version
	2.00.2317. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 2.00.2317 ODBC MFC MSVC VISUAL C++ Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	
