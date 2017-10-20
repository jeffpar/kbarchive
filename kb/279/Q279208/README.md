---
layout: page
title: "Q279208: CFS/CFS 2: Troubleshooting Joystick Problems (Part 1)"
permalink: /kb/279/Q279208/
---

## Q279208: CFS/CFS 2: Troubleshooting Joystick Problems (Part 1)

{% raw %}

	Article: Q279208
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbui kbimu msgame
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot joystick issues in Microsoft Combat
	Flight Simulator: WWII Europe Series and Microsoft Combat Flight Simulator 2:
	WWII Pacific Theater.
	
	When you play one of the games listed at the beginning of this article, you may
	experience one or more of the following symptoms:
	
	- The joystick may behave erratically.
	
	- The joystick may not respond.
	
	- The rudder or throttle on the joystick may not respond.
	
	NOTE: This article is the first article in a two-part series. To view the second
	article in this series, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q279210 Combat Flight Simulator/Combat Flight Simulator 2: How to
	  Troubleshoot Joystick Problems (Part 2)
	
	MORE INFORMATION
	================
	
	To troubleshoot joystick issues in the games listed at the beginning of this
	article, use the following methods in the order in which they are presented.
	After you finish each method, test to determine if the issue is resolved. If the
	issue continues to occur, proceed to the next method.
	
	NOTE: If you use a Logitech Warrior joystick, connect it to the game port in your
	computer. Do not connect the Logitech Warrior joystick to the serial port in
	your computer. The Logitech Warrior does not function properly with Microsoft
	DirectX 5.0 or later when it is connected to a serial port.
	
	Verify That Your Operating System Supports Your Game Controller
	---------------------------------------------------------------
	
	To enable support for the game port in Microsoft Windows NT 4.0, you must install
	Service Pack 3 (SP3) or later. Windows NT 4.0 with SP3 or later supports most
	analog game controllers. However, it does not support digital game controllers.
	
	The Microsoft Windows 95, Microsoft Windows 98, Microsoft Windows Millennium
	Edition (Me), and Microsoft Windows 2000 operating systems support both analog
	and digital game controllers. For best performance, verify that the latest
	version of the game controller driver for your game controller is installed on
	your computer.
	
	The following table lists operating system compatibility for all SideWinder game
	controllers:
	
	+---------------------------------------------------------------------------------+
	| Game Controller      | Windows 95 | Windows 98/Me | Windows NT 4 | Windows 2000 |
	+---------------------------------------------------------------------------------+
	| SideWinder standard  | Yes        | Yes           | Yes          | Yes          |
	+---------------------------------------------------------------------------------+
	| SideWinder 3DPro     | Yes        | Yes           | Yes *        | Yes          |
	+---------------------------------------------------------------------------------+
	| SideWinder Game Pad  | Yes        | Yes           | No           | Yes          |
	+---------------------------------------------------------------------------------+
	| SideWinder Plug and  | No         | Yes           | No           | Yes          |
	| Play Game Pad        |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Game Pad  | No         | Yes           | No           | No **        |
	| Pro                  |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder FreeStyle | Yes ***    | Yes           | No           | Yes          |
	| Pro                  |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Dual      | No         | Yes           | No           | No **        |
	| Strike               |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Joystick  | No         | Yes           | No           | Yes          |
	+---------------------------------------------------------------------------------+
	| SideWinder Precision | Yes ***    | Yes           | No           | Yes          |
	| Pro                  |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Precision | No         | Yes           | No           | Yes          |
	| Pro 2                |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Force     | Yes        | Yes           | No           | Yes          |
	| Feedback Pro         |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Force     | No         | Yes           | No           | Yes          |
	| Feedback Pro 2       |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Precision | No         | Yes           | No           | No **        |
	| Racing Wheel         |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Force     | Yes        | Yes           | No           | Yes          |
	| Feedback Wheel       |            |               |              |              |
	+---------------------------------------------------------------------------------+
	| SideWinder Force     | No         | Yes           | No           | No **        |
	| Feedback Wheel (USB) |            |               |              |              |
	+---------------------------------------------------------------------------------+
	
	* Windows NT 4.0 with Service Pack 3 or later only supports the SideWinder 3DPro
	joystick in analog mode.
	
	** You can install and run version 4.0 of the SideWinder software on a Windows
	2000-based computer. However, all features may not function as expected, and the
	SideWinder software may not function properly. To install the SideWinder
	software on Windows 2000, you must log on as an administrator.
	
	*** To use a hybrid game port/Universal Serial Bus (USB) game controller with a
	Windows 95-based computer, you must connect the game controller to the game port
	in your computer. Windows 95 does not support USB.
	
	NOTE: Unless otherwise indicated in the preceding table, support for all current
	USB/game port and USB-only SideWinder game controllers is included in Windows
	98, Windows Me, and Windows 2000.
	
	Check the Game Controller Connection to the Computer
	----------------------------------------------------
	
	If you use a game port game controller, verify that the game controller is
	connected directly to the game port in your computer. Daisy-chained game
	controllers or game port adapters can interfere with communication between the
	game port and the game controller.
	
	If you use a USB game controller, verify that the game controller is connected
	properly to the USB port in your computer or to a compatible USB hub that is
	connected to the USB port in your computer, and disconnect all game controllers
	from your computer except the game controller that you want to use to play the
	game.
	
	NOTE: Windows NT 4.0 does not support daisy-chained game controllers, game port
	adapters, or USB game controllers.
	
	Disable the SideWinder Game Device Profiler
	-------------------------------------------
	
	If you use a SideWinder game controller, disable the SideWinder Game Device
	Profiler or SideWinder Game Controller software. To do this, right-click the
	Game Device Profiler icon or the Game Controller Software icon in the status
	area on the taskbar, and then click Unload or Disable.
	
	Install the Latest Version of Microsoft DirectX
	-----------------------------------------------
	
	Download and install the latest version of DirectX from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/directx/homeuser/downloads/default.asp
	
	For additional information about how to obtain and install the latest version of
	DirectX, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q179113 How to Download and Install DirectX
	
	Verify That Your Game Controller Is Assigned to Controller ID 1
	---------------------------------------------------------------
	
	Many games cannot recognize a game controller that is not assigned to Controller
	ID 1. To verify that your game controller is assigned to Controller ID 1:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. Click the Advanced tab.
	
	4. If the game controller that you want to use is assigned to ID 1, click OK,
	  and then proceed to the "Confirm the Version of SideWinder Game Controller
	  Software" method.
	
	  If the game controller that you want to use is not assigned to ID 1, click
	  Change.
	
	5. In the Game Controllers box, click the game controller that you want to use,
	  and then click the Up arrow or Down arrow to change the Selected ID value to
	  1.
	
	6. Click OK, and then click OK again.
	
	7. Close Control Panel.
	
	Confirm the Version of SideWinder Game Controller Software
	----------------------------------------------------------
	
	If you use a SideWinder USB-only game controller, verify that version 4.0 or
	later of the SideWinder Game Controller Software is installed on your computer.
	
	If you use a game port game controller or a hybrid game port/USB game controller,
	verify that version 3.02 or earlier of the SideWinder Game Device Profiler or
	the SideWinder Game Controller software is installed on your computer.
	
	If you use both SideWinder USB-only game controllers and SideWinder game port or
	hybrid game port/USB game controllers, make sure that versions 4.0 or later and
	3.02 or earlier of the SideWinder Game Controller software are installed on your
	computer.
	
	The following table lists the SideWinder game controllers that are supported by
	each version of the SideWinder Game Controller software:
	
	+---------------------------------------------------------------------------+
	| Game controller                   | Version 4.0 | Version 3.02 or earlier | 
	+---------------------------------------------------------------------------+
	| SideWinder Game Pad Pro           | Yes         | No                      | 
	+---------------------------------------------------------------------------+
	| SideWinder Plug and Play Game Pad | N/A *       | N/A *                   | 
	+---------------------------------------------------------------------------+
	| SideWinder Dual Strike            | Yes         | No                      | 
	+---------------------------------------------------------------------------+
	| SideWinder 3D Pro                 | No          | Yes                     | 
	+---------------------------------------------------------------------------+
	| SideWinder game pad               | No          | Yes                     | 
	+---------------------------------------------------------------------------+
	| SideWinder Plug and Play Game Pad | N/A *       | N/A *                   | 
	+---------------------------------------------------------------------------+
	| SideWinder Joystick               | N/A *       | N/A *                   | 
	+---------------------------------------------------------------------------+
	| SideWinder Precision Pro          | No          | Yes                     | 
	+---------------------------------------------------------------------------+
	| SideWinder Precision Pro 2        | Yes         | No                      | 
	+---------------------------------------------------------------------------+
	| SideWinder Force Feedback Pro     | No          | Yes                     | 
	+---------------------------------------------------------------------------+
	| SideWinder Force Feedback Pro 2   | No          | Yes                     | 
	+---------------------------------------------------------------------------+
	| SideWinder Force Feedback Wheel   | No          | Yes                     | 
	+---------------------------------------------------------------------------+
	| SideWinder Freestyle Pro          | No          | Yes                     | 
	+---------------------------------------------------------------------------+
	| SideWinder Precision Racing Wheel | Yes         | No                      | 
	+---------------------------------------------------------------------------+
	
	* No software required.
	
	If you use one of the SideWinder game controllers listed in the previous table,
	visit the following Microsoft Web site to determine if a software update is
	available for your game controller:
	
	  http://www.microsoft.com/sidewinder/
	
	To determine the version of the SideWinder Game Device or SideWinder Game
	Controller software that is installed in your computer:
	
	1. Click Start, point to Find, and then click "Files or Folders."
	
	2. In the Named box, type "sw3dpro.vxd" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. In the list of found files, right-click the Sw3dpro.vxd file, and then click
	  Properties.
	
	  NOTE: If the Sw3dpro.vxd file is not in the list of found files, the
	  SideWinder software is not installed.
	
	5. On the Version tab, note the value on the File Version line, and then click
	  OK.
	
	6. Close the "Find: Files named sw3dpro.vxd" window.
	
	Calibrate the Game Controller
	-----------------------------
	
	If you use a digital Microsoft SideWinder game controller with version 2.0 or
	later of the Microsoft SideWinder Game Device software or the Microsoft
	SideWinder Game Controller software, the software calibrates the game controller
	automatically.
	
	To use version 2.0 of the Microsoft SideWinder Game Device software to test the
	calibration for your digital SideWinder game controller:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. On the Test tab, test all of the functions for your digital SideWinder game
	  controller, and then click OK.
	
	4. Close Control Panel.
	
	To use version 3.x or 4.0 of the Microsoft SideWinder Game Controller software to
	test the calibration for your digital SideWinder game controller:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. On the General tab, click the game controller you want to test in the Game
	  Controllers box, and then click Properties.
	
	4. On the Test tab, test all of the functions for your digital SideWinder game
	  controller.
	
	5. Click OK, and then click OK again.
	
	6. Close Control Panel.
	
	If you use an analog game controller, or if you use a Microsoft SideWinder 3D Pro
	or a Microsoft SideWinder game pad with version 1.5 of the SideWinder Game
	Device software, you may need to calibrate the game controller manually. To do
	this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. In the Controller column, select the game controller that you want to
	  calibrate, and then click Properties.
	
	4. Click Calibrate, and then follow the instructions on the screen to calibrate
	  the game controller.
	
	  If you use a SideWinder 3D Pro with version 1.0 of the SideWinder software,
	  when you are prompted to press a button on the controller, make sure that you
	  press a button on the joystick instead of the joystick base.
	
	  NOTE: Because of differences between analog game controllers, you may notice a
	  certain amount of deviation between the graphic display for the joystick
	  position and the actual joystick movement. This is normal and does not affect
	  the calibration of the game controller.
	
	5. When you receive the "You have successfully calibrated your device" message,
	  click Finish.
	
	6. On the Test tab, test all of the functions for your game controller, and then
	  click OK.
	
	7. Close Control Panel.
	
	NOTE: No calibration option is available in version 1.5 of the SideWinder Game
	Device software unless you install Combat Flight Simulator with DirectX 6.0.
	
	If you cannot calibrate your game controller, or if your game controller does not
	function properly when you test it, Microsoft Windows may be unable to
	communicate properly with the game controller. If this is true, contact the
	manufacturer of your game controller for information about how to configure the
	device correctly in Windows. You may also need to obtain and install the latest
	version of the device driver for the game controller.
	
	If you calibrate and test the game controller successfully, start Combat Flight
	Simulator or Combat Flight Simulator 2 to test the game controller in the game.
	If the issue continues to occur, calibrate the device in the game. To do this,
	use the appropriate method for your version of Combat Flight Simulator.
	
	Combat Flight Simulator: WWI Europe Series:
	
	1. Start a new flight in Combat Flight Simulator.
	
	2. On the Options menu, point to Settings, and then click Calibrate Joystick.
	
	  NOTE: If Calibrate Joystick is unavailable, click Enable Joystick, and then
	  repeat this step.
	
	  NOTE: If the enable joystick option is not available, you may have a conflict
	  between an add-in sound card and an on-board soundcard. If this is the case,
	  disable the card not being used and ensure that the joystick is plugged into
	  the appropriate port.
	
	3. On the General tab, verify that the game controller that you want to use
	  appears in the Game Controllers box.
	
	  If the Game Controllers box contains a different game controller, click the
	  game controller in the Game Controllers box, and then click Remove.
	
	4. In the Game Controllers box, click the game controller that you want to use,
	  and then click Properties.
	
	5. On the Settings tab, move the sliders to the settings that you want to use.
	
	6. Click OK, and then click OK again.
	
	Combat Flight Simulator 2: WWII Pacific Theater:
	
	1. Start a new flight in Combat Flight Simulator 2.
	
	2. On the Options menu, click Settings.
	
	3. Click Calibrate Joystick.
	
	  NOTE: If Calibrate Joystick is unavailable, click to select the Enable
	  Joystick check box, and then repeat this step.
	
	4. On the General tab, verify that the game controller that you want to use
	  appears in the Game Controllers box.
	
	  If the Game Controllers box contains a different game controller, click the
	  game controller in the Game Controllers box, and then click Remove.
	
	5. In the Game Controllers box, click the game controller that you want to use,
	  and then click Properties.
	
	6. On the Settings tab, move the sliders to the settings that you want to use.
	
	7. Click OK, and then click OK again.
	
	Reset the Default Actions
	-------------------------
	
	To reset the default actions assigned to the game controller:
	
	1. Start a new flight in Combat Flight Simulator or Combat Flight Simulator 2.
	
	2. On the Options menu in Combat Flight Simulator, point to Settings, and then
	  click "Controller assignments".
	
	  On the Options menu in Combat Flight Simulator 2, click Settings. On the
	  Settings screen, click "Controller assignments".
	
	3. Click the Buttons/Keys tab.
	
	4. In the "Joystick type" box, click the game controller that you want to use,
	  and then click Reset Defaults.
	
	5. Click the keyboard commands layout that you want to use in the game, and then
	  click OK.
	
	6. Click the "Joystick axes" tab.
	
	7. In the "Joystick type" box, click the game controller that you want to use,
	  and then click Reset Defaults.
	
	8. To determine if the default events are selected for your 4-axis game
	  controller, verify that the Axis settings on Joystick Axes tab for each Event
	  match the settings in the following table:
	
	  
	  +---------------------------------------------+
	  | Event         | Axis (CFS 1) | Axis (CFS 2) | 
	  +---------------------------------------------+
	  | Elevator axis | Y Axis       | Y-axis       | 
	  +---------------------------------------------+
	  | Ailerons axis | X Axis       | X-axis       | 
	  +---------------------------------------------+
	  | Rudder axis   | Z Rotation   | Rz-axis      | 
	  +---------------------------------------------+
	  | Throttle axis | Slider       | Z-axis       | 
	  +---------------------------------------------+
	
	  If the default events are not selected, assign the default events manually.
	  For information about how to do this, refer to the "Manually Assign Actions"
	  method in the following article in the Microsoft Knowledge Base:
	
	  Q279210 Combat Flight Simulator/Combat Flight Simulator 2: How to
	  Troubleshoot Joystick Problems (Part 2)
	
	  If the default event is assigned to an axis, but the event behaves in reverse
	  (for example, up instead of down, or right instead of left), click to select
	  or clear the check box under the Reverse column for that axis.
	
	If the issue continues to occur, proceed to the next method.
	
	Rebuild the game and joystick configuration file.
	-------------------------------------------------
	
	Combat Flight Simulator stores game and joystick configuration settings in the
	Combatfs.cfg file.
	
	Combat Flight Simulator 2stores game and joystick configuration settings in the
	Cfs2.cfg file.
	
	To rebuild the Combatfs.cfg or Cfs2.cfg file, press and hold down CTRL+SHIFT as
	you start Combat Flight Simulator and then start a new flight. Continue to hold
	down CTRL+SHIFT until you are in Cockpit view.
	
	NOTE: When you rebuild the configuration file, some of your joystick settings may
	change.
	
	If your game controller is installed properly and the Devices.cfg file contains
	the default settings for your game controller, Combat Flight Simulator adds the
	appropriate entries for your game controller to the Cfs2.cfg or Combatfs.cfg
	file.
	
	To view the Device.cfg file:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the appropriate line for your version of Combat Flight
	  Simulator, and then click OK
	
	  Combat Flight Simulator 1:
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight
	  Simulator\Devices.cfg
	
	  Combat Flight Simulator 2:
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight Simulator
	  2\Devices.cfg
	
	  where <drive> is the drive letter of the hard disk on which you want to
	  install Combat Flight Simulator.
	
	3. If you are prompted to select the program that you want to use to open the
	  file, click Notepad in the "Choose the program you want to use" box, and then
	  click OK.
	
	The settings under the SLEW heading determine how the game controller behaves in
	Slew mode. The settings under the RUDDER heading determine how the game
	controller behaves when the rudder is enabled. To enable the rudder settings,
	click to select the Rudder check box on the Settings tab in the Game Controllers
	tool in Control Panel.
	
	NOTE: If your game controller is not defined in the Devices.cfg file, Combat
	Flight Simulator may not assign any actions to the buttons on your game
	controller. To manually assign actions to the buttons on your game control
	device, proceed to the "Manually Assign Actions" method in part 2 of this
	article.
	
	REFERENCES
	==========
	
	This article is the first article in a two-part series. To view the second
	article in this series, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q279210 Combat Flight Simulator/Combat Flight Simulator 2: How to
	  Troubleshoot Joystick Problems (Part 2)
	
	Additional query words: msgame cfs cfs2 combatfs joy stick game controller device side winder tshoot trouble shoot
	
	======================================================================
	Keywords          : kbui kbimu msgame 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
