---
layout: page
title: "Q203597: Load Balancing PPTP with WLBS"
permalink: kb/203/Q203597/
---

## Q203597: Load Balancing PPTP with WLBS

	Article: Q203597
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2000,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describe how to configure WLBS to provide load balancing and/or
	failover for PPTP servers.
	
	MORE INFORMATION
	================
	
	Two network interface cards (NICs) must be used on each Windows NT Load
	Balancing Service (WLBS) host for this deployment. One NIC must be set to
	respond to the WLBS virtual IP address, while the other is set to respond to the
	dedicated IP address unique to each system. Because of a current limitation of
	VPN, these two addresses must be in different Class C address spaces.
	
	For additional information about how to configure WLBS using multiple NICs,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q197991 How to Configure WLBS Using Multiple Network Interface Cards
	
	To use WLBS to provide simple failover:
	
	Do not create any port rules. The host with the highest host priority (that is,
	"1") set in the WLBS Setup screen will handle all incoming connections by
	default. Upon node failure, all connections will then be handled by the node
	with the second highest host priority (that is, "2").
	
	To use WLBS to provide load balancing between PPTP servers:
	
	Set one port rule on all cluster hosts. The port rule should be for port range 0
	to 65,535 (that is, all ports), with Single Affinity set. This is the default
	port rule for WLBS.
	
	For additional information about how to configure WLBS port rules, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q198496 How to Configure WLBS Port Rules
	
	NOTE: Client sessions handled by a particular cluster host will break if the host
	becomes unavailable. Clients will then be prompted to log on again, with their
	new session then being handled by the appropriate remaining host.
	
	
	Additional query words: Convoy
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch kbwin2000Search kbWinAdvServSearch
	Version           : :1.0,2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
