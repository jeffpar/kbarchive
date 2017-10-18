---
layout: page
title: "Q305587: TrainSim/MotoMad: Computer Stops Responding When You Start Game"
permalink: kb/305/Q305587/
---

## Q305587: TrainSim/MotoMad: Computer Stops Responding When You Start Game

	Article: Q305587
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Motocross Madness, version 1.0, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	When you start the Microsoft game, the screen may change to black, and then the
	computer may stop responding (hang).
	
	CAUSE
	=====
	
	This behavior can occur if your computer's video card acceleration settings are
	incorrect.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, click Run, type "win.ini" (without the quotation marks) in the
	  Open box, and then click OK.
	
	2. In the [windows] section, type a single semicolon (;) in front of the
	  SafeMode=1 line.
	
	3. On the File menu, click Save.
	
	4. On the File menu, click Exit.
	
	5. Restart the computer.
	
	MORE INFORMATION
	================
	
	Another symptom of this behavior occurs when you start Dxdiag.exe, and then
	click the Display tab: All of the options for DirectDraw, Direct3D, and AGP are
	unavailable, and you are unable to perform the tests for these features. This
	usually indicates that the Hardware Acceleration setting is set to Basic or
	None. However, when you check this setting in the display options, Hardware
	Acceleration is set to Full.
	
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
