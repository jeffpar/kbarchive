---
layout: page
title: "Q176682: XADM: System Attendant Uses Unusually Large Amount of Memory"
permalink: kb/176/Q176682/
---

## Q176682: XADM: System Attendant Uses Unusually Large Amount of Memory

	Article: Q176682
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,5.0,5.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 5.0, 5.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Microsoft Exchange Server, the system attendant may use an
	unusually large amount of memory, causing the Windows swap file to increase in
	size. This problem typically occurs in organizations that contain a large number
	of sites and is not related to the Knowledge Consistency Checker (KCC).
	
	CAUSE
	=====
	
	In organizations that contain a large number of sites, the routing information
	database (RID) calculations performed by the system attendant can use large
	amounts of memory over an extended period of time.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: mad.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2 kbExchange500SP1 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3 kbExchange400SP4
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,5.0,5.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
