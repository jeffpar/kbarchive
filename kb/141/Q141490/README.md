---
layout: page
title: "Q141490: Flight Simulator: How to Configure for MS Sidewinder 3D Pro"
permalink: kb/141/Q141490/
---

## Q141490: Flight Simulator: How to Configure for MS Sidewinder 3D Pro

	Article: Q141490
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0,5.1; WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	5.00 5.10
	MS-DOS
	kbusage kbsetup kbinterop kbhowto
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, versions 5.0, 5.1 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives steps to use when you want to optimally configure your
	Microsoft Sidewinder 3D Pro joystick for use with Flight Simulator version 5.1.
	
	MORE INFORMATION
	================
	
	Flight Simulator supports the following Sidewinder 3D Pro features in CH
	Flightstick Pro mode (analog).
	
	Controls Supported                         Flight Simulator Function
	------------------                         -------------------------
	
	Joystick                                   Aileron & Elevator
	Joystick Rotation                          Rudder
	Slider                                     Throttle
	Hat Switch                                 Change Views (4 way)
	Button 1                                   Brakes
	Button 2                                   Flaps Down
	Button 3                                   Gear up/down toggle
	Button 4                                   Flaps Up
	
	Buttons 5-8 are not supported in Flight Simulator 5.1 in CH Flightstick mode.
	
	Configuring Flight Simulator
	----------------------------
	
	Before you configure your system, make sure Flight Simulator 5.1 is installed and
	the Sidewinder software is installed and configured in the Windows 95 joystick
	control panel.
	
	1. Locate the joystick switch on bottom front of the Sidewinder and move it to
	  position 1 (CH Flightstick Pro mode). This switch is described in detail in
	  the Microsoft Sidewinder 3D Pro instruction manual.
	
	2. Start Flight Simulator 5.1.
	
	3. On the Options menu, click Preferences, and then click Joystick.
	
	4. Change the Joystick One setting to Aileron & Elevator.
	
	5. Change the Joystick Two setting to Throttle & Rudder.
	
	6. Click OK, and then follow on-screen instructions to calibrate the joystick.
	
	7. On the Options menu, click Exit to exit Flight Simulator.
	
	Configuring Joystick Buttons and Hat
	------------------------------------
	
	To configure the joystick buttons and hat, use the following steps to edit the
	Fs5.ini file:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type the following:
	
	  fs5.ini
	
	3. In the Look In box, select My Computer.
	
	4. Click Find Now.
	
	5. With your right mouse button, click the FS5 icon in the Find Files dialog
	  box, and then click Open.
	
	6. Find the following line and place a semicolon or a REM in front of it.
	
	     DEVICE=STICK2.FSO
	
	  for example, change the line to look like the following:
	
	     ;DEVICE=STICK2.FSO
	
	  -or-
	
	     REM DEVICE=STICK2.FSO
	
	7. On the File menu click Save, then click Exit.
	
	Flight Simulator 5.1 is configured to work with the Microsoft Sidewinder 3D Pro
	Joystick controller.
	
	Additional query words: 5.00 5.10 flightsim fltsim dos d_fltsim sidewind stick setup enable enabling starting turnon flt sim
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWin95 kbOSWinSearch kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.0,5.1; WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
