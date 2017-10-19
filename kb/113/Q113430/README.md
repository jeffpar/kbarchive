---
layout: page
title: "Q113430: Flight Simulator: Slow Video Frame Rate"
permalink: /kb/113/Q113430/
---

## Q113430: Flight Simulator: Slow Video Frame Rate

	Article: Q113430
	Product(s): Microsoft Home Games
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Slow video frame rate in Flight Simulator may be caused by improper hardware
	settings.
	
	MORE INFORMATION
	================
	
	To achieve optimum performance, there are four hardware elements that need to be
	configured correctly in Flight Simulator 5.0:
	
	- Mouse
	- Joystick
	- Sound card
	- Video card
	
	If any of these hardware elements are configured incorrectly, Flight Simulator
	5.0 may run slowly.
	
	MOUSE
	-----
	
	Flight Simulator tries to detect a mouse during Setup. If it cannot find a mouse,
	it defaults to the No Mouse setting. Changing the setting to Microsoft
	Compatible Mouse forces Flight Simulator 5.0 to look for a mouse. This may cause
	poor performance in Flight Simulator. Check to see if the mouse driver is loaded
	and if the mouse is performing correctly outside of Flight Simulator.
	
	JOYSTICK
	--------
	
	If you are using a joystick, make sure that the joystick preferences are
	configured correctly. Joystick configuration may vary slightly from model to
	model. General configurations are listed below:
	
	Single Joystick:
	
	Joystick One: Aileron and Elevator
	Joystick Two: Off
	
	Single Joystick with Throttle Control (Yoke):
	
	Joystick One: Aileron and Elevator
	Joystick Two: Throttle Only
	
	Single Joystick and Rudder Pedals:
	
	Joystick One: Aileron and Elevator
	Joystick Two: Rudder Only
	
	Single Joystick with Throttle Control (Yoke) and Rudder Pedals:
	
	Joystick One: Aileron and Elevator
	Joystick Two: Throttle & Rudder
	
	Two Joysticks (Second One Configured for Throttle Control Only):
	
	Joystick One: Aileron and Elevator
	Joystick Two: Throttle Only
	
	Two Joysticks (Second One Configured for Throttle and Rudder Control):
	
	Joystick One: Aileron and Elevator
	Joystick Two: Throttle & Rudder
	
	NOTE: Do not use Throttle and Brakes for any type of joystick. Any joystick with
	a Button 1 will be able to use brakes.
	
	SOUND
	-----
	
	If you are using a sound card, make sure the settings for Base Address,
	Interrupt, and DMA channel in the Options, Preferences, Sound menu match your
	sound card's settings exactly. If you are unsure what the settings for your
	sound card are, consult the documentation for the card or contact the sound card
	manufacturer.
	
	To check for problems caused by the sound card, turn the sound option Off. If the
	performance inproves considerably, the sound card is causing a problem. Flight
	Simulator was tested with Creative Labs Sound Blaster card; if you are using
	another sound card there may be a compatibility problem. Contact your sound card
	manufacturer and ask about compatibility with Creative Labs Sound Blaster card.
	
	VIDEO
	-----
	
	If you are using SVGA resolution in Flight Simulator 5.0, make sure that you have
	specified the proper video chipset for your video card. If you are unsure which
	video chipset your card uses, consult the documentation for the card or contact
	the video card manufacturer. VGA resolution does not require you to select a
	chipset.
	
	Additional query words: 5.00 flightsim fltsim dos fs5 slowdown choppy
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	
