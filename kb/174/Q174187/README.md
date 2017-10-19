---
layout: page
title: "Q174187: WinNT Does Not Display IBM PS/2 TrackPoint as the Mouse Driver"
permalink: /kb/174/Q174187/
---

## Q174187: WinNT Does Not Display IBM PS/2 TrackPoint as the Mouse Driver

	Article: Q174187
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbWinNT400sp4fix kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you install Windows NT 4.0 Service Pack 2 or 3 on a computer with an IBM
	PS/2 TrackPoint mouse driver, the Mouse Control Panel utility states the system
	is using the Microsoft PS/2 Port Mouse driver. Re-installing the TrackPoint
	driver does not resolve the problem.
	
	CAUSE
	=====
	
	This problem occurs because the Plug and Play support in Windows NT 4.0 Service
	Pack 2 and 3 incorrectly configures the registry.
	
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
	
	
	Additional query words: 4.00 sp3 sp2
	======================================================================
	Keywords          : kbhw kbWinNT400sp4fix kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
