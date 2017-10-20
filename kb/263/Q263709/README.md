---
layout: page
title: "Q263709: XCON: Message Smaller Than Size Restriction Returned w/ NDR"
permalink: /kb/263/Q263709/
---

## Q263709: XCON: Message Smaller Than Size Restriction Returned w/ NDR

{% raw %}

	Article: Q263709
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A message that is smaller than the size restriction on a remote Message Transfer
	Agent (MTA) is rejected with a Non-Delivery Report (NDR) stating that the
	content length is too long.
	
	CAUSE
	=====
	
	If the MTA in the originating site passes the message to a mailbox server where
	the size restriction configured on the local MTA is smaller than the message
	size, the MTA rejects the message instead of passing it to the connector server
	to be delivered to the foreign mail system.
	
	RESOLUTION
	==========
	
	Clear the selection of the Mailbox servers from the Target Servers tab of the
	Site Connector, or make MTA size restrictions uniform throughout all sites.
	
	MORE INFORMATION
	================
	
	Example:
	
	A message from the originating site, Site A, enters Site B by way of a Site
	Connector. In Site A, the Target Servers tab on the Site Connector properties
	has all remote servers in Site B selected. The mailbox servers in Site B have a
	smaller size restriction set on their MTAs than the connector servers in Site B.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
