---
layout: page
title: "Q151826: XADM: How to Migrate cc:Mail Messages to Exchange Mailboxes"
permalink: kb/151/Q151826/
---

## Q151826: XADM: How to Migrate cc:Mail Messages to Exchange Mailboxes

	Article: Q151826
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article will explain how to migrate cc:Mail mail messages to existing
	Microsoft Exchange mailboxes. This procedure should be used when you are
	migrating from cc:Mail to Microsoft Exchange version 4.0, and you want to create
	your Microsoft Exchange mail accounts outside of the cc:Mail migration process.
	
	This article assumes that you have already created your Microsoft Exchange
	account. For more information on the creation of Microsoft Exchange accounts,
	please reference the Microsoft Exchange Server Migration Guide or the Microsoft
	Exchange Online Books.
	
	MORE INFORMATION
	================
	
	1. Run the Microsoft Exchange Administrator program to create a new mailbox
	  address with the type of MIGRATE and the address of CCMAIL:user AT
	  postoffice. This can be done by opening the properties page of the Mailbox,
	  selecting the E-mail Addresses tab, and clicking the New button.
	
	2. Run the Microsoft Exchange Migration Wizard and migrate just the cc:Mail mail
	  messages from the cc:Mail Post Office. Choose not to create an NT account.
	
	The Microsoft Exchange Migration Wizard performs a lookup on the existing
	mailboxes for this secondary proxy address and migrates the cc:Mail mail
	messages into the existing Microsoft Exchange Mailbox.
	
	For more information on the Microsoft Exchange Migration Wizard please refer to
	the Microsoft Exchange Server Migration Guide or the Microsoft Exchange Online
	Books.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
