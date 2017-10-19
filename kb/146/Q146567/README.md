---
layout: page
title: "Q146567: XFOR: Messages with Long Addresses Are Not Delivered"
permalink: /kb/146/Q146567/
---

## Q146567: XFOR: Messages with Long Addresses Are Not Delivered

	Article: Q146567
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet Mail Connector (IMC) will not deliver messages
	with a Fully Qualified Domain Name (FQDN) longer than 255 characters. Outbound
	messages with a FQDN greater than 255 characters will stay queued in the MTS-OUT
	queue.
	
	MORE INFORMATION
	================
	
	In addition, messages inbound to the IMC with a FQDN in excess of 255 characters
	will not be delivered either.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
