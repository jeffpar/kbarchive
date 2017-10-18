---
layout: page
title: "Q198147: Combat FS: How to Change the Coordinate Display Format"
permalink: kb/198/Q198147/
---

## Q198147: Combat FS: How to Change the Coordinate Display Format

	Article: Q198147
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbui kbdocerr kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to change the coordinate display format in Microsoft
	Combat Flight Simulator or Microsoft Combat Flight Simulator 2 to degrees,
	minutes, and seconds.
	
	By default, Combat Flight Simulator and Combat Flight Simulator 2 display
	coordinates in degrees and fractional minutes.
	
	NOTE: To toggle the coordinate display, press SHIFT+Z. Do not press Z as
	specified in the Combat Flight Simulator: WWII Europe Series Pilot's Manual.
	
	MORE INFORMATION
	================
	
	To change the coordinate display format in Combat Flight Simulator or Combat
	Flight Simulator 2 to degrees, minutes, and seconds, follow these steps:
	
	1. Quit Combat Flight Simulator or Combat Flight Simulator 2 if it is running.
	
	2. Click Start, point to Find, and then click "Files or Folders".
	
	3. In the Named box, type the appropriate line for your version of Combat Flight
	  Simulator:
	
	Combat Flight Simulator
	-----------------------
	
	  combatfs.cfg
	
	Combat Flight Simulator 2
	-------------------------
	
	  cfs2.cfg
	
	4. In the "Look in" box, click My Computer, and then click Find Now.
	
	5. Double-click the Combatfs.cfg or the Cfs2.cfg file.
	
	6. In the "Choose the program you want to use" box, click Notepad.
	
	7. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	8. On the Search menu, click Find.
	
	9. Type "[MAIN]" (without the quotation marks) and then click Find Next.
	
	10. In the [MAIN] section of the file, type the following line, and then press
	  ENTER:
	
	  DISPLAY_FRACTIONAL_MINUTES=0
	
	11. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	12. Restart Combat Flight Simulator or Combat Flight Simulator 2.
	
	Additional query words: 1.00 msgame combatfs cfs cfs2 latitude longitude
	
	======================================================================
	Keywords          : kbenv kbui kbdocerr kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbinfo
	
	=============================================================================
	
