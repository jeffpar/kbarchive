---
layout: page
title: "Q197282: Combat Flight Simulator: Mouse Pointer Behaves Erratically"
permalink: kb/197/Q197282/
---

## Q197282: Combat Flight Simulator: Mouse Pointer Behaves Erratically

	Article: Q197282
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
	
	When you play Microsoft Combat Flight Simulator, the mouse pointer may behave
	erratically. When you move the pointer and click the buttons on your pointing
	device, the expected action may take place in a different location than the
	location of the pointer on the screen.
	
	CAUSE
	=====
	
	This behavior can occur if the graphics settings in the game are set to a screen
	resolution below 640 x 480.
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the screen resolution in the game. To do this,
	follow these steps:
	
	1. On the Combat Flight Simulator startup screen, click Settings.
	
	2. Click to select the Enable Hardware Acceleration check box, and then click
	  Advanced Display Settings.
	
	3. In the Full Screen Resolution box, click 640 x 480 x 16 or higher.
	
	4. Click OK, and then click OK again.
	
	MORE INFORMATION
	================
	
	You can use the following screen resolutions in Combat Flight Simulator if your
	video adapter supports them:
	
	- 320 x 200
	- 320 x 240
	- 640 x 400
	- 640 x 480
	- 800 x 600
	- 1024 x 768
	- 1280 x 1024
	
	If your video adapter supports a display resolution that is not in this list, you
	can modify the Combatfs.cfg file to configure Combat Flight Simulator to use
	that screen resolution. To do this, follow these steps:
	
	1. Quit Combat Flight Simulator if it is running.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type the following line:
	
	  combatfs.cfg
	
	4. In the Look In box, click My Computer, and then click Find Now.
	
	5. Double-click the Combatfs.cfg file.
	
	6. In the "Choose the program you want to use" box, click Notepad.
	
	7. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	8. On the Search menu, click Find.
	
	9. Type "[PREFS]" (without the quotation marks) and then click Find Next.
	
	10. In the [PREFS] section of the file, type the following line:
	
	  LIMIT_RESOLUTIONS=0
	
	11. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	12. Restart Combat Flight Simulator.
	
	Additional query words: 1.00 msgame combatfs cfs moved over wrong place
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
