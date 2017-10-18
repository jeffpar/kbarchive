---
layout: page
title: "Q137998: XFOR: Messages to Mac Users Not Processed in FIFO Order"
permalink: kb/137/Q137998/
---

## Q137998: XFOR: Messages to Mac Users Not Processed in FIFO Order

	Article: Q137998
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages sent from a Microsoft Exchange Server to a Microsoft Mail for AppleTalk
	Networks server via the MS Mail Connector (AppleTalk) MTA are not always
	processed in first-in, first-out (FIFO) order.
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	If gateway traffic is high and the Macintosh blocking factor (the number of
	messages processed by the Macintosh component each cycle) is set to a low value,
	the Exchange Server can backfill the gateway queue while the Macintosh gateway
	component processes the first group of incoming messages. Messages then placed
	in the queue by the Exchange Server can be processed ahead of messages handled
	during the previous cycle. This behavior can continue until the backfilling
	ceases.
	
	Administrators can reduce this behavior by running the Macintosh Mail client
	against the gateway Macintosh server as Network Manager and raise the blocking
	factor on Mail menu, by choosing Gateway, Configuration.
	
	
	Additional query words: mac message transfer agent
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
