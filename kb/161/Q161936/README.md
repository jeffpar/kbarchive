---
layout: page
title: "Q161936: XCON: Wrong Mapping of Msg Priority Between MSMAIL and Exchange"
permalink: kb/161/Q161936/
---

## Q161936: XCON: Wrong Mapping of Msg Priority Between MSMAIL and Exchange

	Article: Q161936
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
	
	Messages sent with normal priority from Microsoft Mail Windows clients go
	through the low priority queue in the Microsoft Exchange message transfer agent
	(MTA).
	
	This problem does not affect the priority displayed in the recipient mailbox but
	only affects the order in which the MTA handles the three queues, high, normal,
	and low.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0 This problem was corrected in the latest Microsoft Exchange 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	Note that high priority messages sent by Microsoft Mail users go through the
	normal priority queue in the Microsoft Exchange MTA if the Microsoft Mail users
	haven't been granted the right "Urgent" by Microsoft Mail administrators.
	
	With the right "Urgent," these messages go through the high priority queue in
	Exchange MTA.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
