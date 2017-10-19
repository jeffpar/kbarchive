---
layout: page
title: "Q260193: XADM: Mailbox Resources Displays the Wrong Display Name"
permalink: /kb/260/Q260193/
---

## Q260193: XADM: Mailbox Resources Displays the Wrong Display Name

	Article: Q260193
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
	
	After you change the display name for a mailbox, the Mailbox column under
	Mailbox Resources in the Exchange Administration program still displays the old
	display name for the mailbox.
	
	CAUSE
	=====
	
	When you update the Display Name field in the mailbox Properties dialog box, the
	change is made to the mailbox entry in the Exchange directory (the dir.edb
	file). The corresponding change to the mailbox object in the Exchange
	Information Store (the priv.edb file) is not made until one of the following
	events occurs:
	
	- The client logs on to the mailbox.
	
	  -or-
	
	- A message is sent to the mailbox.
	
	RESOLUTION
	==========
	
	To resolve this problem, log on to the mailbox as a client to update the Mailbox
	column in Mailbox Resources, or send a test message to the mailbox.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
