---
layout: page
title: "Q163292: XCON: WEBTECH: MTA Events 2219; 2206; and 2207 (MTACHECK)"
permalink: /kb/163/Q163292/
---

## Q163292: XCON: WEBTECH: MTA Events 2219; 2206; and 2207 (MTACHECK)

	Article: Q163292
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The application event log contains several warning events from MSExchangeMTA
	Field Engineering beginning with a 2219 event, followed by several 2206 events,
	and eventually ending with a 2207 event.
	
	MORE INFORMATION
	================
	
	These events simply indicate that the message transfer agent (MTA) is running an
	automatic MTACHECK because the MTA determined that it did not shut down cleanly
	the last time it stopped. The MTA will automatically log the results to the
	\Exchsrvr\Mtadata\Mtacheck.out\Mtacheck.log file.
	
	The automatic MTACHECK will delay MTA startup.
	
	
	  Event ID: 2219
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Description:
	  The MTA is running recovery on the internal message database because the
	  MTA was not shut down cleanly. This operation may take some time. Status
	  updates will be written to the Windows NT Event Log. [%1 %2 %3 %4] (14)
	
	  Event ID: 2206
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Description:
	  The MTA database recovery operation is now checking queue: %1, the filename
	  of this queue is: %2. [%3 %4 %5 %6] (14)
	
	  Event ID: 2207
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Description:
	  The MTA database recovery operation has completed successfully. Recovery
	  details can be found in the file: %1. [%2 %3 %4 %5] (14)
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
