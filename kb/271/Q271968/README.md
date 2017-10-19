---
layout: page
title: "Q271968: XCON: Dr. Watson Message Occurs When Attempting to Start MTA"
permalink: /kb/271/Q271968/
---

## Q271968: XCON: Dr. Watson Message Occurs When Attempting to Start MTA

	Article: Q271968
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Message Transfer Agent (MTA), the service does not
	start and you may receive a Dr. Watson error message in the Emsmta.exe program.
	When you apply a post Exchange Server 5.5 Service Pack 3 (SP3) MTA fix, all
	messages that are addressed to users outside of the site generate non-delivery
	report (NDR) messages that include MTA congestion reason codes.
	
	CAUSE
	=====
	
	This issue can occur if a site connector on the server is pointing to a server
	that no longer exists in the remote site. The connector does not have a valid
	target server.
	
	The MTA congestion NDR messages indicate that the connection retry count has been
	exceeded because of continuous connection failures.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the unused site connector. Recalculate routing to
	remove this route from the site. Messages now move across the other connectors,
	and the congestion NDR messages stop. You can now successfully start and stop
	the MTA.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
