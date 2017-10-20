---
layout: page
title: "Q163202: Limit of the Number of Simultaneously Open Root Storage Files"
permalink: /kb/163/Q163202/
---

## Q163202: Limit of the Number of Simultaneously Open Root Storage Files

{% raw %}

	Article: Q163202
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that use StgOpenStorage() or StgCreateDocFile() API calls to open
	several storage files may fail.
	
	This problem does not occur in Windows 95 or Windows NT 3.51.
	
	
	CAUSE
	=====
	
	Windows NT 4.0 limits the number of simultaneously open root storage files to
	around 500 PER PROCESS. It should be noted that this is a per process limit (for
	example, Process 1 can open 498 root storages, at the same time Process 2 can
	also open 498 root storages, and so on.)
	
	Windows 95 and Windows NT 3.51, use a global shared memory heap of 64M; whereas
	Windows NT 4.0 uses a per-root-open heap of 4MB. Assuming a 2G user address
	limit for processes, Windows NT 4.0 supports around 500 root opens for a
	process.
	
	RESOLUTION
	==========
	
	On Windows NT 4.0 per-root-open heap size was further reduced to 2MB allowing
	around 1000 opens. A reduction in heap size means applications will not be able
	to open as many sub-storages or keep as many transacted changes uncommitted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 4.00 prodnt
	
	======================================================================
	Keywords          : kbinterop kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
