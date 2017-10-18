---
layout: page
title: "Q160701: SMS: Inventory Does Not Detect Memory Beyond 16 MB"
permalink: kb/160/Q160701/
---

## Q160701: SMS: Inventory Does Not Detect Memory Beyond 16 MB

	Article: Q160701
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,1.2
	Operating System(s): 
	Keyword(s): kb3rdparty kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On computers running the OS/2 2.x, 3.x, or 4.x operating system, memory over 16
	MB will not be detected or reported by the Systems Management Server Inventory
	Agent.
	
	CAUSE
	=====
	
	To determine the amount of available memory, Systems Management Server makes a
	16-bit API call. This call does not return the correct amount of memory on a
	32-bit version of OS/2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0, 1.1, and 1.2. A supported fix is now available for version 1.2
	only, but it has not been fully regression-tested and should be applied only to
	systems experiencing this specific problem. Unless you are severely impacted by
	this specific problem, Microsoft recommends that you wait for the next Service
	Pack that contains this fix. Contact Microsoft Technical Support for more
	information.
	
	Additional query words: 1.00 1.10 1.20 prodsms
	
	======================================================================
	Keywords          : kb3rdparty kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS100 kbSMS110 kbSMS120
	Version           : winnt:1.0,1.1,1.2
	Issue type        : kbbug
	
	=============================================================================
	
