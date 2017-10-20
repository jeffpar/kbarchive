---
layout: page
title: "Q257362: SMS: Systems Management Server Site Reset Functionality"
permalink: /kb/257/Q257362/
---

## Q257362: SMS: Systems Management Server Site Reset Functionality

{% raw %}

	Article: Q257362
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbConfig kbDatabase kbServer kbsms200 kbCAP kbsmsUtil
	Last Modified: 07-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can perform the following actions during a site reset of Systems Management
	Server (SMS) 2.0:
	
	- Change the SMS Service account, and password.
	- Switch to a different copy of Microsoft SQL Server.
	- Modify the database name.
	- Specify the SQL Server account that SMS uses to connect to the SMS Site
	  Database.
	
	A site reset retains the current site configuration, but it does not reset
	permissions on shares. A site reset reinstalls all of the following components:
	SMS Site Component Manager; SMS SQL Monitor; the thread components of SMS
	Executive.
	
	MORE INFORMATION
	================
	
	You can also use a site reset to recover from a situation in which you manually
	start SMS_Executive, or SMS_Site_Component_Manager, and you receive the
	following message:
	
	  Error 2186 "Service is not responding to the internal control function"
	
	You must perform a site reset locally on the site server. If you attempt to
	perform a site reset from a remote computer that is running the SMS
	Administrator Console, the "Modify or reset the current installation" option is
	not available.
	
	To perform a site reset from your SMS Site Server, use the following steps:
	
	1. Close all SMS Administrator Consoles.
	
	2. Click Start, click Programs, click Systems Management Server, and then click
	  SMS Setup.
	
	3. Click Next twice, and then select "Modify or reset the current installation".
	
	During the site reset, the following events occur:
	
	- Setup allows you to change the SMS Service account and password. If the
	  password that is entered is different from the password in "User Manager for
	  Domains", the site reset cannot continue. Make sure that you change, or
	  verify a password in "User Manager for Domains", and then synchronize domain
	  controllers.
	
	- Setup attempts to connect to all Client Access Points (CAPs). If the
	  connection is not successful, you receive the following error message:
	
	  SMS Site Component Manager cannot deinstall SMS components from Server ABC.
	  The server is unreachable or down. Retry, Ignore, Ignore All, Abort Setup.
	
	  If there is a good network connection to that computer, you may resolve the
	  problem by clicking Retry. If that computer is not available during a site
	  reset, click Ignore. After you complete the site reset, remove, and then
	  re-assign the CAP role to the affected systems.
	
	- Setup stops, and then starts SMS_Site_Component_Manager, and the thread
	  components of SMS_Executive. A CAP share folder, and SMS_Executive on the
	  local, and remote CAP site systems are removed, and then re-created.
	
	- After Setup installs SMS_Site_Component_Manager, SMS_Site_Component_Manager
	  uses SMS_Server_Bootstrap_computername to install SMS_Executive, and
	  SMS_SQL_Monitor.
	
	- If the site reset does not succeed, check the SMSsetup.log file, which is
	  located on the root drive of the SMS Site Server.
	
	- If you change the password of the SMS Service account, you must be cautious
	  if you have multiple sites, or if you use this account for other functions,
	  such as site communication, or as a software Installation account.
	
	- If the SMSServer_sitecode account does not exist, or has been deleted, this
	  account will be created during the site reset.
	
	- In SMS Service Pack 1, a site reset would re-create the SMS Server Connection
	  (SMSServer_sitecode) account. In Service Pack 2, the user receives a message
	  from site reset that prompts for a password change. The default answer is
	  "No." It states that the only reason to change the password is for a restore,
	  or a recovery process.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q263366 SMS: Performing a Site Reset or Modification Displays Server
	  Connection Account Reset Message
	
	  Q256309 Site Reset May Lock Out SMSSERVER_xxx Account
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbConfig kbDatabase kbServer kbsms200 kbCAP kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
