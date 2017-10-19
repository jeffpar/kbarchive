---
layout: page
title: "Q146077: XADM: Deleted Exchange Server Appears in PerfMon"
permalink: /kb/146/Q146077/
---

## Q146077: XADM: Deleted Exchange Server Appears in PerfMon

	Article: Q146077
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange Server in a Site is deleted from the Microsoft
	Exchange Directory, it might still appear as an instance in the MSExchangeMTA
	connections object in the Windows NT Performance Monitor (PerfMon).
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server adds PerfMon counters to help measure performance,
	throughput, and other mail transfer related activity. For more information about
	these entries, please consult the Microsoft Exchange Administrator's guide. When
	a Microsoft Exchange Server is deleted from a Site through the Microsoft
	Exchange Administrator program, the PerfMon entries are not immediately deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
