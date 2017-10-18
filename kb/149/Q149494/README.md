---
layout: page
title: "Q149494: SMS Inventory Has a Limit of 16 Environment Variables"
permalink: kb/149/Q149494/
---

## Q149494: SMS Inventory Has a Limit of 16 Environment Variables

	Article: Q149494
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.1
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinv
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a system has more than 16 environment variables, only the first 16 are
	reported by the SMS inventory agent.
	
	CAUSE
	=====
	
	The SMS 1.0 and 1.1 inventory agent was designed to identify and collect only
	the first 16 environment variables. Any additional environment variables are
	ignored.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.1. It has been fixed in Systems Management Server version 1.2.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv 
	Technology        : kbSMSSearch kbSMS110
	Version           : winnt:1.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
