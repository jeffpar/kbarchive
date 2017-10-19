---
layout: page
title: "Q189606: Browser Service Fails to Start or Stop Button Is Unavailable"
permalink: /kb/189/Q189606/
---

## Q189606: Browser Service Fails to Start or Stop Button Is Unavailable

	Article: Q189606
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When starting the Browser Service, your computer may appear to stop responding
	(hang) and the following error message may occur:
	
	  Could not start the Computer Browser Service on \\SERVERNAME.
	  Error 2186: The service is not responding to the control function.
	
	When you attempt to stop the Browser Service using the Services utility in
	Control Panel, the Stop button may be unavailable.
	
	CAUSE
	=====
	
	This problem is caused by a race condition in the startup code in the browser.
	The Browser service has two tasks trying to report status to the Service Control
	Manager. The result is that the status of the Browser service gets set to an
	incorrect value.
	
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
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
