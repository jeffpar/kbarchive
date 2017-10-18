---
layout: page
title: "Q260372: SMS: Calculating SQL User Connections for SMS 2.0"
permalink: kb/260/Q260372/
---

## Q260372: SMS: Calculating SQL User Connections for SMS 2.0

	Article: Q260372
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbConfig kbDatabase kbServer kbWBEM kbsms200bug kbsmsAdmin kbsmsProvider kbsmsUtilkbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If more than five Systems Management Server (SMS) Administrator consoles in an
	organization simultaneously attempt to use a single primary site, the last SMS
	Administrator console that attempts to connect to the site's database may not be
	able to do so and the Administrator console may display "Connection Failed."
	This problem may be intermittent. When this problem occurs, the SMS Provider log
	file (Smsprov.log) may contain the following text:
	
	  E:\OPALSP1\sdk_provider\nt\smsprov\SspObjectQuery.cpp(4177) : SQL Connection
	  attempt timed out.
	
	  E:\OPALSP1\sdk_provider\nt\smsprov\SspObjectQuery.cpp(1642) : Unable to get
	  SQL connection.
	
	CAUSE
	=====
	
	This problem can occur if all available SQL connections have been used. Each
	Administrator console uses SQL user connections to access the database by using
	the SMS provider. If there are no available user connections, SMS Administrator
	console cannot connect to the SQL database.
	
	WORKAROUND
	==========
	
	To work around this issue, use the appropriate method.
	
	Method 1
	--------
	
	If you have multiple primary sites, you can temporarily resolve the issue by
	stopping and restarting the Windows Management service of the primary site
	server at every site. Note that doing so resets the connections to the SQL
	database. All active remote Administrator consoles must re-establish the
	connection. You can stop and restart the Windows Management service by using the
	Services tool in Control Panel.
	
	Method 2
	--------
	
	If SMS and SQL are running on the same computer, the SMS provider should also be
	located on the computer. Increase the MaxSQLConnections value in the Smsprov.mof
	file (additional information about doing this is contained later in this
	article). This file is located on the SMS site server in the
	SMS\Bin\<Platform> folder.
	
	If SMS and SQL are running on different computers and the SMS provider is located
	on the computer on which SQL is running, the Smsprov.mof file is located in the
	<Drive>:\Smsprov\MOFs\<Sitecode> folder on the SQL server. You must
	compile this file after changing it. Do not compile the Smsprov.mof file that is
	located in the SMS\Bin\<Platform> folder on the SMS site server. Doing so
	may cause the following error message when you select Remote Control on a
	resource in Collections:
	
	  A Database could not be found with the name supplied.
	
	For additional information about this error message, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q264106 A Database could not be found with the name supplied
	
	Editing the Smsprov.mof File
	----------------------------
	
	Open the Smsprov.mof file with any text editor (such as Notepad) and locate the
	following lines:
	
	  
	
	  // *************************************
	  // SMS_ConfigData : SMS Provider Configuration data
	  // *************************************
	
	  [singleton]
	  class SMS_ConfigData
	  {
	    // Number of instances returned as a batch to CIMOM for query results
	         [Description("Undocumented - do not change")]
	    uint32 QueryInstanceBatchCount = 0;
	
	    // Max number of SQL connections allowed at one time by the provider
	         [Description("Undocumented - do not change")]
	    uint32 MaxSQLConnections = 60;
	  };
	
	By default, the MaxSQLConnections value is set to 60. Change it to a higher
	number based on how many SMS Administrator consoles you have. Note that this
	file is not updated automatically even if you specify a higher number during SMS
	installation. You must make this change manually. After you make the change, you
	must recompile the file.
	
	To recompile the Smsprov.mof file:
	
	1. Locate the Mofcomp.exe file. It is located in the %SystemRoot%\System32\WBEM
	  folder.
	
	2. Run the following at the command line:
	
	  mofcomp %smsdriveletter%\sms\bin\i386\smsprov.mof
	
	The output from the command should be similar to:
	
	  Microsoft (R) 32-bit MOF Compiler Version 1.10.698.0000
	  Copyright (C) Microsoft Corp. 1997. All rights reserved.
	  Parsing MOF file: smsprov.mof
	  MOF file has been successfully parsed
	  Storing data in the repository...
	  Done!
	
	You must also update the SQL user connection configuration based on this change.
	
	SQL Server 6.5:
	
	1. Start SQL Enterprise Manager.
	
	2. Right-click your SQL server, and then click Configure.
	
	3. On the Configuration tab, locate the User Connections item.
	
	4. Change the "Current user connections" value to a higher number.
	
	5. Click Apply Now, and then click OK.
	
	6. You must stop and restart the SQL server. Right-click your SQL server, and
	  then click Stop.
	
	7. Right-click your SQL server, and then click Start.
	
	SQL Server 7.0:
	
	1. Start SQL Enterprise Manager.
	
	2. Right-click your SQL server, and then click Properties.
	
	3. Click the Connection tab.
	
	4. Change the "Maximum concurrent user connections" value to a number that is at
	  least 20 greater than the MaxSqlConnections value, or change the value to 0
	  for unlimited connections.
	
	5. Click Apply, and then click Yes to stop and restart your SQL server.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	When you install SMS, you can specify the number of expected SMS Administrator
	consoles and the minimum number of SQL Server connections. By default, the
	number of SMS Administrator consoles is 5; the minimum number of SQL server
	connections is 75. During the installation, the current user connections value
	in the SQL configuration is replaced by the number you specify. By default in
	SQL Server 6.5, the value for simultaneous SQL user connections is 15. In SQL
	Server 7.0, the number of SQL connections is 0 (unlimited). To take effect, you
	must stop and restart SQL Server.
	
	User connections provide programs access to SQL server. SMS uses these
	connections for installation, SMS service operations, and SMS Administrator
	console access. A primary site uses a minimum of 40 user connections for
	installation and operation. The first 5 concurrently operating SMS Administrator
	consoles also require 2 user connections each. Each additional instance of the
	SMS Administrator console requires 5 additional user connections.
	
	For example, if 20 Administrator consoles connect to your site server on a
	regular basis, you need at least 150 user connections. The first 5 users require
	75 user connections:
	
	  minimum 40 + (2 user connections * 5 users) + (5 user connections * 5 users)
	
	The remaining 15 users require 75 additional user connections:
	
	  5 user connections * 15 users
	
	Each user connection requires approximately 40 KB of RAM on the computer that is
	running SQL Server. Configuring the maximum number of user connections does not
	commit memory to support the user connection allocation unless the user
	connections are established. SQL Server 7.0 returns RAM to the pool of system
	resources for inactive user connections. Adding more user connections than you
	need may be a good idea.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbConfig kbDatabase kbServer kbWBEM kbsms200bug kbsmsAdmin kbsmsProvider kbsmsUtil kbfaq
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
