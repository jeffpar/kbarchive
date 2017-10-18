---
layout: page
title: "Q176033: XADM: Cannot Stop MS Mail (PC) or cc:MAIL Address Generation"
permalink: kb/176/Q176033/
---

## Q176033: XADM: Cannot Stop MS Mail (PC) or cc:MAIL Address Generation

	Article: Q176033
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You cannot stop cc:Mail or MS Mail (PC) proxy address generation on a Microsoft
	Exchange 4.0 server if a Microsoft Exchange 5.5 server is in the same site. You
	can disable cc:Mail or MS Mail (PC) address types from being generated via
	Configuration, Site Addressing, Site Addressing tab on the Exchange 5.5 server.
	This will remove the cc:Mail or MS Mail (PC) addresses from all users in the
	site. However, when you create new users in the Exchange 4.0 server, cc:Mail or
	MS Mail (PC) address types will continue to be generated. Creating new users in
	the Exchange 5.5 server will not generate cc:Mail or MS Mail (PC) address types.
	
	CAUSE
	=====
	
	This is by design, because Exchange 4.0 does not support a new property of the
	Exchange 5.5 directory schema. When you disable the cc:Mail or MS Mail (PC)
	address type, an attribute called Disabled-Gateway-Proxy is added to the
	Exchange directory schema. This attribute lists the proxy addresses that are
	disabled. On the Exchange 4.0 server, this attribute is added, but the list of
	disabled addresses is blank.
	
	Additional query word: RAW
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.5
	Solution Type     : kbpending
	
	=============================================================================
	
