---
layout: page
title: "Q163296: XCON: MTA Events 2200 and 2201"
permalink: /kb/163/Q163296/
---

## Q163296: XCON: MTA Events 2200 and 2201

{% raw %}

	Article: Q163296
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server message transfer agent (MTA) events 2200 and 2201
	typically indicate that there were thread conflicts while trying to lock the
	03000002 object. This object contains reference counts for all other objects. As
	a result, the 03000002 object is heavily used, which results in frequent,
	temporary locking conflicts.
	
	2200 and 2201 events on object 03000002 are not unusual and by themselves do not
	indicate a problem requiring further attention.
	
	MORE INFORMATION
	================
	
	Here is the text of event 2200:
	
	  Event ID: 2200
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Description: An MTA database server error was encountered. [%1 %2 %3 %4
	  %5 %6] (6)
	
	This event means:
	
	  Lock delayed by outstanding reservations
	  Trying to lock object %1
	  Number of outstanding reservations %2
	
	Here is the text of event 2201:
	
	  Event ID: 2201
	  Source: MSExchangeMTA
	  Category: Field Engineering
	  Description: An MTA database server error was encountered. [%1 %2 %3 %4 %5
	  %6] (6)
	
	This event means:
	
	  Contention on lock call caused delay:
	  Trying to lock object %1
	  Thread owning lock is %2
	
	Additional query words: dbserver mtadata corruption fatal
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
