---
layout: page
title: "Q108593: Flight Simulator 5.0: Fatal Error: Error Code: 0000"
permalink: /kb/108/Q108593/
---

## Q108593: Flight Simulator 5.0: Fatal Error: Error Code: 0000

{% raw %}

	Article: Q108593
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-2002
	
	kbsetup
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you select the VESA 1.2 Compatible Display option from the Flight
	Simulator Setup program, the following message may appear when starting the
	program:
	
	  Fatal error has occurred!
	  Filename : SVGA.GRA
	  Error code: 0000
	
	
	The program will then clear the screen and return to the MS-DOS prompt.
	
	RESOLUTION
	==========
	
	To resolve this problem, install a VESA 1.2 driver that supports the video card
	or run the Setup program from the Flight Simulator directory (FLTSIM5 by
	default) and select VGA as the display option.
	
	MORE INFORMATION
	================
	
	The VESA (Video Electronics Standards Association) video standard is a reference
	to a high-resolution video display that may be called. That is, Super VGA
	(SVGA), VGA-plus, VGA-1024, or extended VGA.
	
	The video card may come with VESA support built into the BIOS (in which case, the
	error message would not occur) or a VESA 1.2 driver may come with the video card
	that is installed by either the AUTOEXEC.BAT or CONFIG.SYS files.
	
	See your card's documentation for exact details. VESA 1.2 drivers that may work
	with the card in question may be obtained from some electronic bulletin boards.
	Check with your card's manufacturer for more information.
	
	Additional query words: 5.00 flightsim fltsim hang occured err msg fs5
	
	======================================================================
	Keywords          :  
	Technology        : kbGamesSearch kbFlightSimSearch kbFlightSim500DOS kbSimSearch
	Version           : MS-DOS:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
