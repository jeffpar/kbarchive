---
layout: page
title: "Q182986: XCON: Use Expedited Data Option Relevant Only for TP4 Stacks"
permalink: kb/182/Q182986/
---

## Q182986: XCON: Use Expedited Data Option Relevant Only for TP4 Stacks

	Article: Q182986
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In earlier versions of Microsoft Exchange Server, the Stack tab in the
	properties for an X.400 Connector contains a Use Expedited Data check box,
	regardless of the type of transport stack you are using. However, selecting the
	Use Expedited Data check box can increase communication speed only if you are
	using a Transport Class 4 (TP4) transport stack.
	
	Therefore, in Exchange Server 5.5, the check box is not available if you are
	using a Transport Control Protocol/Internet Protocol (TCP/IP) or Transport Class
	0 (TP0)/X.25 transport stack.
	
	MORE INFORMATION
	================
	
	The Use Expedited Data check box is used to increase communication speed on
	networks that recognize data packets identified for accelerated transfer. Some
	networks require the use of expedited data.
	
	Additional query words: message transfer agent mta transport stack
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
