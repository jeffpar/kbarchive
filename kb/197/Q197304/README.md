---
layout: page
title: "Q197304: Combat Flight Simulator: Cannot Enable Auto Rudder Feature"
permalink: /kb/197/Q197304/
---

## Q197304: Combat Flight Simulator: Cannot Enable Auto Rudder Feature

{% raw %}

	Article: Q197304
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbui kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator or Microsoft Combat Flight
	Simulator 2, the Auto Rudder feature may not work and the Enable Auto Rudder
	check box on the Settings screen may not be available.
	
	CAUSE
	=====
	
	This behavior can occur if the Combatfs.cfg or the Cfs2.cfg file contains
	invalid entries for your game controller.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that the assignment for the rudder is correct. To
	do this, follow the appropriate steps for you version of Combat Flight
	Simulator.
	
	Combat Flight Simulator
	-----------------------
	
	1. On the Options menu, click Custom Controls.
	
	2. Click the Assignments tab.
	
	3. Under the Game Device column, click to select the line for Rudder Axis, and
	  then click Assign.
	
	  NOTE: When you click Assign, the blue line in the Game Device column becomes a
	  white box, and you have five seconds to assign the selected action to a game
	  controller command.
	
	4. On the game controller, step on the rudder pedal, press the button, or move
	  the axis you want to use for the selected action. If you receive a warning
	  message that a different action is already assigned to the game controller
	  button or axis, click OK.
	
	Combat Flight Simulator 2
	-------------------------
	
	1. On the Combat Flight Simulator 2 startup screen, click Settings.
	
	2. Click Controller Assignments.
	
	3. Click Joystick Axes tab.
	
	4. In the Axes column, click to select the line for Rudder Axis, and then click
	  Change Assignments.
	
	5. On the game controller, step on the rudder pedal, press the button, or move
	  the axis that you want to use for the selected action, and then click OK.
	
	6. Click OK.
	
	If the issue continues to occur, reset the default configuration for your game
	controller. To do this, repeat steps 1 through 3 for either game, click any
	command under the Game Device column, and then click Reset Defaults.
	
	If the issue continues to occur, rebuild the Combatfs.cfg or Cfs2.cfg file. To do
	this, press CTRL+SHIFT when you start Combat Flight Simulator or Combat Flight
	Simulator 2.
	
	MORE INFORMATION
	================
	
	After you rebuild the Combatfs.cfg or the Cfs2.cfg file, you may need to reset
	any custom settings for your game controller.
	
	
	Additional query words: 1.00 msgame combatfs cfs joystick
	
	======================================================================
	Keywords          : kbenv kbui kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
