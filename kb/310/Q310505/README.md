---
layout: page
title: "Q310505: SMS: SMS SP3 ICP Upgrade May Damage Secondary Site Installation"
permalink: /kb/310/Q310505/
---

## Q310505: SMS: SMS SP3 ICP Upgrade May Damage Secondary Site Installation

{% raw %}

	Article: Q310505
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP4fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you apply any Systems Management Server (SMS) 2.0 Service Pack 3 (SP3)
	International Client Pack (ICP) to a secondary site that also has the SMS
	Administrator console, you may receive any of the following error messages:
	
	  Setup has encountered fatal errors while installing SQL Server. Run SQL
	  server setup from the SQL CD to install SQL server.
	
	  -or-
	
	  Setup cannot start the SQL server to perform the upgrade. Contact your SQL
	  administrator
	
	When you view the <x>:\Smssetup.log file (where <x> is the drive on
	the SMS site server where SMS is installed) the following information may be
	logged:
	
	  
	
	  Invoking SQL setup, command line =  /t IniFilePath = G:\SMS\SqlSetup.ini
	  Cannot start SQL setup at  /t IniFilePath = G:\SMS\SqlSetup.ini, Win32 Error = 2
	
	  -or-
	
	  
	
	  Starting evaluation process.
	  ICP primary site installation.
	  Created action thread, thread id = 1268
	  Installing ICP on an English primary site server.
	  Entry: KillUserApps()
	  Exiting Kill User apps
	  Registering connects for , ,
	  Registered the types
	  SQLTestQuery, SQL Server is down.
	  Start default SQL server service
	  Cannot start MSSQLServer on 
	
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q288239 SMS: How to Obtain the Latest Systems Management Server 2.0 Service
	  Pack
	
	To work around this problem, run SMS setup and remove the SMS Administrator
	console from the secondary site server is you have not already run the ICP
	setup.
	
	If you have run ICP setup and the problem that is described in the Symptoms
	section occurs, either reinstall the secondary site (possible data loss) or
	recover the secondary site from a backup that was made before the upgrade
	procedure.
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Systems Management Server 2.0 Service Pack 4.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP4fix 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
