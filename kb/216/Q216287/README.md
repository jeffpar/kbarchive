---
layout: page
title: "Q216287: XFOR: IMAP4 Extractor Does Not Migrate Filed Messages"
permalink: /kb/216/Q216287/
---

## Q216287: XFOR: IMAP4 Extractor Does Not Migrate Filed Messages

	Article: Q216287
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the Migration Wizard to migrate messages from an Internet Message
	Access Protocol 4 (IMAP4) e-mail server, you may notice that some e-mail
	messages are not migrated.
	
	MORE INFORMATION
	================
	
	Netscape e-mail clients have a command called the File command. This command
	moves an e-mail message to another folder. The e-mail message is copied to the
	destination folder and then marked as deleted. The IMAP4 source extractor does
	not migrate deleted e-mail messages, so these deleted e-mail messages are not
	migrated to Exchange Server.
	
	Additional query words: purge messenger
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
