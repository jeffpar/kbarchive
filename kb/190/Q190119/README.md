---
layout: page
title: "Q190119: Games Error Message: Error: 5"
permalink: /kb/190/Q190119/
---

## Q190119: Games Error Message: Error: 5

{% raw %}

	Article: Q190119
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu msgame mtm2
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	- Microsoft Pinball Arcade, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Golf 1999 Edition, version 1.0 
	- Microsoft Revenge of Arcade, version 1.0 
	- Microsoft Urban Assault, version 1.0 
	- Microsoft Age of Empires Expansion: The Rise of Rome, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start one of the games listed at the beginning of this
	article, you may receive the following error message:
	
	  Error: 5
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the temporary files on your computer. To do this:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "temp" (without the quotation marks), and then click
	  OK.
	
	3. On the Edit menu, click Select All.
	
	4. On the File menu, click Delete.
	
	  NOTE: If you receive an "Access Denied" message, quit all unnecessary programs
	  that are running on your computer and then repeat steps 1-4. To do this:
	
	  a. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	  b. Quit all programs except Explorer and Systray (which are parts of
	     Windows). To quit a program, click the program, and then click End Task.
	
	  c. Repeat steps a-b until you have quit all unnecessary programs.
	
	
	MORE INFORMATION
	================
	
	If the steps listed in the resolution section of this article do not resolve the
	issue, verify that duplicate CD-ROM drives are not being loaded in Windows. To
	do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, click View Devices By Type.
	
	4. Double-click the CD-ROM branch to expand it.
	
	5. Record the properties for each device listed in the branch. To do this:
	
	  a. Click a device, and then click Properties.
	
	  b. Click each tab in the device properties dialog box, and then record the
	     device information and settings.
	
	  c. Click OK.
	
	6. Click OK, and then close Control Panel.
	
	7. Restart Windows in Safe mode. To do so, follow the steps in the appropriate
	  section below:
	
	  Windows 95
	  ----------
	
	  Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	  Windows 98
	  ----------
	
	  Restart the computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then choose Safe Mode from the
	  Startup menu.
	
	8. When Windows starts in Safe mode, click OK.
	
	9. Click Start, point to Settings, and then click Control Panel.
	
	10. Double-click System.
	
	11. On the Device Manager tab, click View Devices By Type.
	
	12. Double-click the CD-ROM branch to expand it.
	
	13. Verify that there are no changes in the list of devices in the branch. If a
	  new device is listed that did not appear in the list of devices you noted in
	  step 5, click the new device, and then click Remove. Repeat this step for
	  each device in the branch that was not noted in step 5.
	
	  NOTE: If you see new copies of a device that appeared in the list in step 5,
	  check the properties of each copy of the device. If the properties for the
	  device match the properties you recorded, keep the device. If the properties
	  for the device do not match the properties you recorded, remove the device.
	
	14. Click OK.
	
	15. When you are prompted to restart the computer, click OK.
	
	
	Additional query words: 1.00 2.00 msgame mtm2 monstertruck2 monster2 five ipf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame mtm2 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbGamesSearch kbArcadeRev kbZNotKeyword kbGolf99 kbGolfSearch kbPinballArc kbArcadeSearch kbMotocrossSearch kbCloseCombatSearch kbCARTRacingSearch kbMonsterTMSearch kbAOESearch kbUrbanAssault kbMonsterTM2 kbAOEExpRome kbCloseCombat2 kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbMotocrossM kbCARTRacing kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
