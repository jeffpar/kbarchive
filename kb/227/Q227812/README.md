---
layout: page
title: "Q227812: Only TCP/IP Can Be Bound to Virtual Network Adapter in WLBS Host"
permalink: kb/227/Q227812/
---

## Q227812: Only TCP/IP Can Be Bound to Virtual Network Adapter in WLBS Host

	Article: Q227812
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Windows Load Balancing Service (WLBS) hosts that are operating in Unicast
	mode are connected directly to a switch, WLBS hides the virtual media access
	control (MAC) address by default so that the switch does not map the MAC address
	to a port. This is necessary because traffic to the virtual IP (VIP) address
	must reach all WLBS cluster hosts.
	
	As indicated in the WLBS configuration documentation, only TCP/IP should be bound
	to the virtual network adapter. If another protocol is bound to the virtual
	network adapter, the other protocol may send frames out through the network
	adapter, not giving the WLBS driver a chance to mask the virtual MAC address.
	
	MORE INFORMATION
	================
	
	The Network Load Balancing (NLB) driver in Windows 2000 Advanced Server and
	Datacenter Server is implemented as a filter and other protocols are not able to
	bypass it. NLB is then able to mask the virtual MAC address.
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q193602 Configuration Options for WLBS Hosts Connected to a Layer 2 Switches
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Component         : WLBS
	Technology        : kbWinNTsearch kbWinNT400xsearch kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400xsearch kbwin2000Search kbWinAdvServSearch kbWinDataServSearch
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
