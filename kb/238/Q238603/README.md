---
layout: page
title: "Q238603: SMS: RRAS May Not Work with Event 7023 After Installing SMS 2.0"
permalink: /kb/238/Q238603/
---

## Q238603: SMS: RRAS May Not Work with Event 7023 After Installing SMS 2.0

{% raw %}

	Article: Q238603
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsms200 kbsms200bug
	Last Modified: 14-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Systems Management Server (SMS) 2.0 on a computer that is
	already running Routing and Remote Access Service (RRAS), RRAS may not work and
	Event ID 7023 may be displayed the next time you start the service.
	
	CAUSE
	=====
	
	This behavior occurs because SMS starts Remote Access Service (RAS) during
	network enumeration. Either RAS or RRAS can be running, but both services cannot
	run at the same time. If SMS starts RAS before RRAS is started, RRAS is not
	initialized.
	
	WORKAROUND
	==========
	
	To work around this problem, disable RAS so that RRAS starts successfully:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Locate RAS, and then click Startup.
	
	3. Disable the startup options.
	
	4. If the service is currently running, stop the service and restart the
	  computer to make sure the configuration changes are successful.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with SMS 2.0.
	
	
	Additional query words: prodsms fail
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
