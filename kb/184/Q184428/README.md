---
layout: page
title: "Q184428: XADM: NDRs When Sending Mail To User On Moved Server"
permalink: /kb/184/Q184428/
---

## Q184428: XADM: NDRs When Sending Mail To User On Moved Server

	Article: Q184428
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55sp1 exc55sp2
	Last Modified: 25-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After moving a server using the Move Server Wizard (Movesrvr), messages sent
	from a user in the original site to a user on the moved server may result in a
	non-delivery report (NDR).
	
	CAUSE
	=====
	
	An NDR is generated because directory replication has not yet completed.
	
	WORKAROUND
	==========
	
	Make sure that directory replication is working between the two sites and allow
	time for replication to complete.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 exc55sp2 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : winnt:5.5 SP1,5.5 SP2
	Issue type        : kbprb
	
	=============================================================================
	
