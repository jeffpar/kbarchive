---
layout: page
title: "Q152867: XADM: Backfilling Public Folders takes a Long Time"
permalink: /kb/152/Q152867/
---

## Q152867: XADM: Backfilling Public Folders takes a Long Time

	Article: Q152867
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Exchange Server 4.0, it is possible that all public folder
	replication messages will be sent but not processed. This will not result in
	permanent data loss because the backfill entries will eventually timeout and the
	hierarchy backfill process will continue. It does mean that the process of
	creating the hierarchy on newly added or wiped-clean Microsoft Exchange Servers
	will be much more time consuming than it should be.
	
	MORE INFORMATION
	================
	
	You will notice this when you add or delete servers. Replication will be more
	time consuming that it should be. You may also notice the delay when no
	Microsoft Exchange Server responds.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
