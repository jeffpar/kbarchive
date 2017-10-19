---
layout: page
title: "Q98185: Flight Simulator: Altimeter Jumps from 128,000 Feet to 0 Feet"
permalink: /kb/098/Q98185/
---

## Q98185: Flight Simulator: Altimeter Jumps from 128,000 Feet to 0 Feet

	Article: Q98185
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:4.0,4.0a,4.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, versions 4.0, 4.0a, 4.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Flight Simulator 4.0, if the altimeter increases past 128,000 feet, it will
	jump back to zero. This is a result of binary overflow in the display. When
	descending back through 128,000 feet, the altimeter will again be accurate. The
	aircraft performance is not affected.
	
	MORE INFORMATION
	================
	
	This limitation does not occur in Flight Simulator 5.0.
	
	Additional query words: 4.00 4.00a 4.00b alt. 128000' 128,000' skip error ft ft. foot 128000 fs4
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim400DOS kbSimSearch
	Version           : MS-DOS:4.0,4.0a,4.0b
	Issue type        : kbinfo
	
	=============================================================================
	
