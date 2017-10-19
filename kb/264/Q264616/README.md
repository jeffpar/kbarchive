---
layout: page
title: "Q264616: FS2000: Differences Between True and Indicated Air Speeds"
permalink: /kb/264/Q264616/
---

## Q264616: FS2000: Differences Between True and Indicated Air Speeds

	Article: Q264616
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbref fsim kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes true air speed, indicated air speed, and how to derive
	true air speed from indicated air speed based on altitude.
	
	MORE INFORMATION
	================
	
	True Air Speed
	--------------
	
	True air speed is the actual speed at which an aircraft moves from one point to
	another. True air speed can be affected by the altitude of the aircraft, but in
	most cases the effect is minimal because most aircraft fly at a maximum altitude
	of seven to nine miles. Some large aircraft can fly at higher altitudes. For
	example, the Concorde can fly at a maximum altitude of approximately eleven
	miles.
	
	Indicated Air Speed
	-------------------
	
	The air speed displayed on the Air Speed Indicator on the instrument panel in
	your aircraft is the indicated air speed. Indicated air speed is the speed at
	which an aircraft moves through the air, and it can be affected significantly by
	altitude and wind direction.
	
	The Air Speed Indicator works by comparing the air pressure inside the Pilot Tube
	to the air pressure inside the aircraft cabin. The Pilot Tube is a hollow probe
	that points directly forward into the oncoming air.
	
	Changes in altitude can affect indicated air speed. As the altitude of the
	aircraft increases, the air pressure in the Pilot Tube decreases, causing the
	indicated air speed to decrease.
	
	Assuming no effects from wind, the following table lists the true air speed in
	nautical miles-per-hour (knots) for an aircraft traveling at 400 knots at
	altitudes between 1000 feet and 25000 feet.
	
	+---------------------------------------------------+
	| Altitude   | Indicated air speed | True air speed | 
	+---------------------------------------------------+
	| 1000 feet  | 400                 | 405            | 
	+---------------------------------------------------+
	| 4000 feet  | 400                 | 421.7          | 
	+---------------------------------------------------+
	| 8000 feet  | 400                 | 445            | 
	+---------------------------------------------------+
	| 10000 feet | 400                 | 457.2          | 
	+---------------------------------------------------+
	| 15000 feet | 400                 | 489.1          | 
	+---------------------------------------------------+
	| 18000 feet | 400                 | 510.1          | 
	+---------------------------------------------------+
	| 22000 feet | 400                 | 539.4          | 
	+---------------------------------------------------+
	| 24000 feet | 400                 | 554.7          | 
	+---------------------------------------------------+
	| 25000 feet | 400                 | 562.2          | 
	+---------------------------------------------------+
	
	Additional query words: msgame fs2k flightsim fsim airspeed mph
	
	======================================================================
	Keywords          : kbref fsim kbimu 
	Technology        : kbGamesSearch kbFlightSimSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	
