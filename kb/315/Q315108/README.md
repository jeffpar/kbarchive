---
layout: page
title: "Q315108: Combat Flight Simulator 2: Game Appears to Stop Responding"
permalink: kb/315/Q315108/
---

## Q315108: Combat Flight Simulator 2: Game Appears to Stop Responding

	Article: Q315108
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Combat Flight Simulator on a Microsoft
	Windows 2000-based computer, the program may appear to stop responding (hang),
	or it may take up to 10 minutes to start. This behavior occurs after the Combat
	Flight Simulator splash screen is displayed.
	
	CAUSE
	=====
	
	This behavior can occur when a component of the McAfee antivirus software
	McShield is running on your computer. This occurs because of a conflict between
	McShield and Combat Flight Simulator.
	
	RESOLUTION
	==========
	
	To resolve this issue, temporarily stop McShield before you start Combat Flight
	Simulator. To do this, follow these steps:
	
	1. Quit Combat Flight Simulator, if it is already running on your computer.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Administrative Tools.
	
	4. Double-click Computer Management.
	
	5. In the Computer Management dialog box, double-click Services and
	  Applications, and then click Services.
	
	6. In the right pane of the Computer Management dialog box, locate McShield in
	  the leftmost column.
	
	7. On the Action menu, click Stop. Service Control dialog box will be displayed
	  while Windows is attempting to stop McShield.
	
	8. Start Combat Flight Simulator.
	
	NOTE: This procedure stops McShield until you restart it by using the following
	steps, or until you restart your computer. During this time, the automatic virus
	scan is disabled and, therefore, your computer may be vulnerable to viruses.
	
	To restart McShield and enable the automatic virus scan after you finish playing
	the game, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Administrative Tools.
	
	3. Double-click Computer Management.
	
	4. In the Computer Management window, double-click "Services and Applications",
	  and then click Services.
	
	5. Click McShield in the leftmost column of the right pane in the Computer
	  Management window.
	
	6. On the Action menu, click Start.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbOSWin2000 kbOSWinSearch kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
