---
layout: page
title: "Q175354: XCON: Repeated Event IDs, 4284 &amp; 4287, Indicate Network Problem"
permalink: /kb/175/Q175354/
---

## Q175354: XCON: Repeated Event IDs, 4284 &amp; 4287, Indicate Network Problem

{% raw %}

	Article: Q175354
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When mail is queued to go out through an X.400 connection, the following errors
	may be logged repeatedly in the event log:
	
	  Event ID: 4284
	  Category: X.400 Service
	  Source: MSExchangeMTA
	  An error has occurred during connection/disconnection. Error code=8511
	  [POP4 POP4 DOWN 4 179] (14)
	
	  ID 4287 Category X.400 Service
	  An internal MTA error occurred.
	  Contact Microsoft Product Support Services.
	  Error code=8640 [POP4 POP4 DOWN4 18] (14)
	
	MORE INFORMATION
	================
	
	The time interval "n," in seconds, between the logged errors is equal to the
	number of seconds set in the X.400 Connector. To check this setting, open the
	property pages of the X.400 Connector, select the Override tab, in the
	Connection Retry Values frame, and read the Open Interval(sec) setting.
	
	These errors may be caused by network problems, such as a WAN connection being
	temporarily down. This does not necessarily indicate a problem with Exchange
	Server or the Message Transfer Agent (MTA).
	
	As mail is queued to go across the WAN link, the X.400 connector is attempting to
	re-establish the connection every "n" seconds. Because the WAN connection is
	down, the MTA transport is not available; the MTA is logging these two events.
	
	Additional query words: x400 repeating
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
