---
layout: page
title: "Q124363: BUG: CREATE TABLE and CREATE INDEX Cause Error 42000"
permalink: /kb/124/Q124363/
---

## Q124363: BUG: CREATE TABLE and CREATE INDEX Cause Error 42000

{% raw %}

	Article: Q124363
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJET: 1824 (2.00.2317)
	
	SYMPTOMS
	========
	
	Using the Microsoft Access ODBC driver, when the CREATE TABLE or CREATE INDEX
	commands are executed with table, column, or index names that contain words
	(such as, proc or view) anywhere in their name, an error is generated with
	SQLSTATE=42000:
	
	  Syntax error or access violation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in ODBC Access Driver version
	2.00.2317. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	This problem does not occur on the 3.40.2204 version of the driver. However, you
	still can not create an object whose name is exactly 'proc' or 'view' (note:
	view is, after all, an ODBC reserved word).
	
	MORE INFORMATION
	================
	
	For example, the following statements cause the error:
	
	     create table review(test <datatype>)
	     create table viewing(test <datatype>)
	     create table 'reviewing'(test <datatype>)
	     create table <tablename> ('reviewing' <datatype>)
	     create index review on <tablename>(<columnname>)
	
	Calling SQLError returns:
	
	  SQLSTATE=42000,
	  szErrorMsg=[Microsoft][ODBC Microsoft Access 2.0 driver]Syntax error or access
	  violation.
	
	You will also get the above error for other identifiers containing the word
	"proc" anywhere in their name, such as myproc, processing, process, and so
	forth.
	
	NOTE: If such a table or index already exists in the Microsoft Access .MDB file,
	then SELECT, DELETE, INSERT, and UPDATE queries will work fine with these
	identifiers.
	
	Additional query words: 2.00.2317 3.40 mfc visual C++ MSVC Windows NT
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
