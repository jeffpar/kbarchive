---
layout: page
title: "Q260326: Unable to View Scheduled Reports in Remote Admin UI on Win2000"
permalink: /kb/260/Q260326/
---

## Q260326: Unable to View Scheduled Reports in Remote Admin UI on Win2000

{% raw %}

	Article: Q260326
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Systems Management Server Administrator console is installed
	on a computer that is running Microsoft Windows 2000 (not the site server), the
	Crystal Reports service may not function correctly. Some common errors include
	the following:
	
	- Report node, or the main report folder under the Tools node, may not expand.
	
	- You may experience a delayed response before failure messages are displayed.
	
	- You may receive miscellaneous error messages, including "failed to connect to
	  APS," while using the SMS Administrator console locally.
	
	- You may receive miscellaneous error messages, including "failed to connect to
	  APS," while using the SMS Administrator console from a Terminal Services
	  session.
	
	CAUSE
	=====
	
	The Info Sentinel service is installed and started on a Windows 2000 remote
	Administrator Console computer under a User context instead of a Local System
	context.
	
	WORKAROUND
	==========
	
	Change the Info Sentinel service to log on as the local system account; to do
	so, follow these steps:
	
	1. In Control Panel, double-click Services.
	
	2. Right-click Info Sentinel Service, and then click Properties.
	
	3. Click Log On; under Log On As, click Local System Account, and then click OK.
	
	4. Right-click Info Sentinel, and then click Restart.
	
	NOTE: Implement this configuration only on a computer that is running Windows
	2000 and is not a Systems Management Server site server. Crystal Reports
	services (including Info Agent, Info APS, and Info Sentinel that run on the SMS
	site server) should be configured as indicated in "Crystal Reports Services
	Might Be Installed as System Accounts" section of the "Systems Management Server
	2.0 Sp2 Readme-Operations.HTM" document.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 and 2.0 SP2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP2
	Version           : :2.0,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
