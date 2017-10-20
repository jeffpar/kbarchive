---
layout: page
title: "Q158605: FIX: Driver Not Capable Error: SQL_COPT_SS_CONNECTION_DEAD"
permalink: /kb/158/Q158605/
---

## Q158605: FIX: Driver Not Capable Error: SQL_COPT_SS_CONNECTION_DEAD

{% raw %}

	Article: Q158605
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.65
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 2.65 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Users who attempt to call SQLGetConnectOption for the Microsoft SQL Server ODBC
	Driver specific connection option SQL_COPT_SS_CONNECTION_DEAD receive the
	following error:
	
	  szSqlState = "S1C00", *pfNativeError = 0
	  szErrorMsg="[Microsoft][ODBC SQL Server Driver]
	  Driver not capable"
	
	CAUSE
	=====
	
	This option has not yet been implemented in the driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft SQL Server ODBC driver
	version 2.65. This problem has been corrected in U.S. Service Pack 2 for
	Microsoft SQL Server version 6.5. For more information, contact your primary
	support provider.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : WINDOWS:2.65
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
