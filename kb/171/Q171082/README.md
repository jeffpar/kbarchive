---
layout: page
title: "Q171082: BUG: SQLTables w/ Table Type of 'VIEW' Return 'SYS' and 'SYSTEM'"
permalink: /kb/171/Q171082/
---

## Q171082: BUG: SQLTables w/ Table Type of 'VIEW' Return 'SYS' and 'SYSTEM'

{% raw %}

	Article: Q171082
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0,2.5,3.0
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.5, 3.0 
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	-------------------------------------------------------------------------------
	
	BUG #: 484 (Oracle)
	
	SYMPTOMS
	========
	
	The Microsoft Oracle Driver version 2.00.00.6325 may return views that belong to
	'SYS' and 'SYSTEM' users for SQLTables with the 'VIEW' table type specified. The
	'SYS' and 'SYSTEM' views are returned even if the user does not have permission
	to the system views.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Oracle Driver
	version 02.00.00.6325.
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	Additional query words: view system sql server
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbAudDeveloper kbZNotKeyword kbODBCSearch kbODBCOracle206325 kbODBC300 kbODBC250 kbODBCOracle100Search
	Version           : WINDOWS:1.0,2.5,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
