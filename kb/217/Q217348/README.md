---
layout: page
title: "Q217348: Combat FS: Game Is Not Displayed Properly in Full Screen Mode"
permalink: /kb/217/Q217348/
---

## Q217348: Combat FS: Game Is Not Displayed Properly in Full Screen Mode

	Article: Q217348
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbimu msgame KbDirectX
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Combat Flight Simulator in Full Screen mode, the game
	screen may not occupy the full viewable area of your monitor.
	
	In addition, when you play Combat Flight Simulator in Full Screen mode, the game
	screen may not be centered on your monitor or you may receive an error message
	stating that the refresh rate is too high.
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft DirectX sets a refresh rate that is higher
	than the refresh rate your monitor supports.
	
	RESOLUTION
	==========
	
	To resolve this issue, override the refresh rate set by DirectX. To do this,
	follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. On the More Help tab, click Override.
	
	4. Click the Override Value option.
	
	5. In the Override Value box, type "72" (without the quotation marks).
	
	6. Click OK, and then click Exit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Combat Flight
	Simulator: WWII Europe Series, version 1.0.
	
	Additional query words: 1.00 msgame direct-x combatfs cfs off-center skewed
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbimu msgame KbDirectX 
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
