---
layout: page
title: "Q166196: SMS Setup Requires SQL Server Named Pipes Network Support"
permalink: kb/166/Q166196/
---

## Q166196: SMS Setup Requires SQL Server Named Pipes Network Support

	Article: Q166196
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork kbsetup kbDatabase kbsmsAdmin smsadmin smssetup smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SQL Server Named Pipes network support is required for Systems Management Server
	Setup to communicate with the SQL Server that stores the Systems Management
	Server database. Systems Management Server utilities and services use Named
	Pipes by default, and may have problems connecting to the Systems Management
	Server database if SQL Server is configured incorrectly. For example, if Named
	Pipes network support is not loaded, the Systems Management Server Administrator
	program may fail to start up, and produce the error message, "Unable to Connect
	to SQL Server."
	
	You can change the SQL Server network support option by running SQL Server Setup,
	selecting Change Network Support, and then selecting Named Pipes as an installed
	network.
	
	If you use multiple SQL Server networks, it is recommended that you set Named
	Pipes as the default network. You can configure this on the Net Library Settings
	tab of the SQL Server Client Configuration Utility.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sockets
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbsetup kbDatabase kbsmsAdmin smsadmin smssetup smsdatabase 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
