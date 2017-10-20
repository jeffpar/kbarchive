---
layout: page
title: "Q317931: FP: Error 0x80040E14 When Using a Database 'Contains' Query"
permalink: /kb/317/Q317931/
---

## Q317931: FP: Error 0x80040E14 When Using a Database 'Contains' Query

{% raw %}

	Article: Q317931
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 2002 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Contains query to query for data in a Database Results Region, an
	error message similar to one of the following appears:
	
	If you are using a Microsoft Access database
	
	  Database Results Error
	  Description: [Microsoft][ODBC Microsoft Access Driver] Syntax error (missing
	  operator) in query expression '(FieldName LIKE '%test's%')'.
	  Number: -2147217900 (0x80040E14)
	  Source: Microsoft OLE DB Provider for ODBC Drivers
	
	If you are using a Microsoft SQL Server database
	
	  Database Results Error
	  Description: [Microsoft][ODBC SQL Server Driver][SQL Server]Line 1: Incorrect
	  syntax near 's'.
	  Number: -2147217900 (0x80040E14)
	  Source: Microsoft OLE DB Provider for ODBC Drivers
	
	CAUSE
	=====
	
	The criteria you used in the query contains an apostrophe ('). The database
	engine interprets the apostrophe to mean the end of the search text.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Dynamic HTML sample in the following
	Microsoft Knowledge Base artice:
	
	  Q317924 HOW TO: Use DHTML to Add Wildcards to a Database Query
	
	MORE INFORMATION
	================
	
	The FrontPage database library routines for reserved characters, such as an
	apostrophe, do not parse queries that use Contains criteria but do parse queries
	that use Like criteria. Queries using contains criteria are not parsed by the
	FrontPage database library routines for reserved characters, such as an
	apostrophe, although queries using Like criteria are. Queries using Contains
	criteria are wrapped in wildcard characters. This allows searching for the
	specified criteria anywhere within the database field. Queries using Like
	criteria are parsed for reserved characters. These characters are converted to
	escape sequences, and then compared exactly with the database.
	
	A query using Like criteria can function as a Contains query. To achieve this
	functionality, simply enclose the search text inside percent signs (%), like
	this:
	
	  %My Search Text%
	
	
	REFERENCES
	==========
	
	For additional information about additional errors that may appear when you work
	with the Database Results Region, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q265320 FP2000: Error Message When You Query the Database
	
	  Q299911 FP2002: Error Message Appears in Database Results Region
	
	  Q287147 FP: Error Message: 'Database Results Error' When You Update a
	  Database Record
	
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
