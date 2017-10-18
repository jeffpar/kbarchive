---
layout: page
title: "Q164631: Scavenging WINS Database Removes Static Entries"
permalink: kb/164/Q164631/
---

## Q164631: Scavenging WINS Database Removes Static Entries

	Article: Q164631
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a Windows Internet Naming Service (WINS) database that contains replicated
	entries is scavenged, some static entries may be missing from the WINS
	database.
	
	This problem has only been reproduced when there are a large (over 5000) number
	of replicated static entries.
	
	RESOLUTION
	==========
	
	To fix this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt scavenge mappings
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
