---
layout: page
title: "Q166584: XFOR: IMS Does Not Immediately Reject Inbound Connections"
permalink: kb/166/Q166584/
---

## Q166584: XFOR: IMS Does Not Immediately Reject Inbound Connections

	Article: Q166584
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet Mail Service (IMS) does not immediately reject incoming connections
	after the maximum inbound connection limit has been reached.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When the maximum inbound connection limit has been reached, the IMS should
	immediately reject any new inbound connections. Instead, the IMS queues the
	connection for reverse DNS resolution. This can result in a large queue of
	connections to be resolved.
	
	The maximum inbound connection limit is 30 by default. To set the maximum inbound
	connection limit in the IMS:
	
	- Click Connections. On the Advanced tab, type the maximum inbound connection
	  limit.
	
	
	Additional query words: IMS DNS inbound limit SP1
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	
