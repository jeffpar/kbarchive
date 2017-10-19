---
layout: page
title: "Q315118: Games: Audio Is Affected When You Change Cockpit View"
permalink: /kb/315/Q315118/
---

## Q315118: Games: Audio Is Affected When You Change Cockpit View

	Article: Q315118
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2002 Professional Edition 
	- Microsoft Flight Simulator 2002 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you play Microsoft Flight Simulator 2002 or Microsoft Combat Flight
	Simulator 2, the sound volume may increase or become distorted (crackle) when
	you change the cockpit view.
	
	CAUSE
	=====
	
	This behavior can occur after you install Microsoft Train Simulator.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Method 1: Reduce Hardware Sound Acceleration
	--------------------------------------------
	
	To do this, follow these steps:
	
	1. Quit all programs that are running.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type "dxdiag" (without the quotation marks), and then click
	  OK.
	
	  The DirectX Diagnostic Tool starts.
	
	4. Click the Sound tab, and then drag the "Hardware Sound Acceleration Level"
	  slider to the "No acceleration" position.
	
	5. Click Exit, and then test the game for proper function.
	
	6. If the game runs correctly, attempt to increase the hardware sound
	  acceleration level until it is at the highest level possible without
	  corrupting sound quality in the game.
	
	Method 2: Install Updated Audio Adapter Drivers
	-----------------------------------------------
	
	Attempt to obtain updated drivers for your sound card. For information about how
	to contact computer hardware manufacturers, click the appropriate article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch kbCombatFlightSim2 kbCombatFlightSimSearch kbTrainSim kbFlightSim2002 kbFlightSim2002Pro
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
