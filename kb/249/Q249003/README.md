---
layout: page
title: "Q249003: DHCP Clients Receive Identical IP and Default Gateway Addresses"
permalink: kb/249/Q249003/
---

## Q249003: DHCP Clients Receive Identical IP and Default Gateway Addresses

	Article: Q249003
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:; winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you release or renew a DHCP client or when you lease an IP address during
	startup on a switched network, you may receive an IP address and default gateway
	address that are identical.
	
	For example, if your computer is supposed to use the following IP addresses
	
	  IP address: 192.168.0.15
	  Default Gateway: 192.168.0.1
	
	you may actually receive identical addresses:
	
	  IP address: 192.168.0.15
	  Default Gateway: 192.168.0.15
	
	CAUSE
	=====
	
	This issue can occur if the setting on the Auto Gateway Control or Auto
	Broadcast Control switch is turned on.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of your Ethernet switch.
	
	
	MORE INFORMATION
	================
	
	If the settings on the Auto Gateway Control or Auto Broadcast Control switch are
	turned on, then the DHCPOFFER packet is stripped down, which changes the default
	gateway to the same address as the IP address.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin98search kbWin98
	Version           : WINDOWS:; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
