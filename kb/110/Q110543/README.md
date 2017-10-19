---
layout: page
title: "Q110543: Flight Simulator: Floating Dynamic Scenery Objects"
permalink: /kb/110/Q110543/
---

## Q110543: Flight Simulator: Floating Dynamic Scenery Objects

	Article: Q110543
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
	
	When using some scenery libraries, you may see dynamic scenery objects floating
	in mid air.
	
	MORE INFORMATION
	================
	
	This may occur when using the following scenery libraries:
	
	- Crop Duster World
	
	- Flight Simulator Aircraft & Scenery Designer version 4.0 Scenery Disk
	
	- Scenery files imported from Flight Simulator 4.0
	
	- Third-party scenery libraries
	
	Dynamic scenery objects are loaded when dynamic scenery options are selected by
	choosing Dynamic Scenery from the Scenery menu. If dynamic scenery elements are
	selected, they are loaded regardless of the active scenery library.
	
	Dynamic scenery objects are based on prerecorded patterns of movements, which
	includes the elevation of the object. Therefore if the elevation Above Ground
	Level(AGL) changes (due to a change in scenery library) the dynamic scenery
	object will still play back in its original pattern at its original elevation.
	
	Follow these steps to reproduce this effect:
	
	1. Start Flight Simulator.
	
	2. If a situation other than Meigs Takeoff Runway 36 is the startup situation,
	  position the aircraft at Meigs Field by using the World menu's Airports
	  command.
	
	3. From the Scenery menu, click Dynamic Scenery and enable all dynamic scenery
	  elements for View 1.
	
	4. Set the View 1 dynamic scenery density to Very Dense and click OK.
	
	5. Press the Y key on the keyboard to activate Slew mode. (In step 6, the AGL
	  will drop 600 feet, Slew mode must be activated to prevent the aircraft from
	  crashing.)
	
	6. From the Scenery menu, click Scenery Library.
	
	7. Click FS4 Scenery Disk, and click OK.
	
	Notice fuel trucks and parked aircraft floating 600 feet above the new AGL.
	
	Additional query words: 5.00 flightsim fltsim dos FS5 hovering misplaced suspended fs4
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	
