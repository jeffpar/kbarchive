---
layout: page
title: "Q153087: Scheduler Takes a Long Time To Activate Jobs"
permalink: kb/153/Q153087/
---

## Q153087: Scheduler Takes a Long Time To Activate Jobs

	Article: Q153087
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbScheduler kbsmsAdmin smsadmin smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When activating a Run Command On Workstation job that has no Run phase (only a
	Send phase and a Distribute phase) the scheduler updates the JobDetails table
	one row at a time for each computer in the job target.
	
	For large sites this causes long delays in the job activation. For example, on a
	site with 3,000 clients the scheduler can take up to 30 minutes to activate a
	job sent to *|*|*.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. This problem has been corrected in Systems Management
	Server version 1.2.
	
	
	Additional query words: prodsms sms1.2rel machineid nextmachineid smsdata
	
	======================================================================
	Keywords          : kbnetwork kbScheduler kbsmsAdmin smsadmin smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
