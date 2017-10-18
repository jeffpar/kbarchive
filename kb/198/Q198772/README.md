---
layout: page
title: "Q198772: XFOR: Configuring Transport Selectors with Exchange 5.5 SP1"
permalink: kb/198/Q198772/
---

## Q198772: XFOR: Configuring Transport Selectors with Exchange 5.5 SP1

	Article: Q198772
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The X.400 transport selectors are found in three configuration fields in the
	Exchange Server Administrator program:
	
	A. Stack T-Selector:
	
	1. Expand on Site, then Configuration, then Servers, and select the Server
	  object.
	
	2. In the right pane you will find a protocol stack in the form of TCP
	  (servername), for example, TCP(Server1).
	
	B. Outgoing T-Selector:
	
	1. Expand on Site, then Configuration, then Connectors.
	
	2. In the right pane, select your X.400 Connector. You will find a Stack
	  property page with both an Outgoing and Incoming section for the transport
	  values.
	
	C. Incoming T-Selector:
	
	1. Expand on Site, then Configuration, then Connectors.
	
	2. In the right pane, select your X.400 Connector. You will find a Stack
	  property page with both an Outgoing and Incoming section for these values.
	
	MORE INFORMATION
	================
	
	The usage of these three fields (A, B, and C) has been changed in the Exchange
	Server 5.5 Service Pack 1 (SP1) message transfer agent (MTA) to allow multiple
	links of the same transport type between two MTAs. In particular, the C field is
	never read by the latest Exchange Server 5.5 SP1 MTA.
	
	When configuring links for an Exchange Server 5.5 SP1 MTA to another Exchange
	Server 5.5 SP1 MTA, only the B field is required to match on both sides. The
	settings of the A and C fields make no difference when Exchange Server 5.5 SP1
	MTA connects to another Exchange Server 5.5 SP1 MTA.
	
	When configuring links between Exchange Server 5.5 SP1 MTA to an earlier version
	of Exchange Server (and for our discussion, we will assume the other MTA is in
	Exchange Server 5.0), then the following rules apply:
	
	- The Exchange Server 5.0 B field must match the Exchange Server 5.5 SP1 B
	  field.
	
	- If the Exchange Server 5.0 C field is configured, then the Exchange Server
	  5.0 C field must match the Exchange Server 5.5 A field. If the Exchange
	  Server 5.0 C field is not configured, then the Exchange Server 5.0 B field
	  must match the Exchange Server 5.5 A field.
	
	When the Exchange Server 5.5 SP1 MTA connects to a non-Exchange Server MTA with
	5.5 SP1:
	
	- A must match the value configured in the foreign MTA for the Exchange Server
	  T-Selector.
	
	- B must match the value configured in the foreign MTA for its own local
	  T-Selector.
	
	For completeness, when configuring an Exchange Server 5.0 MTA to an Exchange
	Server 5.0 MTA:
	
	- The local A field must match the remote B field (or remote C field, if
	  configured).
	
	- If the local C field is not configured, then the local B field must match the
	  remote A field.
	
	- If the local C field is configured, then the local C field must match the
	  remote A field.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
