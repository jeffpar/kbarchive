---
layout: page
title: "Q196417: XADM: Move Server Performance Issue in Large Configurations"
permalink: kb/196/Q196417/
---

## Q196417: XADM: Move Server Performance Issue in Large Configurations

	Article: Q196417
	Product(s): Microsoft Exchange
	Version(s): WINNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On running the Move Server Wizard, towards the end of the process, there is a
	cleanup phase in the destination site. On an average, in large move operations
	this phase takes five or more seconds for each moved mailbox, which can be a
	performance issue when a large number of mailboxes (in the range of thousands)
	are being moved.
	
	CAUSE
	=====
	
	This time related performance problem is due to the large number of objects in
	the directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Move Server component of
	Exchange Server version 5.5.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINNT:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
