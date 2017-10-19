---
layout: page
title: "Q173496: XFOR: Error 2140 When Starting the Internet Mail Service"
permalink: /kb/173/Q173496/
---

## Q173496: XFOR: Error 2140 When Starting the Internet Mail Service

	Article: Q173496
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Internet Mail Service (IMS), the following
	error may be displayed:
	
	  Could not start the Microsoft Exchange Internet Mail Service on.
	  Error 2140: An internal Windows NT error occurred.
	
	In the Windows NT Server Event Viewer Application log, you may see the
	following:
	
	  Event id: 4143
	  Source: MSExchangeIMC
	  Type: Error
	  Category: Initialization/Termination
	  Description:
	  The Internet Mail Service service account is not an administrator account. In
	  order to provide SSL support, the service account must be an administrator
	  account.
	
	CAUSE
	=====
	
	The Microsoft Exchange Service Account is not an Administrator or part of the
	Administrator group.
	
	RESOLUTION
	==========
	
	Add the Service Account to the Local or Domain Administrator group.
	
	MORE INFORMATION
	================
	
	This by product design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	
