---
layout: page
title: "Q169017: Information on Groups &amp; Resources Using Cluster Server"
permalink: kb/169/Q169017/
---

## Q169017: Information on Groups &amp; Resources Using Cluster Server

	Article: Q169017
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Cluster Server (MSCS) for Windows NT Server, Enterprise Edition
	(NTS/E) provides higher availability and easier manageability for important
	resources and applications. MSCS runs as a system service and monitors the
	health of resources defined within the cluster. Cluster resources are organized
	by groups of similar or dependent resources.
	
	MORE INFORMATION
	================
	
	Using MSCS, groups of resources may be defined to develop logical groupings for
	important resources. Some examples of resource types may be applications,
	services, disks, file shares, print spoolers, TCP/IP addresses, network names,
	and so on. Other types of resources within the cluster may be added by software
	developers through custom DLLs if necessary. Many applications and services may
	not require special handling and may use generic resource types as provided with
	the product.
	
	Groups of resources allow similar or dependent resources to be grouped together.
	For clients to access resources within a group, the group must have a network
	name and IP address resource associated with it.
	
	These groups of resources may be owned and managed by any member computer (node)
	in the cluster. In the event of a failure within a group, the cluster software
	transfers the group of resources and data to a remaining node in the cluster.
	The network name, address, and other resources for the moved group remain with
	the group after the transfer. Therefore, clients on the network may still access
	the same resources by the same network name and IP address -- despite the name
	of the computer that offers the resources. Thus, these resources become more
	available. Groups may be moved automatically because of a resource failure
	within the group, or by an administrator for load balancing or administrative
	purposes.
	
	Multiple groups may be created within the cluster so that resources may be
	distributed among available nodes in the cluster. The ability to distribute
	groups independently allows the workload to be handled by more than one cluster
	node. Administrators may use each cluster node for normal day to day operations.
	In the event of a failure, the groups handled by a failing node will be
	automatically transferred to surviving nodes within the cluster.
	
	Resource dependencies may be established within a group to ensure availability of
	specific resources before other resources attempt to go online. For example, a
	file share resource may require a physical disk to be online to provide data to
	clients.
	
	Another example of resource dependencies may be for a Web server resource that
	needs an IP address to start. If you create the resource with a dependency on
	the IP address resource, the web service will not attempt to start until this
	becomes available.
	
	For more information on groups and resources within MSCS, consult the MSCS
	Administrator's Guide. The Administrator's Guide is located on CD-ROM 1 in the
	Support/Books folder, in addition to the hard copy that is received with the
	Enterprise product.
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbAudDeveloper kbClustServSearch
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
