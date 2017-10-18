---
layout: page
title: "Q82449: FujiGolf GP Faults When Icon Is Dropped on Application Window"
permalink: kb/082/Q82449/
---

## Q82449: FujiGolf GP Faults When Icon Is Dropped on Application Window

	Article: Q82449
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	In Microsoft Windows operating system version 3.1, attempting to drag an icon
	over Fuji Golf version 1.0, a game included with the Microsoft Entertainment
	Pack, Volume 3, causes the cursor to become stuck in icon-movement mode. All
	normal cursor functionality is available; however, the icon that was being
	dragged is deleted. System behavior becomes slightly unpredictable at this point
	and various general protection (GP) faults may occur.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Fuji Golf and begin a round.
	
	2. Restore the Fuji Golf window so that desktop icons become accessible.
	
	3. Drag an icon over the Fuji Golf window.
	
	4. Release the mouse button.
	
	At this point, the cursor remains in the form of the icon you were dragging,
	although it behaves as a normal cursor does.
	
	Additional query words: 3.10 3.1 1.0a Fuji wep
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
