---
layout: page
title: "Q309695: Zoo Tycoon: Known Video Issues"
permalink: /kb/309/Q309695/
---

## Q309695: Zoo Tycoon: Known Video Issues

{% raw %}

	Article: Q309695
	Product(s): Microsoft Home Games
	Version(s): 
	Operating System(s): 
	Keyword(s): kbgraphic kbimu
	Last Modified: 27-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Zoo Tycoon 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes known video-related issues that you can experience when
	you play Microsoft Zoo Tycoon. The information in this article is first broken
	out by general issues and then by issues that have only been known to happen on
	specific types of video hardware.
	
	MORE INFORMATION
	================
	
	General Video Issues
	--------------------
	
	The following are general video related issues that you may experience when
	starting or playing Zoo Tycoon:
	
	Display Resolution Issue:
	
	If your computer's graphics card does not support 1280 x 1024 resolution but
	you select that option in Zoo Tycoon, Zoo Tycoon may be displayed correctly in
	the current game but incorrectly in subsequent games. To avoid this, set Zoo
	Tycoon to use only the resolutions that your computer's graphic card supports.
	See your graphics card documentation for help in determining the best resolution
	setting for your computer.
	
	Building Sections Disappear:
	
	If you have a line of buildings that runs from the upper left to the lower right
	of the screen and you place a building perpendicularly near that line, and move
	your view of the game screen so that the newest building is near the top of the
	screen, the building may not be displayed correctly. This is merely a display
	issue; the building functions normally. To view the building normally, move your
	view of the game screen so that the building is near the center of the screen.
	
	Blinking Cursor:
	
	If the Display Pointer Trails check box is selected in the Mouse Properties
	dialog box before you run the game, the cursor will blink when you are playing
	Zoo Tycoon. To stop the Zoo Tycoon cursor from blinking, click to clear the
	Display Pointer Trails check box.
	
	Game Drops to Desktop:
	
	When you click <B>Play</B>, the game may drop back to the desktop. This can occur
	if you are using an incorrect monitor. Change the monitor to Plug and Play, Super
	VGA 800 X 600, or use the original drivers from your monitor's manufacturer.
	
	Specific Video Issues
	---------------------
	
	The following specific video adapters and chip sets have known video-related
	issues in Microsoft Zoo Tycoon:
	
	- Maxi Gamer Cougar and Maxi Gamer Xentor 32:
	
	You may experience some erratic game play with Zoo Tycoon when you use Maxi Gamer
	Cougar and Maxi Gamer Xentor 32 graphic cards. If you do experience difficulty,
	please contact the card's manufacturer to obtain their latest DirectX-compatible
	drivers. This is the only known workaround.
	
	Zoo Tycoon only fully supports DirectX 8.0a-compliant video cards. It is good
	practice to always install the latest certified drivers for all of your
	hardware.
	
	- NVidia Graphics Cards:
	
	Some versions of nVidia graphics cards may cause Zoo Tycoon to stop responding.
	To resolve this behavior, make sure that your graphics card is using driver
	4.13.1.1241 or later. To download this driver, visit the following nVidia Web
	site:
	
	  http://www.nvidia.com/ (http://www.nvidia.com/)
	
	If you cannot find the driver at that Web site, contact your graphics card
	manufacturer.
	
	Some Trident Blade 3D cards have been known to cause Zoo Tycoon to stop
	responding. You can workaround this issue by disabling DirectDraw using the
	DirectX Diagnostic tool (Dxdiag):
	
	1. Click Start, click Run, type "dxdiag" (without the quotation marks), and then
	  click OK.
	
	2. Click the Display tab.
	
	3. Click Disable next to DirectDraw: Acceleration Enabled.
	
	4. Click Exit.
	
	NOTE: Disabling DirectDraw and Direct3D acceleration will slow overall
	performance.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbgraphic kbimu 
	Technology        : kbGamesSearch kbZooTycoon
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
