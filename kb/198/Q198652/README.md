---
layout: page
title: "Q198652: SMS: Administrator Console Fails to Load and Reports WBEM Error"
permalink: /kb/198/Q198652/
---

## Q198652: SMS: Administrator Console Fails to Load and Reports WBEM Error

{% raw %}

	Article: Q198652
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbWBEM kbsms200
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When trying to start the SMS Administrator Console, an error may be encountered
	containing the following information:
	
	  MMCAdminUI WBEM Error: (Error executing query (T_WbemSyncQueryToContainer))
	
	  Error : WBEM_E_FAILED Operation: ExecQuery ParameterInfo: select SiteCode,
	  SiteName from SMS_Site where ReportingSiteCode="" Error Description: SQL
	  Err>> #10025 Sev 9: Possible network error: Write to SQL Server Failed.
	  ConnectionWrite (GetOverLappedResult()). NEXT: SQL Err>> #10005 Sev 1:
	  DBPROCESS is dead or not enabled. (null)
	
	  <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
	
	CAUSE
	=====
	
	This error message can be caused by the SQL Server being out of available user
	connections.
	
	WORKAROUND
	==========
	
	To resolve this problem, increase the number of SQL Server user connections. To
	do this, perform the following steps:
	
	1. Start SQL Server Enterprise Manager.
	
	2. Right-click the SQL Server server name and click Configure on the shortcut
	  menu.
	
	3. In the Server Configuration/Options dialog box, scroll to the User
	  Connections entry and increase the number of connections in the Current
	  column.
	
	After making this change, you must stop and start the SQL Server service for the
	change to take effect. You can stop and start the service through the SQL Server
	Service Manager, Control Panel Services, or the command line with the "net stop
	mssqlserver" and "net start mssqlserver" commands.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbWBEM kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
