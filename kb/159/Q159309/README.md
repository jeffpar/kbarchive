---
layout: page
title: "Q159309: Windows NT 4.0 RAS Not Releasing Static IP Addresses"
permalink: kb/159/Q159309/
---

## Q159309: Windows NT 4.0 RAS Not Releasing Static IP Addresses

	Article: Q159309
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 RAS clients fail to be assigned an IP address from the RAS
	server's static address pool. However, there appear to be IP addresses, which
	should be available.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 RAS server assigns static IP addresses from a pool to incoming
	clients, and when they hang up, the addresses are not released.
	
	During regular use, it is observed that, on client hang-up, the IP address
	assigned to the client is not returned to the IP address pool. This problem is
	inconsistent and may happen about once in every 10 to 20 connections. The
	address remains in the routing table. Trying to ping the "lost" IP address
	results in a "Hardware error" message.
	
	If manually removing the address from the routing table (route delete), it will
	still not be reused by RAS. Stopping and starting the Remote Access Service does
	not restore the "lost" addresses to the address pool.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt ras static ip address
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
