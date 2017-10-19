---
layout: page
title: "Q120700: Flight Simulator: Definition of Terms for Weather Areas"
permalink: /kb/120/Q120700/
---

## Q120700: Flight Simulator: Definition of Terms for Weather Areas

	Article: Q120700
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
	
	The following is a definition of terms used in the generation of weather areas
	in Flight Simulator version 5.0.
	
	MORE INFORMATION
	================
	
	- Beginning Lat/Lon:
	
	  This specifies the starting point of the weather area.
	
	- Ending Lat/Lon:
	
	  This specifies the ending point of the weather area.
	
	  For example, if you want a weather front to move from Chicago to New York, you
	  would specify the starting point as the Chicago area Lat/Lon, and the ending
	  point as the New York area Lat/Lon. Beginning and ending Lat/Lon DO NOT
	  determine the size of the front.
	
	- Course:
	
	  This is the direction that the front is facing as it moves from the beginning
	  Lat/Lon to the Ending Lat/Lon. Course DOES NOT determine the direction of the
	  winds within the area.
	
	- Speed:
	
	  This is the speed in Nautical miles of the front as it moves from the
	  beginning Lat/Lon to the ending Lat/Lon.
	
	- Transition:
	
	  The transition value determines the overall depth of the front as well as how
	  abruptly the aircraft will encounter the weather conditions within the area.
	
	  For example, let's say the Global weather area is set for clear skies and no
	  winds, and a weather area is established over Meigs Field in the Chicago
	  area. In the Meigs weather area, strong winds and overcast clouds are
	  configured. If the Transition value is small, the aircraft will abruptly run
	  into the front, encountering the strong winds and overcast clouds fairly
	  quickly. However, if the Transition value is large, the aircraft will
	  encounter steadily stronger winds and denser clouds as it approaches the
	  center of the weather area.
	
	- Width:
	
	  This is the width in miles of the front from side to side when approaching on
	  a perpendicular course.
	
	Additional query words: 5.00 flightsim fltsim dos fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
