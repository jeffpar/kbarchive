---
layout: page
title: "Q196179: XADM: Move Server Wizard Errors when Connectors are Installed"
permalink: kb/196/Q196179/
---

## Q196179: XADM: Move Server Wizard Errors when Connectors are Installed

	Article: Q196179
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP1
	Operating System(s): 
	Keyword(s): exc55sp1
	Last Modified: 23-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Exchange Server 5.5 Move Server Wizard, you receive the
	following error message:
	
	  There are connectors currently installed on this server.
	
	  Microsoft Exchange Move Server Wizard
	  ID no: c1037562
	
	  These connectors must be removed before the Move Server Wizard can continue.
	  <connector name> (<Server name>)
	
	  You must remove these connectors before you can continue.
	
	CAUSE
	=====
	
	The Move Server Wizard will not move a server if there are connectors installed
	unless it is the last server in the site.
	
	WORKAROUND
	==========
	
	Move all connectors from the server being moved to another server in the site.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	
