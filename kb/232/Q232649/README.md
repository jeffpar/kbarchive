---
layout: page
title: "Q232649: Stop 0x00000050 When Using Windows NT 4.0 Terminal Server"
permalink: /kb/232/Q232649/
---

## Q232649: Stop 0x00000050 When Using Windows NT 4.0 Terminal Server

	Article: Q232649
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a computer that has Windows NT 4.0, Terminal Server Edition installed, the
	following error message may be displayed:
	
	  Stop 0x00000050 PAGE_FAULT_IN_NONPAGED_AREA
	
	CAUSE
	=====
	
	This problem occurs because the Win32k.sys file is attempting to reference
	released memory.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem was first corrected in
	Windows NT Server 4.0, Terminal Server Edition, Service Pack 5.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
