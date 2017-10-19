---
layout: page
title: "Q108022: Autopilot Flies to the Wrong Station"
permalink: /kb/108/Q108022/
---

## Q108022: Autopilot Flies to the Wrong Station

	Article: Q108022
	Product(s): Microsoft Home Games
	Version(s): MACINTOSH:4.0,4.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for the Macintosh, versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the NAV1 navigation radio is set to a VOR frequency and the autopilot is
	set to follow the heading from NAV1, the aircraft may appear to be flying toward
	the wrong station.
	
	MORE INFORMATION
	================
	
	The signal transmitted by a VOR is line-of-sight, which means that it can be
	blocked by high terrain. VORs also have a limited range. Because of this,
	several stations may, in the real world, be assigned the same frequency. For
	example, Oakland and Seattle both operate on 116.8kHz. For example, if you are
	in Red Bluff, CA, (north of Oakland) and set your NAV1 to 116.8kHz, your
	autopilot may take you south to Oakland when you may have wanted to go north to
	Seattle.
	
	To use the autopilot to fly to a station that is farther away than another
	station on the same VOR frequency, do the following:
	
	1. From the NavCom menu, click Set Autopilot.
	
	2. Turn on the autopilot master switch.
	
	3. Turn on Heading Lock. You may also want to use the Wing Leveler and Altitude
	  Lock, but these are not necessary for navigation purposes. For more
	  information about using the autopilot, see page 14 in the Microsoft Flight
	  Simulator User's Guide.
	
	4. Enter a heading to your desired station.
	
	5. Click OK.
	
	6. Take off and engage the autopilot by pressing COMMAND-T. The aircraft should
	  assume the altitude and headings you have assigned.
	
	7. Fly on the assigned heading until you are closer to your destination station
	  than you are to the other station on the same frequency.
	
	8. From the NavCom menu, click Set Autopilot.
	
	9. Click NAV 1 Lock.
	
	10. Click OK.
	
	Additional query words: 4.00 4.00a flightsim fltsim mac auto- pilot auto
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbGamesSearch kbFlightSimSearch kbFlightSim400Mac kbSimSearch
	Version           : MACINTOSH:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
