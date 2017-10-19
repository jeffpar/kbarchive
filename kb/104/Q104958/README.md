---
layout: page
title: "Q104958: BUG: Oracle Driver Errors on Delimited Column Names"
permalink: /kb/104/Q104958/
---

## Q104958: BUG: Oracle Driver Errors on Delimited Column Names

	Article: Q104958
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 1.0 
	-------------------------------------------------------------------------------
	
	BUG# ODBCORA: 572 (1.002816)
	
	SYMPTOMS
	========
	
	The Oracle ODBC Driver gives an error on any SELECT statement that contains an
	outer join (in the ODBC escape-clause syntax) on a delimited column name that is
	greater than 17 characters. As a result, when using Microsoft Access or
	Microsoft Visual Basic to connect to an Oracle server, you cannot perform outer
	joins on columns whose names are longer than 17 characters.
	
	So, the following query:
	
	  SELECT * FROM {oj table1 LEFT OUTER JOIN table2 ON
	     (table1.abcdefghijklmnopq = table2.col1)}
	
	works fine; note that the delimited column name (abcdefghijklmnopq) is 17 chars
	long. However, the following query:
	
	  SELECT * FROM {oj table1 LEFT OUTER JOIN table2 ON
	     (table1.abcdefghijklmnopqr = table2.col1)}
	
	gives the error:
	
	  MsgId: Unknown String Resource.
	
	The above error appears in a dialog box with an OK button. Choosing OK will cause
	SQLExecDirect or SQLExecute to return SQL_ERROR. The SQL_ERROR states:
	
	  szSqlState = "37000"
	  [PageAhead][ODBC Oracle Driver]Syntax Error
	
	While working with an ODBC Data source, the Access Engine uses delimited
	identifiers for all its queries; it also uses canonical outer join syntax for
	performing outer joins. Thus, when an Access or Visual Basic user does an outer
	join on Oracle tables, the above mentioned error occurs if any of the columns
	participating in the outer join have a name longer than 17 characters.
	
	WORKAROUND
	==========
	
	Rename the column so that it has less than 17 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Oracle Driver versions
	1.00.2816 and 1.00.3112. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 1.00.2816 1.00.3112 VB
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC100
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	
	=============================================================================
	
