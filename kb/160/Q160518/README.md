---
layout: page
title: "Q160518: Zone Files in Multiples of 4 KB May Cause Access Violation"
permalink: /kb/160/Q160518/
---

## Q160518: Zone Files in Multiples of 4 KB May Cause Access Violation

	Article: Q160518
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
	
	Your Domain Name System (DNS) service will not start, and it causes an access
	violation (AV) in DNS Manager.
	
	CAUSE
	=====
	
	Zone files that are exact multiples of 4 KB in length will cause an access
	violation in DNS Manager.
	
	RESOLUTION
	==========
	
	As a temporary workaround, you can add a comment to your zone file so that its
	size is not a multiple of 4 KB.
	
	To permanently fix this problem, apply Windows NT 4.0 Service Pack 2 or later.
	
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
	
