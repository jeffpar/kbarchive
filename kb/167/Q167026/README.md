---
layout: page
title: "Q167026: Windows NT 4.0 DNS Server Stops Responding to Queries"
permalink: /kb/167/Q167026/
---

## Q167026: Windows NT 4.0 DNS Server Stops Responding to Queries

	Article: Q167026
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 Domain Name Service (DNS) server may stop responding to queries,
	or you may notice DNS taking up large amounts of memory when multiple IP
	addresses are bound to the network adapter.
	
	CAUSE
	=====
	
	DNS server must open a socket on every address that will receive DNS queries.
	This can take up a lot of memory when multiple IP addresses or multiple network
	adapters are used.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 uses large buffers by default to avoid dropping packets when
	under high load. These buffer sizes have been reduced in Service Pack 3 when
	binding to more than three IP addresses.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
