---
layout: page
title: "Q173559: XADM: Active User Count doesn't Contain Anonymous User Count"
permalink: /kb/173/Q173559/
---

## Q173559: XADM: Active User Count doesn't Contain Anonymous User Count

	Article: Q173559
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you display the following Windows NT Performance Monitor (PerfMon) counter,
	it will not include the number of Anonymous Users connected to the Microsoft
	Exchange Information Store (IS):
	
	  Object: MSExchangeIS
	  Counter: Active User Count
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	The number of Anonymous Users connected to the IS can be monitored by its own
	PerfMon counter. The following counter will give you this information:
	
	  Object: MSExchangeIS
	  Counter: Active Anonymous User Count.
	
	The Active User Count is the number of users that have displayed activity in the
	past 10 minutes. By default, if an Anonymous user is idle for 10 minutes, they
	will be disconnected from the IS. This value is configurable. To get the total
	number of Active Users connected to the IS, you must add the totals of these 2
	counters together.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb kbinfo
	
	=============================================================================
	
