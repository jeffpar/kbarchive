---
layout: page
title: "Q168714: XADM: Manager Field Incorrect After Import"
permalink: kb/168/Q168714/
---

## Q168714: XADM: Manager Field Incorrect After Import

	Article: Q168714
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you import Manager field information to a mailbox Organization tab, the
	Manager field displays an X.400 address similar to:
	
	  /o=Microsoft/ou=SITENAME/cn=Recipients/cn=FirstName LastName
	
	CAUSE
	=====
	
	When you import into Exchange Server using a .csv file to add the manager field
	to mailboxes, you must specify the Alias Name of the user. Using the Display
	Name of the user for the manager will result above scenario and direct reports
	of that user will not be displayed.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- When creating a .csv file for importing manager data, add the alias name of
	  the user instead of display name in the manager field.
	
	By adding the Alias Name, the imported manager information will properly show the
	manager's Display Name and will display the manager's direct reports as well.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
