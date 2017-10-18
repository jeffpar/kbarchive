---
layout: page
title: "Q156284: ARP -A Causes Access Violation When Pinging Heavily"
permalink: kb/156/Q156284/
---

## Q156284: ARP -A Causes Access Violation When Pinging Heavily

	Article: Q156284
	Product(s): Microsoft Windows NT
	Version(s): 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run ARP -A on your computer while running several applications that add
	addresses to the ARP cache (such as starting PING from a command script), ARP
	experiences an access violation while printing the ARP cache entries.
	
	If you have a Drwatson.log file with symbols installed the stack will look like
	the following:
	
	0012fc34 77f64c12 00140000 00149a58 0012fc60 00000000 ntdll!RtlDestroyHeap
	0012fc64 77f02a81 00140000 00000000 00149a60 77fa4510 ntdll!RtlFreeHeap
	0012fca8 0100241b 00149a60 77fa4510 77f6c1a2 7ffdf000 kernel32!LocalFree
	0012fd10 01001789 0015b160 77fa4510 77f6c1a2 7ffdf000 arp!PrintArpEntry
	(FPO: Non-FPO [1,21,3])
	0012fd80 0100142e 00000000 00000000 00000000 77fa4510 arp!PrintArp (FPO:
	Non-FPO [3,23,3])
	0012ff64 010040dc 00000002 00310800 003101a0 77fa4510 arp!main (FPO: Non-
	FPO [2,114,3])
	
	CAUSE
	=====
	
	When ARP retrieves the ARP cache entries through SNMP, SNMP does not synchronize
	itself with ARP. This lack of synchronization can cause ARP to read the ARP
	cache entry as invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51 4.0
	
	=============================================================================
	
