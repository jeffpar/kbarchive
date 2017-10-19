---
layout: page
title: "Q173983: ESS ES1888 Does not Play Sounds in Flight Simulator 95"
permalink: /kb/173/Q173983/
---

## Q173983: ESS ES1888 Does not Play Sounds in Flight Simulator 95

	Article: Q173983
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbsound kbimu
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for Windows 95, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Flight Simulator for Windows 95 does not play sounds in the simulator
	with an ESS ES1888 sound card. You will, however, hear a sound when the
	Microsoft logo appears.
	
	CAUSE
	=====
	
	The preferred playback device is not set to Game Compatible in Multimedia
	Properties.
	
	RESOLUTION
	==========
	
	Set the preferred playback device to "Game Compatible" using the following
	steps:
	
	1. Click Start, point to settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. In the Playback area, select Game Compatible under Preferred Device, and then
	  click OK.
	
	If Game Compatible is not listed under Preferred Device, do the following:
	
	1. On the Advanced tab, double-click Audio Devices.
	
	2. Double-click 336 VSC Modem Wave Device.
	
	3. Click "Do not map through this device" to select it.
	
	4. Make sure "Use Audio Features on This Device" is selected.
	
	5. Click OK, click Close, click OK, and then Yes to restart the computer.
	
	6. When Windows has restarted, click Start, point to settings, and then click
	  Control Panel.
	
	7. Double-click Multimedia.
	
	8. In the Playback area, select Game Compatible under Preferred Device, and then
	  click OK.
	
	If Game Compatible is still not listed under Preferred Device, do the following:
	
	1. Click Start, and then click Run.
	
	2. Type the following and then press enter
	
	  d:\fs6\setup\directx\dxsetup
	
	  where d is the CD-ROM drive letter.
	
	3. Click Reinstall DirectX and restart your computer when prompted.
	
	4. When Windows has restarted, click Start, point to Settings, and then click
	  Control Panel.
	
	5. Double-click Multimedia.
	
	6. In the Playback area, select Game Compatible under Preferred Device, and then
	  click OK.
	
	MORE INFORMATION
	================
	
	If the Game Compatible device still does not appear as a Preferred Device, you
	should contact either the computer manufacturer or the sound card manufacturer
	for additional assistance.
	
	Additional query words: 1.00 6.00 fs95 fs6 flightsim fltsim flt sim ess1888
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbsound kbimu 
	Technology        : _IKkbbogus kbGamesSearch kbFlightSimSearch kbFlightSim95 kbSimSearch
	Version           : WINDOWS:1.0
	Issue type        : kbprb
	
	=============================================================================
	
