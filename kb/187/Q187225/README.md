---
layout: page
title: "Q187225: XCON: Clustered MTA Generates Socket Errors w/X.400 Connections"
permalink: kb/187/Q187225/
---

## Q187225: XCON: Clustered MTA Generates Socket Errors w/X.400 Connections

	Article: Q187225
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The message transfer agent (MTA) of the clustered Exchange Server computer may
	experience problems communicating with another Exchange Server computer using an
	X.400 Connector over TCP/IP.
	
	CAUSE
	=====
	
	The MTA may generate socket errors when attempting an X.400 connection from the
	clustered Exchange Server computer to another Exchange Server computer, due to a
	resource problem with IP addresses.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the following fix or wait for the next Exchange
	Server service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
