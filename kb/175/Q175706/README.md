---
layout: page
title: "Q175706: XADM: How Moving Mailboxes Affects Single Instance Storage"
permalink: /kb/175/Q175706/
---

## Q175706: XADM: How Moving Mailboxes Affects Single Instance Storage

	Article: Q175706
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server maintains single-instance storage of messages even when users
	are moved between servers in a site.
	
	For example, assume the following configuration:
	
	  Server 1: Users A, B, and C
	  Server 2: User D
	
	When User A sends the same message to users B, C, and D, Exchange Server will
	make a single instance of the message on server 1 for all three users, since A,
	B, and C are on the same server. Even the message in the Sent Items folder of
	the sender (user A) is a single instance of the messages in the Inboxes of users
	B and C. Because User D is on a different server, Exchange Server will send a
	message to server 2, which will be stored on that server.
	
	Now assume that user B is moved to server 2. Exchange Server will create a single
	instance of the message for B off of the copy of the message that user D has,
	provided that user D has not deleted the message. If user D has already deleted
	the message, then Exchange Server will create a single instance of the message
	off the copy in D's Deleted Items folder. If user D also deleted the message
	copy in the Deleted Items folder, then Exchange Server creates a new message and
	sends it to server 2.
	
	The same process will take place if users B and C are moved to server 2. Exchange
	Server will maintain a single instance of the message for users B and C, based
	on the message in the Inbox of user D. If user D has already deleted the
	message, Exchange Server will attempt to use the copy in user D's Deleted Items
	folder. If user D has already emptied the Deleted Items folder, then Exchange
	Server will create a new message and send it to server 2.
	
	Additional query words: single instance
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
