---
layout: page
title: "Q153533: Scheduler Cannot Cancel Job"
permalink: /kb/153/Q153533/
---

## Q153533: Scheduler Cannot Cancel Job

	Article: Q153533
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
	
	
	Problems can arise when you create a repeating job. Should any problem keep the
	first instance of the job from going active before it is time to cancel that
	first job and activate the new or second (repeating) job, Scheduler will
	continue to attempt to cancel that first job, which is still in pending status.
	The second job cannot go active.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
