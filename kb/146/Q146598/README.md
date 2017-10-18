---
layout: page
title: "Q146598: XFOR: Messages Are Stuck in the IMC's OUT Queue"
permalink: kb/146/Q146598/
---

## Q146598: XFOR: Messages Are Stuck in the IMC's OUT Queue

	Article: Q146598
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 16-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet Mail Connector (IMC) service stops running and
	messages are stuck in the IMC OUT queue.
	
	MORE INFORMATION
	================
	
	Messages that have two attachments with the same name, when the attachment names
	are either "" or beginning with '.', can cause the IMC to crash. This kills the
	thread and causes the message to get stuck in the IMC OUT queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
