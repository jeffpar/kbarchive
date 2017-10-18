---
layout: page
title: "Q159450: Second Recursive Query Sent from DNS Server Is Broken"
permalink: kb/159/Q159450/
---

## Q159450: Second Recursive Query Sent from DNS Server Is Broken

	Article: Q159450
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The second recursive query sent out from a Domain Name System (DNS) server is
	broken.
	
	CAUSE
	=====
	
	DNS Server does not handle the second recursive query correctly when the
	truncation bit is set.
	
	RESOLUTION
	==========
	
	Use the updated Dns.exe.
	
	
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
	
