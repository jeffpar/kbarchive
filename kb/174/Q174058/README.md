---
layout: page
title: "Q174058: Delayed Worker Threads Causes a STOP 7A"
permalink: kb/174/Q174058/
---

## Q174058: Delayed Worker Threads Causes a STOP 7A

	Article: Q174058
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Delayed worker threads may cause a STOP 7A - KERNEL_DATA_INPAGE_ERROR message to
	be displayed.
	
	CAUSE
	=====
	
	When the browser receives a server announcement, the transport notifies the
	browser at the interrupt level. This announcement is queued to a worker thread
	by allocating a block of non-paged pool for the work item and queuing that work
	item for later processing.
	
	If the announcements arrive very quickly or if the computer running the browser
	is very busy, the work items are not processed as quickly as they are received.
	In that case, all of the non-paged pool memory is consumed by these queue
	entries.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: blue screen bug check code dump trap dmp 0x7a
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
