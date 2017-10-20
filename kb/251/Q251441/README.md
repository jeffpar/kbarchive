---
layout: page
title: "Q251441: XIMS: Internet Mail Service NDR Behavior Changes in 5.5 SP3"
permalink: /kb/251/Q251441/
---

## Q251441: XIMS: Internet Mail Service NDR Behavior Changes in 5.5 SP3

{% raw %}

	Article: Q251441
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The From address of the postmaster in the non-delivery report (NDR) is different
	from the e-mail domain that the original in-bound message was destined to. This
	difference may occur if the Internet Mail Service returns the NDR through
	another Internet Mail Service. Such new behavior is a result of the "Bounce
	Back" feature in the Microsoft Exchange Server message transfer agent (MTA).
	
	MORE INFORMATION
	================
	
	The Bounce Back feature is meant to eliminate the message looping by reducing
	the possibility of an MTA sending a message to a route that was already taken by
	a message. This feature also changes the way the MTA routes an NDR message that
	would have been sent out of the local Internet Mail Service. This feature was
	first applied as a post-Service Pack 2 (SP2) fix and then was rolled into
	Exchange Server 5.5 Service Pack 3 (SP3) where it is the default algorithm.
	Consequently, an Internet Mail Service NDR message takes a route different than
	the path taken by the original message when there are several routes available.
	
	The Bounce Back feature can be turned off by installing SP3 and setting the Only
	Use Least Cost Routes option. To locate this option
	
	1. In the Microsoft Exchange Server Administrator program, click Organization,
	  click Site, click Configuration, click Servers, and then double-click your
	  server.
	
	2. In the MTA Properties dialog box, click the General tab.
	
	By implementing the fix, the MTA handles NDR replies by causing the NDR to be
	routed back along the lowest cost route for its address space (which is the
	local connector). In essence, the NDR routes back along the same path of the
	original message that produced the NDR.
	
	A further consequence of this new MTA routing feature is that a message coming in
	one Internet Mail Service that produces an NDR that goes out a second Internet
	Mail Service will have the From address of the second Internet Mail Service
	postmaster, which might be a different e-mail domain than the e-mail domain to
	which the original in-bound message was destined. This can be confusing to the
	recipient of the NDR.
	
	
	Additional query words: IMC XFOR XCON IMS
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
