---
layout: page
title: "Q191915: Screen Saver Time-out is Limited to 60 Minutes"
permalink: kb/191/Q191915/
---

## Q191915: Screen Saver Time-out is Limited to 60 Minutes

	Article: Q191915
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix sbs
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Windows NT 4.0 Service Pack 3 and earlier, screen savers can be set to a
	maximum of 60 minutes wait time.
	
	CAUSE
	=====
	
	This limit was hard coded at 60 minutes.
	
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
	
	MORE INFORMATION
	================
	
	With Service Pack 4 and later, the screen saver wait time can be set to between
	1 and 999 minutes.
	
	Additional query words: screen saver scrn svr screensaver smallbiz
	
	======================================================================
	Keywords          : kbWinNT400sp4fix sbs 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : WinNT:4.0,4.0a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
