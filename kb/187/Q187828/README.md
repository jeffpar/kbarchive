---
layout: page
title: "Q187828: XADM: Information Store Hangs as Thread CPU Utilization Drops"
permalink: kb/187/Q187828/
---

## Q187828: XADM: Information Store Hangs as Thread CPU Utilization Drops

	Article: Q187828
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The information store appears to stop responding (hang) frequently, for short
	periods of time (most periods not exceeding 5-10 minutes).
	
	CAUSE
	=====
	
	The information store queries the directory on a particular public folder to
	determine permissions on that folder. The directory is using an inefficient
	search filter for this operation and, combined with the context the store is
	using to call into the directory, the store threads eventually block until the
	initial read is completed.
	
	The problem is aggravated (to the extent you see a hang) by the fact that a user
	in the access control list (ACL) for the public folder is a member of a large
	number of distribution lists (DLs).
	
	
	RESOLUTION
	==========
	
	A change was made to the ds_search call to use a better filter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. service pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
