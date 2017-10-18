---
layout: page
title: "Q157967: XCON: No Delivery Receipt on Msg Sent to Wang via X.400"
permalink: kb/157/Q157967/
---

## Q157967: XCON: No Delivery Receipt on Msg Sent to Wang via X.400

	Article: Q157967
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Read and/or Delivery Receipt requests are not processed when you send messages
	from Microsoft Exchange Server to a Wang Office Gateway via the Exchange Server
	X.400 Connector.
	
	CAUSE
	=====
	
	Microsoft Exchange Server 4.0 does not correctly handle the Per Message Flag in
	accordance with the 1984 X.400 recommendations.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	Wang Office Gateway is manufactured by Wang, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	
	Additional query words: 1984 red book sp3 p1 envelope
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
