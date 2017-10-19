---
layout: page
title: "Q243402: XCON: Exchange Server MTA Event ID 9280"
permalink: /kb/243/Q243402/
---

## Q243402: XCON: Exchange Server MTA Event ID 9280

	Article: Q243402
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server bridgeheads configured with a large number of site connectors
	may experience occurrences of the following Event ID, and message backlogs are
	likely to result:
	
	  Event ID 9280
	  MSExchangeMTA
	  Warning
	  A resource limit has been reached when attempting to open an association. The
	  locality table is full.
	
	The following Event ID is likely to be seen in conjunction with the occurrences
	of Event ID 9280:
	
	  Event ID 57
	  MSExchangeMTA
	  Warning
	  The limit on the number of associations allowed to and from entity (X.500
	  Distinguished Name referring to a remote server) has been reached. The limit
	  is 9.
	
	MORE INFORMATION
	================
	
	Event ID 9280 indicates that the message transfer agent (MTA) has reached its
	limit for concurrent LAN-based MTA connections. Currently, this limit is
	approximately 240 concurrent associations for each MTA.
	
	Note that this limit relates only to bridgeheads which serve a large number of
	remote procedure call (RPC)-based connectors, such as site connector. X.400
	connections do not factor into this total concurrent association count for the
	240 limitation. For additional information about Event ID 57 from the Exchange
	Server MTA, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q194589 XCON: Event ID 57 from the Exchange Message Transfer Agent
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
