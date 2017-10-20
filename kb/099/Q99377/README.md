---
layout: page
title: "Q99377: Flight Simulator: ILS Seems Oversensitive"
permalink: /kb/099/Q99377/
---

## Q99377: Flight Simulator: ILS Seems Oversensitive

{% raw %}

	Article: Q99377
	Product(s): Microsoft Home Games
	Version(s): MACINTOSH:3.0,4.0; MS-DOS:3.0,4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, versions 3.0, 4.0, 5.0 
	- Microsoft Flight Simulator for the Macintosh, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ILS (Instrument Landing System) localizer may seem overly sensitive when you
	try to intercept it for an approach. The faster the aircraft and the greater the
	interception angle (90 degrees maximum), the more sensitive it will seem. This
	is a result of the very narrow beam the ILS localizer uses and the larger turn
	radius of faster aircraft.
	
	The faster the aircraft, the shorter the length of time needed to fly through the
	course. For a very fast aircraft (for example the Learjet) flying at higher
	speeds, the time to fly from one side of the beam to the other could be as small
	as 10 to 20 seconds, depending on the airspeed. Additionally, at these higher
	airspeeds, the turn radius could be as large as 2 to 3 nm (nautical miles).
	
	MORE INFORMATION
	================
	
	The ILS beam is optimally five degrees wide. Therefore, when flying 10 nm out,
	it is only 5/6 nm wide. To find this width, remember that a one-degree wide beam
	at 60 nm is 1 nm wide. So, at 10 nm, the one-degree beam is 1/6 nm wide.
	Therefore, five degrees is 5 times 1/6 or 5/6 nm wide.
	
	Let's assume you are flying at 120 knots or about 144 mph and you are flying at a
	90 degree angle to the localizer, at 2 nm/min (120 knots), it will take only 25
	seconds for the OBI (Omni Bearing Indicator) to go from one side of the
	indicator to the other. If you wait to see the localizer move, you will most
	likely overshoot the localizer. The solution is to lead the turn by an amount
	that compensates for the turn radius of the aircraft.
	
	You can determine the turn radius of the aircraft at a given airspeed (it changes
	with true airspeed), by flying outbound on a radial, and, at a selected DME
	(Distance Measuring Equipment), start a 90-degree turn. At the completion of the
	turn, check the DME again and the difference will be very close to the actual
	turn radius.
	
	You can then use this radius to compute a lead radial for a turn onto a
	localizer. The assumption is that the lead radial is off of a VORTAC (very high
	frequency omnidirectional range and tactical air navigation) that is colocated
	with the ILS or very nearly so. If it isn't, this technique may not work or, at
	least, may need modification.
	
	For example:
	
	Localizer inbound course = 010 degrees or radial = 190 degrees Turn on direction
	= left Turn on range = 10 nm Angle at turn on = 90 degrees Turn radius = 2 nm
	Compute lead radial
	
	At 10 nm from the station, one degree is 1/6 nm, see above. Thus 2 nm is 12
	degrees at 10 nm from the station.
	
	Tune to the VORTAC and set the OBI to 12 degrees before the localizer course or
	set to 022 degrees. When the course deviation indicator is centered, start the
	turn on to the final course. Reset the frequency to the localizer and the
	inbound course to the ILS course, and fly the approach.
	
	If your airspeed changes during the maneuver, you may have to modify the bank
	angle to compensate.
	
	These techniques are meant for use with Flight Simulator. Before using these
	techniques in real aircraft, check with your instructor.
	
	Additional query words: 3.00 4.00 5.00 fs4 FS5
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbGamesSearch kbFlightSimSearch kbFlightSim300DOS kbFlightSim400Mac kbFlightSim400DOS kbFlightSim500DOS kbSimSearch
	Version           : MACINTOSH:3.0,4.0; MS-DOS:3.0,4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
