---
layout: page
title: "Q174238: XCON: Message Size Grows When Rerouting on Same Server"
permalink: kb/174/Q174238/
---

## Q174238: XCON: Message Size Grows When Rerouting on Same Server

	Article: Q174238
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If there are two or more possible routes between two Microsoft Exchange Server
	computers, and one of those servers stops running, messages on the server that
	is still running will cycle through all the possible routes until the message
	hop count is exceeded. Before the hop count is exceeded, the server with the
	rerouting message may run out of disk space. If the server runs out of disk
	space, the file will reside on the drive and the Exchange Server services will
	stop because of the insufficient disk space. When disk space is freed up,
	messages continue with route selection (and hops).
	
	CAUSE
	=====
	
	In Exchange Server 4.0 and 5.0, when a message passes through each turn at a
	connector, the P1 header grows in size to reflect the turn. Over time, the P1
	header can become quite large because the hop count for each connector is 512.
	Therefore, if there are two connectors between the servers, the P1 header
	information will grow in size 1,024 times.
	
	The additional header information contained in the P1 header is not needed for
	re-routes on a single server.
	
	NOTE: Microsoft Exchange Server 5.5 does not add the additional header
	information and the message size does not change.
	
	NOTE: Reroutes that span separate Exchange Server computers will cause the P1
	header to grow because this header information is required when hopping between
	separate message transfer agents (MTAs).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0.<A0>This problem was corrected in Microsoft Exchange Server
	5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
