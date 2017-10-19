---
layout: page
title: "Q189723: SMS: Audit Fails on Win95 or Win98 Clients with FAT32 Partitions"
permalink: /kb/189/Q189723/
---

## Q189723: SMS: Audit Fails on Win95 or Win98 Clients with FAT32 Partitions

	Article: Q189723
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbAudit smsaudit
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run an audit (Audit16.exe) on a client computer running
	Windows 95 or Windows 98 that has a FAT32 partition greater than two gigabytes
	(2 GB), you may see the following error:
	
	  Runtime error m6101:math floating point error invalid.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Systems Management
	Server version 1.2.
	
	
	A supported fix is now available, but has not been fully regression- tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words: run-time run time prodsms
	
	======================================================================
	Keywords          : kbAudit smsaudit 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
