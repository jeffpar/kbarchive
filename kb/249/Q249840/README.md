---
layout: page
title: "Q249840: FS2000 Err Msg: Video Display Must Be in 16-bit Color Mode..."
permalink: /kb/249/Q249840/
---

## Q249840: FS2000 Err Msg: Video Display Must Be in 16-bit Color Mode...

{% raw %}

	Article: Q249840
	Product(s): Microsoft Home Games
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbdisplay kberrmsg kbtool fsim kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Combat Flight Simulator: WWII Europe Series, version 1.0 
	- Microsoft Combat Flight Simulator 2: WWII Pacific Theater, version 1.0 
	- Microsoft Flight Simulator 2000 
	- Microsoft Train Simulator, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start one of the programs listed at the beginning of this article, you
	may receive one of the following error messages:
	
	  Your video display must be in 16-bit color mode or higher for Flight
	  Simulator to run. Flight Simulator will now exit.
	
	  Your video display must be in 16-bit color mode or higher for Combat Flight
	  Simulator to run. Flight Simulator will now exit.
	
	  Microsoft Train Simulator requires your desktop to be set to either 16 or
	  32-bit color. Please adjust and try again.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions is true:
	
	- The Microsoft Windows color palette setting is set to 256 colors.
	
	- The video drivers for your video adapter are outdated.
	
	RESOLUTION
	==========
	
	There are two possible resolutions for this issue.
	
	Increase the Windows Color Palette Setting to High Color (16 bit)
	-----------------------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. In the Color Palette or Colors box, click High Color (16 bit).
	
	5. Click OK, and then click OK again.
	
	6. Close Control Panel.
	
	If the High Color (16-bit) setting is unavailable in the Color Palette box, the
	video driver for your video adapter is outdated. In this case, contact the
	manufacturer of your video adapter to find out if an updated video driver that
	supports a 16-bit color palette is available for your video adapter.
	
	Change the Screen Resolution in Microsoft Windows
	-------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Display.
	
	3. Click the Settings tab.
	
	4. Move the Desktop Area or Screen Area slider to the 800 x 600 pixels setting.
	
	5. Click OK, and then click OK again.
	
	6. Click Yes to accept the settings.
	
	MORE INFORMATION
	================
	
	To identify the manufacturer and model of your video adapter:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click System.
	
	3. If you are using a Microsoft Windows 95-based or a Microsoft Windows 98-based
	  computer, click the Device Manager tab.
	
	  If you are using a Microsoft Windows 2000-based computer, click the Hardware
	  tab, and then click Device Manager.
	
	4. Click the PLUS SIGN (+) next to Display adapters to expand the branch.
	
	5. Under the Display adapters branch, note the manufacturer and model of your
	  video adapter, and then click OK.
	
	6. Close all of the open windows on the desktop.
	
	To identify the driver version of your video driver, see the following Microsoft
	Knowledge Base article:
	
	  Q159487 Games: How to Determine the Version of Installed Video Driver
	
	Additional query words: flightsim fs2k fltsim mtm 16bit trainsim
	
	======================================================================
	Keywords          : kbdisplay kberrmsg kbtool fsim kbimu msgame 
	Technology        : kbHomeProdSearch _IKkbbogus kbGamesSearch kbFlightSimSearch _IK kbCombatFlightSim2 kbCombatFlightSim kbCombatFlightSimSearch kbFlightSim2000 kbTrainSim kbSimSearch
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
