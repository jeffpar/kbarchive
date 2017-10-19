---
layout: page
title: "Q151992: XADM: Simultaneous Move User Operations Freeze"
permalink: /kb/151/Q151992/
---

## Q151992: XADM: Simultaneous Move User Operations Freeze

	Article: Q151992
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Administrator program may stop responding during a Move
	User operation. The progress indicator may stop moving and the Administrator
	program stop responding. Another instance of the Administrator program will also
	fail to complete the Move User operation.
	
	Attempts to stop the Store service will often fail when this problem occurs. No
	related events appear in the event logs.
	
	CAUSE
	=====
	
	These symptoms occur when multiple Move User operations are run simultaneously.
	While the error is seen in the Administrator program, the actual error has
	occurred in the Store process on the server. Move User threads in the store
	become deadlocked and none can proceed.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Run only a single instance of the Move User operation.
	
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
	
	
	Additional query words: hang crash slow down deadlock lock
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
