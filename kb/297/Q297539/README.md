---
layout: page
title: "Q297539: XCON: MTA Queue for Exchange Server Computer Not Displayed"
permalink: kb/297/Q297539/
---

## Q297539: XCON: MTA Queue for Exchange Server Computer Not Displayed

	Article: Q297539
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open the the properties of the Message Transfer Agent (MTA), or click
	the Queues tab, the MTA queue for an Exchange Server computer in the same site
	may not be displayed.
	
	CAUSE
	=====
	
	This issue can occur if the missing queue to the remote Exchange Server computer
	was left idle for a long period of time. In this case, the Exchange Server
	computer's MTA does not display the queue.
	
	RESOLUTION
	==========
	
	To resolve this issue, send a message to a remote mailbox. When you do so, the
	MTA queue becomes active again.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For an example of this behavior, imagine a scenario where Server A and Server B
	are in the same Exchange Server site. If there is no mail flow between Server A
	and Server B, the MTA queue becomes idle. If the queue is idle for a long period
	of time, the MTA on Server A or Server B does not display the queue. Eventually,
	both MTAs do not display the queue.
	
	For the queue to be displayed, the queue has to be active with message flow.
	Because both Exchange Server computers are in the same site, there is constant
	directory replication traffic. The Exchange Server directory communicates
	directly to another Exchange Server directory when the servers are in the same
	Exchange Server site. Directory replication messages do not pass over MTA
	queues.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
