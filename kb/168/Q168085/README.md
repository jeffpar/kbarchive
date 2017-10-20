---
layout: page
title: "Q168085: BUG: Single-Line Comments May Give &quot;Wrong Number of Parameters&quot;"
permalink: /kb/168/Q168085/
---

## Q168085: BUG: Single-Line Comments May Give &quot;Wrong Number of Parameters&quot;

{% raw %}

	Article: Q168085
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65
	Operating System(s): 
	Keyword(s): kbinterop kbprogramming
	Last Modified: 04-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 2.65 
	-------------------------------------------------------------------------------
	
	BUG #: 16859 (sqlbug_65)
	
	SYMPTOMS
	========
	
	When SQL statements containing single-line ("-" styled) comments embedded with
	question marks are passed to the Microsoft ODBC SQL Server driver, the error
	message
	
	  [Microsoft][ODBC SQL Server Driver]Wrong number of parameters
	
	may be returned.
	
	WORKAROUND
	==========
	
	Use the multiple-line comment style (/* */) in place of the single-line comment
	style (--), or remove the question marks from the comments.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft ODBC SQL Server
	Driver version 2.65. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: hyphen dash
	
	======================================================================
	Keywords          : kbinterop kbprogramming 
	Technology        : kbSQLServSearch kbAudDeveloper kbODBCSearch kbODBCSQLServ265
	Version           : WINDOWS:2.65
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
