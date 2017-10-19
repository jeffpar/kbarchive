---
layout: page
title: "Q232997: Convergence in Windows NT Load Balancing Service"
permalink: /kb/232/Q232997/
---

## Q232997: Convergence in Windows NT Load Balancing Service

	Article: Q232997
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Each server in a Windows NT Load Balancing Service (WLBS) cluster receives all
	inbound requests to the Virtual IP Address (VIP). Convergence is the process in
	which the servers (through a proprietary hashing algorithm) agree in advance
	which server handles a given request. The decision is made based on the packet's
	source IP address and possibly TCP or UDP port number (if Affinity is not used).
	
	MORE INFORMATION
	================
	
	WLBS balances load in a statistical manner; all of the client IP:port space is
	mapped to the servers as a consequence of the convergence process. Each server
	is assigned parts of this space in order to achieve load distribution.
	
	The convergence process is started when servers are added to or removed from a
	cluster. Cluster integrity is monitored by the periodic exchange of heartbeats
	between cluster members. When a member misses a user-defined number of
	heartbeats from a server, it initiates the convergence process to form a new
	cluster. When a new server is added to the cluster, the existing servers detect
	the heartbeat from the new server and the convergence process is initiated.
	
	The convergence process takes approximately three seconds, and cluster operations
	continue during this time. Convergence is complete when all present hosts
	exchange consistent information and a sufficient number of status messages are
	exchanged.
	
	REFERENCES
	==========
	
	For more information about Cluster Server and WLBS, please see the following
	Microsoft Knowledge Base article:
	
	  Q232711 How Cluster Integrity is Monitored in WLBS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
