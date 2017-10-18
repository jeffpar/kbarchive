---
layout: page
title: "Q201315: XFOR: Propagation of Lotus Notes Group to Exchange Server"
permalink: kb/201/Q201315/
---

## Q201315: XFOR: Propagation of Lotus Notes Group to Exchange Server

	Article: Q201315
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 30-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Lotus Notes Group entry is propagated to an Exchange Server distribution
	list (DL) by means of directory synchronization, the created Exchange Server DL
	does not have an alias.
	
	CAUSE
	=====
	
	The default mapping from Notes to Exchange Server for the alias is:
	
	  Alias = ShortName
	
	However, the Notes Group does not have a ShortName field, so there will be no
	alias for that alias entry in Exchange Server.
	
	RESOLUTION
	==========
	
	Microsoft recognizes the need for correcting this mapping anomaly. We have
	modified Exchange Server 5.5 so that this problem of mapping has now been
	corrected. To obtain this feature, obtain the latest service pack for Exchange
	Server 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	This feature was first included in Exchange Server 5.5 Service Pack 2.
	
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
