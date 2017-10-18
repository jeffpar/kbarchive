---
layout: page
title: "Q84705: Screen Corrupted - IBM PS/2 Model 90 and 95"
permalink: kb/084/Q84705/
---

## Q84705: Screen Corrupted - IBM PS/2 Model 90 and 95

	Article: Q84705
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using an IBM PS/2 model 90 or 95, and you run an MS-DOS- based
	application with standard VGA selected, when you press ALT+ENTER to run the
	application in a window, the screen may become corrupt.
	
	Forcing the screen to redraw usually clears the screen.
	
	CAUSE
	=====
	
	IBM PS/2 models 90 and 95 are not fully compatible with Microsoft Windows
	version 3.1's standard VGA driver. The XGA card built into the model 95 lacks
	the ability to understand the VGA virtual display driver (*VDDVGA) built into
	WIN386.EXE, and the 386 grabber file (VGA.3GR).
	
	RESOLUTION
	==========
	
	To correct this problem, install the PS/2 model 90 and 95 as XGA (640 x 480, 16
	colors), as detected by Setup, or set up for one of the other XGA displays.
	
	
	Additional query words: 3.10 3.11 XGA ps2 ps 77
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
