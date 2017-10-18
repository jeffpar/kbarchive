---
layout: page
title: "Q152864: XFOR: Exchange Doesn't Handle Multiple Comments in Addresses"
permalink: kb/152/Q152864/
---

## Q152864: XFOR: Exchange Doesn't Handle Multiple Comments in Addresses

	Article: Q152864
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are connected to Microsoft Exchange Server and you receive a message from
	a user on the Internet with multiple comments on their address line, their
	return address will be incorrectly formed.
	
	MORE INFORMATION
	================
	
	For example, if the users' e-mail address is:
	
	  USER1@HOST.DOMAIN (Comment 1) (Comment2)
	
	Microsoft Exchange Server will try to reply to:
	
	  USER1@HOST.DOMAIN (Comment 1)
	
	This will result in a Non-Delivery Report (NDR) and the reply message will not
	reach its destination.
	
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
	Version           : winnt:4.0
	
	=============================================================================
	
