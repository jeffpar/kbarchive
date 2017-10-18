---
layout: page
title: "Q248747: Error Message: STOP 0x00000041 MUST_SUCCEED_POOL_EMPTY"
permalink: kb/248/Q248747/
---

## Q248747: Error Message: STOP 0x00000041 MUST_SUCCEED_POOL_EMPTY

	Article: Q248747
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive a "STOP 0x00000041 MUST_SUCCEED_POOL_EMPTY" error message on a
	blue screen when the requested memory allocation cannot be satisfied for the
	NonPagedPoolMustSucceed pool type for the ExAllocatePoolWithTag function.
	
	RESOLUTION
	==========
	
	If you receive this error message, verify the version of the third-party
	Ncrbynet.sys driver that is being used. The following version of the
	Ncrbynet.sys file is known to cause a memory leak condition with Windows NT:
	
	  Ncrbynet.sys Tue Oct 26 11:37:23 1999
	
	To resolve this issue, contact NCR Corporation for an updated driver.
	
	MORE INFORMATION
	================
	
	There is a limit of roughly 128 MB in Windows NT 4.0 on the amount of NonPaged
	Pool memory that is available to a system. This is a hard-coded value that
	cannot be modified. For additional information about the NonPagedPoolSize value,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q126402 PagedPoolSize and NonPagedPoolSize Values in Windows NT
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q177415 How to Use Poolmon to Troubleshoot Kernel Mode Memory Leaks
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
