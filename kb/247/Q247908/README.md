---
layout: page
title: "Q247908: STOP 0x0000001e Error in Ntoskrnl.exe at Blue Build Screen"
permalink: /kb/247/Q247908/
---

## Q247908: STOP 0x0000001e Error in Ntoskrnl.exe at Blue Build Screen

	Article: Q247908
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you turn on a computer running Microsoft Windows NT 4.0 Server Service Pack
	4, you may receive the following STOP error at the blue screen that identifies
	the Windows NT build:
	
	  STOP 0x0000001e (0xc0000005, 0x801a8a83, 0x00000000, 0x005c0069)
	  KMODE_EXCEPTION_NOT_HANDLED Address 801a8a83 has base at 80100000 -
	  ntoskrnl.exe
	
	Using the Emergency Repair Disk does not fix the problem, and your attempts to
	replace registry hives from a parallel installation do not succeed.
	
	CAUSE
	=====
	
	This behavior can occur when the SOFTWARE hive of the registry is corrupted.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore the SOFTWARE registry hive from a current tape
	backup.
	
	Additional query words: blue screen crash fatal 0x01E
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
