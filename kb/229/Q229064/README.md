---
layout: page
title: "Q229064: Load Balanced Service May Not Work Properly"
permalink: kb/229/Q229064/
---

## Q229064: Load Balanced Service May Not Work Properly

	Article: Q229064
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A service being load balanced by the Windows NT Load Balancing service (WLBS) or
	the Windows 2000 Network Load Balancing (NLB) feature may not work at all or
	present unpredictable behavior. The client program may report connection errors.
	
	CAUSE
	=====
	
	This problem occurs because datagrams or segments are being fragmented by the IP
	protocol (possibly by the Router forwarding the packets to the cluster's
	segment) when their size is greater than the Maximum Transfer Unit AND Affinity
	of None is being used in the cluster. The first packet that contains the TCP/UDP
	header is handled properly by the correct cluster host, however, the following
	fragmented packets do not include a TCP/UDP header and may be handled by
	different hosts randomly.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure a single port rule covering ports 0 - 65535
	for both TCP and UDP AND use Affinity. This rule should be configured in the
	cluster whenever fragmentation is expected.
	
	MORE INFORMATION
	================
	
	When using no Affinity, WLBS or NLB checks the TCP OR UDP header of a packet
	arriving from a client (to obtain the client's port address), as well as the IP
	header. Fragmented IP packets contain just the IP header, preventing WLBS or NLB
	from finding out the port information needed to determine which WLBS host should
	accept the packet. Using Affinity causes WLBS or NLB to check just the IP header
	of a packet arriving from a client.
	
	REFERENCES
	==========
	
	For more information, please see the following Microsoft Knowledge Base
	article:
	
	  103884 The OSI Model's Seven Layers Defined and Functions Explained
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch kbwin2000Search kbWinAdvServSearch
	Version           : :1.0,2000,4.0
	Issue type        : kbprb
	
	=============================================================================
	
