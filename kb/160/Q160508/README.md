---
layout: page
title: "Q160508: Unnecessary DNS Zone Transfers"
permalink: /kb/160/Q160508/
---

## Q160508: Unnecessary DNS Zone Transfers

	Article: Q160508
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Zone transfers take place, even when no data has been changed on the primary
	Domain Name System (DNS).
	
	CAUSE
	=====
	
	The SOA serial number may be inadvertently incremented, causing unnecessary
	notifies to secondaries, which cause unnecessary zone transfers.
	
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
	
