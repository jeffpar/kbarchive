---
layout: page
title: "Q199426: SMS: Inventory Shows Incorrect Memory Amount for OS/2 Clients"
permalink: /kb/199/Q199426/
---

## Q199426: SMS: Inventory Shows Incorrect Memory Amount for OS/2 Clients

	Article: Q199426
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbClient kbsms120 kbsms120bug kbInventory kbsmsAdmin
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When inventory is taken for OS/2 clients, the values for Base, Extended, and
	Total Physical memory may report an incorrect value or a value of <null>.
	Manually running the OS/2 utility Os2mem32.exe also reports the amount of memory
	incorrectly.
	
	CAUSE
	=====
	
	This problem occurs because the computer system's BIOS does not support the OS/2
	compatibility mode for memory usage.
	
	WORKAROUND
	==========
	
	To correctly report memory inventory you must upgrade the system BIOS to a
	version that supports OS/2 compatibility mode.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbClient kbsms120 kbsms120bug kbInventory kbsmsAdmin 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
