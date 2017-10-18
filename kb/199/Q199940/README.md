---
layout: page
title: "Q199940: XADM: Server Monitor Services Not Unique Between Many Monitors"
permalink: kb/199/Q199940/
---

## Q199940: XADM: Server Monitor Services Not Unique Between Many Monitors

	Article: Q199940
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 08-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you create multiple server monitors for the same server, you cannot specify
	different sets of services for each monitor.
	
	MORE INFORMATION
	================
	
	This is by design. Every server has one list of services monitored by all server
	monitors monitoring that particular server. If you go to the Server tab of a
	server monitor and choose the Services button, you can configure the set of
	services that you want monitored by any server monitor monitoring that server.
	The user interface (UI) on the server monitor simply provides a view of
	monitored services and a quick way of changing the list of services for all
	monitors monitoring that server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
