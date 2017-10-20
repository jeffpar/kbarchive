---
layout: page
title: "Q171878: FIX: Cursor Library Memory Leak in Multithreaded Environment"
permalink: /kb/171/Q171878/
---

## Q171878: FIX: Cursor Library Memory Leak in Multithreaded Environment

{% raw %}

	Article: Q171878
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbODBC kbMDAC250fix
	Last Modified: 03-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 2.5, 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	BUG #: 1251/4210 (odbcsdk)
	
	SYMPTOMS
	========
	
	When the cursor library is loaded in a multithreaded application, a memory leak
	occurs.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Open Database
	Connectivity versions 2.5 and 3.0. This problem has been corrected in U.S.
	Service Pack 1 for Microsoft Open Database Connectivity, version 3.0. For more
	information, contact your primary support provider.
	
	MORE INFORMATION
	================
	
	This problem is created when multiple threads establish connections specifying
	that the ODBC Cursor Library is to be used. For example, if each thread of a
	multithread application creates a connection using the SQLSetConnection(hdbc,
	SQL_ODBC_CURSORS, SQL_CUR_USE_ODBC) statement and subsequently executes it
	repeatedly, you can use the Process Viewer to observe a memory leak.
	
	Additional query words: 6.50 6.5 sql sqlserver server multi thread threaded
	
	======================================================================
	Keywords          : kbODBC kbMDAC250fix 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBC300 kbODBC250
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
