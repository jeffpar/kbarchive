---
layout: page
title: "Q153072: Leases Retained in DHCP Database For One Day After Expiration"
permalink: /kb/153/Q153072/
---

## Q153072: Leases Retained in DHCP Database For One Day After Expiration

	Article: Q153072
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a DHCP client IP address lease expires, the lease is retained in the DHCP
	server database for approximately one day after the expiration.
	
	MORE INFORMATION
	================
	
	This grace period protects a client's lease if the client is in a time zone
	different from the DHCP server and the two computers' clocks are not
	synchronized. The grace period also allows for the situation where the client
	computer was not on the network at the time the lease expired.
	
	The expired leases are included in the aggregate Active/Excluded count and in the
	list of active clients in the Active Leases dialog box. They are distinguished
	by a dimmed icon.
	
	Additional query words: tcp/ip tcp dhcp
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
