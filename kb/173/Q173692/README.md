---
layout: page
title: "Q173692: XADM: Event 1016 When You Open Mailbox or Schedule"
permalink: /kb/173/Q173692/
---

## Q173692: XADM: Event 1016 When You Open Mailbox or Schedule

	Article: Q173692
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to access another user's mailbox or schedule, Microsoft
	Exchange generates the following event in the Application Event log:
	
	  Event ID: 1016
	  Source: MSExchangeIS Private
	  Type: Success Audit
	  Category: Logons
	  NT User DOMAIN\username logged on to John Doe mailbox, and is not the primary
	  Windows NT account on this mailbox.
	
	This occurs even if you have permission to access the mailbox, and it occurs
	regardless of whether your attempt is successful or unsuccessful.
	
	CAUSE
	=====
	
	This behavior is by design.
	
	Exchange records Event 1016 in the Event Log regardless of how you set the
	diagnostics logging level on the Information Store.
	
	The decision to log this error was made with security in mind. It is important
	that any possible security breach be logged. If this type of logging were
	suppressed, an actual breach of security would not be logged.
	
	Additional query words: plus client outlook calendar
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
