---
layout: page
title: "Q154861: Scheduler Start of a Job Takes One Second Per Computer"
permalink: /kb/154/Q154861/
---

## Q154861: Scheduler Start of a Job Takes One Second Per Computer

	Article: Q154861
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a job is sent to a large number of computers (for example: 50,000 computers)
	in a site, the starting of the job by the scheduler can take up to 14 hours,
	regardless of when the job is to start.
	
	CAUSE
	=====
	
	Scheduler is single-threaded and adds computers one at a time, which takes about
	1 second per computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbusage kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
