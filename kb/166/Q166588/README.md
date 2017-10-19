---
layout: page
title: "Q166588: XCON: MTA Work Queue Backlog When Restrictions Used with DL"
permalink: /kb/166/Q166588/
---

## Q166588: XCON: MTA Work Queue Backlog When Restrictions Used with DL

	Article: Q166588
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	
	
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A backlog in the Microsoft Exchange Server Message Transfer Agent (MTA) may
	occur during delivery of specific types of messages. To observe this backlog,
	use the Windows NT Performance Monitor to view the MSExchangeMTA counter for
	Work Queue Length. This counter may exceed 3,000 and remain there for a long
	period of time. This backlog is most likely to occur when there are delivery
	restrictions and distribution lists associated with the message.
	
	CAUSE
	=====
	
	Large distribution lists and the existence of delivery restrictions can cause
	the MTA to enter into CPU and I/O intensive computations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: ITG
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
