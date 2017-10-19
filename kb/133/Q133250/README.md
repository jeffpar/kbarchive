---
layout: page
title: "Q133250: Unable to Connect to SQL Server If Default Protocol Is Changed"
permalink: /kb/133/Q133250/
---

## Q133250: Unable to Connect to SQL Server If Default Protocol Is Changed

	Article: Q133250
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2,4.2x,6.0,6.5
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup kbsmsAdmin smsadmin smssetup
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the default network protocol in the SQL Client Configuration
	Utility, one of the following error messages appears in the SQL Server
	Administrator or Systems Management Server Administrator program:
	
	  
	
	- Unable to connect: SQL Server is unavailable or does not exist. Specified SQL
	  Server not found.
	
	- Couldn't connect to server <server name>.
	
	Additionally, after changing the default network protocol, Setup may fail, with
	the following error message in the Smssetup.log when upgrading from Systems
	Management Server 1.0 or 1.1 to version 1.2:
	
	  <mm-dd-yyyy hh:mm:ss> Registering connects for XXXXXX (server name)
	  sa (default value)
	  SMS (default value)
	  <mm-dd-yyyy hh:mm:ss> Registered the types
	  <mm-dd-yyyy hh:mm:ss> Upgrade thread: Failed to register SQL connection
	  types.
	
	RESOLUTION
	==========
	
	To correct this problem, perform the following steps:
	
	1. Run the SQL Client Configuration utility.
	
	2. Click the Net Library tab.
	
	3. Click Named Pipes as the Default Network for the Net Library Configuration
	  (by default, SQL Server is configured for Named Pipes).
	
	  -or-
	
	  Click the Advanced tab and type the server name of the SQL server containing
	  the SMS database, and click Named Pipes as the DLL Name. Then, click
	  Add/Modify.
	
	Additional query words: prodsm sms
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup kbsmsAdmin smsadmin smssetup 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2,4.2x,6.0,6.5
	
	=============================================================================
	
