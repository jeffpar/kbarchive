---
layout: page
title: "Q176180: XADM: Deferred Delivery Settings Not Effective"
permalink: kb/176/Q176180/
---

## Q176180: XADM: Deferred Delivery Settings Not Effective

	Article: Q176180
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message is sent using an Outlook client with specific deferred delivery
	options set, the deferred delivery options are ignored and the mail item may
	take an exceptional amount of time to be delivered.
	
	If there is a time difference between the originating client and the originating
	server, this is behavior is by design. It should be considered to be an issue if
	there is not a time difference between the originating client, receiving client,
	and two host servers.
	
	CAUSE
	=====
	
	The deferred delivery time is not being implemented for local delivery.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
