---
layout: page
title: "Q248634: IPX Routing Does Not Succeed on a Windows NT 4.0 Network"
permalink: kb/248/Q248634/
---

## Q248634: IPX Routing Does Not Succeed on a Windows NT 4.0 Network

	Article: Q248634
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a multihomed Microsoft Windows NT Server 4.0-based computer
	as a router between subnets on a local area network (LAN) that is divided into
	multiple physical subnets, routing by using the NWLink Internetwork Packet
	Exchange/Sequenced Packet Exchange (IPX/SPX) compatible protocol on your network
	may not succeed.
	
	However, Transmission Control Protocol/Internet Protocol (TCP/IP) routing works
	correctly.
	
	CAUSE
	=====
	
	This behavior can occur when each physical subnet does not have a unique
	external network number.
	
	RESOLUTION
	==========
	
	To resolve this issue, assign a unique external network number to each network
	adapter on the multihomed Windows NT Server 4.0 router. (The NWLink protocol
	uses these external network numbers to identify unique network segments.) On
	each computer in the subnet, configure NWLink to use the correct external number
	for its subnet.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
