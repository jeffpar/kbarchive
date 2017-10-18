---
layout: page
title: "Q84196: Some Screen Savers Minimize the Productivity Pack"
permalink: kb/084/Q84196/
---

## Q84196: Some Screen Savers Minimize the Productivity Pack

	Article: Q84196
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Productivity Pack version 3.1 is designed to prevent screen savers
	from activating so that they don't distract the user from the tutorial. There
	are places in the tutorial where the user may read for several minutes, and
	would not want a screen saver to suddenly appear.
	
	The Productivity Pack, however, can only prevent screen savers from interrupting
	if the screen savers use Windows 3.1 function calls that can be trapped. For
	example, the Productivity Pack can trap the screen saver built into Windows 3.1
	and prevent it from blanking the screen. Other screen savers such as Idlewild,
	included in the Entertainment Pack, cannot be trapped and are free to interrupt
	the application.
	
	If the application is interrupted by a screen saver, it is reduced to an icon at
	the base of the screen. At this point, you can double-click the application
	icon, or choose Restore from the Control menu to continue.
	
	Additional query words: 3.10 3.11 wpp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
