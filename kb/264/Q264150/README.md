---
layout: page
title: "Q264150: StarLancer: Choppy Sounds During Introductory Movie and in Game"
permalink: kb/264/Q264150/
---

## Q264150: StarLancer: Choppy Sounds During Introductory Movie and in Game

	Article: Q264150
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbsound kbimu
	Last Modified: 12-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft StarLancer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft StarLancer, you may experience one of the
	following symptoms:
	
	- Sounds may be choppy during the introductory movie and during game play.
	
	- Speech in the game may stutter or be repeated.
	
	CAUSE
	=====
	
	This behavior can occur if your sound card is running in Direct Sound Emulation
	mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. Under Playback, click to select your sound card.
	
	4. Click to select the "Use only Preferred Devices" check box.
	
	5. Click Apply, and then click OK.
	
	6. Click Start, and then click Run.
	
	7. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	8. Click the Sound tab.
	
	9. Move the Sound Acceleration slider to the Full setting (all the way to the
	  right).
	
	10. Under Device, make sure that the device type is correct for your operating
	  system:
	
	   - VXD (Microsoft Windows 98 or Microsoft Windows Millennium Edition)
	   - WDM (in Microsoft Windows 2000)
	
	NOTE: The device type should not contain the word "Emulated".
	
	11. Click Exit, and then restart the computer.
	
	If the problem continues to occur, follow these steps:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Move the Sound Acceleration slider to the None setting (all the way to the
	  left).
	
	5. Click Exit.
	
	6. Repeat steps 1 through 4, except in step 4 move the Sound Acceleration slider
	  to the Full setting (all the way to the right).
	
	7. Click Exit, and then restart the computer.
	
	Additional query words: 1.00 msgame star lancer echo water garbled gurgle
	
	======================================================================
	Keywords          : kbsound kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbStarlancerSearch kbStarlancer
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
