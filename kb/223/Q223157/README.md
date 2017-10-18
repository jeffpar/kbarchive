---
layout: page
title: "Q223157: Integrating WLBS and MSCS"
permalink: kb/223/Q223157/
---

## Q223157: Integrating WLBS and MSCS

	Article: Q223157
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Load Balancing Service (WLBS) provides scalability and high availability
	to enterprise-wide TCP/IP services, such as Web, Proxy, Virtual Private
	Networking, and streaming media services. WLBS allows incoming IP traffic to be
	dynamically distributed across cluster nodes (up to 32 nodes). WLBS can
	automatically detect whether a node in the cluster fails. When this occurs, the
	remaining nodes can adjust to take over the workload.
	
	Microsoft Cluster Service (MSCS) is software that supports the connection of two
	servers into a cluster for higher availability and easier manageability of data
	and programs such as Microsoft SQL Server, Microsoft Exchange Server, and so on.
	MSCS can automatically detect and recover from server failures or program
	problems.
	
	WLBS is fully complementary to MSCS. MSCS provides a reliable platform for
	database, messaging, and related program services by using "failover" for two
	nodes, while WLBS balances and distributes client connections (TCP/IP
	connections) over multiple servers. In a two-tier configuration, MSCS handles
	the back-end data service layer, while WLBS handles the front-end client user
	interface (UI) layer.
	
	MORE INFORMATION
	================
	
	Currently, Microsoft does not recommend or support running MSCS and WLBS on the
	same node. The effect of the failover of MSCS on WLBS' handling of the virtual
	IP address on the cluster network adapter has not been tested.
	
	MSCS' IP addresses should not be the same as WLBS' virtual IP address. MSCS could
	use WLBS' dedicated IP address or another IP address on a different network
	adapter.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch
	Version           : winnt:1.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
