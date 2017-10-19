---
layout: page
title: "Q198117: Combat Flight Simulator: Slow Frame Rate During Game Play"
permalink: /kb/198/Q198117/
---

## Q198117: Combat Flight Simulator: Slow Frame Rate During Game Play

	Article: Q198117
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsound kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you play Microsoft Combat Flight Simulator, the frame rate (the speed at
	which images are displayed on the screen, usually measured in frames per second)
	may be very slow.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A Yamaha sound card is installed in your computer.
	- You are using a sound driver that is incompatible with DirectX.
	
	RESOLUTION
	==========
	
	To resolve this issue, change your preferred audio playback device to the Game
	Compatible Device. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Audio tab, under Playback, click Game Compatible Device in the
	  Preferred Device box. If this device is not available, proceed to the next
	  step.
	
	4. Click to select the Use Preferred Devices Only check box.
	
	  NOTE: If you are using Microsoft Windows 98, click to select the Use Only
	  Preferred Devices check box.
	
	5. Click OK.
	
	6. Close Control Panel, and then restart the computer.
	
	For more information about how to troubleshoot this issue, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q178637 Using Game Compatible Device to Troubleshoot Sound Problems
	
	MORE INFORMATION
	================
	
	If this issue continues to occur, obtain and install the latest sound driver for
	the sound card installed in your computer. To do this, contact the manufacturer
	of your sound card.
	
	For information about how to contact your sound card manufacturer, query in the
	Knowledge Base for one of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame combatfs cfs
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsound kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
