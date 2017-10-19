---
layout: page
title: "Q161939: XFOR: Outbound Messages Not Delivered by IMC Until Queue Refresh"
permalink: /kb/161/Q161939/
---

## Q161939: XFOR: Outbound Messages Not Delivered by IMC Until Queue Refresh

	Article: Q161939
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages are not transferred outbound by the Internet Mail Connector (IMC) until
	you refresh the IMC queue. The messages do not appear in the outbound queue, but
	refreshing the queue appears to start the transfer of messages.
	
	CAUSE
	=====
	
	The problem is caused by the assignment of more than five IP addresses to the
	network adapter card.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
