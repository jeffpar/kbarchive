---
layout: page
title: "Q164904: Stop 0x0000000A in NETBT.SYS After Applying Service Pack 2"
permalink: /kb/164/Q164904/
---

## Q164904: Stop 0x0000000A in NETBT.SYS After Applying Service Pack 2

	Article: Q164904
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP2 
	- Microsoft Windows NT Server version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A Windows NT server may blue screen with the following during a name query
	
	  Stop 0x0000000a (0x00000051, 0x00000002, 0x00000000, 0xf62422c4)
	
	NOTE: The fourth parameter within parenthesis is machine specific and may vary.
	The memory range will fall in Netbt.sys.
	
	CAUSE
	=====
	
	When doing a proxy name query, the machine bugchecks since it accesses the
	tracker flag, but the tracker is NULL.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: resolution wins dns 4.00 prodnt
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp2 kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search
	Hardware          : ALPHA x86
	Issue type        : kbbug
	
	=============================================================================
	
