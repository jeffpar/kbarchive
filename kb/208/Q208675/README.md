---
layout: page
title: "Q208675: AT Command Displays Scheduled Tasks for Sunday Incorrectly"
permalink: /kb/208/Q208675/
---

## Q208675: AT Command Displays Scheduled Tasks for Sunday Incorrectly

	Article: Q208675
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the AT command to schedule a task to occur on Sunday, the list of
	scheduled tasks may display the letter "S" for Saturday instead of "Su" for
	Sunday.
	
	CAUSE
	=====
	
	This issue can occur if the Task Scheduler tool has replaced the Windows NT
	Schedule service.
	
	RESOLUTION
	==========
	
	To view scheduled tasks correctly, double-click My Computer, and then
	double-click Scheduled Tasks.
	
	To restore the expected behavior of the AT command, uninstall Task Scheduler:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Add/Remove Programs.
	
	2. On the Install/Uninstall tab, click Task Scheduler 1.0 (Remove Only), click
	  Add/Remove, click Yes when you are prompted to remove Task Scheduler, and
	  then click Yes when you are prompted to restart your computer.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
