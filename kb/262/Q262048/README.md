---
layout: page
title: "Q262048: XCON: Instances Don't Appear in MSExchangeMTA Connections Object"
permalink: /kb/262/Q262048/
---

## Q262048: XCON: Instances Don't Appear in MSExchangeMTA Connections Object

	Article: Q262048
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you first set up a new Microsoft Exchange Server computer in an existing
	site, you may not see anything listed in the Instance box under the
	MSExchangeMTA Connections object in Microsoft Windows NT Performance Monitor.
	You may be able to see the new global address list, which confirms that
	directory replication has occurred between this server and the others in the
	site. In addition, other servers in this site are able to see the new Exchange
	Server computer. There are no error or warning messages in the application event
	log of Windows NT Event Viewer that relate to this event.
	
	RESOLUTION
	==========
	
	To resolve this issue, send an e-mail message from the new Exchange Server
	computer to a user in the site. After an e-mail link has been established, all
	of the instances appear in Performance Monitor.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
