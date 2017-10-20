---
layout: page
title: "Q140061: SMS Administrator Not Updating After SQL Server Name Change"
permalink: /kb/140/Q140061/
---

## Q140061: SMS Administrator Not Updating After SQL Server Name Change

{% raw %}

	Article: Q140061
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbsetup smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the SQL Server name was changed after the installation of an SMS site, SMS
	Administrator appears to connect to the new SQL server name, but does not show
	changes made to the SQL database.
	
	MORE INFORMATION
	================
	
	The SMS Event Detail log shows the following:
	
	     EventID: 356
	     Site Hierarchy Manager [SMS Build 600]: Site Hierarchy Manager is not
	     functional. Unable to make connection to SQL Server Old_SQL_Server_Name.
	
	Changing the SQL login parameters at the "Microsoft SMS Administrator Login"
	screen only affects the SMS administrator and not the SQL login account or the
	SMS services. SMS Setup needs to be run to set the new SQL Server Name to work
	with SMS services.
	
	RESOLUTION
	==========
	
	The SQL Server name must be updated in two locations:
	
	- At the SMS Administrator login
	
	- In the Operations/SMS Database dialog of the SMS Setup program.
	
	To do this:
	
	1. Run Setup
	
	2. Click on Operations, then SMS Database
	
	3. Update the SQL Server Name field
	
	4. Start SMS Administrator and update the SQL Server Name field at the login
	  screen.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbsetup smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	

{% endraw %}
