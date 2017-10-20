---
layout: page
title: "Q149468: CSNW Clients May Cause Clipper Index Corruption"
permalink: /kb/149/Q149468/
---

## Q149468: CSNW Clients May Cause Clipper Index Corruption

{% raw %}

	Article: Q149468
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Clipper applications that are run on a Windows NT client using Client Services
	for NetWare (CSNW) may corrupt Clipper database index files maintained on a
	Novell or Novell-compatible server.
	
	CAUSE
	=====
	
	In some cases, a file with a read-associated cache can become old when a write
	overlaps the read cache.
	
	The corruption is caused by old data being read in from the read cache; Clipper
	then uses that data to build the index file. For example, the following sequence
	on reads and writes results in index corruption:
	
	1. A Clipper application builds a database and index from data set 1.
	
	2. The Clipper application reads data set 2.
	
	3. The Clipper application reads the database file with data set 1 and caches
	  it.
	
	4. The Clipper application writes to the database with data from data set 2.
	
	5. The Clipper application re-reads the database with data from set 1 using the
	  stale read cache.
	
	6. The Clipper application builds the incorrect index file from the stale
	  database read from the cache.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Window NT version 3.51. This
	problem was corrected in the latest U.S. Service Pack for Windows NT Workstation
	or Server version 3.51. For information on obtaining this update, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
