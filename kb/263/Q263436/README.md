---
layout: page
title: "Q263436: Offer Summarizer Needs a Large Amount of Time to Replicate"
permalink: /kb/263/Q263436/
---

## Q263436: Offer Summarizer Needs a Large Amount of Time to Replicate

	Article: Q263436
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbtool kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a new central site to an existing large site hierarchy, Offer
	Summarizer tries to replicate all offer status data to the parent site on all
	primary sites that are directly beneath the new site. This process may take a
	long time to complete.
	
	This is a normal process where eventually, the Offer Status Summarizer is able to
	produce a .sum file and all of the status messages are replicated to the new
	parent site. However, the Systems Management Server (SMS) Executive service may
	stop due to a low memory condition during this process, and this is more likely
	to occur when the amount of rows in the Offer Status tables is very large, for
	example, one million status messages.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbtool kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
