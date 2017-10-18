---
layout: page
title: "Q163287: XCON: MTA Events 2200 and 2201"
permalink: kb/163/Q163287/
---

## Q163287: XCON: MTA Events 2200 and 2201

	Article: Q163287
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbtshoot kbusage
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange MTA events 2200 and 2201 typically indicate thread conflicts while
	trying to lock the 03000002 object. This object contains reference counts for
	all other objects. As a result, this object is highly utilized, resulting in
	frequent, temporary locking conflicts.
	
	2200 and 2201 events on object 03000002 are not unusual and by themselves do not
	indicate a problem requiring further attention.
	
	MORE INFORMATION
	================
	
	The events are:
	
	  Event ID: 2200
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Description: An MTA database server error was encountered. [%1 %2 %3 %4
	  %5 %6] (6)
	
	  Event ID: 2201
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Description: An MTA database server error was encountered. [%1 %2 %3 %4
	  %5 %6] (6)
	
	Event 2200 means:
	
	  Lock delayed by outstanding reservations
	  Trying to lock object %1
	  Number of outstanding reservations %2
	
	Event 2201 means:
	
	  Contention on lock call caused delay:
	  Trying to lock object %1
	  Thread owning lock is %2
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	
