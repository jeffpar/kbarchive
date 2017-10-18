---
layout: page
title: "Q191594: XCON: Site Connector Not Usable Through a Firewall"
permalink: kb/191/Q191594/
---

## Q191594: XCON: Site Connector Not Usable Through a Firewall

	Article: Q191594
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	According to the Microsoft Knowledge Base article Q161931, "XCON: Configuring
	MTA TCP/IP Port # for X.400 and RPC Listens," two Exchange Server computers in
	different sites can be configured to communicate through a firewall by setting
	the desired port numbers for RPC Listens. However, if the firewall filters
	incoming and outgoing ports, no mail is flowing and the event log shows the
	following 9322 error:
	
	  An interface error has occurred. An MtaBindBack over RPC has failed.
	  Locality Table (LTAB) index: %1, NT/MTA error code: %2. Comms error %3,
	  Bind error %4, Remote Server Name %5, Protocol String %6 [%7 %8 %9 %10]
	  (14)
	
	CAUSE
	=====
	
	The calling Exchange Server MTA issues a RPC bind command that contains a TCP
	port number to be used in the reply, the bindback RPC command. When replying,
	the called MTA does not use this port number, and as the firewall is configured
	to let go through only this port number, the reply is never received by the
	calling MTA. The communication is not established and as a result no mail can be
	sent or received.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 : XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
