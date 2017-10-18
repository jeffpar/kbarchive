---
layout: page
title: "Q254334: XCON: MTA Stops in EMSMTA!o4puinqh After Dereferencing a Pointer"
permalink: kb/254/Q254334/
---

## Q254334: XCON: MTA Stops in EMSMTA!o4puinqh After Dereferencing a Pointer

	Article: Q254334
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Exchange Server message transfer agent (MTA) stops responding in
	EMSMTA!o4puinqh after it dereferences a pointer.
	
	CAUSE
	=====
	
	This issue can occur if the MTA cannot complete the assignment of an index
	(memory structure) and the MTA attempts to use the index. The MTA dereferences a
	pointer that is not valid.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 SP 3. This problem was first corrected in Exchange Server 5.5
	Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
