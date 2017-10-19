---
layout: page
title: "Q141192: Mandatory After Date Not Updated For Repeated Jobs"
permalink: /kb/141/Q141192/
---

## Q141192: Mandatory After Date Not Updated For Repeated Jobs

	Article: Q141192
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Mandatory After date of a repeated job is not updated. The Mandatory After
	date of a new job is the same as the Mandatory After date of the original job.
	Thefore, the Mandatory date of the new job has expired before it is offered.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	
	Additional query words: prodsms offer
	
	======================================================================
	Keywords          : kbnetwork kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
