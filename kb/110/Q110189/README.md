---
layout: page
title: "Q110189: Joystick Doesn't Work with Media Vision Card"
permalink: /kb/110/Q110189/
---

## Q110189: Joystick Doesn't Work with Media Vision Card

{% raw %}

	Article: Q110189
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
	
	When you use Media Vision Pro Audio Spectrum or Pro Audio Studio sound cards,
	the joystick port must be enabled for Flight Simulator to use the joystick.
	
	MORE INFORMATION
	================
	
	To enable the joystick port, the J: parameter in the MVSOUND.SYS line must be
	set to 1.
	
	The following is an example of the MVSOUND.SYS line that must be in the
	CONFIG.SYS file:
	
	  DEVICE=C:\<PATH>\MVSOUND.SYS D:3 Q:7 S:0 J:1
	
	Switches include:
	
	  D:#  - DMA channel
	  Q:#  - IRQ setting
	  S:#  - SoundBlaster emulation is on (1) or off (0)
	  J:#  - Joystick enabled (1) or disabled (0)
	  V:#  - Sets initial volume for sound card; default is 80
	  M:#  - Specifies whether MPU401 emulation is on (1) or off (0)
	
	NOTE: Refer to the Media Vision manual for a complete description of the
	individual switches.
	
	Additional query words: 5.00 5.00a flightsim fltsim dos mediavision FS5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
