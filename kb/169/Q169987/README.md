---
layout: page
title: "Q169987: Msgsrv32 Not Responding When Computer Hangs While Idle"
permalink: kb/169/Q169987/
---

## Q169987: Msgsrv32 Not Responding When Computer Hangs While Idle

	Article: Q169987
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your computer is idle for a period of time and then stops responding
	(hangs), the Close Program dialog box may report that Msgsrv32 is not
	responding.
	
	CAUSE
	=====
	
	This behavior can occur when power management is enabled, and you have issues
	with programs not responding correctly to power management commands, for
	example, screen saver programs.
	
	RESOLUTION
	==========
	
	To work around this behavior, use the following steps:
	
	1. Quit any running programs, and then test to determine if a specific program
	  is causing this behavior. If you quit all running programs and the issue is
	  resolved, one of the programs that was running is the cause of this behavior.
	  If this does not resolve the issue, continue to step 2.
	
	  NOTE: This issue is often caused by screen saver programs.
	
	2. Disable power management. To do so, click Start, point to Settings, click
	  Control Panel, and then double-click Power.
	
	3. In the Power Management box, click Off (or click the "Allow windows to manage
	  power on this computer" check box to clear it).
	
	4. Click OK.
	
	5. Restart your computer.
	
	If the behavior continues to occur, follow these additional steps:
	
	1. In Control Panel, double-click System.
	
	2. On the Device Manager tab, double-click the System Devices branch to expand
	  it.
	
	3. Double-click Advanced Power Management Support.
	
	4. On the Settings tab, click the Enable Power Management Support check box to
	  clear it, and then click OK.
	
	5. Click OK.
	
	6. Restart your computer when you are prompted to do so.
	
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
