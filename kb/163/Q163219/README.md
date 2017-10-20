---
layout: page
title: "Q163219: Spooler Uses 92%+ CPU When a Lexmark TCP/IP Printer Goes Offline"
permalink: /kb/163/Q163219/
---

## Q163219: Spooler Uses 92%+ CPU When a Lexmark TCP/IP Printer Goes Offline

{% raw %}

	Article: Q163219
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using a Lexmark TCP/IP network port to print to a printer that goes offline
	(due to being out of paper, a paper jam, and so on), CPU usage will spike to
	between 92-100 percent. The process that grabs the processor time is SPOOLSS.
	
	RESOLUTION
	==========
	
	To avoid this excessive amount of CPU usage, do either of the following:
	
	- Use Lexmark DLC ports or Microsoft TCP/IP printer ports (LPR) instead of
	  Lexmark TCP/IP.
	
	  -or-
	
	- Contact Lexmark's Support line at (606) 232-3000 for a new Lexbcelm.dll file
	  that resolves this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: prodnt spooler lexmon tcpip
	
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
