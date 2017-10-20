---
layout: page
title: "Q178551: FS98 Err Msg: General Floating Point Error in Module Panels.dll"
permalink: /kb/178/Q178551/
---

## Q178551: FS98 Err Msg: General Floating Point Error in Module Panels.dll

{% raw %}

	Article: Q178551
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 98 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED OR TESTED BY MICROSOFT. USE ONLY                  **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	When you start Microsoft Flight Simulator 98, you may receive one or more of the
	following error messages:
	
	- General floating point error in module Panels.dll.
	- Fltsim98.exe caused an Exception Error in module Panels.dll.
	- Fltsim98 caused an exception 10H in module Panels.dll.
	- Fltsim98 caused an invalid page fault in module Panels.DLL
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- You have not downloaded Flight Simulator 98 Patch Set 1.0.
	- You are running background terminate-and-stay-resident (TSR) programs or
	  other unnecessary programs when you start Flight Simulator.
	- You are loading drivers for the Miro DC10 or DC30 video capture cards.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods:
	
	Obtain Flight Simulator 98 Patch Set 1.0
	----------------------------------------
	
	Download and install Flight Simulator 98 Patch Set 1.0 from the following
	Microsoft Web site:
	
	  http://www.microsoft.com/games/products.asp?filter=fsim
	
	If the issue continues to occur, proceed to the next method.
	
	Quit All Unnecessary Programs
	-----------------------------
	
	Quit all unnecessary programs that are running before you start Flight Simulator
	98. To do so, use the following steps:
	
	1. Restart the computer at a command prompt. To do so, follow the steps in the
	  appropriate section below:
	
	  Microsoft Windows 95
	  --------------------
	
	  Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt Only from the Startup menu.
	
	  Microsoft Windows 98
	  --------------------
	
	  Restart your computer, press and hold down the CTRL key after your computer
	  completes the Power On Self Test (POST), and then choose Command Prompt Only
	  from the Startup menu.
	
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
	
	Disable Drivers for the Miro DC10 or DC30 Video Capture Cards
	-------------------------------------------------------------
	
	If the Miro DC10 or DC30 video capture card is installed on your system, use the
	following steps to disable the drivers for the video capture card:
	
	1. Open the Miro Control Panel.
	
	2. Click the Use As Default check box to clear it.
	
	3. Close the Miro Control Panel, and then restart the computer.
	
	If the Miro DC10 or DC30 video capture card is no longer installed on your
	system, use the following steps to disable the drivers for the video capture
	card:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "system.ini" (without the quotation marks), and then
	  click OK.
	
	3. On the Search menu, click Find.
	
	4. In the Find What box, type "miro" (without the quotation marks), and then
	  click Find Next.
	
	5. If a line containing this text is found, disable the line by typing a
	  SEMICOLON (;) at the beginning of the line, and then click Find Next.
	
	6. Repeat this step until you receive the following message,
	
	  Cannot Find "miro"
	
	  and then click OK.
	
	7. On the File menu, click Save.
	
	8. On the File menu, click Exit.
	
	9. Restart the computer.
	
	
	MORE INFORMATION
	================
	
	The Miro Control Panel gives you the option to cache all .avi files into memory
	for faster video playback with less dropped frames.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: fs98 flightsim fltsim flt sim vidcap vidcapture dc- 10 dc-20 dc-30
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim98 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
