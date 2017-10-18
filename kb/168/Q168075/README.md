---
layout: page
title: "Q168075: XCLN: Personal DLs vs. Exchange Server DL"
permalink: kb/168/Q168075/
---

## Q168075: XCLN: Personal DLs vs. Exchange Server DL

	Article: Q168075
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 25-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a message is addressed to a personal distribution list, the distribution
	list display name is replaced by the actual members of the personal distribution
	list once the message arrives in the recipient's mailbox.
	
	When a message is sent to a distribution list that was created in the Microsoft
	Exchange Server Administrator program, the alias name remains in the To line.
	The individual member names are not displayed when the message arrives, as they
	are in message sent to a personal distribution list.
	
	MORE INFORMATION
	================
	
	A distribution list (DL) is a collection of recipients logically grouped
	together and addressed as a single recipient. A message addressed to a
	distribution list will be delivered to every user in the list. Administrators
	can create distribution lists and add them to an address book such as the Global
	Address Book.
	
	You can also create personal distribution lists and add them to your Personal
	Address Book (PAB). A Microsoft Exchange Server distribution list is similar to
	a PC Mail group.
	
	When a mailbox is deleted from Exchange Server, the user will also be deleted
	from distribution lists created within Exchange Server Administrator program,
	but will not be deleted from any personal distribution lists created by
	individual users.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WinNT:4.0,5.0
	
	=============================================================================
	
