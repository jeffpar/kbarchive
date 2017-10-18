---
layout: page
title: "Q161711: XCON: Messages NDR Rather Than Being Queued for Later Delivery"
permalink: kb/161/Q161711/
---

## Q161711: XCON: Messages NDR Rather Than Being Queued for Later Delivery

	Article: Q161711
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbprogramming kbusage
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a message is sent to a recipient in another site by means of a Site
	Connector, if the destination server is down, the message may be returned by the
	System Administrator as undeliverable, with the following error message:
	
	  The recipient could not be processed due to congestion in the message
	  transfer service.
	
	CAUSE
	=====
	
	The above symptoms will occur if there is an alternate Site Connector for the
	message to travel over, but the path from the alternate site to the destination
	server is also unavailable. The message will be re-routed to the alternate site,
	and then returned to the sender undeliverable as above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 4.0. This
	problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbprogramming kbusage 
	Technology        : kbPTProdChange kbExchangeSearch kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
