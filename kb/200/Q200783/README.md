---
layout: page
title: "Q200783: SMS: Standard Security in SQL Server"
permalink: /kb/200/Q200783/
---

## Q200783: SMS: Standard Security in SQL Server

	Article: Q200783
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL Server standard security means that in order to connect to a SQL Server
	database, you must enter a user account and password. If you use the SMS Express
	Setup option in SMS 2.0, the SA account is used to access the database. If you
	use the Custom Setup option, SMS Setup prompts you to specify the account you
	want to use when the system accesses SQL Server.
	
	No other accounts are necessary, because Windows Management Instrumentation (WMI)
	security controls access to the SMS site database. This is the maximum security
	option.
	
	Tip:
	
	To maximize security, set an obscure password on the SQL SA account and do not
	use it. Very few people should know this password. Create a different user
	account with access only to the SMS site database within SQL Server, and use
	that account in case anyone accesses the SMS site database directly. However,
	direct access to the database is not necessary because of the SMS Site Database
	provider in version 2.0.
	
	Additional query words: prodsms smssql
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
