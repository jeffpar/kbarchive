---
layout: page
title: "Q189588: SMS: SQL Transfer Manager Errors When Moving SMS Database"
permalink: kb/189/Q189588/
---

## Q189588: SMS: SQL Transfer Manager Errors When Moving SMS Database

	Article: Q189588
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	Sp_site.sql is the script that the Systems Management Server Setup program runs
	to create the sp_GetSubSites and sp_GetSubGroupSites stored procedures. Manually
	running this script creates the appropriate temporary tables, and also drops and
	re-creates the necessary Systems Management Server stored procedures.
	
	SYMPTOMS
	========
	
	When using SQL Transfer Manager to move the SMS database from one SQL Server to
	another, it is possible to encounter errors similar to the following:
	
	  ::Error::
	  In file DATABASE.SMS.PRC in statement on line 1
	  Transfer Status: Creating Stored Procedures on destination database
	  Invalid object name '#Sites'.
	
	  ::Error::
	  In file DATABASE.SMS.PRC in statement on line 1
	  Transfer Status: Creating Stored Procedures on destination database
	  Invalid object name '#Sites'.
	
	  ::Error::
	  In file DATABASE.SMS.PRC in statement on line 105
	  Transfer Status: Creating Stored Procedures on destination database
	  Invalid object name 'dbo.sp_GetSubGroupSites'.
	
	  ::Error::
	  In file DATABASE.SMS.PRC in statement on line 108
	  Transfer Status: Creating Stored Procedures on destination database
	  Invalid object name '#Sites'.
	
	  ::Error::
	  In file DATABASE.SMS.PRC in statement on line 108
	  Transfer Status: Creating Stored Procedures on destination database
	  Invalid object name '#Sites'.
	
	  ::Error::
	  In file DATABASE.SMS.PRC in statement on line 108
	  Transfer Status: Creating Stored Procedures on destination database
	  Invalid object name '#Sites'.
	
	  ::Error::
	  In file DATABASE.SMS.PRC in statement on line 160
	  Transfer Status: Creating Stored Procedures on destination database
	  Invalid object name 'dbo.sp_GetSubSites'.
	
	CAUSE
	=====
	
	These errors indicate a problem with creating the SMS stored procedures. This
	can happen if the required temporary tables are not present.
	
	WORKAROUND
	==========
	
	To work around this problem and re-create these procedures manually on the
	destination server, perform the following steps:
	
	1. Start SQL Enterprise Manager.
	
	2. On the Tools menu, click SQL Query Tool.
	
	3. Select the SMS database.
	
	4. click the Load SQL Script toolbar button.
	
	5. Navigate to the Sms\Site.srv\<Platform>.bin\Sp_site.sql file.
	
	6. Click the Execute Query toolbar button.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	
	=============================================================================
	
