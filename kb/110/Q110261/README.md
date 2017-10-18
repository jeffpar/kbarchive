---
layout: page
title: "Q110261: Airframe Damage from Stress Causes Aircraft to Explode"
permalink: kb/110/Q110261/
---

## Q110261: Airframe Damage from Stress Causes Aircraft to Explode

	Article: Q110261
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft Flight Simulator 5.0, if you have Airframe Damage From Stress
	turned on in the Sim/Realism And Reliability menu, the aircraft may explode
	during normal operations (such as lowering flaps.)
	
	MORE INFORMATION
	================
	
	Airframe damage from stress should occur when a stress that is beyond the
	specified aircraft's performance envelope occurs.
	
	This functionality is oversensitive in Flight Simulator 5.0; any stress applied
	to the aircraft causes it to tear apart when this option is selected.
	
	Microsoft has confirmed this to be a problem in Flight Simulator version 5.0 for
	MS-DOS. This problem was corrected in Flight Simulator version 5.0a.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Start Flight Simulator 5.0.
	
	2. While the aircraft is on the runway, click Realism And Reliability from the
	  Sim menu.
	
	3. Click Airframe Damage From Stress.
	
	4. Apply 10 degrees down flaps. If your function keys are at the top of your
	  keyboard press F6; if they are on the left side of the keyboard press F3.
	
	At this point, the aircraft explodes even though no real stress has occurred.
	This situation can occur at any point after Airframe Damage From Stress has been
	selected.
	
	Additional query words: 5.00 flightsim fltsim dos fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
