---
layout: page
title: "Q159817: WD97: Can't Connect, Insert Database with ODBC and MSQuery"
permalink: /kb/159/Q159817/
---

## Q159817: WD97: Can't Connect, Insert Database with ODBC and MSQuery

{% raw %}

	Article: Q159817
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You receive one of the following error messages when you attempt to insert or
	attach a database by using an ODBC driver and MSQuery.
	
	Case 1: When you attempt to insert a database into a Word document, you receive
	the following error message:
	
	  Function Sequence Error.
	
	When you click Details, you receive the following error message:
	
	  ODBC Error: [Microsoft][ODBC Driver Manager] Function sequence error.
	  SQL State: S1010
	  Return Code: SQL_ERROR
	
	When you click OK, you receive the following error message:
	
	  Word could not replace the selection with the specified database.
	
	Case 2: When you attempt to attach the database from the Mail Merge Helper, you
	receive the following error message:
	
	  Word could not merge the main document with the data source because the data
	  records were empty or no data records matched your query options.
	
	CAUSE
	=====
	
	The MSQuery SQL string exceeds 255 characters. Word truncates the SQL query
	string at 255 characters.
	
	WORKAROUND
	==========
	
	To work around this problem for both cases mentioned in the "Symptoms" section,
	use one of the following methods.
	
	Method 1: Do Not Use MSQuery to Filter the Database
	---------------------------------------------------
	
	Click No when you receive the following message while inserting or opening a
	database, and then use the Filter or Sort query options:
	
	  Word detected Microsoft Query on your system. Would you like to edit
	  <filename> using Microsoft Query?
	
	Method 2: Do Not Use Word to Query the Data Set
	-----------------------------------------------
	
	Create the query or recordsets in the database application, save your query
	results, and then from Word, insert or attach this data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: 8.0 word8 word97 querying querys queries open database connectivity
	
	======================================================================
	Keywords          : kbualink97 kbusage kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	
	=============================================================================
	

{% endraw %}
