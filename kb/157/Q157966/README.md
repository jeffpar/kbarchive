---
layout: page
title: "Q157966: XCON: Microsoft Exchange will not Allow Incoming X.25 Connection"
permalink: /kb/157/Q157966/
---

## Q157966: XCON: Microsoft Exchange will not Allow Incoming X.25 Connection

	Article: Q157966
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Message Transfer Agent (MTA) receives an inbound
	X.25 connection, it mail refuse the connection due to an incorrect X.121 address
	even though the addresses match on both sides.
	
	CAUSE
	=====
	
	Microsoft Exchange Server version 4.0 improperly overwrites the inbound X.121
	address field with the Incoming Facilities Data field and this causes the X.121
	addresses not to match when a session attempt is made.
	
	RESOLUTION
	==========
	
	If the Facilities Call Data field does not have to be used, the field can be
	left blank and the inbound X.121 address will be unaffected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of Microsoft
	Exchange. This problem was corrected in the latest Microsoft Exchange 4.0 Server
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: sp3 x25 eicon mci att
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
