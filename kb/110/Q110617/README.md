---
layout: page
title: "Q110617: Flight Simulator: Altitude Appears to Drop 200+ Feet"
permalink: /kb/110/Q110617/
---

## Q110617: Flight Simulator: Altitude Appears to Drop 200+ Feet

	Article: Q110617
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Weather Generation at Startup, the indicated altitude is
	approximately 200 feet lower than normal.
	
	MORE INFORMATION
	================
	
	This is due to the difference in barometric pressure between the startup
	situation's weather information and the new weather generated at startup. To
	calibrate the altimeter for the new barometric pressure, press the B key on the
	keyboard or click Calibrate Altimeter on the Sim menu and enter the new
	barometric pressure.
	
	To reproduce this situation follow these steps:
	
	1. Start Flight Simulator 5.0.
	
	2. From the Options menu, click Preferences.
	
	3. Click Weather Generation at Startup and click OK.
	
	4. Exit and restart Flight Simulator.
	
	5. Note the indicated elevation (for Chicago Meigs Field the indicated elevation
	  is 377ft MSL.)
	
	6. Press the B key on the keyboard.
	
	7. Note the indicated elevation (for Chicago Meigs Field the indicated elevation
	  is 592ft MSL.)
	
	Additional query words: 5.00 5.00a flightsim fltsim dos FS5 decrease fall
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
