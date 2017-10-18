---
layout: page
title: "Q200802: SMS: Cannot Connect to SQL Server If Default Protocol Is Changed"
permalink: kb/200/Q200802/
---

## Q200802: SMS: Cannot Connect to SQL Server If Default Protocol Is Changed

	Article: Q200802
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1,1.2,2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbSQLServ kbsms200
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SQL Server Named Pipes network support is required for Systems Management Server
	(SMS) to communicate with the SQL Server that stores the Systems Management
	Server database. SMS utilities and services use Named Pipes by default, and may
	have problems connecting to the Systems Management Server database if SQL Server
	is configured incorrectly.
	
	It is important to understand that the client Net-Library (and interprocess
	communication [IPC]) that establishes a connection must match the server
	Net-library (and IPC) that accepts the connection. Both the Client computer and
	the Server computer must be running the same network protocol.
	
	For example, if Named Pipes network support is not installed, the Systems
	Management Server Administrator program may fail to start and produce the
	following error message:
	
	  "Unable to Connect to SQL Server."
	
	MORE INFORMATION
	================
	
	SQL Server Instance Used for SMS Site Database Must Support Named Pipes
	-----------------------------------------------------------------------
	
	When you change the default network protocol in the SQL Client Configuration
	Utility, one of the following error messages appears in the SQL Server
	Administrator or Systems Management Server Administrator program:
	
	Microsoft SQL Enterprise Manager
	
	  Unable to Connect to Server (reason:[DB-Library] Unable to connect: SQL
	  Server is unavailable or does not exist. General network error. Check your
	  documentation). Register anyway?
	
	Microsoft SMS Administrator
	
	  Couldn't connect to server <Server Name> This may be because the
	  specified server could not be located or because the specified database or
	  user information is incorrect.
	
	Setup may fail, with the following error message in the Smssetup.log when
	upgrading from Systems Management Server 1.0 or 1.1 to version 1.2:
	
	  <mm-dd-yyyy hh:mm:ss> Registering connects for XXXXXX (server name) sa
	  (default value) SMS (default value) <mm-dd-yyyy hh:mm:ss> Registered
	  the types <mm-dd-yyyy hh:mm:ss> Upgrade thread: Failed to register SQL
	  connection types.
	
	Additionally, SMS 2.0 setup displays the following error message:
	
	  System Management Server Setup Wizard Setup cannot complete the specified SMS
	  installation on this computer for the following reasons: Cannot connect to
	  SQL server <Server Name> using specified SQL Login ID and password.
	  Please make sure they are valid.
	
	Solution
	--------
	
	To correct this problem, use the following steps:
	
	1. Run the SQL Client Configuration utility.
	
	2. Select the Net Library tab.
	
	3. Select Named Pipes in the Default Network drop-down combo box.
	
	  NOTE: By default, SQL Server is configured for Named Pipes.
	
	4. Click Done.
	
	Additionally, you need to check the SQL setup using these steps:
	
	1. Run SQL Server Setup and click Continue twice.
	
	2. Select Change Network Support, and then choose Continue.
	
	3. Select the network protocol(s) you want SQL Server to use. In this case,
	  Named Pipes. Click OK.
	
	4. The Named Pipe name dialog box appears. Click Continue.
	
	5. Select the Exit to Windows NT button.
	
	This provides the needed match for the Client Net-Library to the Server
	Net-library.
	
	Additional query words: prodsms smssql
	
	======================================================================
	Keywords          : kbDatabase kbSQLServ kbsms200 
	Technology        : kbSMSSearch kbSMS110 kbSMS120 kbSMS200
	Version           : winnt:1.1,1.2,2.0
	Issue type        : kbinfo
	
	=============================================================================
	
