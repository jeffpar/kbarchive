---
layout: page
title: "Q273628: Midtown Madness 2: Cannot Play Multiplayer Games on the Internet"
permalink: /kb/273/Q273628/
---

## Q273628: Midtown Madness 2: Cannot Play Multiplayer Games on the Internet

	Article: Q273628
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbgraphic kbhw kbimu kbHardware
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Midtown Madness 2, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Midtown Madness 2 on a Microsoft Windows 95-based or a
	Microsoft Windows 98-based computer, you may be unable to play a multiplayer
	game over the Internet.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A video adapter that is based on the nVIDIA GeForce 256 chip set is installed
	  in your computer.
	
	- The Detonator 3 reference driver (version 6.18) available from nVIDIA is
	  installed on your computer.
	
	NOTE: This issue occurs more frequently on computers that use a 56
	kilobits-per-second (Kbps) or slower Internet connection.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Obtain and Install an Updated Video Driver
	------------------------------------------
	
	Install the latest retail video driver for your video adapter or install an
	earlier version of the nVIDIA Detonator 3 reference driver.
	
	Contact your hardware manufacturer to inquire about how to obtain and install the
	latest version of the retail video driver for your video adapter.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	To determine the manufacturer and the model of the video adapter that is
	installed in your computer:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the plus sign (+) next to "Display adapters" to expand the branch.
	
	5. Under the "Display Adapters" branch, note the manufacturer and the model of
	  your video adapter, and then click OK.
	
	6. Close Control Panel.
	
	If the issue continues to occur, proceed to the next method.
	
	Disable 3D Hardware Acceleration in Midtown Madness 2
	-----------------------------------------------------
	
	To disable 3D hardware acceleration in Midtown Madness 2:
	
	1. Start Midtown Madness 2.
	
	2. On the startup screen, click Options.
	
	3. Click Graphics.
	
	4. In the Renderer box, click "Software only (no 3D video card)".
	
	5. Click Done.
	
	6. Click Back.
	
	MORE INFORMATION
	================
	
	For additional information about known video related issues in Midtown Madness
	2, click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q273503 Midtown Madness 2: Known Video Issues in Midtown Madness 2
	
	Additional query words: 2.00 msgame mm2 midmad display multiplay other players
	
	======================================================================
	Keywords          : kb3rdparty kbgraphic kbhw kbimu kbHardware 
	Technology        : kbHomeProdSearch kbGamesSearch kbMidtownMadSearch kbMidtownMadness2
	Version           : WINDOWS:2.0
	Issue type        : kbprb
	
	=============================================================================
	
