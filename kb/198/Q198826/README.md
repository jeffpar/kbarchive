---
layout: page
title: "Q198826: XADM: Address Information for Moved Messages Shows Old DN"
permalink: kb/198/Q198826/
---

## Q198826: XADM: Address Information for Moved Messages Shows Old DN

	Article: Q198826
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view Address Book information about a recipient who is listed in a
	message that was moved by the Microsoft Exchange Move Server Wizard (MSW),
	incorrect information is displayed. The only information listed for the
	recipient is their old Distinguished Name (DN), that is,
	/o=org/ou=site/cn=recipients/cn=user name.
	
	CAUSE
	=====
	
	Because the old DN no longer exists in the directory, the client application is
	not able to display any additional information.
	
	WORKAROUND
	==========
	
	There are no workarounds for displaying Address Book information for messages
	that were moved by the MSW.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
