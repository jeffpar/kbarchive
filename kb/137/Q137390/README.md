---
layout: page
title: "Q137390: System Agent Does Not Detect Joystick Activity"
permalink: kb/137/Q137390/
---

## Q137390: System Agent Does Not Detect Joystick Activity

	Article: Q137390
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbhw kbtool kbimu kbHardwarekbfaq
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a program that uses only a joystick for input, System Agent may
	minimize the program and start a scheduled task.
	
	CAUSE
	=====
	
	This behavior can occur because the joystick is connected to a game port, and
	game ports are not interrupt-driven. System Agent cannot easily poll game ports
	to determine if they are in use.
	
	RESOLUTION
	==========
	
	To prevent this issue from occurring, disable System Agent before you run a
	program that uses only a joystick for input.
	
	To disable System Agent, right-click the System Agent icon on the taskbar, and
	then click Suspend System Agent.
	
	When you are finished, you can enable System Agent by repeating the steps you
	used to disable it.
	
	
	Additional query words: 1.00 side winder irq sage
	======================================================================
	Keywords          : kbhw kbtool kbimu kbHardware kbfaq
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbWin95 kbPlus95
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
