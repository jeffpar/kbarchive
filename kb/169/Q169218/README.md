---
layout: page
title: "Q169218: FIX: &quot;Invalid Argument Value&quot; Error with SQLSetConnectOption"
permalink: /kb/169/Q169218/
---

## Q169218: FIX: &quot;Invalid Argument Value&quot; Error with SQLSetConnectOption

{% raw %}

	Article: Q169218
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 27-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.0 
	-------------------------------------------------------------------------------
	
	BUG #: 4622 (ODBC30)
	
	SYMPTOMS
	========
	
	When SQL_ODBC_CURSORS is set to SQL_CUR_USE_ODBC using the SQLSetConnectOption
	and a connection to a data source is made, the next call to SQLSetConnectOption
	to set the SQL_CURRENT_QUALIFIER or SQL_ATTR_CURRENT_CATALOG fails with the
	following message:
	
	  szSqlState = "S1009", *pfNativeError = 0, *pcbErrorMsg = 55
	  szErrorMsg = "[Microsoft][ODBC Driver Manager] Invalid argument value"
	
	WORKAROUND
	==========
	
	To work around this problem, use SQLSetConnectOption to set the SQL_ODBC_CURSORS
	to SQL_CUR_USE_IF_NEEDED or SQL_CUR_USE_DRIVER. The ODBC Cursor Library version
	3.00.2822 resolves this issue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Open Database
	Connectivity version 3.0. This problem has been corrected in U.S. Service Pack 1
	for Microsoft Open Database Connectivity, version 3.0. For more information,
	contact your primary support provider.
	
	
	MORE INFORMATION
	================
	
	This behavior is only seen with ODBC 2.X applications using a Driver Manager 3.0
	and a 2.X ODBC driver.
	
	Additional query words: DM Cursorlibrary
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
