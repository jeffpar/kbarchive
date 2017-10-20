---
layout: page
title: "Q186408: SMS: Secondary Site Upgrade Fails When Too Many Logon Servers"
permalink: /kb/186/Q186408/
---

## Q186408: SMS: Secondary Site Upgrade Fails When Too Many Logon Servers

{% raw %}

	Article: Q186408
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbsetup kbHMan kbSCMan smssetup smshierman smssiteconfigman
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under specific circumstances, when you attempt to upgrade a secondary site, the
	upgrade may fail because of timing-related issues. This may occur in
	environments where there are several secondary site servers under the central
	site, and each secondary site has numerous logon servers.
	
	CAUSE
	=====
	
	During a secondary site upgrade process, the Upgrade Bootstrap Service is
	delivered to the secondary site server and started. This issues a site shutdown
	using a SHUTDOWN.CT1.
	
	Note that the shutdown may take an inordinate amount of time because of the
	number of logon servers.
	
	During this time, the parent site's Hierarchy Manager Service sends the site
	install package. The Systems Management Server Despooler Service is still active
	at the secondary site server because it has not shut down, and it records the
	following error message:
	
	  Executing instruction of type MICROSOFT|SMS|MINIJOBINSTRUCTION|CONFIG
	  Cannot find config mini inst specific data
	  Despooler failed to execute the instruction, error code = c0000001
	
	The secondary site never upgrades, it simply goes into an Emergency Restart after
	48 hours.
	
	WORKAROUND
	==========
	
	To work around this problem, force an upgrade of the secondary site from its
	parent site using the PREINST Command:
	
	     PREINST /UPGRADE:SecondarySiteCode
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbHMan kbSCMan smssetup smshierman smssiteconfigman 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
