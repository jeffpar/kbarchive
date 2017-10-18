---
layout: page
title: "Q174830: NMI Error Message on Blue Screen May Be Garbled"
permalink: kb/174/Q174830/
---

## Q174830: NMI Error Message on Blue Screen May Be Garbled

	Article: Q174830
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, the following symptoms may occur:
	
	- You receive a blue screen with garbled or random characters.
	
	- Your screen flickers.
	
	- Windows NT stops responding (hangs).
	
	CAUSE
	=====
	
	This problem can occur if there are more Non-maskable Interrupt (NMI) error
	messages being generated than can be processed by the CPU. As a result, the
	error messages cannot be displayed properly.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	NOTE: This fix only causes the NMI error messages to be displayed properly. It
	does not resolve the error messages. To resolve the error messages, you should
	correct the hardware problem that causes them. This fix prevents the initial
	error message from being overwritten by subsequent error messages so that you
	can determine the hardware problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	MORE INFORMATION
	================
	
	When Windows NT starts, it uses a multitasking environment during error
	processing. While error processing is occurring, it is possible for multiple
	processes to detect problems. When this occurs, one error message can be
	overwritten by another.
	
	
	When physical memory, the system bus, or input/output (I/O) devices detect parity
	errors, an error message is sent to the CPU using an NMI.
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
