---
layout: page
title: "Q174929: No Response to ARP Causes Duplicate IP Addresses on Network"
permalink: kb/174/Q174929/
---

## Q174929: No Response to ARP Causes Duplicate IP Addresses on Network

	Article: Q174929
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WinNT:4.0;Windows:3.11,95
	Operating System(s): 
	Keyword(s): kbnetwork kbWinNT400sp4fix win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows for Workgroups version 3.11 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one of the following error messages, depending on the
	client:
	
	Windows NT 4.0
	--------------
	
	  System Process - System Error
	  The system has detected an IP address conflict with another system on the
	  network. The local interface has been disabled. More details are available in
	  the system event log. Consult your network administrator to resolve the
	  conflict.
	
	Windows 95
	----------
	
	  Windows
	  The system has detected a conflict for IP address a.b.c.d with the system
	  having hardware address 11:11:11:11:11:11. The interface has been disabled.
	
	Windows for Workgroups
	----------------------
	
	  Windows
	  The system has detected a conflict for IP address a.b.c.d with the system
	  having hardware address 00:00:00:00:00:00. The local interface has been
	  disabled.
	
	CAUSE
	=====
	
	The Microsoft networking clients listed above do not respond to an address
	resolution protocol (ARP) request when the ARP sender's IP address is 0.0.0.0.
	This causes a problem with Dynamic Host Configuration Protocol (DHCP)
	environments, which may result in duplicate IP addresses on the network.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Microsoft has confirmed this to be a problem in the Microsoft products
	listed at the beginning of this article. We are researching this problem
	and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	
	Non-Microsoft DHCP clients fill in the sender's IP address with 0.0.0.0
	when using ARP to check if the DHCP lease that it has been offered is a
	duplicate address on the network. Because the Microsoft clients above do
	not respond to this ARP, it is possible to end up with duplicate addresses
	on the network.
	
	The following information is taken from RFC1541:
	
	The client may issue an ARP request for the suggested request. When
	broadcasting an ARP request for the suggested address, the client must
	fill in its own hardware address as the sender's hardware address, and 0
	as the sender's IP address, to avoid confusing ARP caches in other hosts
	on the same subnet. If the network address appears to be in use, the
	client sends a DHCPDECLINE message to the server and waits for another
	DHCPOFFER. As the client does not have a valid network address, the
	  client must broadcast the DHCPDECLINE message.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbWinNT400sp4fix win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWin95search kbTCPIPSearch kbWFWSearch kbZNotKeyword3 kbWFW311 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : WinNT:4.0;Windows:3.11,95
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
