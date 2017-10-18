---
layout: page
title: "Q179160: Games: General Protection Fault in Module Dibeng.dll"
permalink: kb/179/Q179160/
---

## Q179160: Games: General Protection Fault in Module Dibeng.dll

	Article: Q179160
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg fs98 fs6 kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Zone.com 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the Microsoft programs listed above, you may receive the
	following error message:
	
	  <filename> caused a general protection fault in module Dibeng.dll.
	
	CAUSE
	=====
	
	This behavior can occur if you are using an outdated or incompatible video
	driver, or if the video driver is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact your hardware manufacturer to inquire about how
	to obtain and install an updated video driver for your video adapter.
	If an updated driver is not available, switch your display adapter to the
	Standard Display Adapter (VGA), and then reinstall the original video driver. To
	do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. On the Settings tab, click Change Display Type or Advanced Properties.
	
	4. Click Change next to the Adapter Type box, or on the Adapter tab, click
	  Change.
	
	5. Click Show All Devices. Note the current manufacturer and model.
	
	6. In the Manufacturers box, click (Standard Display Types).
	
	7. In the Models box, click Standard Display Adapter(VGA), and then click OK.
	
	8. Click Close until you return to Control Panel.
	
	9. When you are prompted to restart the computer, do so.
	
	10. Follow the instructions that came with your display adapter to reinstall the
	  original video driver from the manufacturer's CD-ROM or floppy disk(s).
	
	MORE INFORMATION
	================
	
	You may also be able to resolve this issue by reducing the graphics hardware
	acceleration to the Basic setting. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic accelerator functions setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	If the issue continues to occur, repeat these steps to increase the graphics
	hardware acceleration to the original setting.
	
	Additional query words: 1.00 fs95 fs98 fs2k flightsim gpf ipf mtm directx
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg fs98 fs6 kbimu msgame kbfaq
	Technology        : _IKkbbogus kbHomeMMsearch kbGamesSearch kbFlightSimSearch kbZNotKeyword kbMSNSearch kbCARTRacingSearch kbMonsterTMSearch kbMonsterTM kbFlightSim2000 kbFlightSim98 kbFlightSim95 kbCARTRacing kbZone kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
