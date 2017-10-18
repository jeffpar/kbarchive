---
layout: page
title: "Q235867: XFOR: GroupWise Meeting Request Causes Notes Connector to Stop"
permalink: kb/235/Q235867/
---

## Q235867: XFOR: GroupWise Meeting Request Causes Notes Connector to Stop

	Article: Q235867
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp2
	Last Modified: 24-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Messages from Exchange Server to Lotus Notes back up in the Outbound to Notes
	queue. When you inspect the Queues tab of the Microsoft Exchange Notes
	Connector, you find the first message is a Novell GroupWise meeting request.
	
	CAUSE
	=====
	
	The Lsmexnts.exe process generates an access violation when attempting to
	process this message.
	
	RESOLUTION
	==========
	
	Manually remove this meeting request message from the Outbound to Notes queue on
	the Queues tab of the Lotus Notes Connector Properties page.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 5.5
	Service Pack 2.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP2
	Version           : winnt:5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
