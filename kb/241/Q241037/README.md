---
layout: page
title: "Q241037: XADM: Local.in.txt Is Needed When Using Mixer"
permalink: kb/241/Q241037/
---

## Q241037: XADM: Local.in.txt Is Needed When Using Mixer

	Article: Q241037
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Even after you create the Mcgam.in.txt file, the mixer functionality (support
	for RFC 2156 address mapping) isn't enabled.
	
	The Mappings.out.txt file contains the following (the same as when no mapping is
	configured):
	
	  Revert to old tables.
	
	MORE INFORMATION
	================
	
	When you enable Mixer, the Mcgam.in.txt file is not enough, you must also create
	a file named Local.in.txt (an empty one is enough) in the Exchsrvr\Mtadata (or
	whichever directory is the MTA Run Directory).
	
	This file allows the local administrator to add mapping without modifying the
	Mcgam.in.txt. This way, you can have the same Mcgam.in.txt file throughout your
	organization.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
