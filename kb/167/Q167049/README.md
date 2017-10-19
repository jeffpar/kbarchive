---
layout: page
title: "Q167049: DHCP May Not Assign a Default Gateway to Windows NT Clients"
permalink: /kb/167/Q167049/
---

## Q167049: DHCP May Not Assign a Default Gateway to Windows NT Clients

	Article: Q167049
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have configured a domain host configuration protocol (DHCP) server to
	provide a default gateway by using DHCP option 003 (router), Windows NT DHCP
	clients on the network receive a valid DHCP lease and all other DHCP lease
	options except the default gateway.
	
	CAUSE
	=====
	
	The DHCP option 003 (router) option was configured with a value that is not on
	the local subnet.
	
	RESOLUTION
	==========
	
	To resolve this problem, configure a valid value for this option. The default
	gateway for any computer running IP must be on that computer's local subnet.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Client computers running Windows 95 will accept an invalid default gateway and
	place it in the route table. Windows NT clients check the value they receive; if
	it is not on the local subnet, they will disregard the value.
	
	NOTE: Windows 2000, Windows 98, and Windows Millenium accept the incorrect
	gateway address, add it to their routing table and display it.
	
	In addition to the blank default gateway field, Windows NT clients also exhibit
	odd behaviour when releasing and renewing a lease with an invalid default
	gateway address. The client will appear to release correctly but will retain its
	settings and display them. When a renew is attempted, the client fails with a
	Error: 10065: renewing adapter "xxxxxx". The only way to properly renew the
	address is to reboot the client.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
