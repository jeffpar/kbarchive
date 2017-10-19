---
layout: page
title: "Q175733: XADM: Key Normalization Problem Causes Stack Corruption"
permalink: /kb/175/Q175733/
---

## Q175733: XADM: Key Normalization Problem Causes Stack Corruption

	Article: Q175733
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	We cannot list any specific symptoms that you may encounter because the behavior
	of Exchange Server is unpredictable when this problem occurs.
	
	CAUSE
	=====
	
	Under certain circumstances, while formulating a key, Exchange Server will write
	to a random area on the stack. This occurs if the following steps occur:
	
	1. Exchange Server is in the middle of formulating a key, but it has less than 9
	  bytes left in keyspace.
	
	2. The next column to normalize is a binary column.
	
	3. Can't fit the binary column.
	
	At this point, Exchange Server encounters the problem and writes to a random area
	on the stack. If there are no more columns in the index, it likely avoids the
	problem because it exits the function. However, if there are more columns in the
	index, it stays in the function to examine the remaining columns. At this point,
	the stack has been corrupted and unpredictable behaviour ensues. This problem is
	likely to be hit if an index contains many columns.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
