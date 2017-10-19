---
layout: page
title: "Q196255: XFOR: Cc:Mail Custom Recipients Missing (.) in X.400 Address"
permalink: /kb/196/Q196255/
---

## Q196255: XFOR: Cc:Mail Custom Recipients Missing (.) in X.400 Address

	Article: Q196255
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When you transfer Lotus cc:Mail users to Exchange Server using directory
	synchronization (dirsync), custom recipients will be created on Exchange Server.
	If these users' names have periods after their middle initial, the X.400 address
	of those custom recipients will have some problems, specifically, the period
	will be omitted from the S, G, and I sections of the X.400 address.
	
	CAUSE
	=====
	
	
	MORE INFORMATION
	================
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
