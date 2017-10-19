---
layout: page
title: "Q108595: Flight Simulator: Calculating Cloud Deviation Zone Thickness"
permalink: /kb/108/Q108595/
---

## Q108595: Flight Simulator: Calculating Cloud Deviation Zone Thickness

	Article: Q108595
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The cloud deviation zone is the misty area above and below the core cloud layer
	and may be called the haze layer. You will see a white flash when your aircraft
	is in this part of a cloud.
	
	MORE INFORMATION
	================
	
	If you are using Flight Simulator version 5.0a, this effect can be disabled by
	doing the following:
	
	1. From the Options menu, click Preferences.
	
	2. Click Display.
	
	3. Click Scenery Display Options.
	
	4. Clear the Wispy Cloud Effects option.
	
	The haze layer is 50 percent of the core cloud layer thickness. This deviation
	zone is added to the top and to the bottom of the core cloud layer. The minimum
	size of any cloud layer is 328 feet; therefore, the minimum size of the haze
	layer is approximately 164 feet.
	
	To demonstrate this, do the following:
	
	1. From the World menu, click Weather.
	
	2. Click Clouds and click Edit.
	
	3. Set Base (ft MSL) to 2000.
	
	4. Set Tops (ft MSL) to 3000. This gives you a core cloud layer thickness of
	  1000 feet.
	
	5. Return to the main view.
	
	6. Take off and climb to 1500 feet. Note that at 1501 feet the clouds begin to
	  cause a flickering effect in the View 1 or View 2 screens.
	
	7. Continue climbing through the core cloud layer until you reach 3500 feet.
	  Note that at 3501 feet the clouds stop flickering.
	
	
	Additional query words: 5.00 5.00a flightsim fltsim dos flicker flash blink fs5 50a
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0,5.0a
	Issue type        : kbinfo
	
	=============================================================================
	
