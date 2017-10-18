---
layout: page
title: "Q140937: XCON: Remote MTA Reports Syntax Error"
permalink: kb/140/Q140937/
---

## Q140937: XCON: Remote MTA Reports Syntax Error

	Article: Q140937
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to a remote Message Transfer Agent (MTA) via X.400 1988
	conformance, the remote MTA may report a [syntax] error when it receives a P1
	PDU sent from the Microsoft Exchange Server.
	
	CAUSE
	=====
	
	The element that causes the problem is the per-recipient-indicators inside the
	PerRecipientMessageTransferField. The Microsoft Exchange Server encodes it as an
	implicit BITSTRING with three unused bits in the last octet. The Recommendation
	X.411 Figure 4/X.411 defines that the three bits in the last octet are reserved
	and have the value zero.
	
	Microsoft Exchange Server marks them as "unused," violating the size
	constraints.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
