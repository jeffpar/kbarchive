---
layout: page
title: "Q159111: Multiprocessor Computer Hangs Under Stress Using Halsp.dll"
permalink: /kb/159/Q159111/
---

## Q159111: Multiprocessor Computer Hangs Under Stress Using Halsp.dll

{% raw %}

	Article: Q159111
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During periods of high processor activity, a multiple processor system could
	appear to stop responding. Applications running on one or more of the available
	processors stop running.
	
	CAUSE
	=====
	
	A race condition existed involving a spinlock for the 8254 Programmable Interval
	Timer (PIT). Under some circumstances, this race condition deadlocks one or more
	processors on a multiprocessor system. This only affects multiprocessor
	computers running the Halsp.dll Hardware Abstraction Layer (HAL).
	
	
	RESOLUTION
	==========
	
	To correct this problem, install Windows NT 4.00 Service Pack 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt hang sp1
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
