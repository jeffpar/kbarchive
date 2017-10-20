---
layout: page
title: "Q215035: SMS: Various Components Report Errors on Initial Site Startup"
permalink: /kb/215/Q215035/
---

## Q215035: SMS: Various Components Report Errors on Initial Site Startup

{% raw %}

	Article: Q215035
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 15-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Shortly after the installation of a Microsoft Systems Management Server (SMS)
	2.0 site, SMS_SQL_MONITOR status messages (and those of other components) may
	indicate errors when the component attempts to start.
	
	CAUSE
	=====
	
	This behavior can occur when a site server is shut down after setup has
	completed but before all of the SMS_EXEC threads have finished initializing and
	setting up. As a result, one or multiple components may report errors.
	
	WORKAROUND
	==========
	
	No workaround is necessary because SMS should start all services correctly at
	the next startup or when the service is next requested.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
