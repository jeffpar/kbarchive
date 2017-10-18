---
layout: page
title: "Q180407: SMS: An Error Was Reported While Executing the Database Upgrade"
permalink: kb/180/Q180407/
---

## Q180407: SMS: An Error Was Reported While Executing the Database Upgrade

	Article: Q180407
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Setup.exe and attempt to apply Service Pack 2 (SP2), Service Pack 3
	(SP3), or Service Pack 4 (SP4) to a Microsoft Systems Management Server version
	1.2 site server, you receive the following error message:
	
	  An error was reported while executing the database upgrade script
	  UPGRD12.SQL. The error was reported on line 180. Continue with setup? Press
	  Okay to skip the upgrade script or Press Cancel to cancel setup.
	
	CAUSE
	=====
	
	Line number 180 in the Upgrd12.sql script runs the Dbcnv12a.exe program to
	convert tables in the Systems Management Server database through the SqlExec
	function. This function may not work in some SQL environments that use
	integrated security.
	
	WORKAROUND
	==========
	
	To work around this problem, make the following two changes to the Upgrd12.sql
	script.
	
	1. Replace line number 180 ("sqlexec dbcnv12a") with the following:
	
	     Exec master..xp_cmdshell "C:\SMS\SITE.SRV\X86.BIN\dbcnv12a.exe"
	
	2. Replace the last line ("sqlexec dbcnv12") with the following:
	
	     EXEC master..xp_cmdshell "C:\SMS\SITE.SRV\X86.BIN\dbcnv12.exe"
	
	Generally, xp_cmdshell runs Windows NT commands in the security context of SQL
	Server, which by default is a user account with local administrator authority.
	When a non-system administrator runs xp_cmdshell with the new configuration
	option set, the requested command runs in the SQLExecutiveCmdExec user account,
	which is the same account used by SQL Executive for scheduled tasks entered by
	non-system administrators.
	
	The command shell extended stored procedure uses the SQL Server security context
	of the user who is logged in, which works well in SQL Server integrated security
	environments.
	
	Copy the Systems Management Server service pack you are trying to install (SP2,
	SP3, or SP4) to the system's hard disk, copy the new Upgrd12.sql script to this
	source, and then run the service pack Setup.exe program again.
	
	Verify that the Dbcnv12a.exe and Dbcnv12.exe which are mentioned in the modified
	script's path, actually exist in the directory specified.
	
	MORE INFORMATION
	================
	
	It should be noted that this error messages and other similar error messages are
	logged in the Smssetup.log file. This log should be consulted when
	troubleshooting similar issues.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
