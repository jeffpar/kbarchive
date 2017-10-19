---
layout: page
title: "Q181042: SMS: DBG Entries in Sched.log File Recorded by Scheduler"
permalink: /kb/181/Q181042/
---

## Q181042: SMS: DBG Entries in Sched.log File Recorded by Scheduler

	Article: Q181042
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbScheduler smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Scheduler records some "DBG" entries, as in the following example:
	
	  DBG>> Send request about to write bad data. Component SMS_SCHEDULER
	
	If you use Dumpsend.exe to check the involved send request, you can see that the
	send request has been corrupted. The destination site ID and the job ID are
	blank.
	
	CAUSE
	=====
	
	A desynchronization between the SENDER and the SCHEDULER causes the SENDER to
	update a deleted instruction file. An incomplete (corrupted) instruction file is
	created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. This problem has been corrected in the latest U.S.
	service pack for Systems Management Server version 1.2. For information on
	obtaining the service pack, query on the following word in the Microsoft
	Knowledge Base (without the spaces):
	
	  " SERVPACK" (without the quotation marks)
	
	WORKAROUND
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbScheduler smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
