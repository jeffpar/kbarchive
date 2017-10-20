---
layout: page
title: "Q191098: Large File Copy Operation Causes Available Bytes to Drop"
permalink: /kb/191/Q191098/
---

## Q191098: Large File Copy Operation Causes Available Bytes to Drop

{% raw %}

	Article: Q191098
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A large file copy operation causes available bytes to drop significantly. This
	happens when a Windows client copies a large file from or to a Windows NT
	computer.
	
	In this case, you will notice a user interface performance degradation. The files
	need to be about the size of the physical memory of the computer or greater.
	
	If you look at performance counters while this happens, you find that the counter
	for the file cache (Memory: Cache Bytes) goes up while the process working sets
	(Process: Working Set, instance _Total) decline. Available bytes (Memory:
	Available Bytes) declines in the inverse proportion of the cache bytes.
	
	CAUSE
	=====
	
	While copying the files, Windows clients do not use the flag
	FILE_FLAG_SEQUENTIAL_SCAN to open the files. Thus, Cache Manager tries to cache
	the whole file in memory and causes the file cache to grow and, thus, available
	bytes to drop.
	
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
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
