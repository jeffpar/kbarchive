---
layout: page
title: "Q185901: SMS: Jobs Will Not Go Active, Invalid JobIDs generated."
permalink: /kb/185/Q185901/
---

## Q185901: SMS: Jobs Will Not Go Active, Invalid JobIDs generated.

	Article: Q185901
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbScheduler smsdatabase smsscheduler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a large number of jobs have been processed at a Systems Manager Server site,
	new jobs may fail to go active. The following symptoms may be occur:
	
	- Software distribution and normal site maintenance tasks cease.
	
	- All pending jobs in the Systems Management Server Administrator Jobs window
	  remain with a status of Pending. They never go Active.
	
	- The following error may appear in the Systems Management Server Scheduler log
	  file (<drive>:\Sms\Logs\Sched.log, where <drive> is the logical
	  disk that Systems Management Server is installed on):
	
	  Could not transfer job from secondary to primary source
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbDatabase kbScheduler smsdatabase smsscheduler 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
