---
layout: page
title: "Q198095: Combat Flight Simulator: Game Controller Does Not Work Properly"
permalink: /kb/198/Q198095/
---

## Q198095: Combat Flight Simulator: Game Controller Does Not Work Properly

{% raw %}

	Article: Q198095
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbhw kbui kbimu kbHardwarekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator, your game controller may not
	work properly, or the game may not map the proper commands to the game
	controller's axes or buttons.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions are true:
	
	- You disconnected a joystick from your computer and then connected a different
	  joystick without restarting the computer.
	
	- Your SideWinder joystick is daisy-chained through a SideWinder game pad, and
	  you press the Mode button on the game pad to switch control between the game
	  pad and the joystick.
	
	- Your sound card cannot properly process game port signals and high quality
	  game sounds at the same time.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. On the Combat Flight Simulator startup screen, click Settings.
	
	2. Under Controls, click Customize Controls.
	
	3. Click the Assignments tab.
	
	4. In the Device column, click any axis or button assigned to an action, and
	  then click Reset Defaults.
	
	5. When you are prompted to reset all the actions for the selected gaming
	  device, click Yes.
	
	6. Click OK, and then click OK again.
	
	If the issue continues to occur, reduce the sound playback quality in the game.
	To do this, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type the following line:
	
	  combatfs.cfg
	
	3. In the Look In box, click My Computer, and then click Find Now.
	
	4. Double-click the Combatfs.cfg file.
	
	5. In the "Choose the program you want to use" box, click Notepad.
	
	6. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	7. Press ENTER once, press the UP ARROW key, and then type the following lines,
	  pressing ENTER after you type each line:
	
	   [SOUND]
	   Channels=1
	   SamplesPerSec=11025
	
	8. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Combat Flight
	Simulator: WWII Europe Series, version 1.0.
	
	MORE INFORMATION
	================
	
	This behavior can also occur if the Combatfs.cfg file is missing or damaged.
	
	To resolve this issue, remove and then reinstall Combat Flight Simulator.
	
	Additional query words: 1.00 msgame combatfs cfs
	
	======================================================================
	Keywords          : kbhw kbui kbimu kbHardware kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
