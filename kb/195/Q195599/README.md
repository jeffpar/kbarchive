---
layout: page
title: "Q195599: Games: Acceleration Unavailable w/ 3Dfx Voodoo Display Adapter"
permalink: /kb/195/Q195599/
---

## Q195599: Games: Acceleration Unavailable w/ 3Dfx Voodoo Display Adapter

	Article: Q195599
	Product(s): Microsoft Home Games
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kberrmsg kbimu msgame
	Last Modified: 29-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Baseball 3D, version 1.0 
	- Microsoft CART Precision Racing, version 1.0 
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 98 
	- Microsoft Hellbender for Windows, version 1.0 
	- Microsoft Midtown Madness 2, version 2.0 
	- Microsoft Monster Truck Madness, version 1.0 
	- Microsoft Monster Truck Madness 2, version 2.0 
	- Microsoft Motocross Madness, version 1.0 
	- Microsoft Outwars, version 1.0 
	- Microsoft Urban Assault, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the games listed earlier in this article, you may receive
	a message stating that 3D hardware acceleration is not available, or 3D hardware
	acceleration may not be available in the game's graphics options menu.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A 3Dfx Voodoo or Voodoo 2-based 3D accelerator card is installed in your
	  computer.
	
	- The driver for your primary display adapter prevents the game from detecting
	  your 3D accelerator card.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact the manufacturer of your primary display adapter
	to inquire about how to obtain and install the latest video drivers.
	
	For information about how to contact your hardware manufacturer, click the
	appropriate article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	If the issue continues to occur, download and install the latest drivers for your
	3D accelerator card from the following 3Dfx Web site:
	
	  http://www.3dfx.com
	
	To work around this issue, reduce the graphics hardware acceleration for your
	primary display adapter. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider all the way to the left (the None
	  setting).
	
	  NOTE: Some display adapters are incompatible with the None hardware
	  acceleration setting. If your computer restarts in Safe mode, repeat steps
	  1-4, and move the Hardware Acceleration slider until it is one notch to the
	  right of None (the Basic acceleration setting).
	
	5. Click OK, and then click OK.
	
	6. Click Yes to restart your computer.
	
	MORE INFORMATION
	================
	
	If the issue continues to occur, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191660 Err Msg: Could Not Find Any 3D Acceleration Hardware...
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	
	Additional query words: 1.00 2.00 msgame 3-d directx dx unavailable dimmed
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kberrmsg kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbHomeMMsearch kbGamesSearch kbFlightSimSearch kbZNotKeyword kbMotocrossSearch kbOutwarsSearch kbOutwars kbCARTRacingSearch kbBaseballSearch kbMidtownMadSearch kbMonsterTMSearch kbMonsterTM kbHellBender kbUrbanAssault kbMonsterTM2 kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbFlightSim98 kbMotocrossM kbMidtownMadness2 kbBaseBall3D kbCARTRacing kbSimSearch
	Version           : :1.0,2.0
	Issue type        : kbprb
	
	=============================================================================
	
