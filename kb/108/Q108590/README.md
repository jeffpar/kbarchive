---
layout: page
title: "Q108590: Flight Simulator 5.0: Hang During Splash Startup Screen"
permalink: /kb/108/Q108590/
---

## Q108590: Flight Simulator 5.0: Hang During Splash Startup Screen

{% raw %}

	Article: Q108590
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
	
	To use a MediaVision ProAudio Spectrum 16 sound card with Microsoft Flight
	Simulator you must load the MVSOUND.SYS driver in your CONFIG.SYS file.
	
	If you make a bootable floppy disk for Flight Simulator using FSSYSTEM.EXE, the
	line referencing the sound driver, MVSOUND.SYS, will not be copied. You must
	copy the line from the CONFIG.SYS on the hard drive to the CONFIG.SYS on the
	your floppy drive for Flight Simulator to load properly.
	
	Without this information in the CONFIG.SYS file, the system will stop responding
	(hang) at the Flight Simulator startup screen depicting the Learjet.
	
	MORE INFORMATION
	================
	
	The following is an example of the MVSOUND.SYS line that must be in the
	CONFIG.SYS file:
	
	DEVICE=C:\<PATH>\MVSOUND.SYS D:3 Q:7 S:0 J:1
	
	Switches include:
	
	D:#  - DMA channel
	Q:#  - IRQ setting
	S:#  - SoundBlaster emulation is on(1) or off(0)
	J:#  - Joystick enabled(1) or disabled(0)
	V:#  - Sets initial volume for sound card; default is 80
	M:#  - Specifies whether MPU401 emulation is on (1) or off (0)
	
	NOTE: Refer to the Media Vision manual for a complete description of the
	individual switches.
	
	Additional query words: 5.00 flightsim fltsim dos fs5 lear jet lear-jet crash freeze up media vision media-vision pro-audio pro audio
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb kbinfo
	
	=============================================================================
	

{% endraw %}
