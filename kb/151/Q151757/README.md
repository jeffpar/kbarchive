---
layout: page
title: "Q151757: Causes of Error Message &quot;Couldn't Retrieve All Machines...&quot;"
permalink: /kb/151/Q151757/
---

## Q151757: Causes of Error Message &quot;Couldn't Retrieve All Machines...&quot;

	Article: Q151757
	Product(s): Microsoft Systems Management Server
	Version(s): 1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbsmsAdmin smsadmin
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you start the Systems Management Server Administrator program, you may
	receive the following error message:
	
	  Couldn't retrieve all machines. SMS administrator has encountered a problem
	  attempting to load machines from the database.
	
	After you click OK, most or all workstations show up in the Sites window. You
	receive the following error message when you execute a query:
	
	  Couldn't execute the specified query.
	
	CAUSE
	=====
	
	These errors are general and can occur in any of the following situations:
	
	- The SMS Security rights for the database user, stored in
	  SMS.SecurityObjAccessList are corrupted. To correct this, set the rights for
	  this database user to No Access, then reset them to the desired privilege.
	
	  -or-
	
	- TEMPDB is in single user mode.
	
	  -or-
	
	- TEMPDB is full.
	
	
	  -or-
	
	- The Transaction log is full. For more information, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q125487 SMS Administrator Unable to Retrieve Machine List
	
	  -or-
	
	- The stored procedure sp_GetSubSite, created by the Systems Management Server
	  setup program, may be missing or corrupted. To reload the Systems Management
	  Server stored procedures, sp_site.sql can be rerun in the Query Window.
	
	  -or-
	
	
	- One or more tables in the SMS database has been dropped.
	
	  This also can occur if DBCLEAN is run to delete an architecture.
	
	MORE INFORMATION
	================
	
	Enabling SQL Tracing may help narrow down the problem, and will log errors to
	the SMS\LOGS\UI.LOG on the site server when the SMS Administrator is run at the
	site server.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To enable SQL Tracing, complete the following steps:
	
	1. Start Registry Editor (Rededt32.exe).
	
	2. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\SMS\Tracing\
	
	3. Set the parameter SQLEnabled to 1.
	
	4. Restart the Systems Management Server Administrator program and re-create the
	  error.
	
	5. Check the Sms\Logs\Ui.log using SMSTrace or Notepad.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsmsAdmin smsadmin 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : :1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
