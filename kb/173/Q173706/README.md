---
layout: page
title: "Q173706: XADM: Performance Optimizer Sets Store Threads Differently"
permalink: /kb/173/Q173706/
---

## Q173706: XADM: Performance Optimizer Sets Store Threads Differently

	Article: Q173706
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Performance Optimizer configures the store threads differently on computers with
	different CPU (central processing unit) speeds, even though the configuration
	parameters are the same.
	
	CAUSE
	=====
	
	This is by product design.
	
	MORE INFORMATION
	================
	
	One of the parameters that are determined during an optimization is the speed of
	the CPU. Performance Optimizer takes this into account when configuring the
	number of store threads. The faster the CPU, the larger the store thread count.
	
	Additional query words: CPU
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
