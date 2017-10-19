---
layout: page
title: "Q164456: XFOR: Migrated MS Mail Users May Not Receive Messages in Inbox"
permalink: /kb/164/Q164456/
---

## Q164456: XFOR: Migrated MS Mail Users May Not Receive Messages in Inbox

	Article: Q164456
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Users who are migrated to Exchange from Microsoft Mail postoffices may not
	receive messages in their Exchange Inbox. This occurs when Microsoft Mail users
	are addressing from any address list that is not updated by directory
	synchronization (dirsync). This also occurs if Exchange users are addressing the
	migrated user from a personal address book that has not been updated from the
	Exchange global address list since the Microsoft Mail user was migrated.
	
	MORE INFORMATION
	================
	
	If Microsoft Mail users have been participating in dirsync and then are migrated
	into Exchange, the users will receive two Microsoft Mail-type addresses on their
	e-mail address tab. One Microsoft Mail address is their new Exchange
	Network/Postoffice/Alias address, and the other is their former
	Network/Postoffice/Alias address. The former address is to allow other Microsoft
	Mail users to continue sending to the migrated users using their old
	Network/Postoffice/Alias name. If the Exchange Microsoft Mail Connector contains
	a definition for the migrated Network/Postoffice name, the connector will
	reroute the message to the former postoffice. The Microsoft Mail Connector will
	not forward the message into Exchange to determine whether the address is in
	Exchange. If the Microsoft Mail Connector no longer has the former postoffice's
	Network/Postoffice definitions, then the Microsoft Mail Connector will forward
	the messages into Exchange. Microsoft Mail users can continue to address from
	any address list without being updated.
	
	This problem is similar to moving one user to another postoffice. If the global
	address lists and personal address books from the sending postoffices still have
	that user listed as existing on the old postoffice, the messages will be routed
	to that postoffice and then NDRed (non-delivery reported).
	
	Microsoft recommends that migrations of entire postoffices be performed rather
	than migrations of individual users.
	
	This behavior is by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
