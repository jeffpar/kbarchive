---
layout: page
title: "Q149178: SMS: Upgrading SQL Server Used for an SMS Database"
permalink: /kb/149/Q149178/
---

## Q149178: SMS: Upgrading SQL Server Used for an SMS Database

	Article: Q149178
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,4.21a,6.0
	Operating System(s): 
	Keyword(s): kbother smsgeneral smshowto kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server uses a SQL Server database to store its
	system information and computer inventory. When you upgrade the SQL Server
	computer that contains the database for a Systems Management Server version 1.0
	or 1.1 site, additional procedures are required to re-create some of the stored
	procedures for the Systems Management Server database.
	
	MORE INFORMATION
	================
	
	If the stored procedures are not restored, the Systems Management Server
	Scheduler is unable to activate jobs that use the Include Subsites option. Jobs
	will remain in a Pending state and will never be activated.
	
	To re-create the stored procedures for a Systems Management Server database, use
	the following steps:
	
	1. Run the SQL script Sp_site.sql against the SQL Server that contains the
	  Systems Management Server database. When you run the script, make sure that
	  the Systems Management Server database is the active database. The
	  Sp_site.sql script is located in the
	  <Smsdrive>:\<Smsdirectory>\<Site>.srv\<Platform>.bin
	  directory of the Systems Management Server site server.
	
	2. You can use ISQL/w to run the script file. To use ISQL/w to run the script,
	  start ISQL/w, connect to the SQL Server computer that contains the Systems
	  Management Server database. Select the Systems Management Server database in
	  the Database box, open the Sp_site.sql script that is located on the site
	  server, and run the script. If the script has run successfully, only the
	  following text is returned in the Results tab:
	
	  This command did not return data, and it did not return any rows
	
	3. If the Results tab displays "Invalid Object Name errors," you have run the
	  script against a non-Systems Management Server database.
	
	NOTE: You do not need to manually run the Sp_site.sql script for Systems
	Management Server version 1.2 databases.
	
	Additional query words: prodsms prodsql
	
	======================================================================
	Keywords          : kbother smsgeneral smshowto kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1,4.21a,6.0
	
	=============================================================================
	
