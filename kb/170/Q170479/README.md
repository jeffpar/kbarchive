---
layout: page
title: "Q170479: XCON: GMT Offset Not Calculated By Some Messaging Systems"
permalink: /kb/170/Q170479/
---

## Q170479: XCON: GMT Offset Not Calculated By Some Messaging Systems

{% raw %}

	Article: Q170479
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When sending a message with a Read Receipt (RR) request from a third-party
	messaging system to Exchange Server, the RR reply may contain the Greenwich Mean
	Time (GMT) and not the correct GMT-offset time.
	
	MORE INFORMATION
	================
	
	When Exchange Server processes a Read Receipt request, it sends the RR reply
	back with the time stamp in the YYMMDDHHMMSSZ format.
	
	The 'Z' at the end signifies GMT. It is then up to the receiving client or MTA to
	add the adjusted offset time to the GMT to allow proper conversion to the local
	time-zone.
	
	If they do not adjust the GMT offset, they will simply display the GMT time
	stamp.
	
	This may also occur with Message Expiration requests or any other type of request
	embedded in the P2 of a message.
	
	Delivery receipt requests usually will not display this behavior because the
	Exchange Server MTA encodes the GMT offset into the P1 when sending the report
	back.
	
	
	This behavior is by product design.
	
	Additional query words: retix ua mta mts time zulu
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
