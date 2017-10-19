---
layout: page
title: "Q178340: CFS or FS98/2000: Outside View Constantly Pans or Shifts"
permalink: /kb/178/Q178340/
---

## Q178340: CFS or FS98/2000: Outside View Constantly Pans or Shifts

	Article: Q178340
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbui kbtlc fs98 kbimu msgamekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are flying in Flight Simulator 2000, Combat Flight Simulator, or Flight
	Simulator 98, you may experience the following symptoms:
	
	- When you are in Cockpit view, your view direction may pan constantly around
	  your aircraft.
	
	- When you are in Spot Plane view, your point of view may orbit constantly
	  around your aircraft.
	
	CAUSE
	=====
	
	This behavior can occur if your joystick is not installed or calibrated
	correctly. An incorrectly installed or calibrated joystick can send hat button
	signals to Flight Simulator even if you do not press the hat button.
	
	Panning is the default action for the hat button in the Microsoft programs listed
	earlier in this article.
	
	RESOLUTION
	==========
	
	To resolve this issue, test the joystick to determine if it is functioning
	correctly. For additional information about how to do this, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q176714 Troubleshooting Joystick Problems in Flight Simulator 98
	
	If the issue continues to occur, return your view direction to center. To do
	this, press button 2 on the joystick, press the 8 key on the numeric keypad if
	NumLock is turned on, or press SHIFT+8 on the numeric keypad if NumLock is
	turned off.
	
	If this temporarily resolves the issue until the next time you move the hat
	button, you may be able to permanently resolve this issue by clearing the Repeat
	check box for each panning action in the Custom Controls dialog box. To do this,
	use the appropriate method for your version of Flight Simulator.
	
	Flight Simulator 2000:
	
	In Flight Simulator 2000, this issue can only occur if the "Pan view
	<direction>" actions are assigned to the hat button movements. By default,
	the hat button movements in Flight Simulator 2000 are assigned to the "Look
	<direction>" actions.
	
	1. On the Options menu, point to Controls, and then click Assignments.
	
	2. On the Buttons/Keys tab, under the Event column in the "Assignment list" box,
	  scroll down to the "Pan view left" row.
	
	3. Under the Repeat column on the "Pan view left" row, drag the slider under the
	  Repeat column all the way to the left to turn it off.
	
	  Repeat this step to turn off the slider under the Repeat column on each of the
	  "Pan view <direction>" rows (there are 11 of these rows scattered up
	  and down the Event column).
	
	  Alternately, if the view pans constantly only in a certain direction, turn off
	  the slider in the Repeat column on that row.
	
	4. Click the CHECK MARK button to return to the cockpit.
	
	Combat Flight Simulator 2:
	
	1. On the Options menu, click Settings.
	
	2. On the Settings screen, click Customize Assignments.
	
	3. In the Joystick column, scroll down to the "Pan left" row.
	
	4. On the "Pan left" row, click the button assignment under the Device column,
	  and then click Clear.
	
	  Repeat this step to clear the button assignments in the Device column on all
	  "Pan <direction>" and "Pan view <direction>" rows.
	
	5. Click OK.
	
	Combat Flight Simulator:
	
	1. On the Options menu, click Settings.
	
	2. On the Settings screen, click Customize Controls.
	
	3. Click the Assignments tab.
	
	4. In the Action column, scroll down to the Pan Left row.
	
	5. On the "Pan left" row, click to clear the check box under the Repeat column
	  next to the Device column.
	
	  Repeat this step to clear the check box in the Repeat column on each of the
	  "Pan <direction>" or "Pan view <direction>" rows (there are 11 of
	  these rows).
	
	  Alternately, if the view pans constantly only in a certain direction, click to
	  clear the check box in the Repeat column on that row.
	
	6. Click OK, and then click OK again to return to the cockpit.
	
	Flight Simulator 98:
	
	1. On the Options menu, click Custom Controls.
	
	2. Click the Assignments tab.
	
	3. In the Action column, scroll down to the Pan View Left row.
	
	4. On the Pan View Left row, click to clear the check box under the Repeat
	  column next to the "Game device" column.
	
	  Repeat this step to clear the check box in the Repeat column on each of the
	  Pan View <direction> rows (there are 11 of these rows).
	
	  Alternately, if the view pans constantly only in a certain direction, click to
	  clear the check box in the Repeat column on that row.
	
	5. Click OK to return to the cockpit.
	
	If the issue continues to occur, disable the panning commands for your game
	control device. To do this, use the appropriate method for your version of
	Flight Simulator.
	
	Flight Simulator 2000:
	
	1. On the Options menu, point to Controls, and then click Assignments.
	
	2. On the Buttons/Keys tab, under the Event column in the "Assignment list" box,
	  scroll down to the "Pan view left" row.
	
	3. Under the Event column, click the "Pan view left" row, and then click "Delete
	  joystick assignment".
	
	  Repeat this step to delete the joystick assignment on each of the "Pan view
	  <direction>" rows.
	
	4. Click the CHECK MARK button to return to the cockpit.
	
	Combat Flight Simulator:
	
	1. On the Options menu, click Settings.
	
	2. On the Settings screen, click Customize Controls.
	
	3. Click the Assignments tab.
	
	4. In the Action column, scroll down to the "Pan left" row.
	
	5. On the "Pan left" row, click the button assignment under the Device column,
	  and then click Clear.
	
	  Repeat this step to clear the button assignments in the Device column on all
	  "Pan <direction>" and "Pan view <direction>" rows.
	
	6. Click OK, and then click OK again to return to the cockpit.
	
	Flight Simulator 98:
	
	1. On the Options menu, click Custom Controls.
	
	2. Click the Assignments tab.
	
	3. In the Action column, scroll down to the Pan View Left row.
	
	4. On the Pan View Left row, click the button assignment under the Game Device
	  column, and then click Clear.
	
	  Repeat this step to clear the button assignments in the Game device column on
	  all Pan View <direction> rows.
	
	5. Click OK to return to the cockpit.
	
	Additional query words: 1.00 flightsim combatfs cfs fs98 fs2000 fs2k rotate spinning spins rotates pivots twists rolls rolling tumbles tumbling
	
	======================================================================
	Keywords          : kbdisplay kbenv kbui kbtlc fs98 kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
