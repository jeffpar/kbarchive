---
layout: page
title: "Q183063: Detailed Explanation of SecondLevelDataCache"
permalink: kb/183/Q183063/
---

## Q183063: Detailed Explanation of SecondLevelDataCache

	Article: Q183063
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article discusses the following registry key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager
	\Memory Management\SecondLevelDataCache
	
	REG_DWORD
	Range: Kilobytes 0, 1 -cache size
	Default: 0 (256K)
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	SecondLevelDataCache records the size of the processor cache, also known as the
	secondary or L2 cache. If the value of this entry is 0, the system attempts to
	retrieve the L2 cache size from the Hardware Abstraction Layer (HAL) for the
	platform. If it fails, it uses a default L2 cache size of 256 KB. If the value
	of this entry is not 0, it uses this value as the L2 cache size. This entry is
	designed as a secondary source of cache size information for computers on which
	the HAL cannot detect the L2 cache.
	
	This is not related to the hardware; it is only useful for computers with
	direct-mapped L2 caches. Pentium II and later processors do not have direct-
	mapped L2 caches. SecondLevelDataCache can increase performance by approximately
	2 percent in certain cases for older computers with ample memory (more than 64
	MB) by scattering physical pages better in the address space so there are not so
	many L2 cache collisions. Setting SecondLevelDataCache to 256 KB rather than 2
	MB (when the computer has a 2 MB L2 cache) would probably have about a 0.4
	percent performance penalty.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
