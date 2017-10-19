---
layout: page
title: "Q266737: XCLN: Problems Creating Notes Connector Using Lotus Notes Client"
permalink: /kb/266/Q266737/
---

## Q266737: XCLN: Problems Creating Notes Connector Using Lotus Notes Client

	Article: Q266737
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Notes Configuration utility with the Lotus Notes 5.0.2b client,
	you may receive the following error message which prevents you from creating the
	connection document:
	
	  You have insufficient access to perform this action
	
	CAUSE
	=====
	
	This problem occurs when the Notes connector ID tries to create a domain entry
	in the Public Address Book on the Lotus Notes-based server.
	
	RESOLUTION
	==========
	
	To resolve this problem, assign the ID file that is being used to create the
	configuration document the roles of both "NetModifier" and "NetCreator" in the
	Notes Public Address Book.
	
	STATUS
	======
	
	This a problem with the Lotus Notes 5.0.2b client.
	
	MORE INFORMATION
	================
	
	When you create a Notes connector on an Exchange Server-based computer, having
	manager access to the Notes Public Address Book is not sufficient enough access
	to complete the procedure. You must give the connector ID specific roles on the
	Notes Public Address Book database.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
