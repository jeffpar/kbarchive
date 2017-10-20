---
layout: page
title: "Q261414: XCON: Internet Mail Service Queues Become Backlogged"
permalink: /kb/261/Q261414/
---

## Q261414: XCON: Internet Mail Service Queues Become Backlogged

{% raw %}

	Article: Q261414
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Even though messages are flowing, the Internet Mail Service queue levels may
	rise steadily during the day, with no indication that any errors have occurred.
	These same queues may clear out overnight, but they fill again the next day.
	
	CAUSE
	=====
	
	This behavior can occur when messages are being created faster than they can be
	sent. If a business processes a large number of messages, its connection can
	outpace the available bandwidth. If this is the cause of this behavior in your
	particular scenario, the message backlog should begin to clear shortly after the
	time of day that most of your users log off.
	
	In certain cases, such as with companies that have 24-hour business schedules,
	the queues may never clear; they can continue to build and can eventually create
	drive-space errors or other related errors.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase either your connection speed, the number of
	available connections, the number of Internet Mail Service connectors, or your
	bandwidth.
	
	Additional query words: bandwidth, transfer rate,
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
