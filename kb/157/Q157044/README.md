---
layout: page
title: "Q157044: Some Applications Appear to Consume 100% of CPU Time"
permalink: kb/157/Q157044/
---

## Q157044: Some Applications Appear to Consume 100% of CPU Time

	Article: Q157044
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows NT allows users to monitor CPU usage through Task Manager and
	Performance Monitor. If these tools are used in Windows NT 4.0, some
	applications may appear to be consuming 100 percent of the CPU time, while
	Windows NT is waiting for other actions to occur.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 allows an application to consume all of the CPU time if no other
	thread is waiting for CPU time. As soon as another thread requests CPU time,
	regardless of the priority of that thread, Windows NT 4.0 yields control and CPU
	time will drop back to normal levels.
	
	The behavior described above is the result of a change made to the way in which
	Windows NT 4.0 manages CPU time. This behavior is by design and has no negative
	effect on Windows NT 4.0 or application performance.
	
	
	Additional query words: prodnt perfmon nt16ap
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
