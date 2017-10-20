---
layout: page
title: "Q217063: Terminal Server Hangs and Does Not Allow Network Connections"
permalink: /kb/217/Q217063/
---

## Q217063: Terminal Server Hangs and Does Not Allow Network Connections

{% raw %}

	Article: Q217063
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): _IK
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT Server, Terminal Server Edition may stop responding (hang). Even
	though you may be able to ping the computer, you cannot perform a NET VIEW or
	make any connections to the it. At this point, you must turn off and then turn
	the computer back on (hard reset).
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 4.
	
	MORE INFORMATION
	================
	
	To verify that you are experiencing this issue, a kernel debugger needs to be
	attached to the computer and you would need to look at the following to identify
	this issue:
	
	  Dd ExWorkerQueue+10 l1	// flink pointer to Critical Queue
	  Dl flink
	
	The fourth dword should be the function. Generally, most systems are configured
	for about nine threads to work off the queue. So, if you see a block of greater
	than nine to the same function at the top of the queue, that is a good indicator
	that there is potentially a problem.
	
	Run the system a little and see if the top nine addresses change at all. If not,
	trace through the functions and see if there is any way that the thread could
	block waiting on additional work to be done in the queue.
	
	If so, and if a system runs fast enough (multiprocessor systems) to block all
	nine, you have a hung system that is running into this problem.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : _IK 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
