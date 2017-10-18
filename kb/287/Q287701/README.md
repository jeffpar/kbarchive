---
layout: page
title: "Q287701: Flight Simulator 2000: Error: OE: 0028 : FFFF3DBD"
permalink: kb/287/Q287701/
---

## Q287701: Flight Simulator 2000: Error: OE: 0028 : FFFF3DBD

	Article: Q287701
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg fsim kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change views while flying in Microsoft Flight Simulator 2000, you may
	receive the following fatal exception error message:
	
	  Error: OE: 0028: FFFF3DBD
	
	CAUSE
	=====
	
	This behavior can occur if a Turtle Beach Santa Cruz sound card is installed in
	your computer.
	
	The Santa Cruz sound card is not fully compatible with DirectX DirectSound.
	
	RESOLUTION
	==========
	
	To work around this issue, use the following methods in the order in which they
	are presented.
	
	Disable Direct Sound Acceleration in Santa Cruz Control Panel
	-------------------------------------------------------------
	
	To disable Direct Sound Acceleration in Santa Cruz Control Panel:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Santa Cruz Control Panel.
	
	3. Click Other tab.
	
	4. Click to clear the Enable Direct Sound Acceleration check box.
	
	5. Close Santa Cruz Control Panel.
	
	6. Restart the game.
	
	If the problem continues to occur, proceed to the next method.
	
	Reduce the Audio Hardware Acceleration Setting
	----------------------------------------------
	
	To reduce the audio hardware acceleration setting:
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. Click the Sound tab.
	
	4. Under DirectX Features, move the Hardware Sound Acceleration Level slider all
	  the way to the left (the "No acceleration" setting).
	
	5. Click Exit.
	
	Update the Sound Driver for Your Sound Card
	-------------------------------------------
	
	To update your sound driver, contact the manufacturer of your sound card to
	inquire about how to obtain and install the latest version of the sound driver
	for your sound card.
	
	For information about how to contact the manufacturer of your sound card, click
	the appropriate article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	To determine the manufacturer and model of your sound card:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the PLUS SIGN (+) next to "Sound, video and game controllers" to expand
	  the branch.
	
	5. Note the manufacturer and model of the sound card that is listed in the
	  "Sound, video and game controllers" branch.
	
	6. Click OK, and then close Control Panel.
	
	Additional query words: msgame flightsim fltsim
	
	======================================================================
	Keywords          : kberrmsg fsim kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim2000
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
