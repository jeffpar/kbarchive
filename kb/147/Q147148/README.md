---
layout: page
title: "Q147148: XCLN: Missing Inbox, Outbox, and Sent Items Folder in Exchange"
permalink: kb/147/Q147148/
---

## Q147148: XCLN: Missing Inbox, Outbox, and Sent Items Folder in Exchange

	Article: Q147148
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 4.0 
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange MS-DOS client, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new Personal Folder (that is, a new .PST file), there is no
	Inbox, Outbox, or Sent Items folder.
	
	CAUSE
	=====
	
	This is by design.
	
	WORKAROUND
	==========
	
	You can create a new Personal Folder by choosing Services from the Tools menu
	and choosing to add a Personal Folder.
	
	MORE INFORMATION
	================
	
	A new Personal Folder will not have Inbox, Outbox, and Sent Items folders unless
	this new Personal Folder is designated to be located where your incoming mail is
	delivered.
	
	You can set Delivery of New Mail Location either in the Client from Tools,
	Services or from the Control Panel, Mail and Fax option. By default, you receive
	mail in your server-based mailbox, named Mailbox - Your Name.
	
	Additional query words: client missing folders
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400DOS kbExchange400NT kbExchange400Win95
	Version           : WINDOWS:4.0
	Issue type        : kbprb
	
	=============================================================================
	
