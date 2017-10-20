---
layout: page
title: "Q160534: XCON: Size Limits May Cause Message Looping"
permalink: /kb/160/Q160534/
---

## Q160534: XCON: Size Limits May Cause Message Looping

{% raw %}

	Article: Q160534
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Microsoft Exchange Server Organization configured with multiple Sites
	connected by X.400 connectors, and each Site has a Microsoft Mail Connector
	servicing the same set of Microsoft Mail postoffices. The Microsoft Mail
	Connectors have a size limit imposed but the X.400 connector does not.
	
	You send a message that exceeds the size limit, but it is a long time, perhaps
	several hours, before you receive a non-delivery report (NDR).
	
	CAUSE
	=====
	
	A message that exceeds the size limit should result in an immediate NDR;
	however, because the routing table has an alternate route over the X.400
	connector to the other site, the message transfer agent (MTA) reroutes the
	message until it reaches the hard-coded hop count of 512.
	
	A message will go through the 512-hop count before returning an NDR if a
	particular user is restricted from using all the connectors of a particular type
	(for example, all IMCs in an organization). A restricted user may not receive an
	NDR for hours (depending on the Microsoft Exchange Server topology).
	
	This behavior is by design for Microsoft Exchange Server. The Microsoft Exchange
	Message Transfer Agent (MTA) does not store detailed data about each reroute in
	the P1 header of each message that passes through the MTA. This could
	potentially make individual messages much larger because each time they pass
	through another MTA, the Internal-Trace-Information-Element would significantly
	grow in size. This could severely degrade MTA performance. The P1 header of a
	message passing through the MTA only contains destination MTA name, hop count,
	and routing action information.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Have a consistent size limit for the organization. Set this on the MTA object
	  of the server objects.
	
	- Eliminate redundant paths to the same destination. (Have only one Microsoft
	  Mail Connector servicing that set of postoffices).
	
	STATUS
	======
	
	This behavior is by design as stated for Exchange Server.
	
	Additional query words: loop message tracking restrictions
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
