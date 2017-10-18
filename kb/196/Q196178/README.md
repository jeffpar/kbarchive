---
layout: page
title: "Q196178: XADM: Move Server Wizard Errors on Routing Calculation Servers"
permalink: kb/196/Q196178/
---

## Q196178: XADM: Move Server Wizard Errors on Routing Calculation Servers

	Article: Q196178
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
	
	  This server is configured as the routing calculation server for this
	  site and cannot be moved. Use the Site Addressing property page to
	  configure another server as the routing calculation server and run the
	  wizard again.
	
	  Microsoft Exchange Move Server Wizard
	  ID no: c1037556
	
	CAUSE
	=====
	
	The Move Server Wizard will not move a server defined as the routing calculation
	server unless it is the last server in a site.
	
	WORKAROUND
	==========
	
	Follow the instructions listed in the error message.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP1
	Version           : winnt:5.5 SP1
	Issue type        : kbprb
	
	=============================================================================
	
