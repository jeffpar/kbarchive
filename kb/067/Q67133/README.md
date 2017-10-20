---
layout: page
title: "Q67133: Arranging Program Manager Group Icons in a Specific Order"
permalink: /kb/067/Q67133/
---

## Q67133: Arranging Program Manager Group Icons in a Specific Order

{% raw %}

	Article: Q67133
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you select the Save Changes option while exiting the Program Manager, the
	layout of the open group windows is saved, but the layout of the closed group
	icons is not. These icons are automatically reorganized at the bottom of the
	Program Manager the next time Windows is run. You cannot save their screen
	positions, but you can save the order in which they appear on the screen.
	
	MORE INFORMATION
	================
	
	Using an example, the procedure below outlines the steps to order Program
	Manager's group icons. Make sure you follow the instructions closely.
	
	Groups in example:
	
	  Main
	  Accessories
	  Games
	  WEP
	  SDK Tools
	  MS-DOS Apps
	
	Group icons we want to order:
	
	  Games
	  Windows Entertainment Pack (WEP)
	  SDK Tools
	   MS-DOS Apps
	
	Desired order from left to right:
	
	  WEP
	  Games
	  MS-DOS Apps
	  SDK Tools
	
	Procedure
	---------
	
	1. Switch to Program Manager.
	
	2. Restore ALL group icons to a window (do not maximize them).
	
	3. Select the group window (from the Window menu is probably easiest at this
	  point) that you want to appear on the far right; for example, SDK Tools.
	
	4. Minimize this window to a group icon.
	
	5. Repeat steps 3-4 for the next adjacent group icon; in this case, MS-DOS Apps.
	
	6. Repeat steps 3-4 for the rest of the groups you want to order (first Games,
	  then WEP).
	
	  NOTE: At this point, the group icons should be the REVERSE of what you want.
	
	7. Exit Windows and select Save Changes.
	
	8. Run Windows.
	
	  The group icons are now in the proper order. If you want to avoid any further
	  screen changes in Program Manager, deselect Save Changes the next time you
	  exit Windows .
	
	In a general description, Windows 3.00 Program Manager keeps track of which group
	icons you have minimized. The last icon you minimize is put at the BOTTOM LEFT
	of the window IF you select Save Changes.
	
	Technically, when you minimize an icon, its "order" is saved in a
	"Last-In-First-Out" (LIFO) stack. When you select Save Changes and run Windows
	again, Program Manager reads the LIFO stack and places the group icons in the
	window from LEFT to RIGHT, BOTTOM to TOP.
	
	This LIFO technique is the reason the group icons were in reverse order after
	step 6.
	
	Additional query words: 3.00 win30 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
