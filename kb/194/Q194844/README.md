---
layout: page
title: "Q194844: Combat FS: Chirping or Clicking Sounds During Game Play"
permalink: kb/194/Q194844/
---

## Q194844: Combat FS: Chirping or Clicking Sounds During Game Play

	Article: Q194844
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbenv kbsound kbimu msgamekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator, you may hear chirping sounds,
	clicking sounds, or other random noises in the background during game play.
	
	RESOLUTION
	==========
	
	To work around this issue, reduce the sound playback quality in the game. To do
	this, follow these steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type the following line:
	
	  combatfs.cfg
	
	3. In the Look In box, click My Computer, and then click Find Now.
	
	4. Double-click the Combatfs.cfg file.
	
	5. In the "Choose the program you want to use" box, click Notepad.
	
	6. Click to clear the "Always use this program to open this file" check box, and
	  then click OK.
	
	7. Scroll to the end of the file, press ENTER twice, and then type the following
	  lines, pressing ENTER after you type each line:
	
	   [SOUND]
	   Channels=1
	   SamplesPerSec=11025
	
	8. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Combat Flight
	Simulator, WWII Europe Series, version 1.0.
	
	Additional query words: 1.00 msgame combatfs cfs audio distorted anomaly
	
	======================================================================
	Keywords          : kbenv kbsound kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
