---
layout: page
title: "Q199357: SMS: Common Issues and Resolutions for Crystal Info Reports"
permalink: kb/199/Q199357/
---

## Q199357: SMS: Common Issues and Resolutions for Crystal Info Reports

	Article: Q199357
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbsms200
	Last Modified: 14-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some of the common causes of Crystal Info report issues,
	and provides methods you may be able to use to solve them.
	
	MORE INFORMATION
	================
	
	- No data exists in the Systems Management Server (SMS) site database.
	
	  Discovery data might not exist in the database. Wait until discovery has been
	  run at the site before running reports, and verify that discovery is enabled
	  in Client Agent Properties.
	
	- Report properties are the wrong datatype, or reports do not perform sorting
	  and grouping properly.
	
	  Verify that the ODBC driver file (Wbemdr32.dll) is dated August 1998 or later.
	
	- The user that is running the reports does not have sufficient user rights to
	  run the report against the specified database.
	
	  The user account running the report must have the "Act as part of operating
	  system" advanced user right to impersonate an account that can obtain access
	  to the data. To grant this right, run User Manager for Domains.
	
	- The report template file uses an inaccessible database.
	
	  If you have received a report file from another site, you must first run the
	  Set Location tool to specify the correct database for Crystal Info to report
	  against.
	
	- Running Set Location does not work.
	
	  Determine whether the user account under which you are running Set Location
	  has access permissions to the report folder. Browse to
	  \SMS\CInfo\Samples\SMS, and then verify access rights.
	
	- You receive an error message when you click Reports in a remote SMS
	  administrator console.
	
	  If you install a remote SMS administrator console on a computer that is
	  running Microsoft Windows NT Workstation 4.0 while you are logged on as a
	  domain administrator, the Info APS service does not start automatically.
	  Because of this, you receive an error message when you click Reports in the
	  SMS administrator console.
	
	  To resolve this problem, on the remote computer, double-click Services in
	  Control Panel. Select the Info APS service, and then click Startup. Change
	  the Startup Type to Automatic, and then click OK. Restart the SMS
	  administrator console.
	
	- A report takes a long time to run.
	
	  If you have used aliases for the WBEM class tables, and if you inadvertently
	  chose a word reserved by Microsoft SQL Server as an alias, the report may
	  take significantly longer to run. To resolve this problem, modify the alias,
	  and rerun the report. For information about SQL Server-reserved words, see
	  SQL Server Help.
	
	- While creating or modifying a report, connecting to the SMS namespace
	  selection does not work.
	
	  If the account under which you are logged on does not have access to the SMS
	  database, the user account you are using must have the "Act As Part Of
	  Operating System" advanced user right to impersonate an account under which
	  the report can run. Alternatively, you can add the user account to the SMS
	  administrators user group.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
