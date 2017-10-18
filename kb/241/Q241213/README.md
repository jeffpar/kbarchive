---
layout: page
title: "Q241213: XFOR: Message Looping w/SNADS/PROFS/GroupWise/Notes Connectors"
permalink: kb/241/Q241213/
---

## Q241213: XFOR: Message Looping w/SNADS/PROFS/GroupWise/Notes Connectors

	Article: Q241213
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a user of Microsoft Exchange 5.5 SNADS connector attempts to send a message
	to a specific recipient, the SNADS system routes the message to the Exchange
	Server organization. That specific recipient doesn't exist anywhere in the
	Exchange Server global address list, and the node name of the SNADS address
	isn't the node name in site addressing, where the address is in the format:
	<node_name>(<user>).
	
	CAUSE
	=====
	
	The receiving message transfer agent (MTA) attempts to route the message,
	however, the only other route is through the SNADS connector on the other side.
	The MTA routes the message out of the SNADS connector. The SNADS system receives
	the message, routes back in, causing the message looping.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	A new Exchconn.ini entry has been created that allows users to change this
	behavior. The entry is called AllowUnresolvedAddresses and it should be put
	under the [LME-SNADS-MEXIN] section in the Exchconn.ini file.
	
	The default value is YES. Set it to NO if you do not want Exchange Server to
	reject any recipient addresses that are not Exchange Server addresses.
	Basically, Exchange Server does not accept 'One-Off' addresses if this is set to
	NO.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
