---
layout: page
title: "Q287510: Combat Flight Simulator 2: Game Controller Forces Do Not Work"
permalink: /kb/287/Q287510/
---

## Q287510: Combat Flight Simulator 2: Game Controller Forces Do Not Work

	Article: Q287510
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbhw kbimu kbHardware
	Last Modified: 09-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft SideWinder Force Feedback Pro 
	- Microsoft SideWinder Force Feedback 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Combat Flight Simulator 2: WWII Pacific Theater, the
	forces in one of the game controllers listed at the beginning of this article
	may not work.
	
	CAUSE
	=====
	
	This behavior can occur if the Forces_Master_Enabled= line is missing from the
	Cfs2.cfg file.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "cfs2.cfg" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer, and then click Find Now.
	
	4. Double-click the Cfs2.cfg file.
	
	5. In the "Choose the program you want to use" box, click Notepad.
	
	6. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	7. Under the [CONTROL] section, type the following line:
	
	  forces_master_enabled=1
	
	8. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	9. Restart Combat Flight Simulator 2.
	
	10. If you still do not have forces in the game open the properties for the
	  joystick in the Game Controllers or Gaming Options tool while you play the
	  game.
	
	Additional query words: msgame combatfs cfs2
	
	======================================================================
	Keywords          : kbenv kbhw kbimu kbHardware 
	Technology        : _IKkbbogus kbMSHardwareSearch kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbSideWinderFF2 kbSideWinderFFPro kbSimSearch kbSidewinderSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
