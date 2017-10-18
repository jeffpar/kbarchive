---
layout: page
title: "Q151416: Microsoft DNS Compatibility w/BIND Versions Earlier Than 4.9.4"
permalink: kb/151/Q151416/
---

## Q151416: Microsoft DNS Compatibility w/BIND Versions Earlier Than 4.9.4

	Article: Q151416
	Product(s): Microsoft Windows NT
	Version(s): 4.00
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
	
	By default, the Microsoft Domain Name System (DNS) implementation will send zone
	transfers to non-Microsoft DNS secondaries with one resource record per message.
	This behavior can be changed by editing the registry.
	
	Zone transfers between Microsoft DNS servers will always be done using a faster
	method, consisting of multiple records per message, and compression, regardless
	of how the registry entry described below is set.
	
	MORE INFORMATION
	================
	
	Zone transfers are the exchange of resource record information between a primary
	DNS server and it's secondary servers.
	
	Prior to BIND version 4.9.4, implementations of DNS would send one resource
	record per message to secondary servers. For this reason, Windows NT defaults to
	this standard when sending messages to a non-Microsoft secondary DNS server.
	
	If the DNS secondary servers are running BIND version 4.9.4 or better, it will be
	able to send multiple resource records at a time.
	
	You can change the behavior of Microsoft DNS with the following change to the
	registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (REGEDT32.EXE).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	  \SYSTEM\CurrentControlSet\Services\DNS\Parameters
	
	  This key does not exist by default.
	
	3. Change BindSecondaries from 0 to 1.
	
	  Once the key is there, change to 0 for improved performance
	
	4. Stop and restart the Microsoft DNS server.
	
	Transfers between Microsoft DNS servers will always be done with using the
	faster, high compression method, regardless of how the BindSecondaries flag is
	set.
	
	Additional query words: prodnt sur
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.00
	
	=============================================================================
	
