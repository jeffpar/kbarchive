---
layout: page
title: "Q175579: XFOR: Systems Using Addresses with DDATYPE=MSXCX500, Will NDR"
permalink: /kb/175/Q175579/
---

## Q175579: XFOR: Systems Using Addresses with DDATYPE=MSXCX500, Will NDR

	Article: Q175579
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server, version 5.0 will return non-delivery reports (NDRs)
	to foreign mail systems that send messages to it with DDA TYPE/VALUE fields that
	have a DDATYPE of MSXCX500.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server, version 4.0, will accept and deliver these messages.
	
	CAUSE
	=====
	
	This is caused by the way that Microsoft Exchange Server, version 5.0,
	interoperates with systems that use proper x.500 Distinguished Names (DNs)
	instead of the Microsoft Exchange DN format.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.0.
	
	
	Microsoft recognizes the increasing need to support the Latin-5 character set
	properly. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
