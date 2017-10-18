---
layout: page
title: "Q177684: Application Using SetOwner May Hang Windows NT User Interface"
permalink: kb/177/Q177684/
---

## Q177684: Application Using SetOwner May Hang Windows NT User Interface

	Article: Q177684
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An application runs under Windows NT and the computer appears to stop responding
	(hang). The user interface is frozen and it does not respond to mouse and
	keyboard input.
	
	The computer can still be accessed from the network, but you are unable to start
	services that require a new process to be started.
	
	CAUSE
	=====
	
	The application used the Win32 API SetOwner and defined window_1 to be owned by
	window_2, but also window_2 to be owned by window_1. When looking for the
	top-level window of the hierarchy (the one without an owner), the Win32
	subsystem runs into an endless loop.
	
	The ownership relations created by the applications will render the application
	unusable for the operating system, but must not cause the User Interface to
	hang.
	
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
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
