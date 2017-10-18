---
layout: page
title: "Q178304: XADM: Directory Takes a Long Time to Start with EventID 1107"
permalink: kb/178/Q178304/
---

## Q178304: XADM: Directory Takes a Long Time to Start with EventID 1107

	Article: Q178304
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	MORE INFORMATION
	================
	
	This case can be tracked in the application event log by monitoring for the
	following event IDs:
	
	  EventId=1107
	  This directory has been restored from backup. The directory replication
	  agent (DRA) is attempting to synchronize with all other directories.
	  Until this is complete, this directory will not accept updates.
	
	  EventId=1108
	  The directory replication agent (DRA) has finished synchronizing with
	  all other directories. This directory can now accept updates.
	
	After this synchronization is complete, the directory will be started and
	accessible from the Exchange Administrator program. If the Exchange directory
	was manually started, it will display the ticking clock for the service startup
	until both of the above event IDs appear. Additionally, Performance Monitor will
	show nominal disk activity.
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange Server directory is restored from backup, it may take
	a long time to start.
	
	CAUSE
	=====
	
	This is by product design. The directory must synchronize with the directories
	on all other Exchange Server computers within the same Exchange site. The amount
	of time required to synchronize this directory depends on network accessibility
	to the other Exchange Server computers and whether the Exchange directory
	service is running on the other Exchange Server computers.
	
	
	Additional query words: exfaqad
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
