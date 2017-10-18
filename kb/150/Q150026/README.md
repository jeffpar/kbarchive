---
layout: page
title: "Q150026: Job Status Remains &quot;Retrying&quot; When No Retrying Clients"
permalink: kb/150/Q150026/
---

## Q150026: Job Status Remains &quot;Retrying&quot; When No Retrying Clients

	Article: Q150026
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbScheduler kbsmsAdmin smsadmin smsconfig smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If there are clients with a status of Retrying, then Overall Job status and
	Working status will be set to Retrying. However, when the Retrying clients
	complete, the Overall Job status and Working status will remain Retrying if
	there are other clients with a status of None.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1 and 1.2. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	1. Send a run command on a workstation job to a set of computers.
	
	2. Some computers install correctly; their status is reported as Complete.
	
	3. One computer fails for some reason; for example, because there are no drive
	  letters available to be mapped. Its status is reported as Retrying.
	
	4. Working Status and Overall Status change from Active to Retrying, as
	  expected.
	
	5. Run the job again successfully on the client that failed before; status is
	  now reported as Complete.
	
	6. Now there are only clients with a status of Complete or None; there are no
	  Retrying clients. Clients with a status of None have not yet executed the
	  job. However, the Working Status and Overall Status remain Retrying.
	
	Additional query words: prodsms event job details
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbScheduler kbsmsAdmin smsadmin smsconfig smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbprb
	
	=============================================================================
	
