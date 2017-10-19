---
layout: page
title: "Q114245: BUG: Can Not Do Literal Update of Memo Fields Beyond 255 Chars"
permalink: /kb/114/Q114245/
---

## Q114245: BUG: Can Not Do Literal Update of Memo Fields Beyond 255 Chars

	Article: Q114245
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCDBASE: 2064 (1.01.1928)
	
	SYMPTOMS
	========
	
	The ODBC Access driver gives a "data truncated" error (SQLSTATE 01004) when you
	try to update a memo field with a literal such that the total length of the
	updated field is greater than 255 characters. Furthermore, the memo field is
	truncated to 255 characters.
	
	For example:
	
	Create an Access table with a memo field in it. Insert one row into the table
	such that the memo field for that row has 220 chars. SQLExecDirect the following
	update statement on this table:
	
	     update <table>
	     set <memo-field-name> = <memo-field-name> + <a string of 40 chars>
	
	SQLExecDirect will return the "data truncated" with SQLSTATE 01004; only 35 of
	the 40 chars get written to the table. Further attempts to increase the size of
	the memo field will fail with the same error message. The Access driver will not
	let you increase the size of the memo field to beyond 255 chars via updates
	using literals.
	
	WORKAROUND
	==========
	
	Use parameter markers in the update statement and pass the memo field value
	using SQLSetParam.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Access Driver version
	1.01.1928. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.01.1928 ODBC ACCESS
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
