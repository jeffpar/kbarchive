---
layout: page
title: "Q174020: STOP 0x0000001E During Forced Shutdown and Program Exit"
permalink: /kb/174/Q174020/
---

## Q174020: STOP 0x0000001E During Forced Shutdown and Program Exit

	Article: Q174020
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 may display the following blue screen STOP
	message during a forced shutdown if a program is already quitting.
	
	  STOP: 0x0000001E : (c0000005, 80119914, 00000000, 00000074)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	CAUSE
	=====
	
	An asynchronous procedure call (APC) was dispatched to terminate a thread when
	the thread was already quitting. During the course of the APC, an attempt was
	made to load a system menu that required a callback to user mode, but because
	the thread was already quitting, the trap frame was NULL.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	MORE INFORMATION
	================
	
	An attempt to load a system menu will no longer occur if the thread is exiting
	or in clean up.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: usermode trapframe
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
