---
layout: page
title: "Q232000: How to Configure WLBS with Multiple Virtual IP Addresses"
permalink: /kb/232/Q232000/
---

## Q232000: How to Configure WLBS with Multiple Virtual IP Addresses

{% raw %}

	Article: Q232000
	Product(s): Microsoft Windows NT
	Version(s): 1.0,2000,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Load Balancing Service 1.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can configure Windows NT Load Balancing Service (WLBS) to load balance more
	than one virtual Internet Protocol (IP) address by binding the IP addresses to
	the virtual network adapter.
	
	MORE INFORMATION
	================
	
	NOTE: The following changes should be made to the TCP/IP properties for the
	server running WLBS.
	
	To configure WLBS to load balance more than one virtual IP address:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Network.
	
	2. Click the Protocols tab, click TCP/IP, and then click Properties.
	
	3. In the Adapter box, click WLBS Virtual NIC.
	
	4. Click Advanced, add the IP addresses you want WLBS to load balance, and then
	  click OK.
	
	5. Close Control Panel, and then restart the computer.
	
	You can type only one virtual IP address in the WLBS Setup dialog box. However,
	all IP addresses bound to the virtual network adapter are load balanced, with
	the exception of the dedicated IP address.
	
	NOTE: Port rules apply to all virtual IP addresses.
	
	NOTE: This fix should apply to TCP/IP properties.
	
	Additional query words: nlb
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbWinNTLBS100 kbWinNTLBSSearch kbwin2000Search kbWinAdvServSearch
	Version           : :1.0,2000,4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
