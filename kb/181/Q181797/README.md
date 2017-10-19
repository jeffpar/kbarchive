---
layout: page
title: "Q181797: XFOR: Message May Be Duplicated In cc:Mail Inbox"
permalink: /kb/181/Q181797/
---

## Q181797: XFOR: Message May Be Duplicated In cc:Mail Inbox

	Article: Q181797
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a mail message is sent from an Exchange Server computer to a cc:Mail user,
	multiple copies may be received by cc:Mail recipients, even when the message is
	addressed to an Exchange distribution list (DL). An Exchange user included in
	the DL will receive only one copy of the message.
	
	CAUSE
	=====
	
	Messages are duplicated to cc:Mail recipients when the recipient is on more than
	one DL that the message is addressed to or the DL is nested. The message is
	submitted to MTS-OUT for each occurrence of the recipient. In Exchange Server,
	the store only submits the message once to the Exchange mailbox, but for
	gateways it is delivered multiple times.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
