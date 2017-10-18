---
layout: page
title: "Q187884: CoCreateInstance on Multiple Threads Causes Hangs or Failures"
permalink: kb/187/Q187884/
---

## Q187884: CoCreateInstance on Multiple Threads Causes Hangs or Failures

	Article: Q187884
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
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
	
	Calling CoCreateInstance on multiple threads at the same time causes the
	computer to not respond (hang) for long periods of time. No desktop activity can
	be performed during this time. PerfMon logs during the time the computer is not
	responding show no signs that the computer is stressed. The idle thread has more
	than 95 percent of the CPU time while the computer is not responding. This
	problem was originally identified when hosting ASP pages that issue
	CoCreateInstance requests. When under stress, the computer would cease
	responding. CoCreateInstance requests would fail with the E_OUTOFMEMORY error
	leading up to the time when the computer quits responding.
	
	CAUSE
	=====
	
	The problem is caused by a shortage in the LPC resource pool. All threads that
	request LPC pool storage are in a wait (a two-minute timeout) for a free pool
	request to post that pool storage is available. Explorer.exe threads that need
	LPC pool storage will also wait. Since no free pool requests come through, all
	threads wait for two minutes, giving the appearance of a system hang. When the
	two minute timeout expires, the pool is expanded and all threads begin running
	again.
	
	
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
	
	
	Additional query words: CoCreateInstance stress hang E_OUTOFMEMORY
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
