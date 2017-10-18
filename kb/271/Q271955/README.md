---
layout: page
title: "Q271955: STOP 0x4E, STOP 0x1A, STOP 0x50, and STOP 0xA Errors Occur When"
permalink: kb/271/Q271955/
---

## Q271955: STOP 0x4E, STOP 0x1A, STOP 0x50, and STOP 0xA Errors Occur When

	Article: Q271955
	Product(s): Microsoft Windows NT
	Version(s): 4.0
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
	
	When you attempt to start your computer, the computer may not start, and the
	following STOP error messages may occur:
	
	  STOP 0x0000001a (0x00041284, 0xca9a2000, 0x000077e0, 0xc0c00000)
	  MEMORY_MANAGEMENT
	
	  STOP 0x0000004e (0x00000007, 0x00007abf, 0x0000f17e,
	  0x00000000)PFN_LIST_CORRUPT
	
	  STOP 0x0000000a (0x00000028, 0x00000002, 0x00000000,
	  0x8012d2d6)IRQL_NOT_LESS_OR_EQUAL
	
	  STOP 0x00000050 (0xc2332b94, 0x00000000, 0x00000000,
	  0x00000000)PAGE_FAULT_IN_NONPAGED_AREA
	
	CAUSE
	=====
	
	This behavior can occur when the random-access memory (RAM) on your computer has
	become corrupt.
	
	RESOLUTION
	==========
	
	To resolve this behavior, replace the RAM on your computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
