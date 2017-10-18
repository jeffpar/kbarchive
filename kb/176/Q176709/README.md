---
layout: page
title: "Q176709: XADM: Memory Leak in Microsoft Exchange Server Information Store"
permalink: kb/176/Q176709/
---

## Q176709: XADM: Memory Leak in Microsoft Exchange Server Information Store

	Article: Q176709
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Microsoft Exchange Server is left running for a long period of time, it
	might run out of virtual memory due to a memory leak in the Microsoft Exchange
	information store. This can be observed using the Windows NT Performance
	Monitor, by checking the private byte counter of the Store process. If you see a
	steady increase over a few days, you are seeing this problem.
	
	CAUSE
	=====
	
	The information store is not freeing allocated memory properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: memory leak
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
