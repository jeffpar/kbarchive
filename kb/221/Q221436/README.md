---
layout: page
title: "Q221436: Combat FS: Point of View Does Not Return to Forward View"
permalink: /kb/221/Q221436/
---

## Q221436: Combat FS: Point of View Does Not Return to Forward View

{% raw %}

	Article: Q221436
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbhw kbimu kbHardware
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Point of View (POV) switch on your game controller to switch
	views in Microsoft Combat Flight Simulator, the view may not return to the
	forward position.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- Your game controller is not initialized.
	
	- An entry is missing from the Combatfs.cfg file.
	
	RESOLUTION
	==========
	
	To resolve this issue, reinitialize your game controller. To do this, follow
	these steps:
	
	1. Quit Combat Flight Simulator if it is running.
	
	2. Shut down and turn off your computer.
	
	3. Restart your computer.
	
	4. After your computer restarts, start Combat Flight Simulator and test the game
	  controller again.
	
	If these steps do not resolve the issue, use the appropriate method for your game
	controller.
	
	Your Game Controller Is Not Customized for Combat Flight Simulator
	------------------------------------------------------------------
	
	Reset the default settings of the game controller. To do this, follow the
	appropriate steps for your game:
	
	Microsoft Combat Flight Simulator: WWII Europe Series:
	
	1. Start Combat Flight Simulator.
	
	2. On the startup screen, click Settings, and then click Customize Controls.
	
	3. On the Assignments tab, click any entry in the Device column to select it.
	
	4. Click Reset Defaults, and then click Yes.
	
	Microsoft Combat Flight Simulator 2: WWII Pacific Theater:
	
	1. Start Combat Flight Simulator 2.
	
	2. On the startup screen, click Settings, and then click Controller Assignments.
	
	3. Click any entry in the Joystick column to select it.
	
	4. Click Reset Defaults.
	
	5. Choose the type of keyboard layout you want to use in the game, and then
	  click OK.
	
	NOTE: If you have custom keyboard settings, they are not affected by this
	procedure.
	
	Your Game Controller Is Customized for Combat Flight Simulator
	--------------------------------------------------------------
	
	Add the following line to the Combatfs.cfg file:
	
	  BUTTON_DOWN_EVENT_40=VIEW_RESET
	
	To do this, follow these steps:
	
	1. Quit Combat Flight Simulator if it is running.
	
	2. Click Start, point to Find, then click Files Or Folders.
	
	3. In the Named box, type "combatfs.cfg" (without the quotation marks)
	
	4. In the Look In box, click My Computer and then click Find Now.
	
	  NOTE: Make sure the Include Subfolders check box is selected.
	
	5. In the list of found files, double-click the Combatfs.cfg file.
	
	6. In the "Choose the program you want to use" box, click Notepad.
	
	7. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	8. On the Search menu, click Find.
	
	9. Type "[JOYSTICK_00]" (without the quotation marks), and then click Find Next.
	
	10. In this section of the file, look for the following line:
	
	  BUTTON_DOWN_EVENT_40=VIEW_RESET
	
	11. If you do not see this line, type it immediately below the following lines,
	  and then press ENTER:
	
	  BUTTON_DOWN_EVENT_39=VIEW_FORWARD_LEFT/PAN_UP_LEFT
	  BUTTON_DOWN_REPEAT_39=1
	
	12. Scroll down to the [JOYSTICK_SLEW_00] section of the file, and then repeat
	  steps 10-11.
	
	13. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	14. Restart Combat Flight Simulator.
	
	Additional query words: 1.00 msgame combatfs cfs snap back
	
	======================================================================
	Keywords          : kbdisplay kbenv kbhw kbimu kbHardware 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
