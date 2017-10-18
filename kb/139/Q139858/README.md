---
layout: page
title: "Q139858: XADM: Installing Server Into Large Existing Site Is Slow"
permalink: kb/139/Q139858/
---

## Q139858: XADM: Installing Server Into Large Existing Site Is Slow

	Article: Q139858
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Installation of a new Microsoft Exchange Server into an existing Site that
	already has a large number of Microsoft Exchange Servers installed (around
	50-80) can take a very long time to complete.
	
	CAUSE
	=====
	
	The synchronization process manages a number of replication tasks between
	different Microsoft Exchange Servers. In this case, the task queue is being
	mismanaged and forces multiple restarts of the synchronization process.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
