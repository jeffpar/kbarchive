---
layout: page
title: "Q177152: XADM: Store Rejects X.400 Address with Embedded Slashes"
permalink: kb/177/Q177152/
---

## Q177152: XADM: Store Rejects X.400 Address with Embedded Slashes

	Article: Q177152
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0 SP1
	Operating System(s): 
	Keyword(s): exc5sp1
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	X.400 addresses that contain embedded slashes within a value for an X.400
	address are rejected by the Microsoft Exchange information store as an "invalid
	postal address" when submitted as a one-off address from a client or when
	generated using the X.400 address template on a client. However, the same X.400
	address can be replied to successfully when received from an outside originator
	or when created as a custom recipient on the Exchange Server computer.
	
	CAUSE
	=====
	
	This is caused by a problem in the parsing code.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5sp1 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange500SP1
	Version           : winnt:5.0 SP1
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
