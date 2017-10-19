---
layout: page
title: "Q164768: XADM: DL Delivery Restriction Fails Without Name Resolution"
permalink: /kb/164/Q164768/
---

## Q164768: XADM: DL Delivery Restriction Fails Without Name Resolution

	Article: Q164768
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An originator of a message who is not a member of a distribution list (DL) can
	send e-mail to that DL even if the delivery restriction of the DL is set to
	accept messages only from its members. This problem occurs if the originator of
	the message does not resolve the DL to a Microsoft Exchange Server DN.
	
	For example, joe@company.com can send e-mail to vp@corporation.com, where vp is a
	DL that only allows messages from its members.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
