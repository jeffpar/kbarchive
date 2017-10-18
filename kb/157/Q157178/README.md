---
layout: page
title: "Q157178: SMS: Hardware Inventory May Be Skipped"
permalink: kb/157/Q157178/
---

## Q157178: SMS: Hardware Inventory May Be Skipped

	Article: Q157178
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Software Scan Interval is set to something less than the Hardware Scan
	Interval, hardware inventory will never be performed. Every time software
	inventory is performed, both the LastSoftwareScan and LastHardwareScan times are
	updated, even when hardware inventory is not performed.
	
	CAUSE
	=====
	
	Software inventory depends on knowing what hard disk drives are present on the
	system. The hardware inventory normally provides this information. If it is not
	time to do a full hardware inventory, then only the hard disk drive's test
	portion of the hardware inventory is performed. However, because this section of
	the hardware inventory is performed, the LastHardwareScan time is updated.
	Because this time is updated every time software inventory is performed, enough
	time never elapses for the full hardware inventory to be done.
	
	WORKAROUND
	==========
	
	To work around this problem, set the HardwareScanInterval to the same or smaller
	interval as the SoftwareScanInterval; for example, perform hardware inventory as
	frequently as (or more frequently than) software inventory is performed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2. This problem was corrected in the latest Microsoft Systems
	Management Server version 1.2 U.S. Service Pack. For information on obtaining
	the service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodsms agent wfw win95 msdos win31 smsls
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	
	=============================================================================
	
