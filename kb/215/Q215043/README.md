---
layout: page
title: "Q215043: SMS: Inventory Reports Incorrect Clock Speed on 486 Cyrix Chips"
permalink: /kb/215/Q215043/
---

## Q215043: SMS: Inventory Reports Incorrect Clock Speed on 486 Cyrix Chips

	Article: Q215043
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms120 kbsms120bug
	Last Modified: 06-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) Hardware Inventory may report an incorrect clock
	speed on older 486 Cyrix chips. The clock speed may be reported with an inflated
	value.
	
	CAUSE
	=====
	
	The hardware Inventory WMI provider is unable to correctly assess the clock
	speed on these chips.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms120 kbsms120bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
