---
layout: page
title: "Q175481: XADM: Store Does Not Grow When Moving Users to Another Server"
permalink: /kb/175/Q175481/
---

## Q175481: XADM: Store Does Not Grow When Moving Users to Another Server

	Article: Q175481
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When users are moved from one server in a site to another server in the same
	site, multiple copies of the same message are not moved to the destination
	server.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server 5.5 and Microsoft Exchange 2000 Server store mail by a
	method that is known as single instance storage. If a message is sent to one
	recipient and is copied to 20 other recipients, Exchange Server 5.5 and Exchange
	2000 maintain only one copy of the message in its database. It then has
	pointers, which point to the original recipient as well as to the 20 other
	recipients. If the original recipient and the 20 other recipients are moved to
	another server in the site with the Move Mailbox utility located on Tools menu
	of the Exchange Administrator program, only one copy of the message is
	maintained on the new server.
	
	During a move of users, Exchange Server 5.5 and Exchange 2000 checks every
	incoming message against its own internally assigned IDs. These internal IDs are
	not viewable with a client. If Exchange Server 5.5 or Exchange 2000 determines
	that the incoming message is a duplicate, it merely sets up a pointer for that
	existing message pointing to the newly moved user.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
