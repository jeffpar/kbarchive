---
layout: page
title: "Q187947: 100 Percent CPU System Handle Problem"
permalink: /kb/187/Q187947/
---

## Q187947: 100 Percent CPU System Handle Problem

	Article: Q187947
	Product(s): Microsoft Windows NT
	Version(s): WinNT:2.0,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Proxy Server version 2.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Proxy Server 2.0 on a multiprocessor computer running Windows NT
	Server 4.0, the server may encounter 100 percent CPU usage after Afd.sys creates
	many TCP objects.
	
	CAUSE
	=====
	
	One processor is attempting to close a thread while that thread is still open
	and in use by another processor.
	
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
	
	
	Additional query words: multi-processor multi processor
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbProxyServSearch kbProxyServ200
	Version           : WinNT:2.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
