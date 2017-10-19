---
layout: page
title: "Q258394: Baseball 2001: Screen Turns Black and Game Stops Responding"
permalink: /kb/258/Q258394/
---

## Q258394: Baseball 2001: Screen Turns Black and Game Stops Responding

	Article: Q258394
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu msgame
	Last Modified: 27-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start a game in Microsoft Baseball 2001, the screen may turn
	black except for the "Today's Match-Up" text, and the game may stop responding
	(hang).
	
	CAUSE
	=====
	
	This behavior can occur if a Permedia 3 Create video adapter is installed in the
	computer.
	
	RESOLUTION
	==========
	
	To work around this issue, configure Baseball 2001 to run in Software mode:
	
	1. Start Baseball 2001.
	
	2. On the Home Plate screen, click Options.
	
	3. Click the Graphics tab.
	
	4. Under Mode, click Software, and then click OK.
	
	MORE INFORMATION
	================
	
	Although the Permedia 3 Create video adapter is detected as a 3-D video adapter
	by Microsoft Baseball 2001, this video adapter does not provide sufficient
	hardware acceleration support to run the game in 3D Hardware mode.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words: 1.00 msgame bball bb2001 base ball hangs freeze locks
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu msgame 
	Technology        : kbHomeProdSearch kbGamesSearch kbBaseballSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
