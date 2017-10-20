---
layout: page
title: "Q255852: Administrator Console May Not Connect After Changing SQL Account"
permalink: /kb/255/Q255852/
---

## Q255852: Administrator Console May Not Connect After Changing SQL Account

{% raw %}

	Article: Q255852
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbsms200 kbsms200bug
	Last Modified: 03-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you change the SQL password in the Systems Management Server (SMS)
	Administrator console and then reboot the computer, the SMS Administrator
	console may not connect. All of the SMS services can connect to SQL to perform
	their respective functions without a problem. Prior to rebooting, there is no
	problem.
	
	CAUSE
	=====
	
	When you change the password in the SMS Administrator console, the SQL password
	information in the registry is not updated, even after a reboot. The SMS
	provider, which is used by the SMS Administrator console to obtain connections
	to SQL, obtains encrypted password information from the registry to log on to
	SQL.
	
	WORKAROUND
	==========
	
	Performing a site reset resolves this issue because the site reset process
	causes the registry information to be updated.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	MORE INFORMATION
	================
	
	For more information about troubleshooting connectivity with the SMS
	Administrator console, see the following article in the Microsoft Knowledge
	Base:
	
	  Q201126 SMS: Troubleshooting Connectivity to the SMS Site Database
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
