---
layout: page
title: "Q164322: Memory Leak in NetQueryDisplayInformation API"
permalink: /kb/164/Q164322/
---

## Q164322: Memory Leak in NetQueryDisplayInformation API

	Article: Q164322
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNetkbbuglist kbfixlist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the NetQueryDisplayInformation API is called repeatedly, a memory leak
	occurs. The rate of the leakage depends greatly on the number of user accounts.
	The allocated memory will be regained as soon as the calling function
	terminates.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt memory leak
	
	======================================================================
	Keywords          : kbnetwork kbAPI kbSDKPlatform kbNetAPI kbGrpDSNet kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
