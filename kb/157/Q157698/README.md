---
layout: page
title: "Q157698: XCON: Exchange Fails to Allow an Incoming X.25 Connection"
permalink: kb/157/Q157698/
---

## Q157698: XCON: Exchange Fails to Allow an Incoming X.25 Connection

	Article: Q157698
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP1,4.0 SP2
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0 SP1, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) might fail to receive an
	inbound X.25 connection due to an incorrect X.121 address. This can occur even
	though the X.121 addresses match on both sides of the connection.
	
	CAUSE
	=====
	
	The MTA improperly overwrites the inbound X.121 Address field with the incoming
	Facilities Data field. This causes the X.121 addresses not to match when a
	session attempt is made. Thus, the X.25 listen will fail if Facilities Data is
	configured inbound.
	
	MORE INFORMATION
	================
	
	If the Facilities Call Data field does not have to be used, the field can be
	left blank and the inbound X.121 address will be unaffected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	Additional query words: sp3 x25 eicon mci att
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange400SP1 kbExchange400SP2
	Version           : winnt:4.0 SP1,4.0 SP2
	
	=============================================================================
	
