---
layout: page
title: "Q214969: SMS: Server Component Logging Is Turned Off by Default."
permalink: /kb/214/Q214969/
---

## Q214969: SMS: Server Component Logging Is Turned Off by Default.

{% raw %}

	Article: Q214969
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbSCM kbSiteComp kbSvcMgr
	Last Modified: 06-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Systems Management Server (SMS) 2.0 server component logging is turned
	off by default. Enabling logging for all SMS components causes up to a
	10-percent performance decrease. For this reason, logging is not enabled. When
	troubleshooting SMS 2.0, problem status messages may not provide the level of
	granularity you need to resolve some problems. When this happens you will need
	to enable logging for all of the SMS components involved. Follow the steps below
	to enable logging:
	
	1. Go to the Tools node in the SMS Administrator Console.
	
	2. Right-Click the SMS Service Manager to start it.
	
	3. In the left window pane go to <Site Code>/Servers/<Server Name>.
	
	4. Now you can select one or more components while holding down the CTRL key,
	  and then navigate to the Component menu and select Logging. Then select the
	  Enable Logging check box.
	
	Once logging is enabled, the logs can be found in the \SMS\Logs directory.
	Component logging on clients is enabled by default.
	
	MORE INFORMATION
	================
	
	You need to account for adequate disk space when you enable logging. At times a
	component may use up to 2 megabytes (MB) of space for logging. It is best to
	account for 2 MB of free space for each component.
	
	Additional query words: prodsms smsstat
	
	======================================================================
	Keywords          : kbSCM kbSiteComp kbSvcMgr 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
