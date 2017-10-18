---
layout: page
title: "Q156713: XADM: KM Server Stops Intermittently on Alpha Servers"
permalink: kb/156/Q156713/
---

## Q156713: XADM: KM Server Stops Intermittently on Alpha Servers

	Article: Q156713
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage exc4
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Key Management Server running on a DEC Alpha server may stop unexpectedly.
	No errors are logged in the application log or elsewhere.
	
	CAUSE
	=====
	
	A function incorrectly allocated stack space. When the stack was then accessed
	for a variable, it caused a fault, and the service stopped.
	
	
	WORKAROUND
	==========
	
	To work around this problem, obtain the hotfix mentioned below. With the hotfix,
	the code was changed to correctly allocate the stack space.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words: crash hang stops responding lock freeze terminate terminated end ended killed
	
	======================================================================
	Keywords          : kbusage exc4 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
