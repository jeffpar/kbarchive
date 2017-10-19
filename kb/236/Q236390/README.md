---
layout: page
title: "Q236390: Spooler Rollup Fix to Address Memory Leaks in Terminal Server"
permalink: /kb/236/Q236390/
---

## Q236390: Spooler Rollup Fix to Address Memory Leaks in Terminal Server

	Article: Q236390
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Spooler service may leak private bytes.
	
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
	Terminal Server Edition, Service Pack 5.
	
	MORE INFORMATION
	================
	
	This rollup fix was backported from fixes made in the Windows NT 4.0 version.
	For additional information about Win32spl.dll, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q224345 Spooler Service May Leak Private Bytes Attempting to Close a Remote
	  Printer
	
	For additional information about Lprmon.dll, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q223791 Spooler Service LPR Monitor Leaks Memory With Each Event 2004 Error
	
	For additional information about Localspl.dll, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q223863 Spooler Service May Leak Memory Attempting to Close Print Processor
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
