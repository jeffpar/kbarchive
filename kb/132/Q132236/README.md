---
layout: page
title: "Q132236: BUG: SQLStatistics Always Reports Indexes as Ascending"
permalink: /kb/132/Q132236/
---

## Q132236: BUG: SQLStatistics Always Reports Indexes as Ascending

{% raw %}

	Article: Q132236
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbBug kbISS
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.0 
	-------------------------------------------------------------------------------
	
	BUG# QJet: 2274 (2.00.2317)
	
	SYMPTOMS
	========
	
	The SQLStatistics function always returns the type of an index as ascending even
	if it is created as a descending index.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in 16-bit and 32-bit ODBC version
	2.0 Access, FoxPro, and dBase drivers. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	MORE INFORMATION
	================
	
	You can specify an index either as ascending or descending using the ODBC SQL
	grammar. The syntax is:
	
	  CREATE [UNIQUE] INDEX index-name ON base-table-name
	  (column-identifier [ASC | DESC]  [,column-identifier [ASC | DESC]...)
	
	SQLStatistics is an ODBC API function that retrieves a list of statistics about a
	single table and the indexes associated with the table. It returns the
	information as a result set whose seventh column is the index type. It returns
	"A" for ascending and "D" for descending index types. However, the dBase,
	Access, and FoxPro drivers return "A" for the index type when the index is
	created as descending.
	
	Additional query words: 2.00.2317 desktop drivers
	
	======================================================================
	Keywords          : kbBug kbISS 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC200
	Version           : WINDOWS:2.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
