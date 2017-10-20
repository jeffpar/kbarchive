---
layout: page
title: "Q169691: XCON: MTA Slow to X.400 Links"
permalink: /kb/169/Q169691/
---

## Q169691: XCON: MTA Slow to X.400 Links

{% raw %}

	Article: Q169691
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server message transfer agent (MTA) delivers mail
	extremely slowly on computers that have multiple X.400 links over TCP/IP if some
	of the TCP/IP connections are over slow network links.
	
	CAUSE
	=====
	
	Flow control within the MTA code above the WINSOCK layer (within the TP0
	Transport layer for TCP/IP or Session layer for TP4) for the slowest connection
	is stalling mail for faster connections.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	With the fix applied, the MTA changes the flow control method within the OSI
	stack above the TCP/IP (or TP4) connection to allow WinSock to handle flow
	control. This will make the X.400 links faster because WinSock is multithreaded
	and can handle as much as the MTA can hand to it.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
