---
layout: page
title: "Q125173: Calling a 32-bit Application From WOW Causes Memory Leak"
permalink: kb/125/Q125173/
---

## Q125173: Calling a 32-bit Application From WOW Causes Memory Leak

	Article: Q125173
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application that uses the 16 bit-subsystem (WOW) to call a 32-bit application
	repetitively will exhibit a memory leak. Memory is lost during this automated
	process and appears as a memory leak in Performance Monitor. This can be
	verified by monitoring MEMORY: Pool Paged Bytes, Pool NonPaged Bytes and
	Committed Bytes. Eventually the system starts to thrash for bytes to use during
	the process and appears to make no progress. In cases where the problem occurs
	on an NTFS partition, the following STOP message appears:
	
	  STOP 0x4d(0x0000000B, 0x2010,0x0, 0x4594)
	  NO_PAGES_AVAILABLE
	  P4-0300 irql:1f SYSVER 0xf0000327
	
	This problem does not occur when calling a 16-bit application from the 16- bit
	subsystem.
	
	WORKAROUND
	==========
	
	To avoid this problem, call only 16-bit applications from a 16-bit subsystem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt blue trap vdm fatal
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
