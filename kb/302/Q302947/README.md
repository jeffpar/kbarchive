---
layout: page
title: "Q302947: Train Simulator 2000: Fatal Error When You Start Train Simulator"
permalink: /kb/302/Q302947/
---

## Q302947: Train Simulator 2000: Fatal Error When You Start Train Simulator

	Article: Q302947
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Train Simulator, you may receive an error
	message (blue screen) similar to the following:
	
	  emu10k1f(01) + 00021976 Error: OE: 0028: FF0BD3F6
	
	CAUSE
	=====
	
	This behavior can occur if your sound card is using drivers that are either
	outdated or incompatible with Train Simulator.
	
	RESOLUTION
	==========
	
	To resolve this issue, update your sound card with the latest drivers.
	
	To update your sound drivers, contact the manufacturer of your sound card to
	inquire about how to obtain and install the latest version of the sound driver
	for your sound card. For information about how to contact sound card
	manufacturers, click the appropriate article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	WORKAROUND
	----------
	
	To work around this issue, use one of the following methods.
	
	Method 1: Configure Sound Card as Game-Compatible Device
	--------------------------------------------------------
	
	To configure your sound card as a game-compatible device, follow these steps.
	
	NOTE: Because there are several versions of Windows, the following steps may be
	different on your computer. If they are, please consult your product
	documentation to complete these steps.
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click Multimedia.
	
	3. In the Multimedia Properties dialog box, click Game Compatible Device in the
	  "Preferred device" list under Playback on the Audio tab.
	
	4. Click to select the "Use only preferred devices" check box, click Apply, and
	  then click OK.
	
	5. Close Control Panel, and then restart the computer.
	
	Method 2: Reduce Sound Card Acceleration
	----------------------------------------
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "Dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. In the DirectX Diagnostic Tool dialog box, click the Sound tab.
	
	4. Under DirectX Features, drag the "Hardware Sound Acceleration Level" slider
	  fully to the left (no acceleration).
	
	5. Click Exit.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	To determine the manufacturer and model of your sound card, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. In Control Panel, double-click System.
	
	3. Click the Device Manager tab.
	
	4. Click the plus sign (+) next to "Sound, video and game controllers" to expand
	  the branch.
	
	5. Note the manufacturer and model of the sound card that is listed in the
	  "Sound, video and game controllers" branch.
	
	6. Click Cancel, and then quit Control Panel.
	
	Additional information about your sound card can be obtained by using the DirectX
	Diagnostic Tool.
	To view your display adapter information by using the DirectX Diagnostic Tool,
	follow these steps.
	
	NOTE: DirectX must be installed on your computer.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "Dxdiag" (without the quotation marks), and then click
	  OK.
	
	3. In the DirectX Diagnostic Tool dialog box, click the Sound tab.
	
	4. Under Device, note the device information. Under Drivers, note the driver
	  information.
	
	5. Click the DirectX Drivers tab.
	
	  Note the DirectX driver Version, and Date information.
	
	To obtain additional information about Microsoft Train Simulator system
	requirements, browse to the following Microsoft Web site:
	
	  http://shop.microsoft.com/Referral/ProductInfo.asp?siteID=10861&typeID=3
	
	To obtain the latest version of DirectX, browse to the following Microsoft Web
	site:
	
	  http://www.microsoft.com/directx/homeuser/downloads
	
	Additional query words: msgame
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbGamesSearch kbTrainSim
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
