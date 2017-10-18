---
layout: page
title: "Q140956: XCON: MTA: Aborts Connection After Legitimate RTSE Activity"
permalink: kb/140/Q140956/
---

## Q140956: XCON: MTA: Aborts Connection After Legitimate RTSE Activity

	Article: Q140956
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) will appear to not accept an
	incoming message from the PMDF X.400 gateway. The message will remain in the
	PMDF queue and will not be transferred or rejected. The message will also not
	attempt to be transmitted through an alternate route.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Microsoft Exchange Server now allows connections to be inactive for extended
	periods while the RTS.CB states mentioned above are pending.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : :4.0
	
	=============================================================================
	
