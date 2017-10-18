---
layout: page
title: "Q246302: XCON: MTA Stops When Receiving Message from Foreign MTA"
permalink: kb/246/Q246302/
---

## Q246302: XCON: MTA Stops When Receiving Message from Foreign MTA

	Article: Q246302
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a foreign message transfer agent (MTA) sends a large message using a large
	initial checkpoint followed by much smaller checkpoints, the MTA on the Exchange
	Server computer may stop unexpectedly and the following event may appear in the
	event log:
	
	  Event ID: 9405
	  Description: An unexpected error has occurred which may cause the MTA to
	  terminate.
	
	This issue is known to occur with a Software and Systems Engineering, Ltd. (SSE)
	X.400-MIL MTA running on a Siemens RM600 computer, but it may also occur with
	any other MTA that behaves in this same manner.
	
	CAUSE
	=====
	
	The Exchange Server MTA uses the initial checkpoint size to determine how to
	decode the data it receives from the foreign MTA. If the initial checkpoint is
	large, and then subsequent checkpoints are considerably smaller, this may
	prevent the Exchange Server MTA from properly decoding the data it receives.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: crash hang
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
