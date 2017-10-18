---
layout: page
title: "Q271653: XADM: No Public Information Store After Move Server Wizard  Runs"
permalink: kb/271/Q271653/
---

## Q271653: XADM: No Public Information Store After Move Server Wizard  Runs

	Article: Q271653
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a public information store on an Exchange
	Server computer that does not have a public information store object.
	
	MORE INFORMATION
	================
	
	In some cases, if you use the Microsoft Exchange Server Move Server Wizard to
	move a server to a different site, a public information store object may not
	exist on the server. If an Exchange Server computer already exists in the site
	where you want to move the server, you cannot create a public information store
	object on the Exchange Server computer. When you create a new site by using the
	Move Server Wizard, if this site is the first Exchange Server computer in a
	site, the Move Server Wizard automatically creates a new public information
	store on the Exchange Server computer. This behavior is by design.
	
	To create a public information store on an Exchange Server computer that does not
	have a public information store object:
	
	1. Start the Microsoft Exchange Server Administrator program.
	
	2. Click the server that you want to create a public information store on.
	
	3. On the File menu, click New, click Other, click Information Store, and then
	  click Public Information Store.
	
	4. Quit the Administrator program, and then re-open it to view the new public
	  information store.
	
	Additional query words: pilgrim msw
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	
