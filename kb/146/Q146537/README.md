---
layout: page
title: "Q146537: XADM: DSA Queues: Too Many Initial Synchronizes at Startup"
permalink: /kb/146/Q146537/
---

## Q146537: XADM: DSA Queues: Too Many Initial Synchronizes at Startup

{% raw %}

	Article: Q146537
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the startup of Microsoft Exchange Server, the Exchange server sends out
	synchronization requests to all known DSAs. Duplicate synchronizations are being
	queued. In a large Exchange organization, this can be seen in Performance
	Monitor with an extremely high number of "pending syncs" at initialization time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	You should no longer see runaway "pending syncs" counts at initialization time.
	The maximum value observed should be 3 times the number of servers in the site,
	plus 2 times the number of sites in the enterprise. That is:
	
	  3 x (# of servers in site) + 2 x (# of sites in enterprise)
	
	
	
	Additional query words: synch perfmon
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
