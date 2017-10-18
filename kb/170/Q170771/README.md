---
layout: page
title: "Q170771: Cluster May Fail If IP Address Used from DHCP Server"
permalink: kb/170/Q170771/
---

## Q170771: Cluster May Fail If IP Address Used from DHCP Server

	Article: Q170771
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 05-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Cluster Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a server runs Microsoft Cluster Server version 1.0 and the installed network
	adapters obtain IP addresses from a DHCP server, the ability to access the
	cluster may be compromised.
	
	CAUSE
	=====
	
	Microsoft Cluster Server expects the primary address on configured network cards
	to remain available. If a leased address expires and cannot be renewed, network
	connectivity may be lost. As a result, failures may occur within the cluster.
	
	
	RESOLUTION
	==========
	
	To prevent IP address failure and other problems, use a static IP address for
	network adapters installed in cluster nodes. Static addresses will ensure
	availability of critical IP addresses and will further ensure high availability
	of important resources.
	
	Additional query words: MSCS
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbwin2000Search kbAudDeveloper kbClustServSearch kbWinAdvServSearch
	Version           : :2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
