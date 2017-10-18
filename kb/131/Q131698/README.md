---
layout: page
title: "Q131698: Systems Management Server Executive Service Hangs"
permalink: kb/131/Q131698/
---

## Q131698: Systems Management Server Executive Service Hangs

	Article: Q131698
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory kbScheduler smsinv smsscheduler
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you have multiple parent-child relationships with primary sites, Systems
	Management Server may stop reporting inventory from the child sites to the
	central sites. Large amounts of jobs may be waiting in the Scheduler.
	
	CAUSE
	=====
	
	This problem occurs if you have large number of clients and helper servers. If
	you separate Systems Management Server and SQL Servers onto separate servers and
	move the Scheduler and Despooler services to the SQL Server server, the
	Executive service may lose which server controls which service.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	1. Restore the Scheduler and Despooler services back to the Systems Management
	  Server.
	
	2. Stop and re-start the services and inventory should start being reported.
	
	3. To move the services back to the SMS site server, from the SMS ADMIN UI:
	
	  a. Go to the site properties windows
	
	  b. Choose the Services button
	
	  c. Click on Proposed Properties
	
	  d. Change the server name of the services back to the SMS site server
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.0. This problem was corrected in Systems Management Server version
	1.1.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory kbScheduler smsinv smsscheduler 
	Technology        : kbSMSSearch kbSMS100
	Version           : winnt:1.0
	
	=============================================================================
	
