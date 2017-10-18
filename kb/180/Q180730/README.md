---
layout: page
title: "Q180730: XCON: Erroneous Deletion of SMTP &amp; SNADS Routes During Routing"
permalink: kb/180/Q180730/
---

## Q180730: XCON: Erroneous Deletion of SMTP &amp; SNADS Routes During Routing

	Article: Q180730
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5,5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience some non-delivery reports (NDRs) when you send messages to
	SNADS or SMTP (Simple Mail Transfer Protocol) addresses.
	
	CAUSE
	=====
	
	During recalculation of the local routing table, routes that are imported from
	other sites may be dropped. This concerns routes of the form "SNADS =" or "SMTP
	=" where no routing value is configured.
	
	WORKAROUND
	==========
	
	You can temporarily create a LOCAL route that will not be replicated in other
	sites.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0. This problem has been corrected in the latest U.S. Service Pack
	for Microsoft Exchange Server version 4.0. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: GWART deletion
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5,5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
