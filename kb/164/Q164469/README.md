---
layout: page
title: "Q164469: XFOR: Scheduled X.400 Connector Doesn't Initiate Connection"
permalink: /kb/164/Q164469/
---

## Q164469: XFOR: Scheduled X.400 Connector Doesn't Initiate Connection

	Article: Q164469
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up a Microsoft Exchange Server X.400 connector with a scheduled
	connection every 15 minutes, and the other site of this connector is Remote
	Initiated, there is no association initiated for this connector when the
	scheduled time is due, if there is no message queued up at the scheduled site of
	this 400 connector. Because the other site is Remote Initiated, even if there is
	a message on this site, the message cannot be delivered.
	
	WORKAROUND
	==========
	
	To work around this problem, change the Remote Initiated site to Selected Times.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
