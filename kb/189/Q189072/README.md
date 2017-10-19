---
layout: page
title: "Q189072: MTM2: Cannot Turn Right When Using the ThrustMaster T2 Wheel"
permalink: /kb/189/Q189072/
---

## Q189072: MTM2: Cannot Turn Right When Using the ThrustMaster T2 Wheel

	Article: Q189072
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbtool kbimu msgame mtm2
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Monster Truck Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Monster Truck Madness 2 using the ThrustMaster T2 Steering Wheel
	or the CH Gamestick, you may be able to turn left, accelerate, and brake, but
	you may not be able to turn right.
	
	CAUSE
	=====
	
	This issue can occur if the ThrustMaster or CH game device is not calibrated
	correctly, or if duplicate game devices are being loaded in Windows.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following troubleshooting steps.
	
	Calibrate the ThrustMaster T2 Steering Wheel or CH Gamestick as a 2-axis 2-button
	joystick. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. In the Game Controllers box, click the ThrustMaster or CH game device, and
	  then click Remove.
	
	4. Click Add.
	
	5. In the Game Controllers box, click 2-Axis, 2-Button Joystick, and then click
	  OK.
	
	6. Click Properties, click Calibrate, and then follow the calibration
	  instructions on the screen.
	
	  NOTE: For the device to be calibrated correctly, it is important that you
	  follow the calibration instructions exactly. Do not be concerned about the
	  graphic display and how the graphics correspond to the joystick movement.
	
	7. When you receive the following message, click Finish:
	
	  You have successfully calibrated your device.
	
	8. On the Test tab in the Game Controllers tool, test the game device
	  thoroughly.
	
	9. Test the game device in Monster Truck Madness 2.
	
	If the problem persists, follow these steps to prevent duplicate game devices
	from being loaded in Windows.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, double-click Sound, Video And Game Controllers.
	
	4. Note the properties for each device listed in the branch. To do so, follow
	  these steps:
	
	  a. Click a device, and then click Properties.
	
	  b. Click each tab in the device properties dialog box, and then record the
	     device information and settings.
	
	  c. Click OK.
	
	5. Click OK, and then close Control Panel.
	
	6. Restart Windows in Safe mode. To do so, follow the steps in the appropriate
	  section below:
	
	  Windows 95
	  ----------
	
	  Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Safe Mode from the Startup menu.
	
	  Windows 98
	  ----------
	
	  Restart your computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then choose Safe Mode from the
	  Startup menu.
	
	7. When Windows starts in Safe mode, click OK.
	
	8. Click Start, point to Settings, and then click Control Panel.
	
	9. Double-click System.
	
	10. On the Device Manager tab, double-click Sound, Video and Game Controllers.
	
	11. Verify that there are no changes in the list of devices in the branch.
	
	  If a new device appears that did not appear in the list of devices you noted
	  in step 4, click the new device, and then click Remove. Repeat this step for
	  each device in the branch that was not noted in step 4.
	
	  NOTE: If you see new copies of a device that appeared in the list in step 4,
	  check the properties of each copy of the device. If the properties for the
	  device match the properties you recorded, keep the device. If the properties
	  for the device do not match the properties you recorded, remove the device.
	
	12. Click OK.
	
	13. Restart the computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 2.00 monstertruck2 t2 thrust master can't turning response responsive steer ghosted
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbtool kbimu msgame mtm2 
	Technology        : kbGamesSearch kbMonsterTMSearch kbMonsterTM2
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
