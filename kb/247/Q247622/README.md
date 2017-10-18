---
layout: page
title: "Q247622: XFOR: Migrating from Lotus Stops Wizard with Dr. Watson Event"
permalink: kb/247/Q247622/
---

## Q247622: XFOR: Migrating from Lotus Stops Wizard with Dr. Watson Event

	Article: Q247622
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While migrating calendar items from a Lotus Notes server, the Migration Wizard
	may stop working and display a Dr Watson event. There are no specific events in
	the application event viewer leading up to the failure.
	
	CAUSE
	=====
	
	Calendar items that have a significant number of reoccurring events appointments
	are being overwritten in memory, causing the Wizard to stop working.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
