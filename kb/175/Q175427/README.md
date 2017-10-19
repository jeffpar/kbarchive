---
layout: page
title: "Q175427: Full Court Press: DirectX: Conflict With ThinkPad Video Driver"
permalink: /kb/175/Q175427/
---

## Q175427: Full Court Press: DirectX: Conflict With ThinkPad Video Driver

	Article: Q175427
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NBA Full Court Press for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run NBA Full Court Press in the standard "window" mode, the NBA Full
	Court Press window is black during gameplay. Only the title bar and scoreboard
	are visible.
	
	RESOLUTION
	==========
	
	Install an updated video driver, or use the compatible display driver "Trident
	Super VGA".
	
	Press the F4 key on your keyboard to run the program "full-screen" mode.
	
	NOTE: On a laptop screen, the program will appear centered on the display. This
	is because the LCD screen has a fixed 800 x 600 pixels resolution. This is
	normal behavior. The game's "full-screen" mode uses 640 x 480 pixels.
	
	MORE INFORMATION
	================
	
	If the game appears to stop responding (hang) when you attempt to close it, try
	the following steps:
	
	1. Press the F4 key on your keyboard to run the program in a window.
	
	2. Use the ALT+F4 key combination to quit the program.
	
	  or -
	
	  Press the ESC key to open the Options menu.
	
	3. Click Quit Game.
	
	This problem was observed with the video drivers for the IBM ThinkPad (Cyber9320)
	and ThinkPad (Cyber9385/82) VL drivers version 4.0 DirectX certified version
	4.00.00.0490. The drivers used the following files:
	
	- Xgivdd95.vxd v. 1.00
	- Xgiw95a.drv v. 1.00
	
	Additional query words: fcp black screen window mode
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay 
	Technology        : kbGamesSearch kbZNotKeyword kbNBAFullCourtPress
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
