---
layout: page
title: "Q163297: XCON: MTA Taking a Long Time to Start"
permalink: /kb/163/Q163297/
---

## Q163297: XCON: MTA Taking a Long Time to Start

{% raw %}

	Article: Q163297
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The message transfer agent (MTA) may take a long time to start if there is a
	large number of DB*.DAT files in the MTADATA directory when the service is
	restarted. This is normal and expected behavior but is often misinterpreted as a
	problem. Administrators often mistakenly believe that the MTA is not responding
	and they complicate the issue by stopping the MTA service.
	
	MORE INFORMATION
	================
	
	When the MTA starts, up it has to rebuild the queues in memory. If there are a
	lot of DAT files, this can take quite some time.
	
	One quick check you can perform is to set the MTA's logging on Field Engineering
	to Maximum and then monitor the 2166 and 2167 events for the number of objects
	in each of the queues. There is no hard and fast rule, but if you have 100,000
	DAT files at startup, it is reasonable to expect the queues to grow to at least
	that total size before assuming the MTA is not responding.
	
	  Event ID: 2166
	  Source:   MSExchangeMTA
	  Category: Field Engineering
	  Description:
	  A call from %1 process %2 was completed, adding object %3 to queue %4.
	  Queue %4 now contains %5 items. [%6 %7 %8 %9] (6)
	
	  Event ID: 2167
	  Source:   MSExchangeMTA
	  Category: Field Engineering
	  Description:
	  A call from %1 process %2 was completed, removing object %3 from queue
	  %4. Queue %4 now contains %5 items. [%6 %7 %8 %9] (6)
	
	Additional query words: hung kill locked server down
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
