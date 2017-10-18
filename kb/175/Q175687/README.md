---
layout: page
title: "Q175687: Win32k.sys Causes STOP 0x0000001e and 0x0000000a on SMP"
permalink: kb/175/Q175687/
---

## Q175687: Win32k.sys Causes STOP 0x0000001e and 0x0000000a on SMP

	Article: Q175687
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs runing on multiprocessor computers that start and close GUIs frequently
	may cause either of the following STOP blue screen error messages to be
	displayed:
	
	  STOP 0x0000001e (0xc0000005, 0xa00f7538, 0x00000000, 0x00000008)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	
	-or-
	
	  STOP 0x0000000a(0x00000004, 0x0000001c, 0x00000000, 0x801175db)
	  IRQL_NOT_LESS_OR_EQUAL
	
	
	On some multiprocessor computers, programs with multiple threads that use the
	CreateProcess() or CreateProcessAsUser() API calls to start processes do not
	start because of desktop heap leaks. This inability to start results in a
	User32.dll or Kernel32.dll file initialization error when the desktop heap is
	exhausted.
	
	CAUSE
	=====
	
	This problem occurs because the thread object reference count breaks. The thread
	object reference count breaks because of a threadlockobject instruction within
	Win32k.sys that was not multiprocessor safe. This causes programs to quit
	abnormally. Because of the abnormal way in which the program quits, the desktop
	heap leaked until new processes could not be started. In some other instances,
	when a program quits abnormally, a blue screen error message may be displayed.
	
	
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
	
	Additional query words: wts tse terminalsvr
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
