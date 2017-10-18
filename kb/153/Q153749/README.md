---
layout: page
title: "Q153749: No Single-Route Broadcast on Token Ring with Windows 95 TCP/IP"
permalink: kb/153/Q153749/
---

## Q153749: No Single-Route Broadcast on Token Ring with Windows 95 TCP/IP

	Article: Q153749
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbpolicy win95kbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a Token Ring network with Windows 95, ARP resolves addresses
	by first performing a local broadcast and then an All-Routes broadcast, but it
	does not perform a Single-Route broadcast.
	
	CAUSE
	=====
	
	The TCP/IP transport protocol included with Windows 95 uses this method of
	address resolution to prevent any problems that may occur with older routing
	bridges.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	MORE INFORMATION
	================
	
	TCP/IP resolves IP addresses to node (MAC) addresses using the ARP protocol. The
	All-Routes broadcasts by the ARP protocol do not take advantage of intelligent
	source-routing bridges that can route broadcasts through the single best route
	and avoid redundant network traffic.
	
	With this update, a Single-Route broadcast is made instead of an All- Routes
	broadcast if the following registry string value is present and set to a value
	of "1":
	
	  HKLM\System\CurrentControlSet\Services\VxD\MSTCP\ArpTRSingleRoute
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbpolicy win95 kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
