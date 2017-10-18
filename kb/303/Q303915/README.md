---
layout: page
title: "Q303915: MechCommander 2.0: Image Extends Beyond Monitor Borders"
permalink: kb/303/Q303915/
---

## Q303915: MechCommander 2.0: Image Extends Beyond Monitor Borders

	Article: Q303915
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MechCommander 2.0, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit a game to return to the Main Menu in Microsoft MechCommander, the
	menu may not be displayed correctly: The screen image may extend beyond the
	borders of the monitor. Or, while you are playing the game, textures may not
	build correctly.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	   - You play the game in a different resolution from the resolution specified
	  under the display settings on your computer.
	
	  -and-
	
	- Your system has a GX110 video card based on the Intel 810 chipset.
	
	  NOTE: Although this video card may have 11 megabytes (MB) of VRAM, it does not
	  meet the minimum requirement of 6 MB of VRAM for textures.
	
	RESOLUTION
	==========
	
	To work around this issue, use one or both of the following methods, as needed.
	
	Method 1: Screen Image Extends Beyond Monitor Edges
	---------------------------------------------------
	
	Play the game in the same resolution as that selected in your computer's display
	settings. To determine your system's display settings, follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Make note of the Desktop Area or Screen Area setting.
	
	5. Click OK twice.
	
	6. Close Control Panel.
	
	Method 2: Update Video Card Drivers
	-----------------------------------
	
	Contact the manufacturer of your video adapter to obtain the latest version of
	the video driver for your video adapter. For additional information about how to
	contact your hardware manufacturer, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	To identify the manufacturer and model of your video adapter, follow these
	steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you are using a Microsoft Windows 95 or Microsoft Windows 98-based
	  computer, click the Device Manager tab.
	
	  If you are using a Microsoft Windows 2000-based computer, click the Hardware
	  tab, and then click Device Manager.
	
	4. Click the plus sign (+) next to "Display adapters" to expand the branch.
	
	5. In the "Display adapters" branch, note the manufacturer and model of your
	  video adapter, and then click OK.
	
	6. Close all of the open windows on the desktop.
	
	For additional information about how to identify the version of your video
	driver, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q159487 Games: How to Determine the Version of Installed Video Driver
	
	Additional query words: msgame mech commander mech2
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbGamesSearch kbMSNSearch kbMechCommSearch kbMechCommander200
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
