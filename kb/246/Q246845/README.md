---
layout: page
title: "Q246845: XADM: Event ID 202 Space Tree Issues in Exchange Server 5.5 SP3"
permalink: /kb/246/Q246845/
---

## Q246845: XADM: Event ID 202 Space Tree Issues in Exchange Server 5.5 SP3

	Article: Q246845
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you upgrade to Exchange Server version 5.5 Service Pack 3, the following
	event may be logged in the application event log:
	
	  Event ID: 202
	  Source: ESE97
	  Category: Space management
	  Description: MSExchangeIS (248) Database 'd:\exchsrvr\MDBDATA\PRIV.EDB': The
	  database engine has built an in-memory cache of 9500 space tree nodes on a
	  B-Tree (Objid: 48528, PgnoRoot: 1756258) to optimize space requests for that
	  B-Tree. The space cache was built in 828 milliseconds.
	
	MORE INFORMATION
	================
	
	This is an informational event that you need only when you troubleshoot space
	tree issues, and you can safely ignore it.
	
	Additional query words: JET
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
