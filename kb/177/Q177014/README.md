---
layout: page
title: "Q177014: A Bridge Too Far: Error Message: Cannot Create Any More DC's"
permalink: kb/177/Q177014/
---

## Q177014: A Bridge Too Far: Error Message: Cannot Create Any More DC's

	Article: Q177014
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbmm kbtlckbfaq
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Close Combat: A Bridge Too Far, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Close Combat: A Bridge Too Far, you may receive the
	following error message:
	
	  Cannot create any more DC's.
	
	CAUSE
	=====
	
	This behavior can occur for one of the following reasons:
	
	- You are using an STB Lightspeed display driver with Vision 95 (STB's graphics
	  manager).
	- You are using a Hercules Dynamite 128 display driver.
	
	RESOLUTION
	==========
	
	You may be able to resolve this issue by reducing the graphics hardware
	acceleration. To do so, use the following steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, click Yes.
	
	NOTE: If you receive a "fatal exception" error message when you restart the
	computer, or if the computer restarts to a black screen, restart to Safe mode,
	and then repeat these steps to move the Hardware Acceleration slider all the way
	to the right (the Full acceleration setting).
	
	
	Additional query words: 2.00 close combat abtf abridgetoofar abridge video
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbmm kbtlc kbfaq
	Technology        : kbHomeProdSearch kbGamesSearch kbCloseCombatSearch kbCloseCombat2
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
