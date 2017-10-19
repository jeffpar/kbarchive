---
layout: page
title: "Q215467: SMS: Delays When Starting SMS Service Manager w/ Multiple Sites"
permalink: /kb/215/Q215467/
---

## Q215467: SMS: Delays When Starting SMS Service Manager w/ Multiple Sites

	Article: Q215467
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 03-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Service Manager from the Tools node in the Systems Management
	Server Administrator console at a parent site that has multiple primary child
	sites, the Service Manager may appear to stop responding (hang). If you do
	nothing and leave it alone for several minutes, it will fully populate.
	
	CAUSE
	=====
	
	Systems Management Server Service Manager is set to query all sites and their
	components during start up. If multiple child sites exist, including Systems
	Management Server version 1.2 sites, Service Manager is unable to quickly query
	the status. The problem is amplified when the child sites are located across
	slow links.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms smsstat sms200
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
