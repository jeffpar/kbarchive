---
layout: page
title: "Q159470: FIX: SQLDescribeCol &amp; SQLColAttributes Give Wrong Nullability"
permalink: /kb/159/Q159470/
---

## Q159470: FIX: SQLDescribeCol &amp; SQLColAttributes Give Wrong Nullability

{% raw %}

	Article: Q159470
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65; winnt:6.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server version 6.5 
	- Microsoft Open Database Connectivity, version 2.65 
	-------------------------------------------------------------------------------
	
	BUG #: 15749 (2.65.0201)
	
	SYMPTOMS
	========
	
	When you add an identity column to an existing table using the ALTER TABLE
	statement, SQLColAttributes and SQLDescribeCol incorrectly report that the
	identity column allows NULLs.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Column nullability information derived from
	SQLColumns.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server version 6.5
	and the Open Database Connectivity driver version 2.65. This problem has been
	corrected in U.S. Service Pack 2 for Microsoft SQL Server version 6.5. For more
	information, contact your primary support provider.
	
	MORE INFORMATION
	================
	
	SQLColumns, correctly reports that the column does not allow NULLs.
	
	NOTE: This problem also occurs with the SQL Server 6.5 Service Pack 1 ODBC driver
	build 2.65.0212.
	
	Additional query words: 2.65 6.50 Nullibility odbc KBCategory: kbinterop kbbug6.50 kbbug2.65 kbfix6.50.sp2
	
	======================================================================
	Keywords          :  
	Technology        : kbSQLServSearch kbAudDeveloper kbSQLServ650 kbODBCSearch
	Version           : WINDOWS:2.65; winnt:6.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
