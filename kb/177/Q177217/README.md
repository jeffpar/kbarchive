---
layout: page
title: "Q177217: XADM: Store Stops with NNTP XHDR on Large Number of Articles"
permalink: /kb/177/Q177217/
---

## Q177217: XADM: Store Stops with NNTP XHDR on Large Number of Articles

	Article: Q177217
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server information store may terminate unexpectedly when
	an NNTP XHDR command is issued against a newsgroup that is homed on an Exchange
	Server computer and contains a large number of articles.
	
	
	CAUSE
	=====
	
	The length of the buffer to hold the properties needed for the XHDR command is
	calculated incorrectly and can result in memory corruption and the process
	terminating.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: GPF general protection fault hang
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
