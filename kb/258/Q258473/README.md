---
layout: page
title: "Q258473: XADM: How to Avoid Bouncing Mail Items During a Mailbox Move"
permalink: kb/258/Q258473/
---

## Q258473: XADM: How to Avoid Bouncing Mail Items During a Mailbox Move

	Article: Q258473
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you move mailboxes with the Move Mailbox command in the Exchange
	Administrator program, incoming messages may bounce back to the sender during
	the move process.
	
	WORKAROUND
	==========
	
	To work around this problem, supply an alternate recipient for the mailbox
	during the move process. After you move the mailbox, you can forwarded the mail
	from the alternate recipient's mailbox to the destination mailbox.
	
	To specify an alternate recipient, open the mailbox properties page, click Modify
	on the Delivery Options tab in the Alternate Recipients section, and then choose
	the mailbox to which you want the mail to be redirected. After the alternate
	recipient is no longer necessary, you can remove the alternate recipient on the
	Delivery Options tab if you change the alternate recipient to None.
	
	Additional query words: moving bouncing ndr pop3 imap4
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
