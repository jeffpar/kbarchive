---
layout: page
title: "Q138362: ARP Cache Management with Windows NT 3.5 and 3.51"
permalink: kb/138/Q138362/
---

## Q138362: ARP Cache Management with Windows NT 3.5 and 3.51

	Article: Q138362
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Address Resolution Protocol (ARP) allows a host to find the physical medium
	access control (MAC) address of a destination host on the same physical network
	given the destination IP address. To make ARP efficient, each computer caches
	IP-to-MAC address mappings to eliminate repetitive ARP broadcast requests. This
	article describes the feature that eliminates unused ARP cache entries for
	higher cache efficiency.
	
	MORE INFORMATION
	================
	
	Windows NT 3.5 and 3.51 cache management allows the ARP cache size to change
	automatically by flushing it from unused entries. The process is used to control
	ARP resources. Entries are aged out of the ARP cache if they are not used for
	two minutes. Entries that are being used within the first two minutes get aged
	out of the ARP cache after 10 minutes by default. Static entries (entries
	entered manually using the ARP -S command) are not aged out and remain in the
	ARP cache until the system is rebooted or manually deleted (using the ARP -D
	command).
	
	
	Currently, Windows NT 3.5 and 3.51 ARP cache management implementation does not
	allow any changes to the ARP cache defaults. The initial 2 minute lifetime and
	the 10 minute ArpCacheLife are not configurable.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
