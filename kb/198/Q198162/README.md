---
layout: page
title: "Q198162: Combat Flight Simulator: Color Palette or Textures Are Distorted"
permalink: /kb/198/Q198162/
---

## Q198162: Combat Flight Simulator: Color Palette or Textures Are Distorted

	Article: Q198162
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Combat Flight Simulator in Full Screen mode, you may
	experience any of the following symptoms:
	
	- The color palette used by the game may be green.
	
	- Textures in the game may be missing or distorted.
	
	- The text on the screen may be blurred.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A Diamond Fire GL 1000 Pro video adapter or another video adapter based on
	  the 3DLabs Permedia 2 chipset is installed in your computer.
	
	- You are using version 4.10.01.2103-0220 or earlier of the 3DLabs Permedia 2
	  video driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, obtain and install the latest version of the 3DLabs
	Permedia 2 video driver. To do this, contact the manufacturer of your video
	adapter.
	
	For information about how to contact the manufacturer of your video adapter,
	click the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	To work around this issue, follow these steps:
	
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
	
	  UseGamma=0
	
	11. On the File menu, click Exit. When you are prompted to save the changes,
	  click Yes.
	
	12. Restart Combat Flight Simulator.
	
	Additional query words: 1.00 msgame combatfs cfs blurry unreadable
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
