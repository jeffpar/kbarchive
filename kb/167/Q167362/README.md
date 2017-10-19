---
layout: page
title: "Q167362: STOP 0x00000050 in Srv.sys When Shutting Down Computer"
permalink: /kb/167/Q167362/
---

## Q167362: STOP 0x00000050 in Srv.sys When Shutting Down Computer

	Article: Q167362
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you log on to a computer running Windows NT Server or Workstation and then
	immediately shutting down the system, you may receive a STOP: 0x00000050 in
	Srv.sys. The parameters may look like the following:
	
	  STOP 0x00000050 (0xf08c5f51, 0x00000000, 0x00000000, 0x00000000).
	
	NOTE: The first parameter will always have the same value, but that value depends
	on where Srv.sys loads on the system.
	
	CAUSE
	=====
	
	A shutdown handler was registered by Srv.sys, which runs after srv.sys has
	already been unloaded from the system. Because Srv.sys has been unloaded, you
	will see a STOP 0x50. This may generally happen on multiprocessor computers with
	more than two network adapters installed in the system.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
