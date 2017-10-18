---
layout: page
title: "Q274654: CFS2: Aircraft Textures Appear Black in Spot Plane View"
permalink: kb/274/Q274654/
---

## Q274654: CFS2: Aircraft Textures Appear Black in Spot Plane View

	Article: Q274654
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbgraphic kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you manually fly a mission in Microsoft Combat Flight Simulator 2, aircraft
	textures may appear black in the Spot Plane view.
	
	CAUSE
	=====
	
	This behavior can occur if you fly a long mission and do not press X when the
	"If you want to skip to next action sequence, press X" message is displayed.
	
	NOTE: The ability to skip to the next action sequence is known as the Warp
	feature.
	
	RESOLUTION
	==========
	
	To correct the aircraft textures, refresh the screen.
	
	To do this, press ALT+ENTER to change the screen mode, and then press ALT+ENTER
	again to switch back to Full Screen mode.
	
	To resolve this issue, edit the Combat Flight Simulator 2 configuration file:
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type "cfs2.cfg" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Click Find Now.
	
	5. Double-click the Cfs2.cfg file.
	
	If you are prompted to select a program to open the file, click Notepad.
	
	6. In [Display] section of the file, type the following lines, pressing ENTER
	  after you type each line:
	
	  UseDeviceTextureCache=0
	  DXTn=0
	
	7. On the File menu, click Save.
	
	8. On the File menu, click Exit.
	
	NOTE: If you experience other issues after you edit the Cfs2.cfg file, repeat
	steps 1 through 8, except remove the lines that you typed in step 6.
	
	Additional query words: 1.00 msgame combatfs cfs2 other airplanes dark warp
	
	======================================================================
	Keywords          : kbdisplay kbgraphic kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
