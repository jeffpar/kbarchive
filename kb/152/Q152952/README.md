---
layout: page
title: "Q152952: XCON: No Read/Delivery Receipts Sending X.400 Messages"
permalink: kb/152/Q152952/
---

## Q152952: XCON: No Read/Delivery Receipts Sending X.400 Messages

	Article: Q152952
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 30-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When messages are sent through the X.400 connector to the Wang Office Gateway
	using 1984 mode, delivery and read receipts are not provided.
	
	CAUSE
	=====
	
	According to the Red Book, page 198, table 3/X.420 Column B, the receipt
	envelope that contains the original Encoded Information Types (EIT) should be
	unspecified and the protocol should be absent. This is not the case with
	Microsoft Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The Wang Office Gateway is manufactured by Wang, Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: wang receipt
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
