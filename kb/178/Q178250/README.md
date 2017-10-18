---
layout: page
title: "Q178250: FS95: Error Message: Invalid Page Fault in Module Msvcrt40.dll"
permalink: kb/178/Q178250/
---

## Q178250: FS95: Error Message: Invalid Page Fault in Module Msvcrt40.dll

	Article: Q178250
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmm
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Flight Simulator for Windows 95, you may receive the
	following error message:
	
	  Fltsim95 caused an invalid page fault in module Msvcrt40.dll.
	
	CAUSE
	=====
	
	This issue can occur for one or more of the following reasons:
	
	- You are using airplanes created with Flight Simulator Flight Shop and you
	  have not converted them.
	- There is a conflict with a tool or utility installed by the video adapter.
	- You may be running background terminate-and-stay-resident (TSR) programs or
	  other programs that are interfering with the installation.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods:
	
	Obtain the Flight Shop Airplanes and Adventures Converter
	---------------------------------------------------------
	
	If you are using airplanes created with Flight Simulator Flight Shop, use the
	following steps to convert the airplanes:
	
	1. Download and install the Flight Shop Airplanes and Adventures Converter from
	  the following Microsoft Web site:
	
	  http://www.microsoft.com/games/products.asp?filter=fsim
	
	2. Use this converter to convert your Flight Simulator Flight Shop Airplanes.
	
	  For information about how to use this converter, please see the following
	  article in the Microsoft Knowledge Base:
	
	  Q15834 Flight Simulator Flight Shop & Flight Simulator for Windows 95
	
	If the issue continues to occur, proceed to the next method.
	
	Disable Tools and Utilities Installed By the Video Adapter Software
	-------------------------------------------------------------------
	
	Uninstall or disable any tools associated with the video adapter. Contact the
	video adapter manufacturer for more information about how to accomplish this
	task.
	
	If the problem persists, reinstall the video adapter.
	
	For more information about how to install a video adapter, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q131806 Windows 95/98: How to Install or Change a Display Driver
	
	If the issue continues to occur, proceed to the next method.
	
	Quit All Unnecessary Programs
	-----------------------------
	
	Quit all unnecessary programs that are running before you start Flight Simulator
	98. To do so, use the following steps:
	
	1. Restart the computer at a command prompt. To do so, follow the steps in the
	  appropriate section below:
	
	  Microsoft Windows 95
	  --------------------
	
	  Restart your computer. When you see the Starting Windows 95 message, press the
	  F8 key, and then choose Safe Mode Command Prompt Only from the Startup menu.
	
	  Microsoft Windows 98
	  --------------------
	
	  Restart your computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then choose Safe Mode Command
	  Prompt Only from the Startup menu.
	
	2. Start Windows by typing "win" (without the quotation marks) and holding down
	  the SHIFT key for the duration of Windows startup. This prevents any programs
	  from loading automatically at startup.
	
	3. Press CTRL+ALT+DELETE to open the Close Program dialog box.
	
	4. Quit all programs except Explorer and Systray (which are parts of Windows).
	  To quit a program, click the program, and then click End Task.
	
	5. Repeat steps 3-4 until you have quit all programs except Explorer and
	  Systray.
	
	6. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	If the issue continues to occur, proceed to the next method.
	
	Remove and Reinstall Flight Simulator 98
	----------------------------------------
	
	Remove and reinstall Flight Simulator 98. To do so, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Microsoft Flight Simulator 98, and then
	  click Add/Remove.
	
	4. When you are prompted to confirm the removal of Flight Simulator 98, click
	  OK.
	
	5. Click OK until you return to Control Panel.
	
	6. Close Control Panel.
	
	7. Delete the folder where Flight Simulator 98 is installed. By default, Flight
	  Simulator 98 s installed in the following folder:
	
	  C:\Program Files\Microsoft Games\Flight Simulator
	
	  For information about how to delete folders, click Start, and then click Help.
	  On the Index tab, type "deleting" (without the quotation marks), and then
	  double-click the Deleting files or folders topic.
	
	8. Reinstall Flight Simulator 98.
	
	If the issue continues to occur, proceed to the next method.
	
	Clean Boot Windows
	------------------
	
	If the problem persists, start Windows without loading any TSR programs or device
	drivers (this is called a clean boot).
	
	For detailed information about how to clean boot Windows, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Additional query words: 1.00 fs95 flightsim fltsim flt sim crash ipf
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmm 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
