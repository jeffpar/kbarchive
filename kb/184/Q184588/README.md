---
layout: page
title: "Q184588: Outwars: Frame Rate Is Reduced if You Enable Fogging"
permalink: kb/184/Q184588/
---

## Q184588: Outwars: Frame Rate Is Reduced if You Enable Fogging

	Article: Q184588
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kbimu msgamekbfaq
	Last Modified: 23-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outwars, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Outwars, the frame rate (the speed at which images are drawn on
	the screen, usually measured in frames per second) may be reduced if you enable
	Fogging.
	
	CAUSE
	=====
	
	This behavior can occur when you enable Direct3D hardware acceleration in
	Outwars.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable Fogging. To do this, follow these steps:
	
	1. Start a new mission. When the mission begins, press ESC.
	
	2. Press the UP ARROW or DOWN ARROW key to select Detail, and then press ENTER.
	
	3. Press ALT+F to disable Fogging.
	
	4. Press the UP ARROW or DOWN ARROW key to select Back, and then press ENTER.
	
	5. Press the UP ARROW or DOWN ARROW key to select Resume Mission, and then press
	  ENTER.
	
	If the issue continues to occur, reduce the level of graphic detail. To do this,
	follow these steps:
	
	1. Press ESC.
	
	2. Press the UP ARROW or DOWN ARROW key to select Detail, and then press ENTER.
	
	3. Press the UP ARROW or DOWN ARROW key to select Medium or Low, and then press
	  ENTER.
	
	4. Press the UP ARROW or DOWN ARROW key to select Back, and then press ENTER.
	
	5. Press the UP ARROW or DOWN ARROW key to select Resume Mission, and then press
	  ENTER.
	
	If the issue continues to occur, contact your hardware vendor to inquire about
	obtaining the latest driver for your display adapter or 3D graphics acceleration
	card.
	
	MORE INFORMATION
	================
	
	For best game performance when you play Outwars, Microsoft recommends you use a
	3D graphics acceleration card with 4 megabytes (MB) of video memory.
	
	Additional query words: 1.00 msgame outwar out wars drags choppy
	
	======================================================================
	Keywords          : kbdisplay kbenv kbimu msgame kbfaq
	Technology        : kbGamesSearch kbOutwarsSearch kbOutwars kbZNotKeyword3
	Version           : WINDOWS:1.0
	Issue type        : kbhowto
	
	=============================================================================
	
