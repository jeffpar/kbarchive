---
layout: page
title: "Q194817: Combat Flight Simulator: Computer Hangs When You Quit the Game"
permalink: kb/194/Q194817/
---

## Q194817: Combat Flight Simulator: Computer Hangs When You Quit the Game

	Article: Q194817
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbimu msgamekbfaq
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you quit Microsoft Combat Flight Simulator, your computer may stop
	responding (hang), and your display may become distorted.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- A Hercules Stingray 128/3D Series video adapter is installed in your computer
	  and you are using version 1.17.2059 or earlier of the Hercules video driver.
	
	- A 3Dfx Voodoo Banshee-based video adapter is installed in your computer and
	  you are using version 4.10.01.0232 or earlier of the 3Dfx Voodoo Banshee
	  video driver.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method for your video adapter.
	
	Hercules Stingray 128/3D
	------------------------
	
	Download and install the latest version of the driver for your Hercules Stingray
	128/3D Series video adapter from the following Hercules Web site:
	
	  http://www.hercules.com
	
	If the issue continues to occur, download and install the latest version of the
	Single Board Run-Time driver for Voodoo Rush-based video adapters from the
	following 3DFx Web site:
	
	  http://www.3dfx.com/download/download.html
	
	3Dfx Voodoo Banshee
	-------------------
	
	To resolve this issue, reduce the graphics hardware acceleration. To do this,
	follow these steps:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. On the Performance tab, click Graphics.
	
	4. Move the Hardware Acceleration slider until it is one notch to the right of
	  None (the Basic acceleration setting).
	
	5. Click OK, and then click Close.
	
	6. When you are prompted to restart the computer, do so.
	
	If you are dissatisfied with the video frame rate after you reduce the graphics
	hardware acceleration, download and install the latest version of the driver for
	your Voodoo Banshee-based video adapter from the following 3DFx Web site:
	
	  http://www.3dfx.com/download/download.html
	
	MORE INFORMATION
	================
	
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 1.00 msgame combatfs cfs crash freeze
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbimu msgame kbfaq
	Technology        : _IKkbbogus kbGamesSearch kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
