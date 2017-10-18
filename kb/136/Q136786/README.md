---
layout: page
title: "Q136786: XCON: IMC Sends NDR and OOF Messages to Bulk Mailing Lists"
permalink: kb/136/Q136786/
---

## Q136786: XCON: IMC Sends NDR and OOF Messages to Bulk Mailing Lists

	Article: Q136786
	Product(s): Microsoft Exchange
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Internet Mail Connector (IMC) sends Non Delivery Reports
	(NDR) and Out of Office (OOF) messages to bulk mailing lists.
	
	MORE INFORMATION
	================
	
	Messages that come into the IMC from a bulk mail distribution service, such as a
	listserver, have a SMTP header of Precedence with a value of junk or bulk. The
	IMC ignores this header and sends NDR and OOF reply messages to the bulk mailing
	list.
	
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
	Version           : 4.00
	
	=============================================================================
	
