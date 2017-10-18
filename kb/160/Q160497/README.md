---
layout: page
title: "Q160497: Cache File Entries Disappear"
permalink: kb/160/Q160497/
---

## Q160497: Cache File Entries Disappear

	Article: Q160497
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your Domain Name System (DNS) fails to resolve names outside your zone. You
	check your cache file in <Ntroot>\system32\dns, and notice that there are
	no entries for the root name servers. The cache file is empty.
	
	CAUSE
	=====
	
	Empty cache data may inadvertently be written back to disk.
	
	RESOLUTION
	==========
	
	Apply Windows NT 4.0 Service Pack 2 or later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
