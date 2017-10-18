---
layout: page
title: "Q154553: Windows NT 4.0 DNS WINS Reverse Lookups Do Not Use WINS"
permalink: kb/154/Q154553/
---

## Q154553: Windows NT 4.0 DNS WINS Reverse Lookups Do Not Use WINS

	Article: Q154553
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On a Windows NT 4.0 Domain Name System (DNS), Reverse WINS lookups are made
	through node status requests, not through WINS.
	
	MORE INFORMATION
	================
	
	Because the WINS database is not indexed by IP addresses, Windows NT 4.0 Domain
	Naming System (DNS) does not send a reverse name lookup to WINS to get the
	computer's name given its IP address. Instead, it sends a node status request
	directly to the given IP address
	
	  NBT: NS: Query req. for *<00...(15)>
	
	and gets the NetBIOS name from the node status response:
	
	  NBT: NS: Query (Node Status) resp. for *<00...(15)>, Success
	
	The DNS then appends the domain name to the NetBIOS name and returns the results
	to its clients.
	
	Additional query words: prodnt ntdns
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
