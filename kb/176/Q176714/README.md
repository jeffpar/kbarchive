---
layout: page
title: "Q176714: Troubleshooting Joystick Problems in Flight Simulator 98"
permalink: kb/176/Q176714/
---

## Q176714: Troubleshooting Joystick Problems in Flight Simulator 98

	Article: Q176714
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbhw kbsetup kbsound kbtshoot kbtlc fs98 kbimu kbHardwarekbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Flight Simulator 98, you may experience one or more of the
	following symptoms:
	
	- The joystick behaves erratically.
	
	- The joystick does not respond.
	
	- The rudder or throttle does not respond.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following troubleshooting methods in the order in
	which they are listed. As you complete each troubleshooting method, start Flight
	Simulator 98 and test if the issue is resolved.
	
	Verify That Your Operating System Supports Your Game Controller
	---------------------------------------------------------------
	
	To provide game port support in Microsoft Windows NT 4.0, you must install
	Service Pack 3 (SP3) or later. Microsoft Windows NT 4.0 SP3 or later supports
	most analog game controllers. However, it does not support digital game
	controllers.
	
	Microsoft Windows 2000 supports all SideWinder game controllers. You must use the
	Microsoft SideWinder Game Controller software 3.x or later.
	
	Microsoft Windows 95/98 supports both analog and digital game controllers. For
	best performance, verify that latest version of the device drivers for your game
	controller are installed in your computer.
	
	The following table shows operating system compatibility for Microsoft SideWinder
	game controllers:
	
	                                    Windows NT
	                                    4.0 with SP3
	  Game Controller                   or later       Windows 95/98
	  --------------------------------------------------------------
	
	  SideWinder standard               Yes            Yes
	  SideWinder 3DPro                  Analog only    Yes
	  SideWinder Game Pad               No             Yes
	  SideWinder Precision Pro          No             Yes
	  SideWinder Force Feedback Pro     No             Yes
	  SideWinder FreeStyle Pro          No             Yes
	  SideWinder Force Feedback Wheel   No             Yes
	
	Confirm the Game Controller Connection to the Game Port
	-------------------------------------------------------
	
	Verify that the game controller is connected directly to the game port on your
	computer. Daisy-chained game controllers or game port adapters can interfere
	with communication between the game port and the game controller. Windows NT 4.0
	does not support daisy-chained game controllers or game port adapters.
	
	Disable the SideWinder Game Device Profiler
	-------------------------------------------
	
	If you use a SideWinder game controller, disable the SideWinder Game Device
	Profiler or the SideWinder Game Controller software. To do this, right-click the
	Game Device Profiler icon or the Game Controller Software icon in the status
	area on the taskbar, and then click Unload.
	
	Calibrate the Game Controller
	-----------------------------
	
	If you use a digital Microsoft SideWinder game controller with version 2.0 or
	later of the Microsoft SideWinder Game Device software or the Microsoft
	SideWinder Game Controller software, the software calibrates the game controller
	automatically.
	
	To use version 2.0 of the Microsoft SideWinder Game Device software to test the
	calibration for your digital SideWinder game controller, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. On the Test tab, test all of the functions for your digital SideWinder game
	  controller, and then click OK.
	
	4. Close Control Panel.
	
	To use version 3.0 of the Microsoft SideWinder Game Controller software to test
	the calibration for your digital SideWinder game controller, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. On the General tab, click the game controller you want to test in the Game
	  Controllers box, and then click Properties.
	
	4. On the Test tab, test all of the functions for your digital SideWinder game
	  controller, click OK, and then click OK again.
	
	5. Close Control Panel.
	
	If you use an analog game controller, or if you use a Microsoft SideWinder 3D Pro
	or a Microsoft SideWinder game pad with version 1.5 of the SideWinder Game
	Device software, follow these steps to calibrate the game controller:
	
	NOTE: No calibration option is available in version 1.5 of the SideWinder Game
	Device software unless you install Flight Simulator 98 with DirectX 5.0.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. Select the gaming device you want to calibrate in the Controller column, and
	  then click Properties.
	
	4. Click Calibrate, and then follow the instructions on the screen to calibrate
	  the game controller. If you use a SideWinder 3D Pro with version 1.0 of the
	  SideWinder software, when you are prompted to press a button on the
	  controller, press a button on the joystick, not on the joystick base.
	
	  NOTE: Because of differences between analog game controllers, you may notice a
	  certain amount of deviation between the graphic display for the joystick
	  position and the actual joystick movement. This is normal and does not affect
	  you game controller calibration.
	
	5. When you receive the "You have successfully calibrated your device" message,
	  click Finish.
	
	6. On the Test tab, test all of the functions for your game controller, and then
	  click OK.
	
	7. Close Control Panel.
	
	If you cannot calibrate your game controller, or if your game controller does not
	function properly when you test it, Windows may be unable to communicate
	properly with the game controller. If this is true, contact the manufacturer of
	your game controller for information about how to configure the device correctly
	in Windows. You may also need to obtain and install the latest version of the
	device drivers.
	
	If you calibrate and test the game controller successfully, start Flight
	Simulator 98 to test the game controller in the game. If the issue continues to
	occur, calibrate the device in Flight Simulator 98. To do this, follow these
	steps:
	
	1. Start a new flight in Flight Simulator 98.
	
	2. On the Options menu, click Custom Controls.
	
	3. Verify that the Enable Joystick check box is selected, and then click
	  Calibrate.
	
	4. Follow the instructions on the screen to calibrate your game controller.
	
	Reset Default Actions
	---------------------
	
	To reset the default actions assigned to the game controller, follow these
	steps:
	
	1. Start a new flight in Flight Simulator 98.
	
	2. On the Options menu, click Custom Controls.
	
	3. Click the Assignments tab.
	
	4. Under the Game Device column, click any command to select it.
	
	5. Click Reset Defaults, and then click Yes.
	
	6. To check if the default actions are selected for your 4-axis game controller,
	  verify that the game device settings for the control axes in the game match
	  the settings in the following table:
	
	     Action          Game Device
	     ---------------------------
	
	     Ailerons axis   Axis 01
	     Elevator axis   Axis 02
	     Rudder axis     Axis 04
	     Throttle axis   Axis 03
	
	
	  If the default actions are not selected, repeat steps 4-5, or follow the steps
	  in the "Manually Assign Actions" method to assign the default actions
	  manually.
	
	If the issue continues to occur, proceed to the next method.
	
	Rebuild the Fltsim98.cfg File
	-----------------------------
	
	To rebuild the Fltsim98.cfg file, press and hold down CTRL+SHIFT as you start
	Flight Simulator 98 and start a new flight. Continue to hold down CTRL+SHIFT
	until you are in the cockpit view.
	
	NOTE: When you rebuild the Fltsim98.cfg file, some of your joystick settings may
	change.
	
	If your game controller is installed properly and the Devices.cfg file contains
	the default settings for your game controller, Flight Simulator 98 adds the
	appropriate entries for your game controller to the Fltsim98.cfg file.
	
	The Devices.cfg file contains the following joystick headings:
	
	  [Generic_4]
	  [Generic_4 SLEW]
	  [Generic_3]
	  [Generic_3 RUDDER]
	  [Generic_3 SLEW]
	  [Generic_2]
	  [Generic_2 SLEW]
	  [Spacetec SpaceOrb 360]
	  [Spacetec SpaceOrb 360 SLEW]
	  [Creative GamePad]
	  [Creative GamePad SLEW]
	  [Gravis Gamepad]
	  [Gravis Gamepad SLEW]
	  [Gravis GrIP]
	  [Gravis GrIP SLEW]
	  [Gravis Analog Joystick]
	  [Gravis Analog Joystick RUDDER]
	  [Gravis Analog Joystick SLEW]
	  [Gravis Analog Joystick RUDDER SLEW]
	  [Gravis Analog Pro Joystick]
	  [Gravis Analog Pro Joystick RUDDER]
	  [Gravis Analog Pro Joystick SLEW]
	  [Gravis Analog Pro Joystick RUDDER SLEW]
	  [Thrustmaster Formula T1/T2 without adapter]
	  [Thrustmaster Formula T1/T2 without adapter SLEW]
	  [Thrustmaster Formula T1/T2 with adapter]
	  [Thrustmaster Formula T1/T2 with adapter SLEW]
	  [Thrustmaster Flight Control System]
	  [Thrustmaster Flight Control System RUDDER]
	  [Thrustmaster Flight Control System SLEW]
	  [Thrustmaster Flight Control System RUDDER SLEW]
	  [Logitech WingMan Light]
	  [Logitech WingMan Light RUDDER]
	  [Logitech WingMan Light SLEW]
	  [Logitech WingMan Light RUDDER SLEW]
	  [Logitech WingMan Extreme]
	  [Logitech WingMan Extreme SLEW]
	  [Logitech WingMan]
	  [Logitech WingMan RUDDER]
	  [Logitech WingMan SLEW]
	  [Logitech WingMan RUDDER SLEW]
	  [Logitech ThunderPad]
	  [Logitech ThunderPad SLEW]
	  [CH Flightstick]
	  [CH Flightstick RUDDER]
	  [CH Flightstick SLEW]
	  [CH Flightstick RUDDER SLEW]
	  [CH Flightstick Pro]
	  [CH Flightstick Pro RUDDER]
	  [CH Flightstick Pro SLEW]
	  [CH Flightstick Pro RUDDER SLEW]
	  [CH Virtual Pilot]
	  [CH Virtual Pilot RUDDER]
	  [CH Virtual Pilot SLEW]
	  [CH Virtual Pilot RUDDER SLEW]
	  [CH Virtual Pilot Pro]
	  [CH Virtual Pilot Pro RUDDER]
	  [CH Virtual Pilot Pro SLEW]
	  [CH Virtual Pilot Pro RUDDER SLEW]
	  [Microsoft SideWinder game pad]
	  [Microsoft SideWinder game pad SLEW]
	  [Microsoft SideWinder]
	  [Microsoft SideWinder SLEW]
	  [Microsoft SideWinder 3D Pro]
	  [Microsoft SideWinder 3D Pro SLEW]
	  [Microsoft SideWinder Force Feedback Pro]
	  [Microsoft SideWinder Force Feedback Pro SLEW]
	  [Microsoft SideWinder Precision Pro]
	  [Microsoft SideWinder Precision Pro SLEW]
	
	The settings under the SLEW headings determine how the game controller behaves in
	Slew mode. The settings under the RUDDER headings determine how the game
	controller behaves when the rudder is enabled. To enable the Rudder settings,
	click to select the Rudder check box on the Settings tab in the Game Controllers
	tool in Control Panel.
	
	NOTE: If your game controller is not defined in the Devices.cfg file, Flight
	Simulator 98 may not assign any actions to the buttons on your game controller.
	To manually assign actions to the buttons on your game control device, proceed
	to the "Manually Assign Actions" method.
	
	Manually Assign Actions
	-----------------------
	
	To manually assign an action to a button on your game controller, follow these
	steps:
	
	1. Start a new flight in Flight Simulator 98.
	
	2. On the Options menu, click Custom Controls.
	
	3. Click the Assignments tab.
	
	4. Under the Game Device column, click to select the line for an action you want
	  to assign to a game device command, and then click Assign.
	
	  NOTE: When you click Assign, the blue line in the Game Device column becomes a
	  white box, and you have five seconds to assign the selected action to a game
	  controller command.
	
	5. On the game controller, press the button or move the axis you want to use for
	  the selected action. If you receive a warning message that a different action
	  is already assigned to the game controller button or axis, click OK.
	
	If the issue continues to occur, proceed to the next method.
	
	Calibrate as a Different Device
	-------------------------------
	
	Use the Game Controllers tool in Control Panel to configure your game controller
	as a different device.
	
	NOTE: You cannot configure any Microsoft SideWinder gaming device as a different
	device except the SideWinder Standard or the SideWinder 3D Pro.
	
	For example, to configure a SideWinder 3D Pro joystick as a 3-axis 4-button
	joystick with Rudder/Pedals, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers, and then click Microsoft SideWinder 3D Pro.
	
	3. Click Remove, and then click Yes.
	
	4. Click Add, click 3-Axis, 4-Button Joystick, and then click OK.
	
	5. Click Properties.
	
	6. On the Settings tab, click to select the Rudder/Pedals check box.
	
	7. Click Calibrate, and then follow the instructions on the screen to calibrate
	  the game controller.
	
	  NOTE: Axis 3 is the throttle control, and axis 4 is the rudder control.
	
	8. Click Test to verify that the game controller functions properly.
	
	If the issue continues to occur, proceed to the next method.
	
	Reduce Sound Playback Quality
	-----------------------------
	
	If your sound card is unable to properly process game port signals and high
	quality game sounds at the same time, you may be able to work around the issue
	by reducing the sound playback quality in the game. To do this, follow these
	steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "fltsim98.cfg" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, double-click the Fltsim98.cfg file.
	
	4. In the "Choose the program you want to use" box, double-click Notepad.
	
	5. Scroll to the end of the file, press ENTER twice, and then type the following
	  lines, pressing ENTER after each line:
	
	   [SOUND]
	   Channels=1
	   SamplesPerSec=11025
	
	6. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	You can also change the SamplesPerSec= line automatically when you download and
	install Patch Set 1.0 for Flight Simulator 98. This patch set also updates other
	Flight Simulator 98 components. Patch Set 1.0 for Flight Simulator 98 is
	available as a free download from the following Microsoft Web site:
	
	  http://www.microsoft.com/games/products.asp?filter=fsim
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Then Reinstall Flight Simulator 98
	---------------------------------------------
	
	To remove and then reinstall Flight Simulator 98, follow these steps:
	
	1. Insert the Flight Simulator 98 CD-ROM into the CD-ROM drive. Press and hold
	  down SHIFT as you insert the CD-ROM to prevent the program from starting
	  automatically.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. On the Install/Uninstall tab, double-click Microsoft Flight Simulator 98.
	
	5. When you are prompted to remove Flight Simulator 98, click OK.
	
	6. Delete the Flight Simulator folder. By default, Flight Simulator 98 is
	  installed in the following folder:
	
	  <drive>:\Program Files\Microsoft Games\Flight Simulator
	
	  where <drive> is the drive letter for the hard disk on which Flight
	  Simulator 98 is installed.
	
	  For more information about how to delete folders in Windows, see your printed
	  documentation or online Help file.
	
	7. Click Start, and then click Run.
	
	8. In the Open box, type the following line, and then click OK
	
	  <cd-rom>:\setup.exe
	
	  where <cd-rom> is the drive letter for the CD-ROM drive.
	
	9. Follow the instructions on the screen to install the program.
	
	If the issue continues to occur, proceed to the next method.
	
	Update Device Drivers
	---------------------
	
	If you are using version 1.0 of the SideWinder Game Device Software, download and
	install the latest version of the SideWinder Game Controller software from the
	following Microsoft Web site:
	
	  http://www.microsoft.com/products/hardware/sidewinder/downloads/default.htm
	
	To determine the version of the SideWinder Game Device or SideWinder Game
	Controller software installed in your computer, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "sw3dpro.vxd" (without the quotation marks).
	
	3. In the Look In box, click All Hard Drives or click the hard disk on which
	  Windows is installed, and then click Find Now.
	
	4. In the list of found files, right-click the Sw3dpro.vxd file, and then click
	  Properties.
	
	  NOTE: If the Sw3dpro.vxd file is not in the list of found files, the
	  SideWinder software is not installed.
	
	5. On the Version tab, note the value on the File Version line, and then click
	  OK.
	
	6. Close the Find: Files Named Sw3dpro.vxd window.
	
	Contact your game controller and sound card manufacturers to inquire about how to
	obtain and install the latest version of the drivers for your game controller
	and sound card. For additional information about how to contact your hardware
	manufacturer, please see the following articles in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	If the issue continues to occur, proceed to the next method.
	
	Configure the Sound Card to Use Only One DMA Channel
	----------------------------------------------------
	
	Your game controller may perform better if you configure the sound card to use
	only one DMA channel.
	
	NOTE: Some programs are unable to run with only one DMA channel. If you
	experience this issue, restore your original sound card settings.
	
	To configure the sound card to use single-mode DMA on a computer running
	Microsoft Windows NT 4.0-based computer or on a Microsoft Windows 95/98-based
	computer with legacy sound drivers installed, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Devices tab (Windows 98/NT) or the Advanced tab (Windows 95),
	  double-click the Audio Devices branch to expand it.
	
	4. Under the Audio Devices branch, click the sound card, and then click
	  Properties.
	
	5. Click Settings.
	
	6. To configure the sound card to use single-mode DMA, see your sound card
	  documentation or use one of the following procedures:
	
	   - Click to select the Use Single-Mode DMA check box, click OK until you
	     return to Control Panel, and then restart the computer.
	
	   - In the DMA Channel (16-bit) box, click Disable, click OK until you return
	     to Control Panel, and then restart the computer.
	
	   - In the High DMA box, click Use DMA, click OK until you return to Control
	     Panel, and then restart the computer.
	
	  If you cannot use the sound driver to configure single-mode DMA, click Cancel
	  until you return to Control Panel, and then proceed to the "Disable
	  Force-Feedback Effects" method.
	
	To configure the sound card to use single-mode DMA on a computer running Windows
	95/98-based computer with native sound drivers installed, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Device Manager tab, double-click the Sound, Video And Game Controllers
	  branch to expand it.
	
	4. Under the Sound, Video, And Game Controllers branch, click the sound card,
	  and then click Properties.
	
	5. On the Resources tab, locate the Direct Memory Access (DMA) lines under
	  Resource Type. If you see more than one Direct Memory Access (DMA) line,
	  follow these steps to configure the sound card for single-mode DMA:
	
	  a. Click to clear the Use Automatic Settings check box.
	
	  b. In the Settings Based On box, click a Basic Configuration that uses only
	     one DMA channel setting.
	
	  c. If you see a conflict message in the Conflicting Device List box, repeat
	     step b to select another basic configuration that uses only one DMA
	     channel and does not conflict with any other devices.
	
	     If you do not see a conflict message in the Conflicting Device List box,
	     click OK, and then click Yes.
	
	  d. Click Close, and then restart the computer.
	
	  If you see only one Direct Memory Access (DMA) line, or if you cannot find a
	  basic configuration that uses only one DMA channel, click Cancel, click
	  Cancel again, and then proceed to the next method.
	
	Disable Force-Feedback Effects
	------------------------------
	
	If you use a SideWinder Force Feedback Pro joystick, disable the force- feedback
	effects. To do this, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Game Controllers.
	
	3. Click to select Microsoft SideWinder Force Feedback Pro.
	
	4. Click Properties.
	
	5. On the Settings tab, drag the Force Feedback slider to Off.
	
	6. Click OK, and then click OK again.
	
	If the issue is resolved when you disable the force-feedback effects, please see
	the following articles in the Microsoft Knowledge Base for additional
	troubleshooting information, or call Microsoft SideWinder Force Feedback
	Technical Support at (425) 635-7040:
	
	  Q175184 SideWinder Force Feedback Pro: No Forces Felt on Test Forces Tab
	
	  Q175701 No Force Feedback Effects Testing SideWinder Force Feedback Pro
	
	  Q175233 SideWinder Force Feedback Pro Test Is Slow or Does Not Respond
	
	  Q174436 Game Port Resource Settings for SideWinder Force Feedback
	
	  Q174432 Game Port Requirements for SideWinder Force Feedback Pro
	
	  Q173689 SideWinder Force Feedback Joystick Behaves Erratically
	
	  Q175158 Force Feedback Err Msg: Your Gaming Device is Not Connected
	
	  Q175054 SideWinder Not Compatible with Game Port-MIDI Adapter Cable
	
	  Q174437 Joystick Does Not Work or You Cannot Feel Force Feedback Effects
	
	  Q174433 Connecting SideWinder Force Feedback Pro for Best Performance
	
	
	MORE INFORMATION
	================
	
	If you use a Logitech Warrior joystick, connect it to the game port. Do not
	connect it to the serial port. The Logitech Warrior does not function properly
	with DirectX version 5.0 when it is connected to a serial port.
	
	Because the Logitech Warrior is not listed in the Devices.cfg file, Flight
	Simulator 98 may not assign any actions to the buttons on the joystick or may
	configure it as a generic joystick.
	
	Additional query words: 98 flightsim fltsim flt sim fs98 buttons troubleshoot tshoot generic_8359 msgame
	
	======================================================================
	Keywords          : kbenv kbhw kbsetup kbsound kbtshoot kbtlc fs98 kbimu kbHardware kbfaq
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
