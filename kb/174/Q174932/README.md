---
layout: page
title: "Q174932: STOP 0x0000000A with Halmps.dll When Restarting"
permalink: /kb/174/Q174932/
---

## Q174932: STOP 0x0000000A with Halmps.dll When Restarting

	Article: Q174932
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a multiprocessor computer using halmps.dll, when you shut down and restart
	the computer, a STOP 0x0000000A error message may be displayed, preventing the
	system to start.
	
	If you change the Internal Network Number on IPX using the Network tool in
	Control Panel and then restart the computer, this error may also be displayed.
	
	CAUSE
	=====
	
	Under certain circumstances, the ENTER_INTERRUPT macro in HalpApicRebootService
	causes the FS register to have the wrong value.
	
	The problem occurs when shutting down if one processor happens to be entering
	KiSystemService at the same time another processor has just reset the NMI vector
	as part of the reboot.
	
	
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
	
	
	Additional query words: reboot
	======================================================================
	Keywords          : kberrmsg kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
