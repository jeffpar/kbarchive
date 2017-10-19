---
layout: page
title: "Q184662: XADM: Messages Not Rerouted Between 2 X.400 Connectors in Site"
permalink: /kb/184/Q184662/
---

## Q184662: XADM: Messages Not Rerouted Between 2 X.400 Connectors in Site

	Article: Q184662
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage exc55sp2fix
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In this scenario, an Exchange site has two servers, and each of them has an
	X.400 Connector with the same address space but different costs. For example:
	
	  ServerA with an address space of X.400:<nothing> and a cost of 1
	  ServerB with an address space of X.400:<nothing> and a cost of 90
	
	Messages created on a mailbox on ServerB and addressed to an X.400 recipient are
	routed this way:
	
	  B -> A -> X.400 Connector
	
	If ServerA goes down, then messages created on a mailbox on ServerB and addressed
	to an X.400 recipient are not locally rerouted to ServerB's X.400 Connector but
	remain indefinitely in ServerB's MTA queue to ServerA.
	
	NOTE: This happens only with Custom recipients. Messages sent to a one off
	address are correctly rerouted.
	
	RESOLUTION
	==========
	
	To work around this problem, a manual intervention (modification of the
	connector cost, recalculation of the routing table) is required to activate the
	rerouting.
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server version 5.5.
	This problem was first corrected in Exchange Server 5.5 Service Pack 2.
	
	
	======================================================================
	Keywords          : kbusage exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
