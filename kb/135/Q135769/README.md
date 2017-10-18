---
layout: page
title: "Q135769: SMS: Error 313 SCHEDULER Reports Out of Sync on Slow Link"
permalink: kb/135/Q135769/
---

## Q135769: SMS: Error 313 SCHEDULER Reports Out of Sync on Slow Link

	Article: Q135769
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you use System Management Server, Scheduler may incorrectly generate a pair
	of event 313 messages when you make changes to site properties of a site that is
	located over slow link (SNA/RAS). The changes are processed successfully on the
	second attempt.
	
	CAUSE
	=====
	
	System Management Server is designed to recover if a process fails. These errors
	are benign and will self correct. However, the pair of Scheduler events may
	appear in the event log each time property changes are made and saved for
	execution.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	
	=============================================================================
	
