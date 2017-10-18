---
layout: page
title: "Q104857: Flight Simulator: Aircraft Pulls to the Left"
permalink: kb/104/Q104857/
---

## Q104857: Flight Simulator: Aircraft Pulls to the Left

	Article: Q104857
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Flight Control Realism setting is set higher than 5, the Cessna and the
	Sopwith Camel may pull uncontrollably to the left.
	
	MORE INFORMATION
	================
	
	Flight Simulator 5.0 has added Propeller Torque as one of the conditions that it
	simulates. In a real propeller aircraft, a certain amount of torque is generated
	by the engine/propeller, which causes the aircraft to pull to the left during
	high-thrust situations. This condition is especially noticeable on the ground
	during takeoff. Flight Simulator 5.0 attempts to model engine torque. However,
	if the Flight Control Realism is set higher than 5, the propeller torque becomes
	somewhat excessive and the aircraft pulls to the left.
	
	Control can be maintained by turning off Auto Coordination in the Sim menu and
	using the rudders to control the torque during takeoff roll where the torque is
	most noticeable. Additionally, moving the throttle somewhat slowly when
	advancing to full power will allow time to react to the torque.
	
	This condition does not occur with the Learjet 35A because it has jet turbine
	engines, nor the Scweizer 2-32 Sailplane because it has no engines.
	
	Microsoft has confirmed this to be a problem in Flight Simulator for MS-DOS,
	version 5.0.
	
	Additional query words: 5.00 flightsim fltsim dos fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
