---
layout: page
title: "Q216094: Combat FS: Display Is Choppy or Blinks Intermittently"
permalink: kb/216/Q216094/
---

## Q216094: Combat FS: Display Is Choppy or Blinks Intermittently

	Article: Q216094
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a flight in Microsoft Combat Flight Simulator: WWII Europe
	Series, version 1.0, the video may be choppy, blink or flash intermittently, or
	otherwise be displayed improperly.
	
	CAUSE
	=====
	
	This behavior can occur if unnecessary audio device drivers are installed on
	your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the audio device drivers installed on your
	computer, and then redetect your hardware. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Double-click Sound, Video And Game Controllers to expand the branch.
	
	4. Click to select each device listed in the Sound, Video And Game Controllers
	  branch, and then click Remove. Continue until the Sound, Video And Game
	  Controllers branch is empty.
	
	  NOTE: You can only remove one device at a time.
	
	5. Shut down and turn off your computer.
	
	6. Turn on your computer. Windows automatically redetects your hardware and
	  installs the appropriate device drivers.
	
	  NOTE: You may be prompted to insert your Microsoft Windows 95 or Windows 98
	  CD-ROM.
	
	Additional query words: 1.00 msgame combatfs cfs blinking flashing broken
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
