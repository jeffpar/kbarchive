---
layout: page
title: "Q191338: SMS: Job Cancellation Is Not Immediate"
permalink: /kb/191/Q191338/
---

## Q191338: SMS: Job Cancellation Is Not Immediate

{% raw %}

	Article: Q191338
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbDatabase kbsmsAdmin smsadmin smsdatabase
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Systems Management Server Administrator program to cancel a
	job, the job cancellation is not immediate. Any task that is currently being
	processed will continue to run until it is completed. The job will not queue up
	any new tasks, and the current phase will be canceled after the current task is
	completed.
	
	MORE INFORMATION
	================
	
	This is by design, and should not affect the processing of Systems Management
	Server. After a job is canceled, it is recommended that the job not be deleted
	for at least 48 hours, to allow the cancellation and/or any currently running
	tasks to complete.
	
	Additional query words: prodsms cancelling canceling cancelled cancelation smsadmin administrator
	
	======================================================================
	Keywords          : kbDatabase kbsmsAdmin smsadmin smsdatabase 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbinfo
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
