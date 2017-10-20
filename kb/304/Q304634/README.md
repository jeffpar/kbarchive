---
layout: page
title: "Q304634: SMS: How to Set SQL Server 7.0 Compatibility Levels for SMS 2.0"
permalink: /kb/304/Q304634/
---

## Q304634: SMS: How to Set SQL Server 7.0 Compatibility Levels for SMS 2.0

{% raw %}

	Article: Q304634
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200
	Last Modified: 21-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to properly set the Microsoft SQL Server version 7.0
	compatibility level for Systems Management Server (SMS) version 2.0. SQL Server
	7.0 provides the option of running in a compatibility mode that emulates SQL
	Server 6.0 or 6.5 behavior. You can run Compatibility mode so that legacy
	programs can continue to run and interact with SQL as they did before the
	upgrade to SQL Server 7.0.
	
	Because SMS 2.0 is able to fully utilize the advanced features of SQL Server 7.0
	and does not require legacy support, you should always run the SMS database in
	SQL Server 7.0 mode.
	
	If you run SQL Server in a compatibility mode that is lower than version 7.0, you
	cannot take advantage of certain SQL Server 7.0 features that are not enabled at
	lower compatibility levels. In addition, support for these legacy behaviors may
	not be included in future versions of SQL Server.
	
	When you set a SQL Server compatibility level, the setting affects the behaviors
	in the database you specify, not the entire SQL server. Because of this (even in
	the unlikely event that SMS 2.0 shares an SQL server with legacy programs that
	are running in an SQL 60 or 65 compatibility level), you should still run the
	SMS database in SQL 70 mode for maximum performance and compatibility.
	
	MORE INFORMATION
	================
	
	The compatibility level is specified for each database by using the
	sp_dbcmptlevel system stored procedure. Note that you can determine the current
	compatibility level of your database by running "sp_dbcmptlevel DATABASENAME"
	(without the quotation marks) in the SQL Query Analyzer tool. The database
	compatibility level can be set to 60 (version 6.0 compatibility), 65 (version
	6.5 compatibility) and the default of 70 (version 7.0 compatibility).
	
	An upgrade from an earlier version of SQL Server to version 7.0 sets the
	compatibility level of existing user-defined databases to the version of SQL
	Server from which you are upgrading. For example, if your server was a version
	6.5 server before you upgraded to SQL Server 7.0, the compatibility level for
	all your existing user-defined databases is set to 65.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
