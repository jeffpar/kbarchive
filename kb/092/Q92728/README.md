---
layout: page
title: "Q92728: Running CorelDRAW! with Windows 3.1"
permalink: kb/092/Q92728/
---

## Q92728: Running CorelDRAW! with Windows 3.1

	Article: Q92728
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the following two problems, which you may experience if
	you run CorelDRAW! with Windows 3.1:
	
	- ZOOM Does Not Refresh Screen
	
	- Erratic Scroll Bars Behavior and Wire Frame Redraws
	
	MORE INFORMATION
	================
	
	ZOOM Does Not Refresh Screen
	----------------------------
	
	Corel Corporation has confirmed that if you run CorelDRAW! version 2.0 or 2.01
	with Windows 3.1, ZOOM may not redraw the screen before displaying the selected
	area. Instead, the area is drawn on top of the existing screen. To avoid this
	problem, do the following:
	
	1. ZOOM on a selected area.
	
	2. Press CTRL+W, or choose Refresh Wire Screen from the the Display menu.
	
	
	Erratic Scroll Bars Behavior and Wire Frame Redraws
	---------------------------------------------------
	
	Versions of CorelDRAW! up to and including version 2.01 may exhibit erratic
	scroll bar operation and incomplete wire frame redraws when you enable the
	Interruptible Display option in Windows 3.1. The scroll bars display
	erratically, panning across the screen and stretching out of shape. Incomplete
	screen redraws may occur when you zoom in to and out from wire frame images. To
	avoid these problems, choose Preferences from the Special menu in CorelDRAW! and
	turn off the Interruptible Display option.
	
	The CorelDRAW! Interruptible Display option allows you to stop a wire frame
	screen redraw at any point, so that you can edit a particular object without
	having to wait for the entire screen to finish displaying.
	
	CorelDRAW! is manufactured by Corel Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 wireframe refresh repaint redisplay Corel Draw view 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
