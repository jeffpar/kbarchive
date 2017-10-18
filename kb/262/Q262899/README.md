---
layout: page
title: "Q262899: XADM: KCC Generates Notifications for Intrasite Server"
permalink: kb/262/Q262899/
---

## Q262899: XADM: KCC Generates Notifications for Intrasite Server

	Article: Q262899
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During replication among sites, if you modify an item in or import an item to
	the local site, the replication within the local site of this change or import
	may be slow.
	
	CAUSE
	=====
	
	This issue can occur if the Knowledge Consistency Checker sets the schedule for
	replication of mail replicas within a site to the same schedule as the directory
	replication connector. This creates a large replication load, even if no changes
	come from the mail-based replica. Therefore, the replication within the site is
	slow if you modify or import an item.
	
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
	
	Additional query words: kcc
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
