---
layout: page
title: "Q267425: XADM: Hiding Address Book Views During Address Book View Storms"
permalink: kb/267/Q267425/
---

## Q267425: XADM: Hiding Address Book Views During Address Book View Storms

	Article: Q267425
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you create an Address Book view with multilevel containers, the directory
	service (or Dsamain process) on multiple servers may peak when the directory
	service populates these changes across your Exchange Server organization; you
	may experience slow connections, or there may be no connections at all to your
	Exchange Server computers during these Address Book view "storms."
	
	CAUSE
	=====
	
	This issue can occur because each Exchange Server computer builds the Address
	Book view based on Grouped by Attributes (GBA) that are replicated between sites
	and servers. If the Address Book views are poorly designed or frequently
	changed, the directory may use a large amount of the server's CPU to regenerate
	these views.
	
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
	
	MORE INFORMATION
	================
	
	
	For additional information about the issue described in this article, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q248398 XADM: Restricting Permission to Address Book Views
	
	  Q251054 XADM: High Dsamain and Increased Replication When Populating
	  Multilevel Address Book View
	
	Additional query words: dsa recalculation
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
