---
layout: page
title: "Q185455: XCON: Dynamic RAS Connector Fails to Maintain an Association"
permalink: kb/185/Q185455/
---

## Q185455: XCON: Dynamic RAS Connector Fails to Maintain an Association

	Article: Q185455
	Product(s): Microsoft Exchange
	Version(s): WinNT: 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Dynamic RAS connector no longer delivers messages after a few successful
	deliveries.
	
	CAUSE
	=====
	
	The Microsoft Exchange message transfer agent (MTA) is unable to form a session
	with the remote MTA because data in the OSI (Open Systems Interconnection) stack
	has been reordered. This is due to the slow nature of RAS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information about obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT: 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
