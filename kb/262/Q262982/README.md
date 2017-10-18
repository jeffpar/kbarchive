---
layout: page
title: "Q262982: XCON: In Multiple Domain Setups NDRs All Originate from 1 Domain"
permalink: kb/262/Q262982/
---

## Q262982: XCON: In Multiple Domain Setups NDRs All Originate from 1 Domain

	Article: Q262982
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Exchange Server Organizations with multiple domains set up, Non Delivery
	Receipts (NDRs) may appear to originate from a single domain. If this is
	unacceptable, you can apply Least Cost Routing, but in some cases this does not
	work as expected.
	
	CAUSE
	=====
	
	The Least Cost Routing feature is only enabled in Exchange Server Service Pack 3
	or later.
	
	RESOLUTION
	==========
	
	To resolve this problem, apply Exchange Server SP 3. If you are already running
	SP 3 or later and you are still experiencing the same problem, follow these
	steps:
	
	1. Stop all services.
	
	2. Reapply Exchange Server SP 3, unless subsequent service packs have been
	  applied, at which point these will need to be removed before reapplying
	  Exchange Server SP 3.
	
	3. Reapply subsequent service packs if you need to.
	
	4. Restart services.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
