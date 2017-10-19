---
layout: page
title: "Q187915: XCON: MTA Routes Mail to EDK Connector when Other Route Exists"
permalink: /kb/187/Q187915/
---

## Q187915: XCON: MTA Routes Mail to EDK Connector when Other Route Exists

	Article: Q187915
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an Exchange Development Kit (EDK) Connector is installed on an Exchange
	Server 5.5 computer, and the EDK Connector has the same address space as another
	Exchange connector, the Exchange message transfer agent (MTA) will possibly
	route messages incorrectly to the EDK Connector.
	
	MORE INFORMATION
	================
	
	For example, a company develops an EDK Connector that can handle X.400
	addressing schemes. This company also has to send X.400 mail out an X.400
	Connector. This is not a problem if the address spaces are different. But if the
	same message handling capability is needed for both connectors, this presents a
	problem.
	
	On a typical X.400 Connector for an entire organization, the address space is
	X400:c=*. If both connectors have c=*, it is possible for messages that are
	meant for the EDK Connector to be routed out the X.400 Connector, resulting in a
	non-delivery report (NDR). The problem is also manifested by incoming messages
	from the EDK Connector into Exchange. If the message coming into Exchange is
	routed right back to the EDK Connector, an NDR will be generated if the message
	travels out the X.400 Connector.
	
	Microsoft has changed the behavior of the Exchange MTA in Exchange Server version
	5.5 Service Pack 2. The MTA now checks to see which connector the message
	originated from. If there is a duplicate route that is equally weighted in all
	categories, the MTA tries the duplicate route rather than sending the message
	back to the originating EDK Connector.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	
	Additional query words: routing route EMSMTA routes
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
