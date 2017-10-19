---
layout: page
title: "Q247645: Flight Simulator 2000: Sounds Are Fuzzy or Distorted"
permalink: /kb/247/Q247645/
---

## Q247645: Flight Simulator 2000: Sounds Are Fuzzy or Distorted

	Article: Q247645
	Product(s): Microsoft Home Games
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbsound kbimu msgame
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator 2000 
	- Microsoft Flight Simulator 2000 Professional Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Flight Simulator 2000, sounds in the program may be fuzzy
	or distorted.
	
	CAUSE
	=====
	
	This behavior can occur if an Ensoniq AudioPCI sound card is installed in your
	computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, download and install the latest version of the sound
	driver for your sound card from the following Ensoniq Web site:
	
	  http://www.ensoniq.com
	
	To work around this issue in Microsoft Windows 98, reduce the audio hardware
	acceleration setting. To do this:
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Multimedia.
	
	3. On the Audio tab, under Playback, click Advanced Properties.
	
	4. On the Performance tab, move the "Hardware acceleration" slider one notch to
	  the left.
	
	5. Click OK, and then click OK again.
	
	6. Close Control Panel.
	
	If the issue continues to occur, repeat these steps to further reduce the audio
	hardware acceleration setting.
	
	Additional query words: flightsim fsim fs fs2k fs2000 msgame pci
	
	======================================================================
	Keywords          : kbsound kbimu msgame 
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim2000 kbSimSearch
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
