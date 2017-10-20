---
layout: page
title: "Q152955: XCON: MTA Prematurely Returns Messages w/NDR"
permalink: /kb/152/Q152955/
---

## Q152955: XCON: MTA Prematurely Returns Messages w/NDR

{% raw %}

	Article: Q152955
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A message is returned to sender with a Non-Delivery Report (NDR) after only one
	attempt at sending from one MTA to another MTA using an X.400 connector. When
	the MTA on the other side is down, the message is expected to sit in the queue
	and to be retried based on the settings under Connection Retry Values on the
	Override tab on the X.400 connector property pages.
	
	CAUSE
	=====
	
	The problem occurs for messages sent to address spaces that have only one
	possible route, but for which the connector used can be involved in multiple
	routes for other address spaces. A quick test, (that is, "Does the connector
	have any alternate routes?") is initially used to decide whether or not to
	reroute a message. The full reroute processing for a message then uses the
	actual address space of the message to determine if an alternate route is
	available. (A connector may be the only route for address space X, but may be
	one of many possible routes for address space Y).
	
	During reroute processing of a message with just one possible route, the route
	history is kept incorrectly. The second time the message goes through through
	reroute processing it behaves as though :
	
	- this message has just been transferred in.
	
	- the message has already traversed the destination MTA.
	
	The "Routing loop prevention" function then prevents the message from being
	routed to the destination MTA; no other routes are available and so the message
	is returned with an NDR.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
