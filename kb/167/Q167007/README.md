---
layout: page
title: "Q167007: SMS: Distribution Status Failure with Machine Groups"
permalink: /kb/167/Q167007/
---

## Q167007: SMS: Distribution Status Failure with Machine Groups

{% raw %}

	Article: Q167007
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbDespooler kbPCM smsdespooler smspcm
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you create a Run Command on Workstation job at the central site that has a
	distribute phase sending the package to a machine group of X distribution
	servers at each of Y child sites, the remaining sites, which do not have
	distribution servers, will show errors.
	
	The error is in the job status window for the site, which has a working status of
	Failed. When you drill down into the job details, the line with "site
	instruction arrival" shows a status of Complete, but the second line with
	Systems Management Server distribution server processing shows a status of
	Failed.
	
	Systems Management Server should not attempt to do any distribution server
	processing to sites that do not have a distribution server in the distribute
	phase.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDespooler kbPCM smsdespooler smspcm 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
