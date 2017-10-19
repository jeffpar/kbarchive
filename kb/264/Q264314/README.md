---
layout: page
title: "Q264314: XADM: Mailbox Move Fails with Error 80004005-0501-000004dd"
permalink: /kb/264/Q264314/
---

## Q264314: XADM: Mailbox Move Fails with Error 80004005-0501-000004dd

	Article: Q264314
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program to move a
	mailbox within the same site, you may receive the following error message:
	
	  Client operation failed: 80004005-0501-000004dd
	
	CAUSE
	=====
	
	This behavior can occur if the mailbox size limit on the destination store is
	lower than the required size limit. If the mailbox is moved, the size exceeds
	administrator-configured mailbox size limits on the destination store.
	
	WORKAROUND
	==========
	
	To work around this issue, either remove messages from the source mailbox to
	reduce its size so that it remains below the destination mailbox size limit, or
	increase the destination mailbox size limit to accommodate the source mailbox.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
