---
layout: page
title: "Q279747: CFS2: How to Import Combat Flight Simulator Scenery"
permalink: /kb/279/Q279747/
---

## Q279747: CFS2: How to Import Combat Flight Simulator Scenery

	Article: Q279747
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbenv kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to import Microsoft Combat Flight Simulator scenery
	into Microsoft Combat Flight Simulator 2.
	
	MORE INFORMATION
	================
	
	Because of the three-dimensional (3-D) grid system in Combat Flight Simulator 2,
	scenery designed for Combat Flight Simulator may not be displayed correctly in
	Combat Flight Simulator 2.
	
	NOTE: To import scenery from Combat Flight Simulator into Combat Flight Simulator
	2, you must install both games on your computer with a Typical installation.
	
	The following steps use the default installation folder for each game.
	
	To import Combat Flight Simulator scenery into Combat Flight Simulator 2:
	
	1. Open the following folder
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight Simulator 2
	
	where <drive> is the letter of the hard disk on which Combat Flight
	Simulator 2 is installed.
	
	2. On the File menu, point to New, and then click Folder.
	
	3. Type "CFS1_Scenery" (without the quotation marks), and then press ENTER.
	
	4. Double-click the CFS1_Scenery folder.
	
	5. On the File menu, point to New, and then click Folder.
	
	6. Type "Scenery" (without the quotation marks), and then press ENTER.
	
	7. On the File menu, point to New, and then click Folder.
	
	8. Type "Texture" (without the quotation marks), and then press ENTER.
	
	9. Close all open windows on the desktop.
	
	10. Click Start, and then click Run.
	
	11. In the Open box, type the following line, and then click OK
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight
	  Simulator\Scenery\World\Scenery
	
	where <drive> is the letter of the hard disk on which Combat Flight
	Simulator is installed.
	
	12. On the Edit menu, click Select All.
	
	13. On the Edit menu, click Copy.
	
	14. Click Start, and then click Run.
	
	15. In the Open box, type the following line, and then click OK
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight Simulator
	  2\CFS1_scenery\Scenery
	
	where <drive> is the letter of the hard disk on which Combat Flight
	Simulator 2 is installed.
	
	16. On the Edit menu, click Paste.
	
	17. Close all open windows on the desktop.
	
	18. Repeat steps 10 through 17 except type the following line in step 11
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight
	  Simulator\Scenery\All\Scenery
	
	19. Repeat steps 10 through 17 except type the following line in step 11
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight Simulator\Texture
	
	and type the following line in step 15
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight Simulator
	  2\CFS1_Scenery\Texture
	
	20. Click Start, and then click Run.
	
	21. In the Open box, type the following line, and then click OK:
	
	  <drive>:\Program Files\Microsoft Games\Combat Flight Simulator
	  2\Scenery.cfg
	
	  NOTE: If you are prompted to choose a program to open the file, click Notepad
	  in the "Choose the program you want to use" box. Click to clear the Always
	  use this program to open this file check box, and then click OK.
	
	22. Press ENTER to create a new line, press the UP ARROW key to position the
	  insertion point on the new line, and then type the following lines, pressing
	  ENTER after you type each line:
	
	  [Area.013]
	  Title=CFS1 Scenery
	  Local=C:\Program Files\Microsoft Games\Combat Flight Simulator 2\CFS1_Scenery
	  Active=True
	  Layer=13
	  Flatten.0=0,N54 38,W5 48,N54 38,E14 36,N46 15,W5 48
	
	  NOTE: If you install other scenery in Combat Flight Simulator 2, make sure
	  that you add a unique number to each [Area] section and Layer= line to
	  identify the different scenery.
	
	  By default, Combat Flight Simulator 2 contains 11 [Area] sections
	  ([Area.011]).
	
	23. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	To use Combat Flight Simulator scenery in Combat Flight Simulator 2:
	
	1. Click Start Location.
	
	2. Click Advanced Go To, and click the scenery that you want.
	
	3. Click OK twice, and then click Fly Now!
	
	Additional query words: msgame combatfs cfs2
	
	======================================================================
	Keywords          : kbenv kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbhowto
	
	=============================================================================
	
