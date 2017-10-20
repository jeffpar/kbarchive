---
layout: page
title: "Q194680: Blue Screen in KMODE_EXCEPTION_NOT_HANDLED with Compaq Driver"
permalink: /kb/194/Q194680/
---

## Q194680: Blue Screen in KMODE_EXCEPTION_NOT_HANDLED with Compaq Driver

{% raw %}

	Article: Q194680
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running NetMeeting 2.0 or 2.1 with Enable Sharing turned on, Windows NT
	will display a blue screen when any window is minimized after a reboot. The
	following error message will occur:
	
	  STOP 0x0000001E
	  KMODE_EXCEPTION_NOT_HANDLED
	  Address fef65475 has base at fef62000 - CPQDISP.DLL
	
	CAUSE
	=====
	
	This problem occurs with the Compaq 5436/5446 Graphic Adapter display driver.
	
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
	
	
	Additional query words: hang crash dump
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
