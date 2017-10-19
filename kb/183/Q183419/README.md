---
layout: page
title: "Q183419: Memory Leak in Spoolss.exe Causes Performance Degradation"
permalink: /kb/183/Q183419/
---

## Q183419: Memory Leak in Spoolss.exe Causes Performance Degradation

	Article: Q183419
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
	
	Over time, the Windows NT system responsiveness appears sluggish, and clients
	may report a gradual decrease in system performance.
	
	By tracking the amount of Private Bytes for Spoolss.exe, it can be observed that,
	over time, it increases without decreasing. This is viewable using Windows NT
	Performance Monitor by choosing the following counter to monitor:
	
	  Object: Process
	  Instance: Spoolss.exe
	  Counter: Private Bytes
	
	CAUSE
	=====
	
	The spooler leaks memory from the heap until all system memory is exhausted.
	
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
	
	
	Additional query words: private bytes slow print
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
