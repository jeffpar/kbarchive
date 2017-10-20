---
layout: page
title: "Q188049: SMS: Acctchg.exe Syntax and Description"
permalink: /kb/188/Q188049/
---

## Q188049: SMS: Acctchg.exe Syntax and Description

{% raw %}

	Article: Q188049
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsmsUtil smsutil
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Account Changer utility (Acctchg.exe) changes the information that Systems
	Management Server services use to access the SQL Server database. Acctchg.exe,
	included in the BackOffice Resource Kit, affects only the services on the
	specified site server. Account Changer does not make any changes to SQL Server
	itself; this must be done manually while running Account Changer.
	
	MORE INFORMATION
	================
	
	To change the Systems Management Server account information, perform the
	following steps:
	
	1. Run Acctchg.exe and specify a site server. ACCTCHG shuts down that site and
	  waits.
	
	2. Use SQL Server tools to make whatever changes you need. For example, change
	  the SQL Server account and password, rename the Systems Management Server
	  database, or move the database to another SQL Server computer.
	
	3. Resume ACCTCHG by returning focus to the window that is running ACCTCHG and
	  press any key.
	
	4. ACCTCHG prompts you for the following information to be used from now on by
	  the Systems Management Server services in the specified site:
	
	   - SQL Server name
	
	   - SQL Server database name
	
	   - SQL Server account
	
	   - SQL Server password
	
	5. ACCTCHG restarts the site.
	
	Acctchg.exe runs on: Alpha, MIPS, x86.
	
	Syntax
	------
	
	     acctchg  site_server  [/v]
	     site_server - The name of the site server whose Systems Management
	     Server services will be affected.
	     /v - Verbose mode. More output is displayed on the screen.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsUtil smsutil 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
