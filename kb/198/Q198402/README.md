---
layout: page
title: "Q198402: Combat Flight Simulator: Computer Hangs While Playing Game"
permalink: /kb/198/Q198402/
---

## Q198402: Combat Flight Simulator: Computer Hangs While Playing Game

	Article: Q198402
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimukbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator, your computer may stop
	responding (hang) in the first five minutes of game play.
	
	CAUSE
	=====
	
	This behavior can occur if an AGP video adapter is installed in your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Quit Combat Flight Simulator if it is running.
	
	2. Click Start, point to Find, and then click Files Or Folders.
	
	3. In the Named box, type the following line:
	
	  combatfs.cfg
	
	4. In the Look In box, click My Computer, and then click Find Now.
	
	5. Double-click the Combatfs.cfg file.
	
	6. In the "Choose the program you want to use" box, click Notepad.
	
	7. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	8. On the Search menu, click Find.
	
	9. Type "[HARDWARE]" (without the quotation marks) and then click Find Next.
	
	10. In the [HARDWARE] section of the file, type the following line, and then
	  press ENTER:
	
	  TextureAGP=0
	
	11. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	12. Restart Combat Flight Simulator.
	
	Additional query words: 1.00 msgame combatfs cfs card freeze crash
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
