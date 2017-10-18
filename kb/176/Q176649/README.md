---
layout: page
title: "Q176649: XADM: Domain Name Shows Incorrectly as BUILTIN in Exported CSV"
permalink: kb/176/Q176649/
---

## Q176649: XADM: Domain Name Shows Incorrectly as BUILTIN in Exported CSV

	Article: Q176649
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you specify an NT BUILTIN group as having permissions on a mailbox using the
	Microsoft Exchange Administrator program, and then export the mailbox, the CSV
	file displays these with the domain BUILTIN.
	
	These BUILTIN accounts include:
	
	  BUILTIN\Account Operators
	  BUILTIN\Administrators
	  BUILTIN\Backup Operators
	  BUILTIN\Guests
	  BUILTIN\Print Operators
	  BUILTIN\Replicator
	  BUILTIN\Server Operators
	  BUILTIN\Users
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0, 5.0, and 5.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
