---
layout: page
title: "Q241589: Kernel Access Fault in Windows Terminal Server"
permalink: /kb/241/Q241589/
---

## Q241589: Kernel Access Fault in Windows Terminal Server

	Article: Q241589
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sessions to Terminal Server users may disappear on retail builds of Windows NT
	4.0, Terminal Server Edition (sessions that are not connected to a Windows NT
	debugger session).
	
	CAUSE
	=====
	
	The way certain programs paint the screen can cause the Remote Desktop Protocol
	(RDP) to use an uninitialized variable and bugcheck the server.
	
	This problem aggravates a path in SDGSendSDARect, which has an uninitialized
	variable for one rare path (bitmaps with a height of 1 and a width greater than
	or equal to 12). This uninitialized variable can affect later invocations of the
	function by causing a problem with a compression estimate that uses certain
	assumptions. When this problem occurs (a kernel access fault,) an error message
	appears. It is seen in the form of a disappearing session to a user on retail
	builds of Windows NT 4.0, Terminal Server Edition (that are not connected to a
	Windows NT debugger session).
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServSearch
	Version           : winnt:4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
