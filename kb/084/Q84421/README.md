---
layout: page
title: "Q84421: High Granularity Setting May Cause Problems Moving Windows"
permalink: kb/084/Q84421/
---

## Q84421: High Granularity Setting May Cause Problems Moving Windows

	Article: Q84421
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Granularity option in the Desktop section of Control Panel is set too
	high, windows that are moved may shake erratically in Program Manager. A high
	granularity setting can also result in the inability to move a window in Program
	Manager once it has been placed somewhere on the desktop.
	
	MORE INFORMATION
	================
	
	Granularity defines the coarseness of an invisible grid that objects are placed
	upon on the desktop. This invisible grid could be compared to a piece of graph
	paper. Each intersection on the graph paper represents the point at which the
	window can rest. The larger the squares on the grid of the graph paper, the
	greater the jump the window must take between resting points. The Sizing Grid
	Granularity option has a range of 0 to 49. Setting the granularity to any number
	greater than zero can cause the window to jump when resized or moved, or may
	prevent it from being moved.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Select Control Panel from the Main Group in Program Manager.
	
	2. Choose the Desktop icon.
	
	3. From the Sizing Grid section of the Desktop dialog box, reduce the number
	  value representing Granularity.
	
	
	Additional query words: 3.00 3.00a 3.10 3.11 windows move erratic Access forms objects jump jumps jumping granularity jerky shaky
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
