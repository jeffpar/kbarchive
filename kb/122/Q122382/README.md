---
layout: page
title: "Q122382: Scheduler Overwrites Package Property Information"
permalink: kb/122/Q122382/
---

## Q122382: Scheduler Overwrites Package Property Information

	Article: Q122382
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbDatabase kbScheduler smsdatabase smsscheduler
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After Scheduler processes a job on a package, the package information is written
	back into the original database overwriting any changes that were made to the
	package properties by the Administrator.
	
	For example, when the Scheduler reads and compresses a package, it may take a
	long period of time, depending on the size of the package. During the same time,
	the Administrator may be changing the properties of the package. This
	information is overwritten when Scheduler completes the process.
	
	CAUSE
	=====
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words: sms prodsms
	
	======================================================================
	Keywords          : kbnetwork kbDatabase kbScheduler smsdatabase smsscheduler 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
