---
layout: page
title: "Q260147: FS2000 Error Message: Failed to Initialize GPS Engine"
permalink: kb/260/Q260147/
---

## Q260147: FS2000 Error Message: Failed to Initialize GPS Engine

	Article: Q260147
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are playing Microsoft Flight Simulator 2000, you may receive the
	following error message:
	
	  Failed to initialize GPS engine.
	
	CAUSE
	=====
	
	This behavior can occur if insufficient system resources are available to run
	the program.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Clean Boot the Computer
	-----------------------
	
	Clean boot your computer. To do this, use the appropriate method for your version
	of Microsoft Windows.
	
	Microsoft Windows 98:
	
	1. Click Start, point to Programs, point to Accessories, point to System Tools,
	  and then click System Information.
	
	2. On the Tools menu, click System Configuration Utility.
	
	3. On the General tab, click Selective Startup, and then click to clear the
	  following check boxes:
	
	   - Process Config.sys File
	   - Process Autoexec.bat File
	   - Process Winstart.bat File (if available)
	   - Process Win.ini File
	   - Load Startup Group Items
	
	4. Click OK. When you are prompted to restart the computer, do so.
	
	NOTE: To restore your original Startup options, click Normal Startup on the
	General tab in the System Configuration Utility tool.
	
	For additional information about how to clean boot Windows 98, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q192926 How to Perform Clean-Boot Troubleshooting for Windows 98
	
	
	Microsoft Windows 95:
	
	1. Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Command Prompt Only from the Startup menu.
	
	2. At the command prompt, type "win" (without the quotation marks), and then
	  press ENTER. Press and hold down the SHIFT key until the Windows startup
	  sequence is complete. This prevents any programs from being loaded
	  automatically when Windows starts.
	
	3. Quit all running programs except Explorer and Systray. To do this:
	
	  a. Press CTRL+ALT+DELETE.
	
	  b. Click the program you want to quit, and then click End Task.
	
	  c. If you receive a message that the program is busy or not responding, click
	     End Task again.
	
	  Repeat steps A-C until you have quit all programs except Explorer and Systray.
	
	4. Disable any anti-virus or disk tool programs installed on the computer. For
	  information about how to disable these programs, see the printed or online
	  documentation for the program.
	
	For additional information about how to clean boot Windows 95, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q177604 Multimedia: Troubleshooting Using Clean Boot of Windows 95
	
	Reduce the Graphics Hardware Acceleration:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the "Hardware acceleration" slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart your computer, do so.
	
	If you are unable to restart your computer successfully:
	
	  a. Press and hold down the CTRL key when you see the "Starting Windows 98"
	     message (in Microsoft Windows 98) or press F8 when you see the "Starting
	     Windows 95" message (in Microsoft Windows 95) on the screen.
	
	  b. Select Safe Mode from the Startup menu.
	
	  c. Repeat steps 1 through 6 to restore your original graphics hardware
	     acceleration setting.
	
	Additional query words: msgame flightsim fsim fltsim fs2k
	
	======================================================================
	Keywords          : kbenv kberrmsg kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
