---
layout: page
title: "Q164723: Blue Screen Stop 0x41 Error MUST_SUCCEED_POOL_EMPTY"
permalink: kb/164/Q164723/
---

## Q164723: Blue Screen Stop 0x41 Error MUST_SUCCEED_POOL_EMPTY

	Article: Q164723
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The computer displays a blue screen STOP error with the following message:
	
	  STOP 0x00000041 MUST_SUCCEED_POOL_EMPTY (0x1000,0x440,0x2E,0x1)
	
	  Parameter 1: The size of the request that could not be satisfied (0x1000)
	  Parameter 2: The number of pages used of nonpaged pool (0x440)
	  Parameter 3: The number of > PAGE_SIZE requests from nonpaged pool (0x2E)
	  Parameter 4: The number of pages available (0x1)
	
	NOTE: Parameter values may vary.
	
	CAUSE
	=====
	
	This message is caused when high numbers of UDP packets are received by the
	server. The receive queue of the server eventually gets backed up and it
	eventually runs out of memory when allocating memory descriptor lists (MDLs) for
	the data coming in.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: stop 0x41 fault trap
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
