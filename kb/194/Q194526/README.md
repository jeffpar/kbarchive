---
layout: page
title: "Q194526: FS/Combat FS: How to Disable the Opening Movie"
permalink: kb/194/Q194526/
---

## Q194526: FS/Combat FS: How to Disable the Opening Movie

	Article: Q194526
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgamekbfaq
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 98 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to disable the opening video in Microsoft flight
	simulators.
	
	MORE INFORMATION
	================
	
	To disable the opening video in flight Simulators, follow these steps:
	
	1. Quit any programs that are running including the simulator.
	
	2. Click Start, and then click Find or Search.
	
	  If you are using Windows 98, click Files or Folders and if you are using
	  Windows XP, click "All files and folders".
	
	3. In the Named or "All or part of the file name" box, type the appropriate file
	  name for your version of Flight Simulator or Combat Flight Simulator.
	
	Combat Flight Simulator 2:
	
	  cfs2,cfg
	
	Combat Flight Simulator:
	
	  Combatfs,cfg
	
	Flight Simulator 98:
	
	  fltsim98.cfg
	
	Flight Simulator 2000:
	
	  fs2000.cfg
	
	Flight Simulator 2002:
	
	  fs2002.cfg
	
	4. In the Look In box, click My Computer.
	
	5. Click Find Now or Search.
	
	6. Double-click the .cfg file that was found.
	
	7. In the "Choose the program you want to use" box, click Notepad.
	
	8. Clear the "Always use this program to open this file" check box, and then
	  click OK.
	
	9. On the Search menu, click Find.
	
	10. Type "[MAIN]" (without the quotation marks) and then click Find Next.
	
	11. When you locate the [MAIN] section, click Cancel, and then change the number
	  at the end of the following line to 0:
	
	  ShowLogo=1
	
	12. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	13. Restart the flight simulator you are using.
	
	Additional query words: 1.00 msgame combatfs cfs cfs2
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbFlightSim2002 kbSimSearch
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
