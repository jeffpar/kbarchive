---
layout: page
title: "Q155780: XADM: Mailbox Cleanup Agent Doesn't Exclude Mailboxes With Comma"
permalink: kb/155/Q155780/
---

## Q155780: XADM: Mailbox Cleanup Agent Doesn't Exclude Mailboxes With Comma

	Article: Q155780
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtool exc4 exc5 exc55
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When excluding mailboxes in the Microsoft Exchange Mailbox Cleanup Agent
	available in the Backoffice Resource Kit, some mailboxes may not be excluded.
	These mailboxes may be processed with the same parameters as non-excluded
	mailboxes.
	
	CAUSE
	=====
	
	Mailboxes that contain a comma in the Display Name will not be excluded in the
	Mailbox Cleanup Agent.
	
	STATUS
	======
	
	This has been fixed in MBClean Version 1.4 that is included in the BackOffice
	Resource Kit, Part One. This and other Microsoft Exchange tools in the
	BackOffice Resource Kit, Part One, can be download from the Microsoft Exchange
	4.0 Resource Kit page at the following Web site:
	
	  http://www.microsoft.com/exchange
	
	
	Additional query words: mbclean MCA BORK
	
	======================================================================
	Keywords          : kbtool exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
