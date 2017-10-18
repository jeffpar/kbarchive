---
layout: page
title: "Q312443: IMS Stops &amp; 3013 - The Outbound Message Queue Is Corrupt ErrMsg"
permalink: kb/312/Q312443/
---

## Q312443: IMS Stops &amp; 3013 - The Outbound Message Queue Is Corrupt ErrMsg

	Article: Q312443
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 11-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that runs Exchange Server 5.5, the Internet Mail Service may stop,
	and the following information may be recorded in the Application log:
	
	  3013 - The outbound message queue is corrupt. Both inbound and outbound
	  queues will be destroyed and rebuilt. This may cause some duplicate outbound
	  deliveries.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the Queue.dat file in the Exchsrvr\Imcdata folder
	to Queue.old, delete the Queue.dat file, and then manually restart the Internet
	Mail Service.
	
	MORE INFORMATION
	================
	
	If the Internet Mail Service finishes delivering outbound messages before it
	stops but has not deleted the messages from the Exchsrvr\Imcdata\Out folder, the
	messages will be delivered a second time after the Internet Mail Service
	restarts.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
