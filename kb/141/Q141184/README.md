---
layout: page
title: "Q141184: DHCP Server Shows Active Leases for Non-Existent RAS Servers"
permalink: /kb/141/Q141184/
---

## Q141184: DHCP Server Shows Active Leases for Non-Existent RAS Servers

	Article: Q141184
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A DHCP server has active leases for Remote Access Service (RAS) servers, but
	there are no RAS servers running on the network.
	
	NOTE: You can tell that the addresses are for RAS by the telephone icon in the
	active lease window.
	
	CAUSE
	=====
	
	When the RAS servers configured to use TCP/IP were previously active, they
	received leased IP addresses from the Dynamic Host Configuration Protocol (DHCP)
	server. When the RAS servers were configured to only allow users to dial out
	those leased IP addresses were not deallocated by the DHCP server.
	
	There were Remote Access servers installed (configured to Receive calls and to
	dial-out) and configured for TCP/IP at one time, and they were allocated
	addresses by the DHCP server, but they were changed to dial-out only through the
	NCPA.
	
	RESOLUTION
	==========
	
	1. Start Registry Editor and go to the following subkey:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \RemoteAccess\Parameters\IP
	
	2. To delete the IP key, choose Delete from the Edit menu.
	
	Be sure that the only key that appears under the Parameters key is the
	NetbiosGateway key.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
