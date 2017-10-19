---
layout: page
title: "Q314588: XADM: Err Msg Running Backup Against a Clustered Exchange Server"
permalink: /kb/314/Q314588/
---

## Q314588: XADM: Err Msg Running Backup Against a Clustered Exchange Server

	Article: Q314588
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 29-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to perform an Exchange Server-aware backup against a clustered
	Exchange Server installation (one with two or more network interfaces), the
	backup software package may fail to communicate with the Exchange Server
	installation, and you may subsequently receive any of the following error
	messages:
	
	  RPC_S_SERVER_UNAVAILABLE
	
	  -or-
	
	  0x6ba
	
	  -or-
	
	  1722
	
	CAUSE
	=====
	
	Although you can specify and create additional IP address resources within the
	Cluster Administrator, Exchange Server binds only to a single IP address
	resource. As a result, Exchange Server does not register its remote procedure
	call (RPC) endpoints for these additional IP address resources and/or
	interfaces. Therefore, you may receive an error message when you attempt to
	perform Exchange Server operations against these additional network interfaces.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
