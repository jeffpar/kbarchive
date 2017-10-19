---
layout: page
title: "Q117811: No Option to Set ArpCacheLife in Windows NT 3.5"
permalink: /kb/117/Q117811/
---

## Q117811: No Option to Set ArpCacheLife in Windows NT 3.5

	Article: Q117811
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	The TCP/IP stack for Windows NT 3.5 does not allow the change of the
	ArpCacheLife for an entry in the address resolution protocol (ARP) cache.
	
	In Windows NT 3.1, the ARP cache had an entry in the Registry called
	ArpCacheLife. You could manually set how long an entry stayed in the cache
	by changing this Registry key. The new TCP/IP stack in Windows 3.5 does not
	support this change in the Registry.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
