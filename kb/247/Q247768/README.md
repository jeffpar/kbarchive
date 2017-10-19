---
layout: page
title: "Q247768: No Load Balancing When Connecting to Cluster Virtual IP Address"
permalink: /kb/247/Q247768/
---

## Q247768: No Load Balancing When Connecting to Cluster Virtual IP Address

	Article: Q247768
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you obtain access to a cluster virtual Internet Protocol (IP) address from
	a cluster node of the same cluster, the connection is always made to the local
	computer.
	
	CAUSE
	=====
	
	This behavior occurs because the cluster IP address is interpreted as a local
	address, so the Transport Control Protocol/Internet Protocol (TCP/IP) stack
	loops the connection back to the local host. Because of this, the packets are
	never sent to the network, and Windows Load Balancing Service (WLBS) fault
	tolerance and load balancing are not effective.
	
	RESOLUTION
	==========
	
	To obtain access to other hosts on the cluster, the dedicated IP address of the
	respective node must be used. To achieve load balancing with the client running
	on a WLBS cluster, the server program must reside on a different cluster.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	
