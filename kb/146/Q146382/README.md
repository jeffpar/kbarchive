---
layout: page
title: "Q146382: XCLN: Deliver New Mail Moves All Messages (Old and New)"
permalink: /kb/146/Q146382/
---

## Q146382: XCLN: Deliver New Mail Moves All Messages (Old and New)

	Article: Q146382
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange users have the option for new messages to be delivered to
	either their Mailbox (on the server) or their Personal Folders (into the user's
	PST).
	
	To toggle this setting, a user would select Tools, Options, Delivery, and toggle
	the "Deliver new mail to the following location" between "Mailbox" and "Personal
	Folders".
	
	When there are existing messages in the Mailbox and the user changes the "Deliver
	new mail to the following location" to "Personal Folders", all messages, both
	read and unread, are individually moved to the Personal Folder Inbox. This is
	different than expected, since existing mail is moved as well as new mail.
	
	MORE INFORMATION
	================
	
	This is by design. If the user does not want to migrate all messages to the
	personal folders, they may set up a filter to migrate only "unread" messages.
	
	Additional query words: Personal Folders Migrate Delivery
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
