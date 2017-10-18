---
layout: page
title: "Q178925: XADM: Monitoring the Progress of Directory Replication"
permalink: kb/178/Q178925/
---

## Q178925: XADM: Monitoring the Progress of Directory Replication

	Article: Q178925
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can monitor the progress of directory replication between two servers using
	"Pending Replication Synchronizations" and "Remaining Replication Updates."
	These are MSExchangeDS counters in Performance Monitor.
	
	MORE INFORMATION
	================
	
	Sometimes in large organizations, it is useful to have an idea of the progress
	that directory replication is making when the entire directory is being
	replicated, such as in the case of a new server installation. To monitor the
	progress of replication using Performance Monitor, select MSExchangeDS as the
	Object and "Pending Replication Synchronizations" and "Remaining Replication
	Updates" as the Counters.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
