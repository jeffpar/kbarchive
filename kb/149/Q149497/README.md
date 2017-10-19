---
layout: page
title: "Q149497: SMS Does Not Correctly Identify New Pentium Processor Speeds"
permalink: /kb/149/Q149497/
---

## Q149497: SMS Does Not Correctly Identify New Pentium Processor Speeds

	Article: Q149497
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbother kbInventory kbsmsAdmin smsadmin smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On DOS and 16-bit Windows systems, Systems Management Server (SMS) will report
	the newer Pentium processors that run faster than 66mhz as 66mhz processors.
	Windows NT systems will report their inventory based on the current registry
	configuration and are not affected by this problem.
	
	CAUSE
	=====
	
	The processor normalization code that determines the processor speed does not
	have the ability to identify the newer processors. These processors were
	released after the SMS inventory code was written.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. This problem has been corrected in Systems Management Server
	version 1.2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbother kbInventory kbsmsAdmin smsadmin smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	
	=============================================================================
	
