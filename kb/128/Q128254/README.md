---
layout: page
title: "Q128254: Stop Msg: C0000218 &quot;Unknown Hard Error&quot; When Registry is Overrun"
permalink: kb/128/Q128254/
---

## Q128254: Stop Msg: C0000218 &quot;Unknown Hard Error&quot; When Registry is Overrun

	Article: Q128254
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add users and groups to an Windows NT version 3.5 computer using User
	Manager you have the ability to overrun the registry with user and group
	information. When you reboot your computer, the following stop screen appears:
	
	  Stop 0xc0000218 (0xe11a30e8, 0x00000000, 0x000000000, 0x00000000)
	  Unknown Hard Error
	
	CAUSE
	=====
	
	User accounts and group information are stored in a secure location in the
	registry. By default, RSL (registry size limit) is 25% of the size of paged
	pool. The registry charges registry quota for its memory allocations. This is to
	prevent the registry from becoming too large for the available system resources.
	If a piece of registry is freed up, it is deallocated from the pool and the
	registry quota is returned. Although the space is still allocated in the file,
	there is no memory allocated, so no quota is charged.
	
	If the registry becomes very fragmented, its file size may become much larger
	than the charged registry quota, potentially causing the registry to become
	larger than the system can accommodate at boot time. That is, the registry file
	cannot fit in memory in the available paged pool.
	
	RESOLUTION
	==========
	
	To address fragmentation, the Windows NT registry now continues to charge quota
	for portions of the registry that have been deallocated from pool, but are still
	allocated in the file. This prevents the size of the registry's files from
	exceeding the allowable registry quota, ensuring the file will fit in memory on
	the next reboot.
	
	Additionally, a change was made that provides better coalescing of small portions
	of free registry memory into larger pieces when very large registry allocations
	are required.
	
	With this change, instead of overrunning the registry with user and group
	information, when the registry reaches it's maximum allocation the following
	error message appears:
	
	  Not enough server storage to process this command
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q126401: Err Msg: Not Enough Server Storage is Available to Process..
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt Comparison of Windows NT Network Protocols
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
