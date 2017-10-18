---
layout: page
title: "Q196303: IIS Performance Is Slower on Multiprocessor Computers"
permalink: kb/196/Q196303/
---

## Q196303: IIS Performance Is Slower on Multiprocessor Computers

	Article: Q196303
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Internet Information Server 4.0 on multiprocessor computers,
	performance may be slower than expected.
	
	CAUSE
	=====
	
	A global lock that all multi-byte string functions use when they run is being
	used by the Internet Information Server threads so that only one thread can
	perform a multi-byte string operation at a time. If a large pool of threads
	tries to use these functions, only one thread at a time can access the function,
	and a lot of time is spent waiting for the lock to become available. This is
	most evident on multiprocessor computers where the synchronization overhead and
	number of threads is much higher.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 4.0. Microsoft has confirmed this to be a problem in Windows NT 4.0 and
	Windows NT Server 4.0, Terminal Server Edition. This problem was first corrected
	in Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
