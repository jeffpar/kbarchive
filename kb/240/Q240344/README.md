---
layout: page
title: "Q240344: SMS: Clients Do Not Report Advertisement Status"
permalink: /kb/240/Q240344/
---

## Q240344: SMS: Clients Do Not Report Advertisement Status

{% raw %}

	Article: Q240344
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 17-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you create a new advertisement and verify that it has run on a targeted
	client, the advertisement status may not be updated with Received, Failures,
	Programs Started, Program Errors, or Program Success. All values stay at zero,
	regardless of the advertisements that are running.
	
	CAUSE
	=====
	
	This behavior can occur if Milestone client status messages have been disabled
	and clients are no longer generating the status messages required to update the
	Advertisement Status fields, or if Milestone server component status messages
	are not being reported into the SQL database.
	
	RESOLUTION
	==========
	
	To turn client status messages back on, navigate to Site Database, Site
	Code-Name, Site Settings, Component Configuration, and then Status Reporting
	(properties). Verify that the "Report All Milestones" option is enabled for
	Client Component Status Reporting.
	
	MORE INFORMATION
	================
	
	By default, the Report All Milestones and Report Details On Failure options for
	both Client Component Status Reporting and Server Component Status Reporting are
	enabled.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
