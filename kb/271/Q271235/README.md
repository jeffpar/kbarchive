---
layout: page
title: "Q271235: SMS: Mandatory Advertisement Runs Immediately After the Event"
permalink: /kb/271/Q271235/
---

## Q271235: SMS: Mandatory Advertisement Runs Immediately After the Event

{% raw %}

	Article: Q271235
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbdocerr kbsms200 kbsms200bug kbAdvertisement
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an advertisement and configure a scheduled time and an
	event-driven setting such as Logon in the Mandatory Assignments window, as
	described on page 421 of the Systems Management Server 2.0 Administrators Guide,
	the advertisement does not run at the mandatory scheduled time. Instead it runs
	as a mandatory advertisement the next time you log on after the time set in the
	Advertisement Start Time box.
	
	CAUSE
	=====
	
	This procedure is incorrectly documented in the Systems Management Server 2.0
	Administrators Guide.
	
	RESOLUTION
	==========
	
	To resolve this issue, set the Advertisement Start Time setting for the same
	time as the Scheduled Mandatory Time setting.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbdocerr kbsms200 kbsms200bug kbAdvertisement 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
