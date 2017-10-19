---
layout: page
title: "Q273907: XCON: Restrictions Aren't Always Checked for Alternate Recipient"
permalink: /kb/273/Q273907/
---

## Q273907: XCON: Restrictions Aren't Always Checked for Alternate Recipient

	Article: Q273907
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Routing restrictions on the Internet Mail Service do not work for an alternate
	recipient when the mailbox is on the same server as the Internet Mail Service.
	
	RESOLUTION
	==========
	
	This feature is working by product design.
	
	WORKAROUND
	==========
	
	To avoid this behavior, move the mailbox with alternate recipient to another
	server in the site. After you do so, the message will generate a non-delivery
	report (NDR) as expected.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
